import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const projectSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string().optional(),
  client: z.string().optional(),
  tools: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  externalLinks: z.array(z.object({
    label: z.string(),
    url: z.string(),
  })).optional(),
  images: z.array(z.object({
    src: z.string(),
    alt: z.string(),
  })).optional(),
  thumbnail: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md',
    }),
    animation: defineCollection({
      type: 'page',
      source: 'animation/*.md',
      schema: projectSchema,
    }),
    software: defineCollection({
      type: 'page',
      source: 'software/*.md',
      schema: projectSchema,
    }),
  },
})
