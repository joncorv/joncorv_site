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
});
</script>

<template>
  <div class="video_wrapper">
    <video
      :src="src"
      :poster="poster"
      loop
      playsinline
      controls
    />
  </div>
</template>

<style scoped>
.video_wrapper {
  border-radius: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .3);
  overflow: hidden;
  margin-bottom: 3rem;
  margin-top: 3rem;
}

video {
  display: block;
  width: 100%;
}
</style>
