import type { ImageMetadata } from "astro";

export interface Service {
  slug: string;
  name: string;
  text: string;
  content: string;
  picture: ImageMetadata;
}
