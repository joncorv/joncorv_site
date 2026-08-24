<script setup lang="ts">
const props = defineProps({
  imageSource1: {
    type: String,
    default: "/images/dummy_image.png",
  },
  imageSource2: {
    type: String,
    default: "/images/dummy_image.png",
  },
  alt1: {
    type: String,
    default: "",
  },
  alt2: {
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
</script>

<template>
  <div class="hero-container">
    <div
      class="left_image"
    >
      <NuxtImg :src="imageSource1" :alt="alt1" />
    </div>

    <div
      class="right_image"
    >
      <NuxtImg :src="imageSource2" :alt="alt2" />
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  display: flex;
  aspect-ratio: v-bind(aspectRatio);
  flex-direction: row;
  gap: 1.5rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
}

.left_image,
.right_image {
  flex: 1;
  min-width: 0;
  display: flex;
}

@media (max-width: 639px) {
  .hero-container {
    aspect-ratio: auto;
    flex-direction: column;
  }

  .left_image,
  .right_image {
    aspect-ratio: 3 / 2;
  }
}

.left_image :deep(img),
.right_image :deep(img) {
  flex: 1;
  min-width: 0;
  min-height: 0;
  width: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: block;
}
</style>
