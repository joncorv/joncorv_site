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
      <h1 class="page-title">Projects</h1>

      <div v-if="allProjects.length" class="project-grid">
        <NuxtLink
          v-for="project in allProjects"
          :key="project.id"
          :to="project.path"
          class="project-thumb"
        >
          <span class="project-title">{{ project.title }}</span>
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
    grid-template-columns: repeat(3, 1fr);
  }
}

.project-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  aspect-ratio: 16 / 10;
  border-radius: 0.75rem;
  background-color: var(--ui-bg-elevated);
  border: 1px solid var(--ui-border);
  transition: border-color 0.6s ease-out, box-shadow 0.6s ease-out, transform 0.6s ease-out;
}

.project-thumb:hover {
  border-color: var(--ui-border-active);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: scale(1.05);
  transition: border-color 0.05s ease-out, box-shadow 0.05s ease-out, transform 0.05s ease-out;
}

.project-title {
  font-size: 1.125rem;
  font-weight: 600;
}
</style>
