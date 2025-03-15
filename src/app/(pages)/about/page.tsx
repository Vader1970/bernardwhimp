import { HeroAbout } from "@/components/HeroAbout";
import { GlimpseGeniusBernard } from "@/components/GlimpseGeniusBernard";
import { ExperienceExpertise } from "@/components/ExperienceExpertise";
import { InvestmentPhilosophy } from "@/components/InvestmentPhilosophy";
import { TraitsApproach } from "@/components/TraitsApproach";
import { ContactCta } from "@/components/ContactCta";

export default function About() {
  return (
    <>
      <HeroAbout />
      <GlimpseGeniusBernard />
      <ExperienceExpertise />
      <InvestmentPhilosophy />
      <TraitsApproach />
      <ContactCta />
    </>
  );
}
