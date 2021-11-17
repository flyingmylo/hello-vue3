<script setup>
import { onMounted, defineProps, watch } from "vue";

const props = defineProps({
  name: String,
});

onMounted(() => {
  // console.log("onMounted", props.name);
  const maxCb = (acc, cur) => {
    return Math.max(acc.x, cur.x);
  };

  const val = [{ x: 2 }, { x: 22 }].reduce(maxCb);
  // console.log(val);
});

// console.log(props)
// watch(props, (value) => {
//   console.log("watch", value);
// });
watch(() => props.name, (value, prev) => {
  console.log("llllllifecyle", value, prev);
});
</script>

<template>
  <h3>{{ name }}</h3>
</template>
