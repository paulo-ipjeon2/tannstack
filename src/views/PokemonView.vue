<script setup>
import usePokemon from "@/hooks/usePokemon";
import { ref } from "vue";

const {
  pokemonQuery: { isLoading, error, data },
} = usePokemon(2);

const inputValue = ref(0);

const onSubmitHandler = (e) => {
  e.preventDefault();

  inputValue.value = 0;
};
</script>

<template>
  <form @submit="onSubmitHandler">
    <input type="number" v-model="inputValue" />
    <button>검색</button>
  </form>

  <div v-if="isLoading">/loading...</div>

  <img v-else :src="data.url" alt="" />
</template>

<style scoped></style>
