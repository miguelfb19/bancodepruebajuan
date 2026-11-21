import type { ElementType } from "react";
import { Mail, Whatsapp, Facebook, Instagram, Pin, Phone } from "../assets/icons";
import { siteConfig, whatsappUrl, telUrl, mailtoUrl } from "../config/site";

export interface ContactItem {
  icon: ElementType;
  title: string;
  description: string;
  link: string;
  /** Solo los enlaces a sitios externos abren en pestaña nueva. */
  external: boolean;
}

const { contact, social, address } = siteConfig;

export const contactInfo: ContactItem[] = [
  {
    icon: Whatsapp,
    title: "WhatsApp",
    description: contact.whatsappDisplay,
    link: whatsappUrl,
    external: true,
  },
  {
    icon: Facebook,
    title: "Facebook",
    description: social.facebookHandle,
    link: social.facebook,
    external: true,
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: social.instagramHandle,
    link: social.instagram,
    external: true,
  },
  {
    icon: Phone,
    title: "Teléfono fijo",
    description: contact.landlineDisplay,
    link: telUrl,
    external: false,
  },
  {
    icon: Mail,
    title: "Email",
    description: contact.email,
    link: mailtoUrl,
    external: false,
  },
  {
    icon: Pin,
    title: "Dirección",
    description: `${address.street}\n${address.neighborhood}, ${address.city}`,
    link: address.mapsUrl,
    external: true,
  },
];
