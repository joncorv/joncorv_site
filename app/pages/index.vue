<script setup lang="ts">
const { data: projects } = await useAsyncData(() => queryCollection('animation').all())
</script>

<template>
  <!-- <ContentRenderer v-if="projects" v-for="project in projects" :value="project" :key="project.id" /> -->
  <h1>All My Projects</h1>
  <div v-if="projects">
    <ul>
      <li v-for="project in projects" :key="project.id">
        <NuxtLink :to="project.path">{{ project.title }}</NuxtLink>
      </li>
    </ul>
  </div>
  <div v-else>Projects not found!</div>
</template>
