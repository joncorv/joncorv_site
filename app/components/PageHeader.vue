<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
import { onMounted, onUnmounted } from "vue";
import { useWindowScroll } from "@vueuse/core";

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
    icon: "lucide:drill",
    to: "/animation/all-projects",
  },

  {
    label: "Articles",
    icon: "lucide:notebook-pen",
    to: "/article/all-articles",
  },
  {
    type: "separator",
  },
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

const headerVisible = ref(true);

onNuxtReady(() => {
  const { y } = useWindowScroll();
  const prevY = ref(0);

  // fix negative scrolling values
  const yComputed = computed(() => {
    if (y.value < 0) {
      return 0;
    }
    else {
      return y.value;
    }
  });

  // every x milliseconds, check to see if  we're heading up or down
  setInterval(() => {
    // scrolling down
    if (yComputed.value > prevY.value + 30) {
      prevY.value = y.value;
      // console.log("mounted_tick: Scrolled Down - STATE CHANGE");
      headerVisible.value = false;
    }

    // scrolling up
    else if (yComputed.value < prevY.value) {
      prevY.value = y.value;
      // console.log("mounted_tick: Scrolled Up - STATE CHANGE");
      headerVisible.value = true;
    }

    // not scrolling
    else {
      // console.log("mounted_tick: DO NOTHING");
    }
  }, 1000);
});

// onUnmounted(() => clearInterval());

const customClass = computed(() => {
  return (headerVisible.value) ? "custom-header" : "custom-header custom-header-hidden";
});

watch(customClass, () => {
  console.log(customClass);
});
</script>

<template>
  <div :class="customClass">
    this is a test
  </div>

  <!-- <div :class="customClass"> -->
  <UHeader
    :toggle="false"
    :class="customClass"
  >
    <template #title>
      <p class="title-my-name">
        JONCORV
      </p>
      <p class="title-beta">
        BETA v0.29
      </p>
      <p class="title-beta">
        scroll y = {{ headerVisible }}
      </p>
    </template>

    <template #right>
      <UTooltip text="Flashbang Toggle" arrow :delay-duration="0">
        <UColorModeButton />
      </UTooltip>

      <UDropdownMenu :items="items">
        <UButton icon="lucide:menu" color="neutral" variant="ghost" />
      </UDropdownMenu>
    </template>
  </UHeader>
  <!-- </div> -->
</template>

<style scoped>
.custom-header {
  position: fixed;
  z-index: 1001;
  transform: translateY(0);
  height: 4rem;
  width: 100lvw;
  background-color: green;
  transition: all 0.3s ease;
}

.custom-header-hidden {
  transform: translateY(-100%);
  background-color: red;

}

.title-my-name {
  font-family: var(--font-mono);
  /* font-family: "Space Mono", monospace; */
  font-size: 1em;
  font-weight: 900;
}

.title-beta {
  font-family: var(--font-mono);
  font-size: 0.58em;
  font-weight: 900;
  padding-bottom: 0.18em;
  color: var(--color-neutral-500);
}
</style>
