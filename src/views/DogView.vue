<script setup lang="ts">
import useDog from "../hooks/useDogQuery";

const {
  dogQuery: { isLoading, error, data },
  refreshDog,
} = useDog();

const invalidate = () => {
  refreshDog();
};
</script>

<template>
  <button @click="invalidate">캐쉬 무효화</button>

  <img v-if="data" :src="data" />
  <p v-else>Loading ...</p>
</template>

<style scoped>
button {
  display: block;
}

img {
  width: 500px;
  height: 500px;
}
</style>
