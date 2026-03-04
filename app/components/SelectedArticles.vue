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
      <div class="single-article">
        <p class="article-date">
          {{ article.date }}
        </p>
        <p class="article-title">
          {{ article.title }}
        </p>
        <p class="article-description">
          {{ article.description }}
        </p>
      </div>
    </NuxtLink>
  </div>

  <div v-else>
    Articles not found!
  </div>
</template>

<style scoped>
.articles-container {
  margin-bottom: 1.5rem;
}

.single-article {
  margin-bottom: 2rem;

}

.article-title {
  font-family: "Playfair Display";
  font-weight: 500;
  font-size: 2.5rem;
  text-align: left;
  margin: auto;
}
</style>
