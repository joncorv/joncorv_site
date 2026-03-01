<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [{
  label: "Docs",
  to: "/docs/getting-started",
  icon: "i-lucide-book-open",
  active: route.path.startsWith("/docs/getting-started"),
}, {
  label: "Components",
  to: "/docs/components",
  icon: "i-lucide-box",
  active: route.path.startsWith("/docs/components"),
}, {
  label: "Figma",
  icon: "i-simple-icons-figma", to: "https://go.nuxt.com/figma-ui",
  target: "_blank",
}, {
  label: "Releases",
  icon: "i-lucide-rocket",
  to: "https://github.com/nuxt/ui/releases",
  target: "_blank",
}]);
</script>

<template>
  <UHeader>
    <template #title>
      <div class="pill">
        <p class="title_my_name">
          JONCORV
        </p>
      </div>
      <!-- <NuxtImg src="/images/logo_v01.png" height="200px" class="h-7" /> -->
    </template>

    <!-- <UNavigationMenu :items="items" /> -->

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton color="neutral" variant="ghost" to="https://github.com/nuxt/ui" target="_blank"
          icon="i-simple-icons-github" aria-label="GitHub" />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
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
      <UButton icon="i-simple-icons-instagram" color="neutral" variant="ghost" to="https://www.instagram.com/joncorv/"
        target="_blank" aria-label="Instagram" />
      <UButton icon="i-simple-icons-linkedin" color="neutral" variant="ghost" to="https://www.linkedin.com/in/joncorv/"
        target="_blank" aria-label="LinkedIn" />
      <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com/joncorv"
        target="_blank" aria-label="GitHub" />
    </template>
  </UFooter>
</template>

<style scoped>
.pill {
  font-weight: 250;
  font-size: 1.25rem;
  text-align: center;
  text-anchor: middle;
  border: 2px solid var(--ui-text-highlighted);
  border-radius: 0.25rem;
  padding: .1rem 0.5rem .1rem 0.5rem;
  vertical-align: middle;
  margin: 0 0rem 0 1rem;
}

.title_my_name {
  font-family: "JetBrains Mono", monospace;
  /* font-family: "Space Mono", monospace; */
  font-size: 1em;
  font-weight: 900;
}
</style>
