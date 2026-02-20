<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'YouTube video',
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  start: {
    type: Number,
    default: undefined,
  },
})

const embedUrl = computed(() => {
  const params = new URLSearchParams({ rel: '0' })
  if (props.autoplay) params.set('autoplay', '1')
  if (props.start !== undefined) params.set('start', String(props.start))
  return `https://www.youtube.com/embed/${props.id}?${params}`
})
</script>

<template>
  <div class="embed-wrapper">
    <iframe
      :src="embedUrl"
      :title="title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
