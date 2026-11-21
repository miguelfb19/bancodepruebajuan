/** Minutos de lectura estimados a partir del markdown crudo (200 palabras/min). */
export const readingTime = (body: string | undefined, wpm = 200) => {
  if (!body) return 1;
  const words = body
    .replace(/^---[\s\S]*?---/, "")
    .replace(/[#>*_`\[\]()!-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / wpm));
};

export const formatDate = (d: Date) => d.toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" });
