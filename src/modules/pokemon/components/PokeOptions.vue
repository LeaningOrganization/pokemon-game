<script lang="ts" setup>
import type { Pokemon } from '../interfaces';
import { defineEmits } from 'vue';

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
  correctAnswer: number;
}
const props = defineProps<Props>();
const emits = defineEmits<{
  selectedOption: [id: number];
}>();
</script>

<template>
  <div class="p-5 flex gap-2">
    <button
      v-for="{ name, id } in options"
      :key="id"
      @click="$emit('selectedOption', id)"
      :disabled="blockSelection"
      :class="[
        'capitalize disabled:shadow-none disabled:bg-gray-300 disabled:hover:bg-none',
        {
          incorrect: id !== correctAnswer && blockSelection,
          correct: id === correctAnswer && blockSelection,
        },
      ]"
    >
      {{ name }}
    </button>
  </div>
</template>

<style scoped>
button {
  @apply bg-white shadow-md rounded-lg  p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-blue-400;
}

.correct {
  @apply bg-blue-900 text-white;
}

.incorrect {
  @apply bg-blue-300 opacity-40 text-blue-950;
}
</style>
