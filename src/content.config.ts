import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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
  loader: glob({ pattern: '**/*.md', base: './src/content/lernfelder' }),
  schema: lernfelderSchema,
});

const fachwirt = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/fachwirt' }),
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
  loader: glob({ pattern: '**/*.md', base: './src/content/meister' }),
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
