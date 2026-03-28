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
    icon: "lucide:boom-box",
    to: "/animation/all-projects",
  },

  {
    label: "Articles",
    icon: "lucide:notebook-pen",
    to: "/animation/all-articles",
  },
  {
    type: "separator",
  },
  // {
  //   label: "My Socials:",
  //   // icon: "i-lucide-user",
  //   type: "label",
  // },
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
    </template>

    <template #right>
      <UTooltip
        text="Flashbang Toggle"
        arrow
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
