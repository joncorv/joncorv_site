<script setup lang="ts">

</script>

<template>
  <div class="container">
    <p class="type">

      <span class="type">I'm Jonathan Corriveau, a San Francisco-based </span>
      <br>
      <u><span class="type_italics">CG Artist</span></u>
      <span class="type">, </span>
      <u><span class="type_italics">coder</span></u>
      <span class="type_italics">, & </span>
      <u><span class="type_italics">perpetual student</span></u>.
      <br>
      <br>
      <span class="type">I work at</span>
      <span class="pill">WTBR</span>
      <!-- <span class="pill">BRAND DESIGN</span> -->
      <span class="type"> where I make </span>
      <u><span class="type_italics">art with code</span></u>
      <span class="type">,</span>
      <br>
      <span class="type"> and find joy in bringing others' visions to life.</span>

    </p>
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
  font-weight: 300;
  font-size: 2.5rem;
  text-align: left;
  margin: auto;

}

.type_italics {
  font-style: italic;
}

.pill {
  font-weight: 250;
  font-size: 1.25rem;
  text-align: center;
  text-anchor: middle;
  border: 2px solid var(--ui-bg-elevated);
  border-radius: 5rem;
  padding: .3rem 1rem .3rem 1rem;
  vertical-align: middle;
  margin: 0 0rem 0 1rem;
}

u {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;
  /* text-decoration-color: red; */
}
</style>
