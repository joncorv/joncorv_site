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
  height1: {
    type: Number,
    default: 50,
  },
  height2: {
    type: Number,
    default: 50,
  },
});

const height1 = computed(() => `${props.height1}rem`);
const height2 = computed(() => `${props.height2}rem`);
</script>

<template>
  <div class="container">
    <div
      class="left_image"
      :style="{ height: height1 }"
    >
      <NuxtImg :src="imageSource1" />
    </div>

    <div
      class="right_image"
      :style="{ height: height2 }"
    >
      <NuxtImg :src="imageSource2" />
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

.left_image,
.right_image {
  flex: 1;
  min-width: 0;
  display: flex;
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
