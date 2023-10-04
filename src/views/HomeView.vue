<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

type MetadataDto = {
  name: string;
  imgUrl: string;
};

const useMyselfQuery = () => {
  return useQuery({
    queryKey: ["myself"],
    queryFn: async () => {
      const response = await fetch(
        `https://639df98e1ec9c6657bb6f91b.mockapi.io/myself`
      );
      const data = (await response.json()) as MetadataDto;
      return data;
    },
    staleTime: 0,
  });
};

const { status, isLoading, isError, data, error } = useMyselfQuery();
</script>

<template>
  <div v-if="isLoading">Loading</div>
  <div v-else>
    <img :src="data?.imgUrl" />
    <span>{{ data?.name }}</span>
  </div>
</template>
