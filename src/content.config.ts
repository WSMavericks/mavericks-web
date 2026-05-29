import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const recursosCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recursos" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['Backtests', 'Microestructura', 'Validación', 'Portafolios']),
    oosValidated: z.boolean(),
  }),
});

export const collections = {
  'recursos': recursosCollection,
};
