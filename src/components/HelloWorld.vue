<script setup>
import { ref, onMounted } from "vue";

defineProps({
  msg: String,
});

onMounted(() => {
  console.log("hellow suede -word");
});
const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
