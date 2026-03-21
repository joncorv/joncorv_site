<script setup lang="ts">
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  width: {
    type: String,
    // required: true,
  },
  priority: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <NuxtLink
    :to="props.path"
    class="project-card"
  >
    <div class="project-thumb">
      <NuxtImg
        :src="props.src"
        alt="Project thumbnail"
        class="project-thumb-img"
        :loading="props.priority ? 'eager' : 'lazy'"
      />
    </div>
    <div class="project-info">
      <span class="project-title">{{ props.title }}</span>
      <span
        v-if="props.description"
        class="project-description"
      >{{ props.description }}</span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-thumb {
  overflow: hidden;
  aspect-ratio: 12 / 9;
  border-radius: 1.5rem;
  position: relative;
  box-shadow:
    0 0 0 0 transparent,
    0 0 0 transparent;
  transition: box-shadow 0.3s ease;
}

.project-card:hover .project-thumb {
  box-shadow:
    0 0 0 4px var(--ui-text-highlighted),
    12px 12px 24px rgba(0, 0, 0, 0.5);
}

.project-thumb-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.project-title {
  /* font-size: 1.2rem; */
  font-size: clamp(1.2rem, 4vw, 1.6rem);
  font-weight: 600;
  line-height: 1.3;
}

.project-description {
  /* font-size: 0.75em; */
  font-size: clamp(0.75rem, 4vw, 0.9rem);
  /* font-family: var(--font-mono); */
  font-weight: 100;
  opacity: 0.7;
  line-height: 1.3;
  margin-bottom: 1rem;
}
</style>
