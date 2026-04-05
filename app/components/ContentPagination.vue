<script setup lang="ts">
import type { PageCollections } from "@nuxt/content";

const props = defineProps({
  dbName: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
});

const dbNameKey = props.dbName as keyof PageCollections;

const path = useRoute().path;

const { data: surround_data } = await useAsyncData(`surround-${path}`, () => {
  return queryCollectionItemSurroundings(dbNameKey, path);
});
</script>

<template>
  <div class="pagination-container">
    <NuxtLink v-if="surround_data?.[0]" :to="surround_data?.[0].path" variant="link">
      <span class="pagination-item">
        <Icon name="lucide:move-left" class="mr-2" />
        <span class="pagination-item-small">NEXT {{ props.categoryName.toUpperCase() }}</span>
        <br>
        <span class="pagination-item-large">{{ surround_data?.[0].title }}</span>
      </span>
    </NuxtLink>

    <div class="pagination-space" />

    <NuxtLink v-if="surround_data?.[1]" :to="surround_data?.[1].path" variant="link">
      <div class="pagination-item pagination-item-right">
        <span class="pagination-item-small">NEXT {{ props.categoryName.toUpperCase() }}</span>
        <Icon name="lucide:move-right" class="ml-2" />
        <br>
        <span class="pagination-item-large">{{ surround_data?.[1].title }}</span>

      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination-space {
  flex: 1;
  background-color: red;
}

.pagination-item{
  flex: 0;
  padding-left: 0;
  padding-right: 0;
}

.pagination-item-large {
  font-size: clamp(1.1rem, 3.5vw, 2rem);
  font-weight: 600;
  font-family: var(--font-serif);
  color: var(--ui-text-accented);
}
.pagination-item-small {
  font-size: clamp(0.65rem, 1.2vw, 0.85rem);
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--ui-text-muted);
}

.pagination-item-right {
  text-align: right;
}

.pagination-item:hover .pagination-item-large {
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
}
</style>
