import { z, defineCollection } from 'astro:content';

const recursosCollection = defineCollection({
  type: 'content',
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
