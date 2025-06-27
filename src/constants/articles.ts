import type { Article } from "../interfaces/Article";
import Alineacion from "./articles-content/alineacion.md";
import DesgasteLlantas from "./articles-content/desgaste_llantas.md";
import Peritaje from "./articles-content/peritaje.md";
import Recomendaciones from "./articles-content/recomendaciones.md";

export const articles: Article[] = [
  {
    title: "¿Para qué sirve la alineación?",
    resume:
      "La alineación garantiza que tus llantas estén en el ángulo correcto para evitar desgaste irregular, ahorrar combustible y mejorar la seguridad. Se recomienda cada 10.000 km o cuando el vehículo se siente inestable. ¡Una alineación a tiempo alarga la vida de tu carro y tus llantas!",
    content: Alineacion,
    ref: "https://us.as.com/autos/tips/alineamiento-de-auto-que-es-cuando-hacerlo-y-sus-beneficios/",
    image: "/images/blog/alineacion.avif",
  },
  {
    title: "¿Para qué sirve el peritaje vehicular?",
    resume:
      "El peritaje vehicular es una inspección completa que revela el estado real de un vehículo. Previene fraudes, detecta fallas ocultas y asegura una compra segura y legal. Ideal antes de adquirir un carro usado.",
    content: Peritaje,
    ref: "https://elperito.com/guia-completa-como-realizar-una-inspeccion-de-vehiculo-usado-antes-de-comprar-en-colombia/",
    image: "/images/blog/peritaje.avif",
  },
  {
    title: "¿Por qué se desgastan mal las llantas?",
    resume:
      "El desgaste irregular de las llantas ocurre por mala alineación, presión incorrecta, fallas en la suspensión o falta de rotación. Esto reduce la seguridad, acorta la vida útil del neumático y eleva los costos. La clave es revisar la presión, alinear, balancear y rotar las llantas periódicamente.",
    content:  DesgasteLlantas,
    ref: "https://centroamerica.michelin.com/auto/consejos/cambiar-llantas/desgaste-llantas",
    image: "/images/blog/desgaste_llanta.avif",
  },
  {
    title: "Sitios recomendados para alineación en Pereira",
    resume:
      "En Pereira, los talleres mejor calificados en 2025 para alineación y balanceo con tecnología avanzada, atención profesional y garantías.",
    content:  Recomendaciones,
    ref: "https://www.c3carecarcenter.com/blog/alineacion-y-balanceo-en-pereira-precios-y-servicios-destacados/",
    image: "/images/blog/recomendaciones.avif",
  },
];
