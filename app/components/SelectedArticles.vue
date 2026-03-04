<script setup lang="ts">
const { data: articles } = await useAsyncData("article", () => queryCollection("articles").all());

const selectedArticles = computed(() => [
  ...(articles.value || []),
].slice(0, 5));
</script>

<template>
  <div v-if="selectedArticles.length" class="articles-container">
    <NuxtLink v-for="article in selectedArticles" :key="article.id" :to="article.path">
      <div class="single-article">
        <p class="article-date">
          {{ article.date?.toUpperCase() }}
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
    Articles not found! Danger Will Robinson!
  </div>

  <div class="button-container">
    <NuxtLink to="">
      <UButton color="neutral" size="xl" class="font-bold rounded-full">More Articles --></UButton>
    </NuxtLink>
  </div>
</template>

<style scoped>
.articles-container {
  margin-top: 3rem;
  /* margin-bottom: 3rem; */
  margin-left: auto;
  margin-right: auto;
  max-width: 65rem;
  /* background-color: red; */
}

.single-article {
  margin-bottom: 3rem;
}

.article-date {
  font-size: 0.9rem;
  color: var(--ui-text-muted);
  margin-bottom: 0.1rem;
}

.article-title {
  font-family: "Playfair Display";
  font-weight: 800;
  font-size: 2rem;
  text-align: left;
  margin-bottom: 0.3rem;
}

.article-description {
  /* font-style: italic; */
  color: var(--ui-text-muted);
  max-width: 45rem;
  margin-top: 0.2rem;
}

a:hover .article-title {
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  /* text-underline-offset: 6px; */
  text-underline-offset: 3px;
}

a:nth-child(even) .single-article {
  text-align: right;
}

a:nth-child(even) .article-title {
  text-align: right;
}

a:nth-child(even) .article-description {
  margin-left: auto;
  margin-right: 0;
}

.button-container {
  margin-left: auto;
  margin-right: 0;
  display: flex;
  justify-content: start;
  /* align-items: end; */
  flex-direction: row;
  margin-bottom: 3rem;
}
</style>
