import type { Service } from "../interfaces/Service";
import banco from "../assets/images/services/banco.avif";
import chasis from "../assets/images/services/chasis.avif";
import soldadura from "../assets/images/services/soldadura.avif";

export const services: Service[] = [
  {
    slug: "banco-de-prueba",
    name: "Banco de Prueba",
    text: `Restauración de ángulos, enderezado y cambio de partes para garantizar la alineación correcta de las ruedas del vehículo.

*No hacemos alineación, pero la garantizamos.`,
    content: `Nuestro banco de prueba especializado nos permite trabajar con precisión en la estructura del vehículo, restaurando sus medidas originales tras un impacto o desgaste. Utilizamos herramientas calibradas para asegurar que cada parte estructural recupere su forma y posición, garantizando así la alineación adecuada de las ruedas. Aunque no realizamos el servicio de alineación final, dejamos el vehículo listo y en condiciones óptimas para ello.`,
    picture: banco,
    seo: {
      title: "Banco de Prueba para Chasis en Pereira | Banco de Prueba Juan",
      description:
        "Banco de prueba en Pereira: diagnóstico de medidas del chasis, restauración de ángulos y corrección estructural para que la alineación de tu vehículo funcione y dure. 15 años de experiencia.",
      serviceType: "Diagnóstico y corrección de medidas de chasis (banco de prueba)",
    },
    whenNeeded: [
      "El vehículo sigue tirando hacia un lado o el volante queda torcido después de alinear.",
      "El alineador no logra llevar cámber, caster o convergencia al rango del fabricante.",
      "Una llanta se desgasta por un borde de forma acelerada aunque alinees y balancees.",
      "Hubo un golpe fuerte en una rueda, un hueco profundo o una colisión.",
      "Vas a comprar un usado y quieres saber si la estructura está dentro de medidas.",
    ],
    process: [
      "Recepción y revisión inicial del vehículo: síntomas, antecedentes y estado de suspensión.",
      "Montaje en el banco y medición de los puntos del chasis contra las especificaciones del fabricante.",
      "Diagnóstico claro: qué está fuera de medida, qué se corrige y qué partes requieren cambio.",
      "Restauración de ángulos y enderezado de los puntos afectados; cambio de partes cuando aplica.",
      "Verificación final de medidas y entrega del vehículo listo para alineación.",
    ],
    scope: {
      includes: [
        "Medición completa de la estructura en banco",
        "Corrección de ángulos y puntos de anclaje de suspensión",
        "Cambio de partes estructurales dañadas",
        "Garantía sobre el trabajo realizado",
      ],
      excludes: ["Alineación y balanceo final (la garantizamos, no la ejecutamos)", "Peritaje o certificación"],
    },
    duration: "Entre 1 y 4 horas según el daño. La cotización y el diagnóstico toman entre 10 y 30 minutos.",
    faqs: [
      {
        question: "¿Cuál es la diferencia entre banco de prueba y alineación?",
        answer:
          "La alineación ajusta los ángulos de las ruedas dentro del margen que permite la suspensión. El banco de prueba va un paso antes: mide y corrige la estructura del chasis y los puntos donde se ancla la suspensión. Si el chasis está fuera de medida, la alineación no se sostiene por más que se repita.",
      },
      {
        question: "¿Hacen la alineación después del banco de prueba?",
        answer:
          "No realizamos alineación, pero la garantizamos: entregamos el vehículo con la estructura dentro de medidas para que el taller de alineación de tu confianza pueda dejarlo en especificación sin problemas.",
      },
      {
        question: "¿Cuánto tarda un banco de prueba?",
        answer:
          "La cotización y el diagnóstico toman entre 10 y 30 minutos. La corrección en banco suele estar entre 1 y 4 horas dependiendo de la complejidad.",
      },
    ],
  },
  {
    slug: "enderezado-de-chasis",
    name: "Enderezado de Chasis",
    text: `Rectificación de medidas y estética de chasís por desfases en peritaje, colisiones o fallas mecánicas.

*No hacemos peritajes, solo reparamos fallas.`,
    content: `El servicio de enderezado de chasis está diseñado para corregir deformaciones estructurales que afectan tanto la funcionalidad como la estética del vehículo. Nos enfocamos en devolverle al chasís su forma y resistencia original mediante técnicas de tracción, medición y ajuste controlado. Este proceso es fundamental para garantizar la seguridad en carretera y evitar desgastes irregulares u otros problemas derivados de un chasís desalineado.`,
    picture: chasis,
    seo: {
      title: "Enderezado de Chasis en Pereira | Banco de Prueba Juan",
      description:
        "Enderezado de chasis en Pereira para vehículos livianos: corrección de deformaciones por colisión, desfases reportados en peritaje y fallas estructurales. Medición, tracción y ajuste controlado con garantía.",
      serviceType: "Enderezado y rectificación de chasis",
    },
    whenNeeded: [
      "El peritaje reportó desfases o reparaciones en chasis, bastidor o compactos.",
      "El vehículo sufrió una colisión frontal, trasera o lateral.",
      "Las puertas, el capó o el baúl no cierran parejo después de un golpe.",
      "Hay desgaste irregular de llantas o problemas de alineación recurrentes tras un accidente.",
      "Se escuchan ruidos o vibraciones nuevas en la estructura al pasar por irregularidades.",
    ],
    process: [
      "Inspección visual y en banco para ubicar los puntos deformados.",
      "Medición de la estructura contra las especificaciones del fabricante.",
      "Tracción controlada y ajuste progresivo hasta recuperar las medidas originales.",
      "Reparación o cambio de partes que no admiten recuperación; soldadura estructural si aplica.",
      "Verificación de medidas, acabado estético de la zona intervenida y entrega.",
    ],
    scope: {
      includes: [
        "Rectificación de medidas del chasis",
        "Recuperación estética de la zona intervenida",
        "Cambio de partes estructurales cuando no se pueden recuperar",
        "Garantía sobre el trabajo realizado",
      ],
      excludes: ["Peritaje o certificación del vehículo", "Latonería y pintura de carrocería exterior"],
    },
    duration: "Las reparaciones mayores pueden tomar de 1 a 5 días. Informamos el tiempo estimado en la evaluación inicial.",
    faqs: [
      {
        question: "¿Un chasis enderezado queda seguro?",
        answer:
          "Sí, siempre que se recupere dentro de las medidas del fabricante y las partes que no admiten recuperación se cambien. Por eso medimos antes y después, y garantizamos el trabajo.",
      },
      {
        question: "¿Hacen peritajes?",
        answer:
          "No. Reparamos las fallas estructurales que un peritaje detecta y dejamos el vehículo en condiciones de volver a presentarse, pero la revisión y el certificado los emite el centro de peritaje.",
      },
      {
        question: "¿Qué vehículos atienden?",
        answer:
          "Vehículos livianos: automóviles, camionetas y camperos. Si tienes dudas sobre tu modelo, escríbenos por WhatsApp con la marca y el tipo de daño.",
      },
    ],
  },
  {
    slug: "soldadura-estructural",
    name: "Soldadura Estructural",
    text: `Aplicación correcta de soldadura en grietas, desgarres y desgastes de partes estructurales del vehículo.`,
    content: `Nuestra soldadura estructural está enfocada en reforzar y reparar áreas críticas de la carrocería o chasís que presentan daños por fracturas, corrosión o impacto. Utilizamos técnicas adecuadas para cada tipo de material y zona afectada, garantizando una unión resistente, duradera y estéticamente correcta. Este servicio es esencial para preservar la integridad del vehículo y su capacidad de absorber impactos de forma segura.`,
    picture: soldadura,
    seo: {
      title: "Soldadura Estructural Automotriz en Pereira | Banco de Prueba Juan",
      description:
        "Soldadura estructural para chasis y carrocería en Pereira: reparación de grietas, desgarres y corrosión en puntos críticos con técnicas adecuadas a cada material. Unión resistente y garantizada.",
      serviceType: "Soldadura estructural automotriz",
    },
    whenNeeded: [
      "Grietas o fisuras en el chasis, largueros, torres de suspensión o puntos de anclaje.",
      "Desgarres por impacto o por esfuerzo repetido en zonas de carga.",
      "Corrosión avanzada que comprometió el espesor del metal en zonas estructurales.",
      "Soldaduras anteriores mal ejecutadas que volvieron a abrir.",
      "Refuerzo de zonas críticas tras un enderezado de chasis.",
    ],
    process: [
      "Localización del daño y evaluación del material y el espesor de la zona.",
      "Preparación: limpieza, retiro de material comprometido y, si aplica, fabricación de parches o refuerzos.",
      "Soldadura con la técnica adecuada para el tipo de acero y la zona (cordones, puntos, refuerzos).",
      "Control de la unión y protección anticorrosiva de la zona intervenida.",
      "Verificación de medidas cuando la soldadura se combina con enderezado.",
    ],
    scope: {
      includes: [
        "Reparación de grietas, desgarres y zonas corroídas en estructura",
        "Fabricación de refuerzos y parches cuando se requieren",
        "Protección anticorrosiva de la zona soldada",
        "Garantía sobre el trabajo realizado",
      ],
      excludes: ["Latonería estética de paneles exteriores", "Pintura de acabado"],
    },
    duration: "Desde pocas horas para reparaciones puntuales hasta varios días cuando se combina con enderezado. Lo definimos en la evaluación inicial.",
    faqs: [
      {
        question: "¿La soldadura estructural debilita el chasis?",
        answer:
          "Bien ejecutada, no. El riesgo está en soldaduras sin preparación, con aporte inadecuado o sin refuerzo. Por eso evaluamos el material, preparamos la zona y aplicamos la técnica que corresponde a cada acero.",
      },
      {
        question: "¿Se nota la reparación?",
        answer:
          "En zonas estructurales buscamos una unión resistente y un acabado limpio. La pintura de acabado exterior no hace parte del servicio, pero dejamos la zona protegida contra la corrosión.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
