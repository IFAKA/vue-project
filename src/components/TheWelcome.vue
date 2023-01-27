<script setup lang="ts">
import { computed, ref } from "vue";

const counter = ref(0);
const favNmbs = ref([] as number[]);

const inc = () => counter.value++;
const dec = () => counter.value--;
const res = () => {
  counter.value = 0;
};
const add = () => favNmbs.value.push(counter.value);

const clsasCounter = computed(() => {
  if (counter.value < 0) return "red";
  else if (counter.value > 0) return "green";
  return "zero";
});
const isDisabled = computed(() => {
  return favNmbs.value.some((nmb) => nmb === counter.value);
});
</script>

<template>
  <h1 :class="clsasCounter" class="text-xl font-bold">{{ counter }}</h1>
  <button @click="inc" name="inc" class="px-2 pb-1 rounded bg-stone-900">
    +
  </button>
  <button @click="res" name="res" class="px-2 pb-1 rounded bg-stone-900">
    res
  </button>
  <button @click="dec" name="dec" class="px-2 pb-1 rounded bg-stone-900">
    -
  </button>
  <br />
  <button
    @click="add"
    class="px-2 pb-1 rounded bg-stone-900 disabled:opacity-70"
    :disabled="isDisabled"
  >
    Add
  </button>
  <ul>
    <li v-for="nmb of favNmbs" :key="nmb">
      {{ nmb }}
    </li>
  </ul>
</template>

<style>
.red {
  color: red;
}
.green {
  color: green;
}
.zero {
  color: peru;
}
</style>
