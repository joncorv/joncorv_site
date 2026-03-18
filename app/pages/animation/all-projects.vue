<script setup lang="ts">
</script>

<template>
  <UContainer>
    <div class="page">
      <!-- <LandingHero /> -->
      <!-- <CategorySeparator title="ALL SELECTED WORKS" /> -->
      <SelectedWorks
        :num-projects="31"
        :landing-page="false"
      />
    </div>
  </UContainer>
</template>

<style scoped>
.page {
  padding: 1rem 0 6rem;
}
</style>
