<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Lifecycle from "./components/Lifecycle.vue";
import { ref, watch, defineProps, toRefs, computed } from "vue";
const name = ref("ddddd");

const props = defineProps({
  band: Object
})
console.log(props)

// const { band } = toRefs(props)
const bandTemp = computed(() => props.band.name)
watch(bandTemp, (value) => {
  console.log(value)
})

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <input type="text" v-model="name" />
  <Lifecycle :name="name"></Lifecycle>
  <HelloWorld msg="Hello Vue 3 + Vite" />abc:
  <input type="text" v-model="band.name" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
