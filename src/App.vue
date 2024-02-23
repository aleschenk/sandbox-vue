<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Button from 'primevue/button'
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-1/4">01</div>
    <div class="basis-1/4">02</div>
    <div class="basis-1/2">03</div>
  </div>
<!--  <div class="grid grid-cols-4 gap-4">-->
<!--    <div>01</div>-->
<!--    <div>02</div>-->
<!--    <div>03</div>-->
<!--    <div>04</div>-->
<!--    <div>05</div>-->
<!--    <div>09</div>-->
<!--  </div>-->
<!--  <div>-->
<!--    <h1 class="text-3xl font-bold underline">-->
<!--      Hello world!-->
<!--    </h1>-->
<!--    <a href="https://vitejs.dev" target="_blank">-->
<!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
<!--    </a>-->
<!--    <a href="https://vuejs.org/" target="_blank">-->
<!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
<!--    </a>-->
<!--  </div>-->
<!--  <HelloWorld msg="Vite + Vue" />-->
<!--  <Button label="Hello Fucking World" />-->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
