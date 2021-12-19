<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive } from "vue";
import TodoList from "./components/TodoList.vue";

const list = reactive([{ name: "suede" }, { name: "coldplay" }]);
</script>

<template>
  <todo-list>
    <template #band>
      <h2 v-for="item in list" :key="item.suede">{{ item.name }}</h2>
    </template>
    <template #that-this="thatThis">
      <h3>绑定了this，获取到的是data里的数据：{{ thatThis.a }}</h3>
    </template>
    <!-- #song 指定slot的名字，绑定一个在todo-list中定义的数据（可以任意命名） -->
    <template #multiProps="anyName">
      <h3>v-bind 绑定，可以包含多属性的一个对象：{{ anyName }}</h3>
    </template>

    <!-- #yyy={yyyProp}  {} 用于解构 -->
    <template #yyy="{singleSong}">
      <h3>冒号缩写绑定单个属性：{{ singleSong }}</h3>
    </template>

    <!-- #xxx="xxxProp"  不用{}包裹的话默认会加上{}，以对象形式抛出 -->
    <template #xxx="ddd">
      <h3>冒号缩写绑定单个属性：{{ ddd }}</h3>
    </template>

    <template #default>代替默认的插槽内容</template>
  </todo-list>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
