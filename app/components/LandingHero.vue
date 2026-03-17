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
      <u><span class="type_italics">CG artist</span></u>
      <span class="type-normal">, </span>
      <u><span class="type_italics">coder</span></u>

      <span class="type_italics">, & </span>
      <u><span class="type_italics">perpetual student</span></u>.
      <br>
      <br>
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
  font-family: "Playfair Display";
  font-weight: 500;
  /* font-size: 2.3rem; */
  font-size: clamp(1.5rem, 4vw, 2.3rem);
  text-align: center;
  margin: auto;
}

.type_italics {
  font-style: italic;
  font-weight: 900;
}

.single-line {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.pill {
  font-family: "JetBrains Mono", monospace;
  font-weight: 250;
  font-size: 0.55em;
  text-align: center;
  text-anchor: middle;
  border: 0.12em solid var(--ui-text-highlighted);
  border-radius: 5rem;
  padding: .3em 1em .3em 1em;
  vertical-align: middle;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.4em;
  height: 2em;
  width: 6em;
  margin-left: 0.6em;
  margin-right: 0.6em;
}

.pill:hover {
  /* background-color: var(--ui-text-highlighted); */
  background: linear-gradient(0deg, var(--ui-text-highlighted), var(--ui-text-toned));
  color: var(--ui-bg-elevated);
}

.buffalo-image {
  height: 1em;
  aspect-ratio: 367 / 227;
  color: currentColor;
}

u {
  text-decoration: underline;
  text-decoration-thickness: 0.05em;
  text-underline-offset: 0.15em;
  /* text-decoration-color: red; */
}
</style>
