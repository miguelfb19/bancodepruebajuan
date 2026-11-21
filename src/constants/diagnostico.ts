/**
 * Pre-diagnóstico: síntomas → servicio recomendado. Sin backend; se evalúa en el cliente.
 * Prioridad cuando hay varios síntomas: soldadura > enderezado > banco de prueba.
 */
export type ServiceSlug = "banco-de-prueba" | "enderezado-de-chasis" | "soldadura-estructural";

export interface Symptom {
  id: string;
  label: string;
  /** Texto en primera persona para el mensaje de WhatsApp. */
  message: string;
  service: ServiceSlug;
}

export interface HistoryOption {
  id: string;
  label: string;
  message: string;
}

export const symptoms: Symptom[] = [
  { id: "tira", label: "Tira hacia un lado o el volante queda torcido", message: "tira hacia un lado", service: "banco-de-prueba" },
  { id: "desgaste", label: "Una llanta se desgasta por un solo borde", message: "una llanta se desgasta por un borde", service: "banco-de-prueba" },
  { id: "no-ajusta", label: "En la alineadora no \"da el ajuste\"", message: "en la alineadora no da el ajuste", service: "banco-de-prueba" },
  { id: "choque", label: "Tuvo un choque o un golpe fuerte en una rueda", message: "tuvo un choque o golpe fuerte", service: "enderezado-de-chasis" },
  { id: "peritaje", label: "El peritaje reportó fallas en chasis o estructura", message: "el peritaje reportó fallas en el chasis", service: "enderezado-de-chasis" },
  { id: "puertas", label: "Puertas, capó o baúl no cierran parejo", message: "las puertas o el capó no cierran parejo", service: "enderezado-de-chasis" },
  { id: "grieta", label: "Grieta, desgarre o corrosión en la estructura", message: "tiene una grieta o corrosión en la estructura", service: "soldadura-estructural" },
  { id: "ruido", label: "Ruido o vibración nueva al pasar huecos", message: "suena o vibra al pasar huecos", service: "banco-de-prueba" },
];

export const history: HistoryOption[] = [
  { id: "alineo", label: "Ya alineé y volvió a fallar", message: "ya lo alineé y volvió a fallar" },
  { id: "llantas", label: "Cambié llantas o suspensión y sigue igual", message: "cambié llantas o suspensión y sigue igual" },
  { id: "nada", label: "Todavía no he hecho nada", message: "todavía no le he hecho nada" },
  { id: "usado", label: "Lo voy a comprar y quiero revisarlo", message: "lo voy a comprar y quiero revisar la estructura" },
];

export const servicePriority: ServiceSlug[] = ["soldadura-estructural", "enderezado-de-chasis", "banco-de-prueba"];

/** Explicación corta por servicio recomendado. */
export const reasons: Record<ServiceSlug, string> = {
  "banco-de-prueba":
    "Estos síntomas apuntan a que la estructura o los puntos de anclaje de la suspensión están fuera de medida. Alinear otra vez no lo corrige: primero hay que medir y restaurar el chasis en banco.",
  "enderezado-de-chasis":
    "Un golpe o un reporte de peritaje indica deformación estructural. Se mide el chasis, se endereza con tracción controlada y se cambian las partes que no se recuperan.",
  "soldadura-estructural":
    "Una grieta o corrosión en zona estructural compromete la resistencia del vehículo. Se prepara la zona, se suelda con la técnica adecuada al material y se protege contra la corrosión.",
};
