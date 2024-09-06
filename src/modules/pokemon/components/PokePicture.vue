<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  pokemonId: number;
  showPokemon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showPokemon: false,
});

const pokemonImage = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`,
);
</script>

<template>
  <div>
    <img
      v-if="!showPokemon"
      :src="pokemonImage"
      alt="Pokemon images"
      class="brightness-0 h-[250px] py-8"
    />
    <img v-else :src="pokemonImage" alt="Pokemon images" class="fade-in h-[250px] py-8" />
  </div>
</template>

<style lang="css" scoped>
img {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
</style>
