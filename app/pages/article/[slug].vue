<script setup lang="ts">
import type { BreadcrumbItem } from "@nuxt/ui";

const slug = useRoute().params.slug;
const { data: article } = await useAsyncData(`article-${slug}`, () => {
  return queryCollection("articles").path(`/article/${slug}`).first();
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
    label: article.value?.title,
    icon: "lucide:link",
    class: "text-(--ui-text-muted)",
  },
]);
</script>

<template>
  <UContainer>
    <div v-if="article" class="page">
      <UBreadcrumb :items="breadcrumbItems" class="mt-4" />
      <p class="page-client">
        RUMINATIONS ON THINGS
      </p>

      <h1 class="page-title">
        {{ article.title }}
      </h1>
      <p v-if="article.description" class="page-description">
        {{ article.description }}
      </p>

      <div v-if="article.tools?.length" class="tags">
        <UBadge v-for="tag in article.tags" :key="tag" color="neutral" variant="subtle" class="font-bold rounded-full">
          {{ tag.toUpperCase() }}
        </UBadge>
        <UBadge v-for="tool in article.tools" :key="tool" color="neutral" variant="subtle" class="font-bold rounded-full">
          {{ tool.toUpperCase() }}
        </UBadge>
      </div>

      <div class="content">
        <ContentRenderer :value="article" />
      </div>
    </div>
    <UError v-else />
  </UContainer>
</template>

<style scoped>
.page {
  padding-top: 3rem;
  padding-bottom: 3rem;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;

}

.page-client {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--ui-text-muted);
}

.page-title {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.page-description {
  font-style: italic;
  /* font-size: 3; */
  line-height: 1.5rem;
  font-weight: 100;
  color: var(--ui-text-muted);
  margin-bottom: 1.5rem;
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
  font-family: var(--font-mono);
}

/* .content :deep(h1), */
/* .content :deep(h2), */
/* .content :deep(h3), */
/* .content :deep(h4), */
/* .content :deep(p) { */
/*   max-width: 50rem; */
/*   margin-left: auto; */
/*   margin-right: auto; */
/* } */
/**/
/* .content :deep(p) { */
/*   font-weight: 20; */
/* } */
</style>
