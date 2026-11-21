import type { ImageMetadata } from "astro";
import type { FaqItem } from "../constants/faq";

export interface Service {
  slug: string;
  name: string;
  /** Resumen corto para tarjetas (admite saltos de línea). */
  text: string;
  /** Párrafo principal de la landing. */
  content: string;
  picture: ImageMetadata;
  /** SEO de la landing /servicios/[slug]. */
  seo: {
    title: string;
    description: string;
    /** Tipo de servicio para schema.org (serviceType). */
    serviceType: string;
  };
  /** Síntomas o situaciones en las que aplica el servicio. */
  whenNeeded: string[];
  /** Pasos del proceso en el taller. */
  process: string[];
  /** Qué incluye / qué no incluye, para fijar expectativas. */
  scope: { includes: string[]; excludes: string[] };
  /** Tiempo estimado comunicado al cliente. */
  duration: string;
  faqs: FaqItem[];
}
