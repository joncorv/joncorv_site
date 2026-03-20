<script setup lang="ts">
// const el = ref(null);
// const { width } = useElementSize(el);
//
// const br_visibility = computed(() => {
//   return width.value > 900;
// });
</script>

<template>
  <div
    ref="el"
    class="hero-container"
  >
    <!-- <span>a little about me  </span> -->
    <div class="type-normal">
      <span class="type-normal">I'm Jonathan Corriveau, a San Francisco based </span>
      <!-- <br> -->
      <u><span class="type_italics">CG Lead</span></u>
      <span class="type-normal">, </span>
      <u><span class="type_italics">Programmer</span></u>
      <span class="type_italics">, & </span>
      <u><span class="type_italics">Perpetual Student</span></u>.

      <div class="cust-break" />

      <span class="type-normal">I work at </span>
      <NuxtLink
        to="https://wtbr.tv"
        target="_blank"
        external
        no-prefetch
      >
        <div class="pill">
          <Icon
            name="local-icons:buffalo"
            class="buffalo-image"
          />

          WTBR
        </div>
      </NuxtLink>
      <span class="type-normal"> where I make </span>
      <span class="type-normal"> &nbsp;</span>
      <u><span class="type_italics">art with code</span></u>
      <span class="type-normal">,</span>
      <!-- <br> -->
      <span class="type-normal"> and find joy in bringing ideas to life.</span>

      <div class="cust-break" />

      <span class="type-normal">Recently I built a cross platform desktop app called </span>
      <NuxtLink
        to="https://github.com/joncorv/filera"
        target="_blank"
        external
        no-prefetch
      >
        <div class="pill-2">
          <!-- <Icon -->
          <!--   name="local-icons:buffalo" -->
          <!--   class="buffalo-image" -->
          <!-- /> -->
          <!---->
          FILERA
        </div>
      </NuxtLink>
      <span class="type-normal">. It's a powerful cross-platform file renaming app built in Rust 🦀 & Tauri </span>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  text-wrap: balance;
}

.type_italics,
.type-normal {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(1.5rem, 4vw, 2.3rem);
  text-align: center;
  margin: auto;
}

.type_italics {
  font-style: italic;
  font-weight: 900;
}

.cust-break {
  margin-bottom: 0.8em;
  display: block;
}

.pill {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.55em;
  text-align: center;
  text-anchor: middle;
  padding: .3em 1em .3em 1em;
  vertical-align: middle;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.4em;
  height: 2em;
  width: 6em;
  margin-left: 0.2em;
  margin-right: 0.2em;
  border-radius: 5rem;
  border-style: solid;
  border-color: var(--ui-text-highlighted);
  border-width: .12em;
  background: linear-gradient(0deg, var(--ui-text-highlighted), var(--ui-text-toned));
  color: var(--ui-bg-elevated);
  transition: background 0.15s ease, color 0.15s ease;
}

.pill:hover {
  background: linear-gradient(0deg, transparent, transparent);
  color: var(--ui-text-highlighted);
}

.pill-2 {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.55em;
  text-align: center;
  text-anchor: middle;
  padding: .3em 1em .3em 1em;
  vertical-align: middle;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.4em;
  height: 2em;
  width: 5em;
  margin-left: 0.2em;
  margin-right: 0.2em;
  border-radius: 5rem;
  border-style: solid;
  border-color: var(--ui-text-highlighted);
  border-width: .12em;
  background: linear-gradient(0deg, var(--ui-text-highlighted), var(--ui-text-toned));
  color: var(--ui-bg-elevated);
  transition: background 0.15s ease, color 0.15s ease;
}

.pill-2:hover {
  background: linear-gradient(0deg, transparent, transparent);
  color: var(--ui-text-highlighted);
}

.buffalo-image {
  height: 1em;
  aspect-ratio: 367 / 227;
  color: currentColor;
}

u {
  text-decoration: underline;
  text-decoration-thickness: 0.05em;
  text-underline-offset: 0.1em;
  /* text-decoration-color: red; */
}
</style>
