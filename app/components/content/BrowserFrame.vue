<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string;
  alt: string;
  url?: string;
  to?: string;
  width?: number;
  height?: number;
}>(), {
  url: "allinframestock.com",
  to: undefined,
  width: 2880,
  height: 1800,
});

const wrapperComponent = computed(() => props.to ? resolveComponent("NuxtLink") : "div");
const wrapperProps = computed(() => props.to
  ? {
      "to": props.to,
      "external": true,
      "target": "_blank",
      "rel": "noopener noreferrer",
      "aria-label": `Open ${props.url} in a new tab`,
    }
  : {});
</script>

<template>
  <figure class="browser-frame">
    <component :is="wrapperComponent" v-bind="wrapperProps" class="browser-link">
      <div class="browser-toolbar" aria-hidden="true">
        <div class="browser-navigation">
          <UIcon name="lucide:arrow-left" class="browser-nav-icon" />
          <UIcon name="lucide:arrow-right" class="browser-nav-icon browser-nav-icon-muted" />
          <UIcon name="lucide:rotate-cw" class="browser-nav-icon" />
        </div>

        <div class="address-bar">
          <UIcon name="lucide:lock-keyhole" class="address-icon" />
          <span class="address-text">{{ url }}</span>
        </div>

        <div class="toolbar-action">
          <UIcon v-if="to" name="lucide:external-link" class="external-link-icon" />
        </div>
      </div>

      <div class="browser-viewport">
        <NuxtImg
          :src="src"
          :alt="alt"
          :width="width"
          :height="height"
          class="browser-image"
        />
      </div>
    </component>
  </figure>
</template>

<style scoped>
.browser-frame {
  overflow: hidden;
  margin: 3rem 0;
  border: 1px solid var(--ui-border);
  border-radius: 1.5rem;
  background-color: var(--ui-bg);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.24);
}

.browser-link {
  display: block;
  color: inherit;
  text-decoration: none;
}

.browser-link:focus-visible {
  outline: 3px solid var(--ui-primary);
  outline-offset: 4px;
  border-radius: 1.5rem;
}

.browser-toolbar {
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 32rem) 4.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 3.25rem;
  padding: 0.625rem 1rem;
  border-bottom: 1px solid var(--ui-border);
  background-color: var(--ui-bg-elevated);
}

.browser-navigation {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: var(--ui-text-muted);
}

.browser-nav-icon {
  width: 0.875rem;
  height: 0.875rem;
}

.browser-nav-icon-muted {
  opacity: 0.4;
}

.address-bar {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.45rem 1rem;
  border: 1px solid var(--ui-border);
  border-radius: 0.625rem;
  background-color: var(--ui-bg);
  color: var(--ui-text-muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  line-height: 1;
}

.address-icon {
  width: 0.75rem;
  height: 0.75rem;
  flex: none;
}

.address-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.toolbar-action {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.external-link-icon {
  width: 0.875rem;
  height: 0.875rem;
  color: var(--ui-text-muted);
}

.browser-viewport {
  overflow: hidden;
  background-color: #000;
  line-height: 0;
}

.browser-image {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 639px) {
  .browser-frame {
    border-radius: 1rem;
  }

  .browser-toolbar {
    grid-template-columns: 3.25rem minmax(0, 1fr) 3.25rem;
    gap: 0.5rem;
    min-height: 2.75rem;
    padding: 0.5rem 0.75rem;
  }

  .browser-navigation {
    gap: 0.35rem;
  }

  .browser-nav-icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  .address-bar {
    padding: 0.4rem 0.625rem;
    font-size: 0.6875rem;
  }
}
</style>
