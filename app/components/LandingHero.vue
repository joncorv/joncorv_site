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
      <span class="type-normal">I'm Jonathan Corriveau, a San Francisco-based </span>
      <br>
      <u><span class="type_italics">CG artist</span></u>
      <span class="type-normal">, </span>
      <u><span class="type_italics">coder</span></u>

      <span class="type_italics">, & </span>
      <u><span class="type_italics">perpetual student</span></u>.
      <br>
      <br>
      <!-- <div class="single-line"> -->
      <span class="type-normal">I work at </span>
      <NuxtLink
        to="https://wtbr.tv"
        target="_blank"
        external
        no-prefetch
      >
        <div class="pill">
          <NuxtImg
            src="/images/logos/wtbr_white_v3.png"
            width="2.5em"
            class="buffalo-image"
          />
          WTBR
        </div>
      </NuxtLink>
      <span class="type-normal"> where I make </span>
      <span class="type-normal"> &nbsp;</span>
      <u><span class="type_italics">art with code</span></u>
      <span class="type-normal">,</span>
      <!-- </div> -->
      <br>
      <span class="type-normal"> and find joy in bringing ideas to life.</span>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-right: 1.4rem;
  padding-left: 1.4rem;
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: rgb(100, 100, 100); */
  /* aspect-ratio: 16 / 7; */
}

.type_italics,
.type-normal {
  font-family: "Playfair Display";
  font-weight: 500;
  /* font-size: 2.3rem; */
  font-size: clamp(1.1rem, 3vw, 2.3rem);
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
  font-weight: 250;
  font-size: 0.55em;
  text-align: center;
  text-anchor: middle;
  border: 2px solid var(--ui-text-highlighted);
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
.buffalo-image {
  height: 1em;

}

u {
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 6px;
  /* text-decoration-color: red; */
}
</style>
