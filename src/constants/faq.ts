export interface FaqItem {
  question: string;
  answer: string;
}

/** Fuente única: alimenta el HTML visible y el schema FAQPage. Deben ser idénticos. */
export const faqs: FaqItem[] = [
  {
    question: "¿Qué es el enderezado de chasis?",
    answer:
      "El enderezado de chasis es un proceso técnico especializado que corrige deformaciones estructurales del vehículo causadas por accidentes, golpes o desgaste. Utilizamos equipos de precisión para restaurar las medidas originales del fabricante.",
  },
  {
    question: "¿Cuándo necesito un enderezado de chasis?",
    answer:
      "Necesitas enderezado cuando tu vehículo presenta: desgaste irregular de llantas, problemas de alineación recurrentes, vibración en el volante, o después de un accidente que haya afectado la estructura.",
  },
  {
    question: "¿Qué garantía ofrecen en sus servicios?",
    answer:
      "Ofrecemos garantía completa en todos nuestros trabajos. Si lo revisamos, lo garantizamos. Contamos con 15 años de experiencia respaldando cada reparación.",
  },
  {
    question: "¿Cuánto tiempo demora el proceso?",
    answer:
      "El tiempo varía según la complejidad del trabajo. La cotización y diagnóstico toma entre 10 y 30 minutos. La realización de banco de prueba está entre 1 y 4 horas, mientras que reparaciones mayores pueden tomar de 1 a 5 días. Te informamos el tiempo estimado en la evaluación inicial.",
  },
];
