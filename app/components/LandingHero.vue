<script setup lang="ts">
</script>

<template>
  <div
    ref="el"
    class="hero-container"
  >
    <!-- <span>a little about me  </span> -->
    <div class="type-normal">
      <!-- NOTE:  Start First Paragraph -->

      <!-- <span class="text-category">A little about me</span> -->
      <!-- <br> -->
      <span class="type-normal">I'm Jon — San Francisco based, perpetually curious, & </span>

      <NuxtLink to="https://doc.rust-lang.org/stable/book/ch00-00-introduction.html" external no-prefetch>
        <u><span class="type_italics">probably reading docs</span></u>
      </NuxtLink>
      <span class="type-normal"> right now.</span>

      <div class="cust-break" />

      <!-- NOTE:  Start Second Paragraph -->
      <span class="type-normal">I'm a CG Lead at </span>
      <NuxtLink to="https://wtbr.tv" target="_blank" external no-prefetch>
        <div class="pill pill-1">
          <Icon name="local-icons:buffalo" class="buffalo-image" />
          WTBR
        </div>
      </NuxtLink>
      <span class="type-normal"> and a developer building with Rust, TypeScript, and Python. </span>

      <div class="cust-break" />

      <!-- NOTE:  Start Third Paragraph -->
      <span class="type-normal">I came up through animation and design, started writing code to solve problems the tools couldn't, and kept going until I released </span>
      <NuxtLink to="https://github.com/joncorv/filera" target="_blank" external no-prefetch>
        <div class="pill pill-2">
          <NuxtImg src="/images/filera/filera-64x64.png" class="filera-image" />
          FILERA
        </div>
      </NuxtLink>
      <span class="type-normal">.</span>

      <div class="cust-break" />

      <!-- NOTE:  Start Fourth Paragraph -->

      <!-- <span class="type-normal">I work across the full range — 3D production to full-stack development.</span> -->
      <span class="type-normal">I keep the energy up, I get the thing shipped, and I'm always learning something new.</span>

      <div class="cust-break" />

      <!-- NOTE:  Start Fifth Paragraph -->
      <NuxtLink to="mailto:joncorv@gmail.com?subject=Hey Jon, let's chat." external no-prefetch>
        <u><span class="type_italics">Let's talk →</span></u>
      </NuxtLink>

      <!-- NOTE:  End last paragraph -->
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  width: 100%;
  padding-top: clamp(-8rem, 4vw, 2.0rem);
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  text-wrap: balance;
}

.type_italics,
.type-normal {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(1.2rem, 4vw, 2.3rem);
  text-align: center;
  margin: auto;
}

.type_italics {
  font-style: italic;
  font-weight: 900;
}

.text-category {
  font-size: 0.95rem;
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--ui-text-accented);
  /* margin-top: 0.5rem; */
  /* margin-bottom: 2rem; */
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

.pill-1 {
  width: 6em;
}

.pill-2 {
  width: 7em;
}

.buffalo-image {
  height: 1em;
  aspect-ratio: 367 / 227;
  color: currentColor;
}

.filera-image {
  height: 1.5em;
}

u {
  text-decoration: underline;
  text-decoration-thickness: 0.05em;
  text-underline-offset: 0.1em;
  /* text-decoration-color: red; */
}
</style>
