<script setup>
import { onMounted, defineProps, watch } from "vue";

const props = defineProps({
  name: String,
});
console.log("kkkk", props);
// watch(props.name, (value) => {
//   console.log("llllllifecyle", value);
// });
</script>

<template>
  <input type="text" v-model="name" />
</template>
