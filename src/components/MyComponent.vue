<script setup lang="ts">
  import { ref } from 'vue'
  import Rating from 'primevue/rating'

  defineProps<{ msg: string }>()

  const count = ref(0)
  const value = ref(2)
</script>

<template>
  <Rating v-model="value" />
</template>

<style scoped lang="vueScss">

</style>