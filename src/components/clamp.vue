<template>
  <div class="paragraph">
    <span class="span">
      在我们的灵魂深处，有一样东西超越所有存在。大多数时候，这样东西都在沉睡；但是当我们记起一个美好的远方，当我们为它受苦，这样东西就会苏醒，在它独揽风景的瞬间，这些风景成为我们人格的一部分。所以每个人看事物的方式各不相同。我们的情感比色彩和音乐的灵魂升得更高，只是这些情感几乎不曾苏醒，尚未伸展它们的巨翅，包揽神奇。诗歌存在于一切事物：丑陋的、美丽的、惹人厌恶的；难的是知道如何发现诗歌，如何唤醒灵魂里深邃的湖。
    </span>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";

// 计算文本行数
onMounted(() => {
  function getLength(rects) {
    var line = 0,
      lastBottom = 0;
    for (var i = 0, len = rects.length; i < len; i++) {
      if (rects[i].bottom == lastBottom) {
        continue;
      }
      lastBottom = rects[i].bottom;
      line++;
    }
    return line;
  }
  // 初始化变量定义、赋值
  var span1 = document.getElementsByClassName("span")[0];
  var originalText = span1.innerHTML; // 源数据存储变量
  var changeText = span1.innerHTML; // 计算数据变量
  var span1Rects = span1.getClientRects();
  var h = getLength(span1Rects); //行数

  // 预设函数：3
  while (h > 3) {
    var step = 1;
    changeText = changeText.slice(0, -step);
    span1.innerHTML =
      changeText +
      '<span>...</span><span id="collapse-btn" class="collapse-text" data-spread="false"> 展开</span>';
    h = getLength(span1.getClientRects());
  }

  window.addEventListener("click", function (e) {
    var state = document.getElementById("collapse-btn").dataset.spread;
    if (state === "false") {
      span1.innerHTML =
        originalText +
        '<span id="collapse-btn" class="collapse-text" data-spread="true">收起</span>';
    } else {
      span1.innerHTML =
        changeText +
        '<span>...</span><span id="collapse-btn" class="collapse-text" data-spread="false"> 展开</span>';
    }
  });
});
</script>

<style lang="scss">
.collapse-text {
  color: #409eff;
  cursor: pointer;
}
.collapse-text:active {
  color: #3a8ee6;
}
.paragraph {
  //   width: 500px;
  word-break: break-word;
}
</style>
