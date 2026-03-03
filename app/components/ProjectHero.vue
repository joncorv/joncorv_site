<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="type">
      <span class="type">I'm Jonathan Corriveau, a San Francisco-based </span>
      <br>
      <u><span class="type_italics">CG artist</span></u>
      <span class="type">, </span>
      <u><span class="type_italics">coder</span></u>

      <span class="type_italics">, & </span>
      <u><span class="type_italics">perpetual student</span></u>.
      <br>
      <br>
      <div class="single-line">
        <span class="type">I work at </span>
        <div class="pill">
          <NuxtImg
            src="/images/logos/wtbr_white_v3.png"
            width="2.5rem"
            class="h-5"
          />
          WTBR
        </div>
        <span class="type"> where I make </span>
        <span class="type"> &nbsp;</span>
        <u><span class="type_italics">art with code</span></u>
        <span class="type">,</span>
      </div>
      <br>
      <span class="type"> and find joy in bringing ideas to life.</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  aspect-ratio: 16 / 7;
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.type_italics,
.type {
  font-family: "Playfair Display";
  font-weight: 500;
  font-size: 2.5rem;
  text-align: left;
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
  font-size: 1.25rem;
  text-align: center;
  text-anchor: middle;
  border: 2px solid var(--ui-text-highlighted);
  border-radius: 5rem;
  padding: .3rem 1rem .3rem 1rem;
  vertical-align: middle;
  margin: 0 0rem 0 0rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  height: 3rem;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
}

u {
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 6px;
  /* text-decoration-color: red; */
}
</style>
