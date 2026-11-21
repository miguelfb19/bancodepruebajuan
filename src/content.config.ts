import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: image(),
      imageAlt: z.string(),
      /** Fuente consultada para el artículo (se muestra como referencia, nofollow). */
      source: z.string().url().optional(),
      sourceName: z.string().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { blog };
