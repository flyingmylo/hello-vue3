<template>
  <router-link to="/bar">bar</router-link><br />
  <router-link to="/todo">todo</router-link>

  <div id="container">
    <div class="item" v-for="item in arr" :key="item">{{ item }}</div>
    <!-- <div id="footer"></div> -->
  </div>
</template>
<script setup>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
const arr = reactive([1, 2, 3]);

onMounted(() => {
  const _container = document.getElementById("container");
  const _footer = document.getElementById("footer");

  const div = document.createElement("div");
  _container.append(div);

  const _ob = new Intersection(_container, arr);

  _ob.connect(div);
});



class Intersection {
  constructor(root, data, ) {
    this.dataSource = data;
    this.option = {
      root: root,
      rootMargin: "0px",
      threshold: 0.1,
    };
    this.intersectionObserve = null;

    this.observeInstance();
  }

  observeInstance() {
    this.intersectionObserve = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          if (entry.intersectionRatio > 0.1) {
            this.dataSource.push(4, 5, 6);
          }
        }
      });
    }, this.option);
  }

  connect(target) {
    this.intersectionObserve.observe(target);
  }
  disconnect() {
    this.intersectionObserve.disconnect();
  }
}
</script>
<style>
#container {
  margin: 0 auto;
  width: 100px;
  height: 240px;
  border: 1px solid seagreen;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 3px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  padding-right: 20px;
}
#container .item {
  height: 100px;
  border: 1px solid orange;
  box-sizing: border-box;
}
#container #footer {
  width: 100%;
  height: 20px;
  position: absolute;
  bottom: -50px;
  border: 1px solid cyan;
}
</style>
