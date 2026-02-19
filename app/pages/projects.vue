<script setup lang="ts">
const { data: projects } = await useAsyncData(() => queryCollection('animation').all())
</script>

<template>

  <ContentRenderer v-if="projects" v-for="project in projects" :value="project" />

  <div v-else>Home not found</div>
</template>
