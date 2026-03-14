<script setup lang="ts">
</script>

<template>
  <UContainer>
    <div class="page">
      <LandingHero />
      <CategorySeparator title="SELECTED WORKS" />
      <SelectedWorks />
      <CategorySeparator title="MY BLOG --> RUMINATIONS FROM THE DARK SIDE " />
      <SelectedArticles />
    </div>
  </UContainer>
</template>

<style scoped>
.page {
  padding: 1rem 0;
}
</style>
