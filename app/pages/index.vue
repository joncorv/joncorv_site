<script setup lang="ts">
</script>

<template>
  <UContainer>
    <div class="page">
      <LandingHero />
      <CategorySeparator title="SELECTED WORKS" />
      <SelectedWorks />
      <CategorySeparator title="SELECTED ARTICLES" />
      <SelectedArticles />
    </div>
  </UContainer>
</template>

<style scoped>
.page {
  padding: 3rem 0;
}
</style>
