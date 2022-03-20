<template>
  <router-link to="/bar">bar</router-link><br />
  <router-link to="/todo">todo</router-link><br />
  <router-link to="/clamp">clamp</router-link>
  <div class="outer">
    <div class="inner"></div>
  </div>
  <div id="container">
    <div
      :class="`item-${item}`"
      v-for="item in arr"
      :style="{
        height: `${item}px`,
        gridRowEnd: `span ${~~(item / 5)}`,
      }"
      :key="item"
    >
      {{ item }}
    </div>
    <!-- <div id="footer"></div> -->
  </div>
</template>
<script setup>
import { reactive } from "@vue/reactivity";
import { onMounted, computed } from "@vue/runtime-core";
const arr = reactive([180, 120, 130, 120, 125, 135, 140, 125, 138, 140]);
const aaa = reactive({ obj: 123 });
console.log("enable custom formatters----", aaa);

class Intersection {
  constructor(root, data) {
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
  width: 200px;
  border: 1px solid seagreen;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 5px;
  column-gap: 3px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  padding-right: 20px;
}
#container div {
  grid-row-start: auto;
  border: 1px solid orange;
  box-sizing: border-box;
  margin-bottom: 5px;
}
#container #footer {
  width: 100%;
  height: 20px;
  position: absolute;
  bottom: -50px;
  border: 1px solid cyan;
}
.outer {
  width: 300px;
  height: 300px;
  border: 1px solid green;
  /* display: grid; */
  position: relative;
}
.inner {
  /* margin: auto; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border: 1px solid crimson;
}
</style>
