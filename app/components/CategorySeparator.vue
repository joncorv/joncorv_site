<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Category Separator",
  },
});
</script>

<template>
  <hr class="horiz-rule">

  <p class="text-category">
    {{ props.title }}
  </p>
</template>

<style scoped>
.horiz-rule {
  margin-top: 1rem;
  border-color: var(--ui-border-accented);
}

.text-category {
  font-size: 0.85rem;
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--ui-text-accented);
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}
</style>
