/**
 * Fuente única de verdad para los datos del negocio (NAP: nombre, dirección,
 * teléfono), URLs y horarios. Todo schema, footer, contacto y metadato debe
 * leer de aquí; nunca duplicar estos valores en componentes.
 */

export const SITE_URL = "https://www.bancodepruebajuan.com";

/** Token de verificación de Google Search Console (propiedad prefijo URL). */
export const GOOGLE_SITE_VERIFICATION = "O_mhpoZUcc9THXghCE2JjnuGppuJOC5GPNXYu9ccLQ4";

export const siteConfig = {
  name: "Banco de Prueba Juan",
  legalName: "Banco de Prueba Juan",
  url: SITE_URL,
  locale: "es_CO",
  lang: "es",
  foundingYear: "2010",
  yearsOfExperience: 15,
  slogan: "Transparencia en servicio y precios - Si lo revisamos, lo garantizamos",
  description:
    "Especialistas en enderezado de chasis, banco de prueba y soldadura estructural en Pereira. 15 años de experiencia garantizando la seguridad de tu vehículo.",
  defaultTitle:
    "Banco de Prueba Juan - Enderezado de Chasis y Soldadura Estructural en Pereira",
  defaultImage: "/images/portada/portada.avif",
  logo: "/images/logo/logox500.avif",

  contact: {
    whatsapp: "573148851367",
    whatsappDisplay: "+57 314 885 1367",
    landline: "6063302804",
    landlineDisplay: "606 330 2804",
    email: "bancodepruebajuan@gmail.com",
  },

  address: {
    street: "CRA 14 (Av. Paralela) #27-04",
    neighborhood: "Nuevo México",
    city: "Pereira",
    region: "Risaralda",
    regionCode: "CO-RIS",
    postalCode: "660003",
    country: "CO",
    mapsUrl: "https://maps.app.goo.gl/utcaUDkT4vEybPHKA",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7951.540087981641!2d-75.70173484484779!3d4.809501935368536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388744c831126b%3A0x9cd3a4c8d013ea3!2sBanco%20de%20Prueba%20JUAN!5e0!3m2!1ses!2sco!4v1750972728522!5m2!1ses!2sco",
  },

  geo: {
    latitude: 4.8095,
    longitude: -75.6907,
    serviceRadiusMeters: 50000,
  },

  /** Ciudades del área de servicio (eje cafetero). */
  areaServed: ["Pereira", "Dosquebradas", "Santa Rosa de Cabal", "La Virginia", "Cartago", "Armenia", "Manizales"],

  /** Horarios en formato schema.org (24h). */
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "12:00" },
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "14:00", closes: "18:00" },
    { days: ["Saturday"], opens: "08:00", closes: "12:00" },
  ],
  /** Horarios legibles para la UI. */
  openingHoursDisplay: [
    { label: "Lunes a viernes", value: "8:00 a.m. a 12:00 p.m. y 2:00 a 6:00 p.m." },
    { label: "Sábado", value: "8:00 a.m. a 12:00 p.m." },
    { label: "Domingo", value: "Cerrado" },
  ],

  social: {
    facebook: "https://www.facebook.com/BancodepruebaPereira",
    facebookHandle: "Banco de Prueba JUAN",
    instagram: "https://www.instagram.com/bancodepruebajuan",
    instagramHandle: "@bancodepruebajuan",
    /** Perfil de Google Maps (reseñas). */
    googleReviews: "https://maps.app.goo.gl/utcaUDkT4vEybPHKA",
  },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;
export const telUrl = `tel:+57${siteConfig.contact.landline}`;
export const mailtoUrl = `mailto:${siteConfig.contact.email}`;

/** Construye una URL absoluta canónica a partir de un pathname. */
export const absoluteUrl = (path: string) => new URL(path, SITE_URL).href;
