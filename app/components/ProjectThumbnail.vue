<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  tags: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  width: {
    type: String,
  },
  priority: {
    type: Boolean,
    default: false,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <NuxtLink :to="props.path" class="project-card">
    <div class="project-thumb">
      <NuxtPicture
        :src="props.src"
        alt="Project thumbnail"
        img-class="project-thumb-img"
        :width="600"
        :height="500"
        format="webp"
        fit="cover"
        :loading="props.priority ? 'eager' : 'lazy'"
      />
    </div>
    <div
      class="project-info"
      :class="{ 'project-info--compact': props.compact }"
    >
      <div class="project-text">
        <span class="project-title">{{ props.title }}</span>
        <span class="project-rule">⁂</span>
        <span v-if="props.description" class="project-description">{{
          props.description
        }}</span>
      </div>
      <div v-if="props.tags?.length" class="project-tags">
        <span
          v-for="tag in props.tags.slice(0, 3)"
          :key="tag"
          class="project-tag"
        >
          {{ tag.toUpperCase() }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.project-card {
  display: block;
  position: relative;
}

.project-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s ease;
  z-index: -1;
}

.project-card:hover::after {
  opacity: 1;
  transition-duration: 0.075s;
}

.project-thumb {
  overflow: hidden;
  aspect-ratio: 12 / 9;
  border-radius: 1.5rem;
  position: relative;
}

.project-thumb::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 0 4px var(--color-neutral-300);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s ease;
  z-index: 2;
}

.project-card:hover .project-thumb::after {
  opacity: 1;
  transition-duration: 0.075s;
}

.project-thumb-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-thumb-img {
  transform: scale(1.05);
}

/* Mobile: text sits below the thumbnail */
.project-info {
  padding: 0.6rem 0.25rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Desktop: text overlays the thumbnail on hover */
@media (min-width: 768px) {
  .project-info {
    position: absolute;
    top: 67%;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 1.25rem 1.6rem;
    gap: 0.8rem;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      transparent 100%
    );
    border-radius: 0 0 1.5rem 1.5rem;
    align-items: center;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.3, 0, 0.5, 1);
  }

  .project-card:hover .project-info {
    opacity: 1;
  }

  .project-info--compact .project-title {
    font-size: clamp(1.31rem, 2.81vw, 1.75rem);
  }
}

/* Mobile: left-aligned, themed colors */
.project-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
}

.project-title {
  font-family: var(--font-sans);
  font-size: clamp(1.25rem, 5vw, 1.75rem);
  font-style: normal;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ui-text);
  text-align: left;
  /* letter-spacing: -0.03em; */
}

/* Desktop: centered, white, animated */
@media (min-width: 768px) {
  .project-text {
    align-items: center;
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.5s cubic-bezier(0.3, 0, 0.5, 1),
      transform 0.5s cubic-bezier(0.3, 0, 0.5, 1);
  }

  .project-card:hover .project-text {
    opacity: 1;
    transform: translateY(0);
  }

  .project-title {
    font-family: var(--font-sans);
    font-style: normal;
    font-size: clamp(1.1rem, 3.75vw, 2.1rem);
    color: white;
    text-align: center;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
  }
}

/* Mobile: tags hidden */
.project-tags {
  display: none;
}

@media (min-width: 768px) {
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.35rem;
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.5s cubic-bezier(0.3, 0, 0.5, 1),
      transform 0.5s cubic-bezier(0.3, 0, 0.5, 1);
  }

  .project-card:hover .project-tags {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-tag {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 0.18rem 0.58rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--color-mauve-900);
}

/* Mobile: rule hidden, description uses muted theme color */
.project-rule {
  display: none;
}

.project-description {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3;
  color: var(--ui-text-muted);
  text-align: left;
}

@media (min-width: 768px) {
  .project-description {
    display: none;
  }
}

@media (min-width: 768px) and (prefers-reduced-motion: reduce) {
  .project-info,
  .project-text,
  .project-tags {
    transition: none;
    opacity: 1;
    transform: none;
  }
}
</style>
