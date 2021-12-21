<template>

    <slot name="band" >
        <p v-for="(item,index) in data" :key="index">{{item.category}}</p>
    </slot>

    <!-- v-bind 绑定一个对象，插槽名字为song -->
    <slot name="multiProps" v-bind={song1,song2}></slot>
    <!-- 绑定单个prop -->
    <slot name="yyy" :singleSong="reactive({name: '使用 {} 访问时，自动解构，名字要一样都是singleSong'})"></slot>

    <slot name="xxx" :xxxProp="reactive({name: '不使用 {}访问时，相当于把 xxxProp 重命名'})"></slot>
    <slot name="that-this" v-bind=this></slot>
    <slot>默认插槽</slot>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return {
            a: 1
        }
    },
    setup() {
        
    }
})
</script>

<script setup>
import { reactive, ref, defineExpose, onMounted} from 'vue';

const data = reactive([
    {category: 'brit-pop'},
    {category: 'jazz-pop'}
])
const song1 = ref('a rush of blood to the head111')
const song2 = ref('a rush of blood to the head222')
const singleSong = reactive({name: 'the scientist'})

const getLigetListst =  () => {console.log('getList')}
// defineExpose({getLigetListst})
</script>

<style>

</style>