<script setup lang="ts">
const props = defineProps({
  image_src_1: {
    type: String,
    default: "/images/dummy_image.png",
  },
  image_src_2: {
    type: String,
    default: "/images/dummy_image.png",
  },
  image_src_3: {
    type: String,
    default: "/images/dummy_image.png",
  },
  split_right: {
    type: Boolean,
    default: true,
  },
  height: {
    type: Number,
    default: 50,

  },
})

const containerHeight = computed(() => `${props.height}rem`)






const split_result = computed(() => props.split_right ? "split-right" : "split-left")

</script>

<template>
  <div class="container" :class="split_result" :style="{ height: containerHeight }">
    <div class="single">
      <NuxtImg :src="image_src_1" />
    </div>
    <div class="split">
      <NuxtImg :src="image_src_2" />
      <NuxtImg :src="image_src_3" />
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

.container.split-left {
  flex-direction: row-reverse;
}

.single {
  flex: 1;
  min-width: 0;
  display: flex;
}

.single :deep(img) {
  flex: 1;
  min-width: 0;
  min-height: 0;
  width: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: block;
}

.split {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.split :deep(img) {
  flex: 1;
  min-height: 0;
  width: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: block;
}
</style>
