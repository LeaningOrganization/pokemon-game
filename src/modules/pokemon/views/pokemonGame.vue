<script lang="ts" setup>
import PokePicture from '../components/PokePicture.vue';
import PokeOptions from '../components/PokeOptions.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../Interfaces';

const {
  gameStatus,
  isLoading,
  randomPokemon,
  pokemonOptions: options,
  checkAnswer,
  getNextRound,
} = usePokemonGame();

// const handleSelectedOptions = (value: number) => {
//   console.log({ value });
// };
</script>

<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Await please</h1>
    <h3 class="animate-pulse">Upload Pokemons</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-center text-2xl">¿ Who's these Pokemon ?</h1>
    <h2 class="text-3xl text-blue-900 font-bold">
      {{ gameStatus }}
    </h2>

    <div class="h-12">
      <button
        v-if="gameStatus === GameStatus.lost || gameStatus === GameStatus.won"
        @click="getNextRound(4)"
        class="bg-blue-900 text-white my-4 shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-blue-400"
      >
        Restart Game
      </button>
    </div>
    <!-- Pokemon picture -->
    <PokePicture :pokemon-id="randomPokemon.id" :show-pokemon="gameStatus !== GameStatus.playing" />

    <!-- Pokemon Options -->
    <PokeOptions
      :options="options"
      @selected-option="checkAnswer"
      :block-selection="gameStatus !== GameStatus.playing"
      :correct-answer="randomPokemon.id"
    />
  </section>
</template>

<style lang="css" scoped></style>
