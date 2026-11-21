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
    question: "¿Cuál es la diferencia entre banco de prueba y alineación?",
    answer:
      "La alineación ajusta los ángulos de las ruedas dentro del margen que permite la suspensión. El banco de prueba mide y corrige la estructura del chasis y los puntos de anclaje de la suspensión. Si el chasis está fuera de medida, la alineación no se sostiene. Nosotros hacemos el banco de prueba; la alineación final la hace el taller de tu confianza y nosotros la garantizamos.",
  },
  {
    question: "¿Hacen peritajes?",
    answer:
      "No. Reparamos las fallas estructurales que un peritaje detecta y dejamos el vehículo en condiciones de volver a presentarse, pero la revisión y el certificado los emite el centro de peritaje.",
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
  {
    question: "¿Qué tipo de vehículos atienden?",
    answer:
      "Vehículos livianos: automóviles, camionetas y camperos. Si tienes dudas sobre tu modelo, escríbenos por WhatsApp con la marca y el tipo de daño.",
  },
  {
    question: "¿Necesito agendar cita?",
    answer:
      "Recomendamos agendar por WhatsApp al +57 314 885 1367 para asignarte un horario y atenderte a la hora programada. Atendemos de lunes a viernes de 8:00 a.m. a 12:00 p.m. y de 2:00 a 6:00 p.m., y los sábados de 8:00 a.m. a 12:00 p.m.",
  },
  {
    question: "¿Dónde están ubicados y a qué zonas atienden?",
    answer:
      "Estamos en la Carrera 14 (Av. Paralela) #27-04, barrio Nuevo México, Pereira. Atendemos clientes de Pereira, Dosquebradas, Santa Rosa de Cabal, La Virginia, Cartago y en general del Eje Cafetero.",
  },
];
