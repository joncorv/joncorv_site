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
      <NuxtPicture
        :src="props.src"
        alt="Project thumbnail"
        img-class="project-thumb-img"
        :width="600"
        :height="500"
        format="webp"
        fit="cover"
        :loading="props.priority ? 'eager' : 'lazy'"
      />
      <div class="project-info">
        <span class="project-title">{{ props.title }}</span>
        <span
          v-if="props.description"
          class="project-description"
        >{{ props.description }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.project-card {
  display: block;
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
    0 0 0 4px var(--color-neutral-300),
    12px 12px 24px rgba(0, 0, 0, 0.5);
}

.project-thumb-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-thumb-img {
  transform: scale(1.05);
}

.project-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5rem 1.25rem 1.25rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    transparent 100%
  );
  border-radius: 0 0 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.project-title {
  font-size: clamp(1rem, 3.5vw, 1.4rem);
  font-weight: 600;
  line-height: 1.3;
  color: white;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
}

.project-description {
  font-size: clamp(0.65rem, 1.5vw, 0.8rem);
  font-weight: 400;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.75);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}
</style>
