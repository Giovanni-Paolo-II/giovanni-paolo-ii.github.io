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

const reports = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/reports" }),
  schema: z.object({
    year: z.string().regex(/^\d{4}$/, "Anno deve essere nel formato YYYY"),
    filename: z.string().transform((val) => val.split("/").pop() ?? val)
  }),
});

export const collections = {
    notizie: posts,
    reports
};
