import { defineCollection, z } from 'astro:content';

const lernfelder = defineCollection({
  type: 'content',
  schema: z.object({
    titel: z.string(),
    nummer: z.number(),
    kuerzel: z.string(),
    beschreibung: z.string(),
    lernziele: z.array(z.string()),
    stunden: z.number(),
    farbe: z.string().optional(),
  }),
});

export const collections = { lernfelder };
