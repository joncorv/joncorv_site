<script setup lang="ts">
const { data: articles } = await useAsyncData("article", () => queryCollection("articles").all());

const selectedArticles = computed(() => [
  ...(articles.value || []),
].slice(0, 5));
</script>

<template>
  <div
    v-if="selectedArticles.length"
    class="articles-container"
  >
    <NuxtLink
      v-for="article in selectedArticles"
      :key="article.id"
      :to="article.path"
    >
      <div>
        <h1>{{ article.title }}</h1>
      </div>
    </NuxtLink>
  </div>

  <div v-else>
    Articles not found!
  </div>
</template>

<style scoped></style>
