<script setup lang="ts">
const { data: animationProjects } = await useAsyncData('animation', () => queryCollection('animation').all())
const { data: softwareProjects } = await useAsyncData('software', () => queryCollection('software').all())

const allProjects = computed(() => [
  ...(animationProjects.value || []),
  ...(softwareProjects.value || []),
])
</script>

<template>
  <UContainer>
    <div class="page">

      <div class="project-hero"></div>

      <div v-if="allProjects.length" class="project-grid">
        <NuxtLink v-for="project in allProjects" :key="project.id" :to="project.path" class="project-card">
          <div class="project-thumb">
            <NuxtImg src="/images/animation/thao-and-the-get-down-stay-down/front-cover.png" alt="Project thumbnail"
              width="128" height="128" class="project-thumb-img" />
          </div>
          <div class="project-info">
            <span class="project-title">{{ project.title }}</span>
            <span class="project-description">{{ project.description }}</span>
          </div>
        </NuxtLink>
      </div>

      <div v-else>Projects not found!</div>
    </div>
  </UContainer>
</template>

<style scoped>
.page {
  padding: 3rem 0;
}

.page-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.project-hero {
  width: 100%;
  aspect-ratio: 16 / 7;
  border-radius: 0.75rem;
  background-color: var(--ui-bg-elevated);
  border: 1px solid var(--ui-border);
  margin-bottom: 1.5rem;
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
  gap: 0.75rem;
}

.project-thumb {
  overflow: hidden;
  aspect-ratio: 16 / 10;
  border-radius: 0.75rem;
  background-color: var(--ui-bg-elevated);
  border: 1px solid var(--ui-border);
  position: relative;
  transition: border-color 0.3s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}

.project-card:hover .project-thumb {
  border-color: var(--ui-border-active);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: border-color 0.1s cubic-bezier(0.7, 0, 0.84, 0), box-shadow 0.075s cubic-bezier(0.7, 0, 0.84, 0);
}

.project-thumb-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: grayscale(1); */
  opacity: 0.25;
  transition: opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}

.project-card:hover .project-thumb-img {
  opacity: 0.5;
  transition: opacity 0.1s cubic-bezier(0.7, 0, 0.84, 0);
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.project-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;
}

.project-description {
  font-size: 0.75rem;
  opacity: 0.7;
  line-height: 1.3;
}
</style>
