<template>
  <UFooter>
    <template #left>
      <!-- <p class="text-muted text-sm"> -->
      <!--   Copyright © {{ new Date().getFullYear() }} -->
      <!-- </p> -->
      <p class="text-muted text-sm">
        Hand coded with <u>love and affection</u> ❤️ by me!
      </p>
    </template>

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
