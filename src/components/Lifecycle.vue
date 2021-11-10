<script setup>
import { onMounted, defineProps, watch } from "vue";

const props = defineProps({
  name: String,
});

onMounted(() => {
  console.log("onMounted", props.name);
});

watch(props, (value) => {
  console.log("watch", value);
});
// watch(props.name, (value) => {
//   console.log("llllllifecyle", value);
// });
</script>

<template>
  <h3>{{ name }}</h3>
</template>
