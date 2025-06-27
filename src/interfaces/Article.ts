import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Article {
    title: string;
    resume: string;
    content: AstroComponentFactory;
    ref: string;
    image: string;
}