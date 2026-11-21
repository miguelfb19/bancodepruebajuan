/** Relación etiqueta de blog → servicio recomendado (bloque "Aplica a tu caso"). */
export const tagToService: Record<string, string> = {
  alineación: "banco-de-prueba",
  llantas: "banco-de-prueba",
  desgaste: "banco-de-prueba",
  chasis: "enderezado-de-chasis",
  peritaje: "enderezado-de-chasis",
  "compra de usados": "enderezado-de-chasis",
  soldadura: "soldadura-estructural",
};

export const serviceForTags = (tags: readonly string[]) => {
  for (const t of tags) if (tagToService[t]) return tagToService[t];
  return "banco-de-prueba";
};
