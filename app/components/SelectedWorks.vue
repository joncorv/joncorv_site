<script setup lang="ts">
const props = defineProps({
  numProjects: {
    type: Number,
    default: 10,
  },
  landingPage: {
    type: Boolean,
    default: true,
  },
});

const { data: animationProjects } = await useAsyncData("animation", () => queryCollection("animation").all());
const { data: softwareProjects } = await useAsyncData("software", () => queryCollection("software").all());

const allProjects = computed(() => [
  ...(animationProjects.value || []),
  ...(softwareProjects.value || []),
].slice(0, props.numProjects));
</script>

<template>
  <div v-if="allProjects.length" class="project-grid">
    <ProjectThumbnail
      v-for="(project, index) in allProjects"
      :key="project.id"
      :path="project.path"
      :src="project.thumbnail"
      :title="project.title"
      :description="project.description"
      :priority="index < 4"
      width="600px"
    />
  </div>

  <div v-else>
    Projects not found!
  </div>

  <div v-if="landingPage" class="button-container">
    <UButton
      label="Check Out More Work"
      to="/animation/all-projects"
      color="neutral"
      size="xl"
      class="font-bold rounded-full"
      trailing-icon="lucide:external-link"
    />
  </div>
  <div v-else class="button-container">
    <UButton
      label="Go Back Home!"
      to="/"
      color="neutral"
      size="xl"
      class="font-bold rounded-full"
      icon="lucide:home"
    />
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  /* margin-bottom: 6rem; */
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

.button-container {
  margin-bottom: 6rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: 0;
  display: flex;
  justify-content: start;
  flex-direction: row;
}
</style>
