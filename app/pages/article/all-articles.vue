<script setup lang="ts">
const { data: articles } = await useAsyncData("article", () => queryCollection("articles").all());
</script>

<template>
  <UContainer>
    <div class="all-articles-page">
      <SingleArticle
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :body="article.body"
        :date="article.date"
        :description="article.description"
        :tools="article.tools"
        :tags="article.tags"
      />
    </div>
  </UContainer>
</template>

<style scoped>
.all-articles-page {
  padding-top: 3rem;
  padding-bottom: 3rem;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;

}
</style>
