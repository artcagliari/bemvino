import type { Metadata } from "next";
import { BemVinoSite } from "@/components/bem-vino-site";

export const metadata: Metadata = {
  title: "Privacidade | Bem Vino Boutique Travel",
  description: "Como a Bem Vino trata as informações enviadas pelo planejador de viagens.",
};

export default function PrivacyPage() {
  return <BemVinoSite route="/privacidade" />;
}
