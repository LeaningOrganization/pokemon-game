import { computed, onMounted, ref } from 'vue';
import { GameStatus, type PokeListResponse } from '../Interfaces';
import { pokeApi } from '../api/pokeApi';
import type { Pokemon } from '../Interfaces/IPokemon';
import PokemonGame from '../views/PokemonGame.vue';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);

  //   computed
  const isLoading = computed(() => pokemons.value.length === 0);
  const randomPokemon = computed(() => {
    // my
    // pokemonOptions.value[Math.floor(Math.random() * pokemonOptions.value.length)]
    // Refactoring
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
    return pokemonOptions.value[randomIndex];
  });

  //  Functions
  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokeApi.get<PokeListResponse>('/?limit=151');
    // console.log(response.data);

    const pokemonArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts.at(-2) ?? 0;

      return {
        name: pokemon.name,
        id: +id,
      };
    });

    return pokemonArray.sort(() => Math.random() - 0.5);
  };

  const getNextRound = (howMany: number = 4) => {
    gameStatus.value = GameStatus.playing;
    pokemonOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value.id === id;
    if (hasWon) {
      gameStatus.value = GameStatus.won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 },
      });
      return;
    }

    gameStatus.value = GameStatus.lost;
  };

  onMounted(async () => {
    // delay
    // await new Promise((r) => setTimeout(r, 1000));
    pokemons.value = await getPokemons();
    getNextRound();

    // console.log(pokemons);
    console.log(pokemonOptions.value);
  });

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    randomPokemon,

    // Methods
    getNextRound,
    checkAnswer,
  };
};
