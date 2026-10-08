import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.string(),
    year: z.number(),
    brief: z.string(),
    concept: z.string(),
    deliverables: z.array(z.string()),
    heroImage: z.string(),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      span: z.enum(['full', 'half']).default('half')
    })),
    colorPalette: z.array(z.string()),
    credits: z.object({
      artDirection: z.string(),
      design: z.string(),
      development: z.string()
    }),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  projects: projectsCollection
};
