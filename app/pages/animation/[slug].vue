<script setup>
const slug = useRoute().params.slug;
const { data: project } = await useAsyncData(`animation-${slug}`, () => {
  return queryCollection("animation").path(`/animation/${slug}`).first();
});
</script>

<template>
  <UContainer>
    <div class="page">
      <p
        v-if="project.client"
        class="page-client"
      >
        {{ project.client.toUpperCase() }}
      </p>

      <!-- <h1 class="page-title">{{ project.title }}</h1> -->
      <h1 class="page-title">
        {{ project.description }}
      </h1>
      <!-- <p v-if="project.description" class="page-description">{{ project.description }}</p> -->

      <!-- <div class="meta"> -->
      <!--   <span v-if="project.client">{{ project.client }}</span> -->
      <!--   <span v-if="project.date">{{ project.date }}</span> -->
      <!-- </div> -->

      <div
        v-if="project.tools?.length"
        class="tags"
      >
        <UBadge
          v-for="tag in project.tags"
          :key="tag"
          class="font-bold rounded-full"
        >
          {{ tag.toUpperCase() }}
        </UBadge>
        <UBadge
          v-for="tool in project.tools"
          :key="tool"
          color="error"
          class="font-bold rounded-full"
        >
          {{
            tool.toUpperCase() }}
        </UBadge>
      </div>

      <!-- <div v-if="project.tags?.length" class="tags"> -->
      <!--   <UBadge v-for="tag in project.tags" :key="tag" class="font-bold rounded-full">{{ tag }}</UBadge> -->
      <!-- </div> -->

      <div class="content">
        <ContentRenderer :value="project" />
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.page {
  padding: 3rem 0;
}

.page-client {
  font-size: 0.8rem;
  color: var(--ui-text-muted);
  margin-bottom: -0.5rem;
}

.page-title {
  font-family: "Playfair Display";
  font-size: 3.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.page-description {
  font-family: "Playfair Display";
  font-size: 1.5rem;
  color: var(--ui-text-muted);
  margin-bottom: 1.5rem;
}

.meta {
  display: flex;
  gap: 1.5rem;
  font-size: 0.875rem;
  color: var(--ui-text-muted);
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background-color: var(--ui-bg-elevated);
  border: 1px solid var(--ui-border);
}

.content {
  margin-top: 2rem;
}

.content :deep(*) {
  /* font-family: "Playfair Display"; */
  font-family: "JetBrains Mono";
}

.content :deep(h1),
.content :deep(h2),
.content :deep(h3),
.content :deep(h4),
.content :deep(p) {
  max-width: 35rem;
  margin-left: auto;
  margin-right: auto;
}

.content :deep(p) {
  font-weight: 20;
}
</style>
