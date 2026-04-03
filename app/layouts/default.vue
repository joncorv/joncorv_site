<template>
  <PageHeader />
  <div class="my-slot" />
  <slot />
  <PageFooter />
</template>

<style scoped>
.my-slot{
  height: 4rem;
}
</style>
