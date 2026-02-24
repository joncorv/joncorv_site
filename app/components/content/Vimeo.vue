<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "Vimeo video",
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
});

const embedUrl = computed(() => {
  const params = new URLSearchParams({ dnt: "1" });
  if (props.autoplay) params.set("autoplay", "1");
  return `https://player.vimeo.com/video/${props.id}?${params}`;
});
</script>

<template>
  <div class="embed-wrapper">
    <iframe
      :src="embedUrl"
      :title="title"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      frameborder="0"
    />
  </div>
</template>

<style scoped>
.embed-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
}

iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
