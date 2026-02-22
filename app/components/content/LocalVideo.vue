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
  <div class="video_wrapper">
    <video :src="src" :poster="poster" loop playsinline controls />
  </div>
</template>

<style scoped>
.video_wrapper {
  border-radius: 0.75rem;
  overflow: hidden;
}

video {
  display: block;
  width: 100%;
}
</style>
