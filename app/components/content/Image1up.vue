<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: "/images/dummy_image.png",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: Number,
    default: 16,
  },
  height: {
    type: Number,
    default: 9,
  },
});

const aspectRatio = computed(() => {
  if (props.width > 0 && props.height > 0) {
    const width_string = String(props.width);
    const height_string = String(props.height);
    return width_string + " / " + height_string;
  }
  else {
    return "16 / 9";
  }
});

console.log(aspectRatio.value);
</script>

<template>
  <div class="container">
    <div class="image">
      <NuxtImg :src="src" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
}

.image {
  flex: 1;
  min-width: 0;
  display: flex;
}

.image :deep(img) {
  flex: 1;
  min-width: 0;
  min-height: 0;
  aspect-ratio: v-bind(aspectRatio);
  width: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: block;
}
</style>
