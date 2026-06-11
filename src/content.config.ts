import { defineCollection} from "astro:content";
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/notizie" }),
  schema: ({ image: img }) => z.object({
    title: z.string(),
    date: z.date().transform((date) => {
      return {
        raw: date,
        formatted: date.toLocaleDateString("it-IT", {
          day: "numeric",
          month: "long",
          year: "numeric"
        }),
      };
    }),
    author: z.string().optional(),
    image: img().optional(),
  })
});

export const collections = {
  notizie: posts
};
