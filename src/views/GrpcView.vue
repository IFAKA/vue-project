<script setup lang="ts">
import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";

const CHARACTERS_QUERY = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const { result, loading, error } = useQuery(CHARACTERS_QUERY);

const characters = computed(() => result.value?.characters.results ?? []);
</script>

<template>
  <p v-if="error">{{ error }}</p>
  <p v-else-if="loading">loading...</p>
  <ul v-else>
    <li v-for="{ id, name, image } of characters" :key="id">
      <img :src="image" :alt="name" />
      <h3>{{ name }}</h3>
    </li>
  </ul>
</template>
