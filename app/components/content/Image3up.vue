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
  imageSource3: {
    type: String,
    default: "/images/dummy_image.png",
  },
  splitRight: {
    type: Boolean,
    default: true,
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

// const containerHeight = computed(() => `${props.height}rem`);

const split_result = computed(() => props.splitRight ? "split-right" : "split-left");

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
  <div
    class="hero-container"
    :class="split_result"
  >
    <div class="single">
      <NuxtImg :src="imageSource1" />
    </div>
    <div class="split">
      <NuxtImg :src="imageSource2" />
      <NuxtImg :src="imageSource3" />
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 1.5rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
  aspect-ratio: v-bind(aspectRatio);
}

.hero-container.split-left {
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
