import { defineCollection, z } from 'astro:content';

const lernfelderSchema = z.object({
  titel: z.string(),
  nummer: z.number(),
  kuerzel: z.string(),
  beschreibung: z.string(),
  lernziele: z.array(z.string()),
  stunden: z.number(),
  farbe: z.string().optional(),
});

const lernfelder = defineCollection({
  type: 'content',
  schema: lernfelderSchema,
});

const fachwirt = defineCollection({
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

const meister = defineCollection({
  type: 'content',
  schema: z.object({
    titel: z.string(),
    nummer: z.number(),
    kuerzel: z.string(),
    beschreibung: z.string(),
    lernziele: z.array(z.string()),
    stunden: z.number(),
    farbe: z.string().optional(),
    teil: z.string().optional(),
  }),
});

export const collections = { lernfelder, fachwirt, meister };
