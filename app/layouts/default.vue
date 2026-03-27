<script setup lang="ts">

</script>

<template>
  <UHeader :toggle="false">
    <template #title>
      <p class="title-my-name">
        JONCORV
      </p>
    </template>

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/joncorv"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
  </UHeader>

  <slot />

  <UFooter>
    <template #left>
      <!-- <p class="text-muted text-sm"> -->
      <!--   Copyright © {{ new Date().getFullYear() }} -->
      <!-- </p> -->
      <p class="text-muted text-sm">
        Hand coded with <u>love and affection</u> ❤️ by me!
      </p>
    </template>

    <!-- <UNavigationMenu :items="items" variant="link" /> -->

    <template #right>
      <UButton
        icon="i-simple-icons-instagram"
        color="neutral"
        variant="ghost"
        to="https://www.instagram.com/joncorv/"
        target="_blank"
        aria-label="Instagram"
      />
      <UButton
        icon="i-simple-icons-linkedin"
        color="neutral"
        variant="ghost"
        to="https://www.linkedin.com/in/joncorv/"
        target="_blank"
        aria-label="LinkedIn"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/joncorv"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>

<style scoped>
.pill-my-name {
  font-weight: 250;
  font-size: 1.1rem;
  text-align: center;
  text-anchor: middle;
  border: 1.7px solid var(--ui-text-highlighted);
  border-radius: 0.2rem;
  padding: 0rem 0.2rem 0rem 0.2rem;
  vertical-align: middle;
  margin: 0 0rem 0 1rem;
}

.title-my-name {
  font-family: var(--font-mono);
  /* font-family: "Space Mono", monospace; */
  font-size: 1em;
  font-weight: 900;
}
</style>
