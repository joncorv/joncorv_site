<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

const items = ref<DropdownMenuItem[]>([

  {
    label: "Home",
    icon: "lucide:home",
    to: "/",
  },
  {
    type: "separator",
  },
  {
    label: "Projects",
    icon: "lucide:drill",
    to: "/animation/all-projects",
  },

  {
    label: "Articles",
    icon: "lucide:notebook-pen",
    to: "/article/all-articles",
  },
  {
    type: "separator",
  },
  {
    label: "Email",
    icon: "lucide:mail",
    to: "mailto:joncorv@gmail.com?subject=Hey Jon, let's chat.",
    external: true,
    noPrefetch: true,
  },
  {
    label: "Instagram",
    icon: "simple-icons:instagram",
    to: "https://instagram.com/joncorv",
    external: true,
    noPrefetch: true,
    target: "_blank",
  },
  {
    label: "LinkedIn",
    icon: "simple-icons:linkedin",
    to: "https://www.linkedin.com/in/joncorv/",
    external: true,
    noPrefetch: true,
    target: "_blank",
  },

]);
</script>

<template>
  <UHeader :toggle="false">
    <template #title>
      <p class="title-my-name">
        JONCORV
      </p>
      <p class="title-beta">
        BETA v0.29
      </p>
    </template>

    <template #right>
      <UTooltip
        text="Flashbang Toggle"
        arrow
        :delay-duration="0"
      >
        <UColorModeButton />
      </UTooltip>

      <UDropdownMenu :items="items">
        <UButton icon="lucide:menu" color="neutral" variant="ghost" />
      </UDropdownMenu>
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
.title-my-name {
  font-family: var(--font-mono);
  /* font-family: "Space Mono", monospace; */
  font-size: 1em;
  font-weight: 900;
}

.title-beta {
  font-family: var(--font-mono);
  font-size: 0.58em;
  font-weight: 900;
  padding-bottom: 0.18em;
  color: var(--color-neutral-500);
}
</style>
