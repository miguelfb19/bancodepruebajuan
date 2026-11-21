import type { IconName } from "../assets/icons";
import { siteConfig, whatsappUrl, telUrl, mailtoUrl } from "../config/site";

export interface ContactItem {
  icon: IconName;
  title: string;
  description: string;
  link: string;
  /** Solo los enlaces a sitios externos abren en pestaña nueva. */
  external: boolean;
}

const { contact, social, address } = siteConfig;

export const contactInfo: ContactItem[] = [
  {
    icon: "whatsapp",
    title: "WhatsApp",
    description: contact.whatsappDisplay,
    link: whatsappUrl,
    external: true,
  },
  {
    icon: "facebook",
    title: "Facebook",
    description: social.facebookHandle,
    link: social.facebook,
    external: true,
  },
  {
    icon: "instagram",
    title: "Instagram",
    description: social.instagramHandle,
    link: social.instagram,
    external: true,
  },
  {
    icon: "phone",
    title: "Teléfono fijo",
    description: contact.landlineDisplay,
    link: telUrl,
    external: false,
  },
  {
    icon: "mail",
    title: "Email",
    description: contact.email,
    link: mailtoUrl,
    external: false,
  },
  {
    icon: "pin",
    title: "Dirección",
    description: `${address.street}\n${address.neighborhood}, ${address.city}`,
    link: address.mapsUrl,
    external: true,
  },
];
