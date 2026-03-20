<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: Object,
    required: true,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
  tools: {
    type: [String],
  },
  tags: {
    type: [String],
  },
});
</script>

<template>
  <p class="page-client">
    RUMINATIONS ON THINGS
  </p>

  <h1 class="page-title">
    {{ props.title }}
  </h1>
  <p v-if="props.description" class="page-description">
    {{ props.description }}
  </p>

  <div v-if="props.tools?.length" class="tags">
    <UBadge v-for="tag in props.tags" :key="tag" color="neutral" variant="subtle" class="font-bold rounded-full">
      {{ tag.toUpperCase() }}
    </UBadge>
    <UBadge v-for="tool in props.tools" :key="tool" color="neutral" variant="subtle" class="font-bold rounded-full">
      {{ tool.toUpperCase() }}
    </UBadge>
  </div>

  <div class="content">
    <ContentRenderer :value="props.body" />
  </div>
</template>

<style scoped>
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
  margin-bottom: 6rem;
  /* background-color: red; */
}

.content :deep(*) {
  font-family: var(--font-mono);
}
</style>
