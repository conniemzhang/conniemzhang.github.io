import { defineCollection, z } from 'astro:content';

const builds = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false)
  })
});

export const collections = { builds };
