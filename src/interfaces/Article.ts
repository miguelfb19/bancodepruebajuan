import type { ImageMetadata } from "astro";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Article {
  slug: string;
  title: string;
  resume: string;
  content: AstroComponentFactory;
  ref: string;
  image: ImageMetadata;
}
