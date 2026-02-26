<script setup lang="ts">

</script>

<template>
  <div class="container">
    <p class="type">
      Invariably, something <u><span class="type_italics">very nice</span></u> will go here.
      <br>
      for now, it remains blank.
      <!-- <br> -->
      <!-- like my <u><span class="type_italics">cold, dark soul.</span></u> -->
    </p>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  aspect-ratio: 16 / 7;
  border-radius: 1.5rem;
  background-color: var(--ui-bg-elevated);
  border: 2px solid var(--ui-border);
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
  font-size: 3rem;
  text-align: center;
  margin: auto;

}

.type_italics {
  font-style: italic;
}
</style>
