<script setup lang="ts">
import type { BreadcrumbItem } from "@nuxt/ui";

const slug = useRoute().params.slug;
const { data: project } = await useAsyncData(`animation-${slug}`, () => {
  return queryCollection("animation").path(`/animation/${slug}`).first();
});

const hasTools = computed(() => {
  if (project.value?.tools || project.value?.tags) {
    return true;
  }
  else {
    return false;
  }
});

const breadcrumbItems = computed<BreadcrumbItem[]>(() => [
  {
    icon: "lucide:home",
    to: "/",
  },
  {
    label: "Projects",
    icon: "lucide:box",
    to: "/animation/all-projects",
  },
  {
    label: project.value?.title,
    icon: "lucide:link",
    class: "text-(--ui-text-muted)",
  },
]);
</script>

<template>
  <UContainer>
    <UBreadcrumb :items="breadcrumbItems" class="mt-4" />
    <div v-if="project" class="page">
      <p v-if="project.client" class="page-client">
        {{ project.client.toUpperCase() }}
      </p>

      <h1 class="page-description">
        {{ project.description }}
      </h1>

      <h1 class="page-subtitle">
        {{ project.subtitle }}
      </h1>

      <div
        v-if="hasTools"
        class="tags"
      >
        <UBadge v-for="tag in project.tags" :key="tag" color="neutral" variant="subtle" class="font-bold rounded-full">
          {{ tag.toUpperCase() }}
        </UBadge>
        <UBadge v-for="tool in project.tools" :key="tool" color="neutral" variant="subtle" class="font-bold rounded-full">
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
    <UError v-else />
  </UContainer>
</template>

<style scoped>
.page {
  padding: 3rem 0;
}

.page-client {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  line-height: 2;
  color: var(--ui-text-muted);
  margin-top: -0.5rem;
  /* margin-bottom: -0.5rem; */
}

.page-description {
  font-family: var(--font-serif);
  /* font-size: 3.25rem; */
  font-size: clamp(2.7rem, 4vw, 3.25rem);
  color: var( --ui-text-highlighted);
  font-weight: 700;
  line-height: 1.0;
  margin-bottom: 1.1rem;
}

.page-subtitle {
  font-weight: 100;
  font-size: 1.1rem;
  margin-bottom: 1.1rem;
  max-width: 60rem;
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
  /* font-family: var(--font-mono); */
}

.content :deep(h1),
.content :deep(h2),
.content :deep(h3),
.content :deep(h4),
.content :deep(p) {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.content :deep(p) {
  font-weight: 20;
}
</style>
