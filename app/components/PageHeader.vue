<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
// import { onMounted, onUnmounted } from "vue";
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
  }, 300);
});

// onUnmounted(() => clearInterval());

const customClass = computed(() => {
  return (headerVisible.value) ? "header-container" : "header-container header-hidden";
});

watch(customClass, () => {
  console.log(customClass);
});
</script>

<template>
  <div :class="customClass">
    <div class="header-subparent">
      <div class="header-left">
        <div class="title-my-name">
          JONCORV
        </div>
        <div class="title-beta">
          BETA v0.29
        </div>
      </div>

      <!-- <div class="header-space"> -->
      <!--   space -->
      <!-- </div> -->

      <div class="header-right">
        <UTooltip text="Flashbang Toggle" arrow :delay-duration="0">
          <UColorModeButton />
        </UTooltip>

        <UDropdownMenu :items="items">
          <UButton icon="lucide:menu" color="neutral" variant="ghost" />
        </UDropdownMenu>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  position: fixed;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  width: 100lvw;
  border-bottom: solid;
  border-radius: 1px;
  border-color: var(--ui-border);

  background-color: color-mix(in srgb, var(--ui-bg) 90%, transparent);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  /* transform: translateY(0rem); */
  transform: translate(0,0rem);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.header-hidden {
  transform: translateY(-3.5rem);
  background-color: color-mix(in srgb, var(--ui-bg) 0%, transparent);
}

.header-subparent {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 76rem; }

.header-left{
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 0.5rem;
}

.header-space {
  flex: 1;
}

.header-right {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  gap: 0.5rem;
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
  /* padding-bottom: 0.18em; */
  color: var(--color-neutral-500);
}
</style>
