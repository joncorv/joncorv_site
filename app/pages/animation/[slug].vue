<script setup>
const slug = useRoute().params.slug
const { data: project } = await useAsyncData(`animation-${slug}`, () => {
  return queryCollection('animation').path(`/animation/${slug}`).first()
})
</script>

<template>
  <h1> {{ project.title }} </h1>
  <h3> {{ project.description }} </h3>
  <h1> {{ project.client }} </h1>
  <h1> {{ project.date }} </h1>
  <h1> {{ project.tools }} </h1>
  <h1> {{ project.tags }} </h1>
  <ContentRenderer :value="project" />
</template>
