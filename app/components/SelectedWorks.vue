<script setup lang="ts">
const { data: animationProjects } = await useAsyncData("animation", () => queryCollection("animation").all());
const { data: softwareProjects } = await useAsyncData("software", () => queryCollection("software").all());

const allProjects = computed(() => [
  ...(animationProjects.value || []),
  ...(softwareProjects.value || []),
].slice(0, 10));

const default_image = "images/dummy_image.png";
</script>

<template>
  <div
    v-if="allProjects.length"
    class="project-grid"
  >
    <NuxtLink
      v-for="project in allProjects"
      :key="project.id"
      :to="project.path"
      class="project-card"
    >
      <div class="project-thumb">
        <NuxtImg
          v-if="project.thumbnail"
          :src="project.thumbnail"
          alt="Project thumbnail"
          class="project-thumb-img"
        />
        <NuxtImg
          v-else
          :src="default_image"
          alt="Project thumbnail"
          class="project-thumb-img"
        />
      </div>
      <div class="project-info">
        <span class="project-title">{{ project.title }}</span>
        <span class="project-description">{{ project.description }}</span>
      </div>
    </NuxtLink>
  </div>

  <div v-else>
    Projects not found!
  </div>
</template>

<style scoped>
.page-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .project-grid {
    grid-template-columns: repeat(6, 1fr);
  }

  .project-card:nth-child(-n+4) {
    grid-column: span 3;
  }

  .project-card:nth-child(n+5) {
    grid-column: span 2;
  }
}

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
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.2;
}

.project-description {
  font-size: 0.75rem;
  opacity: 0.7;
  line-height: 1.3;
  margin-bottom: 1rem;
}
</style>
