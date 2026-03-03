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
  color: var(--ui-text-muted);
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}
</style>
