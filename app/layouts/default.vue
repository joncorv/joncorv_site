<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Figma',
  icon: 'i-simple-icons-figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

<template>
  <UHeader title="Jonathan Corriveau">
    <!-- <template #title> -->
    <!--   <Logo class="h-6 w-auto" /> -->
    <!-- </template> -->

    <UNavigationMenu :items="items" />

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
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
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
