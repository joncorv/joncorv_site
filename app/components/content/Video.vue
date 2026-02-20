<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    default: undefined,
  },
})
</script>

<template>
  <video :src="src" :poster="poster" autoplay muted loop playsinline controls />
</template>

<style scoped>
video {
  display: block;
  width: 100%;
}
</style>
