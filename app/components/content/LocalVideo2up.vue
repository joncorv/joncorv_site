<script setup lang="ts">
const props = defineProps({
  src1: {
    type: String,
    required: true,
  },
  src2: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    default: undefined,
  },
  rightOffset: {
    type: Number,
    default: 10,
  },
  marginTop: {
    type: Number,
    default: 10,
  },
  marginBottom: {
    type: Number,
    default: 10,
  },
});

const rightOffsetValue = computed(() => props.rightOffset + "rem");
const marginTopValue = computed(() => props.marginTop + "rem");
const marginBottomValue = computed(() => props.marginBottom + "rem");

console.log("data-check", "right: ", rightOffsetValue.value, "top: ", marginTopValue.value, "bottom: ", marginBottomValue.value);
</script>

<template>
  <div class="videos">
    <div class="video-1-wrapper">
      <video
        :src="src1"
        :poster="poster"
        autoplay
        muted
        loop
        playsinline
        controls
      />
    </div>

    <div class="video-2-wrapper">
      <video
        :src="src2"
        :poster="poster"
        autoplay
        muted
        loop
        playsinline
        controls
      />
    </div>
  </div>
</template>

<style scoped>
.videos {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: v-bind(marginTopValue);
  margin-bottom: v-bind(marginBottomValue);
}

.video-1-wrapper,
.video-2-wrapper {
  flex: 1;
  display: flex;
  border-radius: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .3);
  overflow: hidden;
}

.video-2-wrapper {
  transform: translateY(v-bind(rightOffsetValue));
}

video {
  display: block;
  width: 100%;
  flex: 1;
}
</style>
