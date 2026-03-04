<script setup lang="ts">
const { data: animationProjects } = await useAsyncData("animation", () => queryCollection("animation").all());
const { data: softwareProjects } = await useAsyncData("software", () => queryCollection("software").all());

const allProjects = computed(() => [
  ...(animationProjects.value || []),
  ...(softwareProjects.value || []),
].slice(0, 10));
</script>

<template>
  <div
    v-if="allProjects.length"
    class="project-grid"
  >
    <ProjectThumbnail
      v-for="project in allProjects"
      :key="project.id"
      :path="project.path"
      :src="project.thumbnail"
      :title="project.title"
      :description="project.description"
      width="600px"
    />
  </div>

  <div v-else>
    Projects not found!
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 6rem;
}

.page-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2rem;
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
</style>
