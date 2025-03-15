import { Header30 } from "@/components/home/Header30";
// import { Hero } from "@/components/Hero";
// import { HeroDefaults } from "@/constants/types/hero";
import { GodOfStocks } from "@/components/GodOfStocks";
import { WhoIsBernard } from "@/components/WhoIsBernard";
import { BernardDocumentary } from "@/components/BernardDocumentary";
import { ChanceVoightFounder } from "@/components/ChanceVoightFounder";
import { BernardQuotesTestimonial } from "@/components/BernardQuotesTestimonial";
import { MoreAboutBernard } from "@/components/MoreAboutBernard";
import { ContactCta } from "@/components/ContactCta";

export default function Home() {
  return (
    <>
      <Header30 />
      {/* <Hero {...HeroDefaults.home} /> */}
      <GodOfStocks />
      <WhoIsBernard />
      <BernardDocumentary />
      <ChanceVoightFounder />
      <BernardQuotesTestimonial />
      <MoreAboutBernard />
      <ContactCta />
    </>
  );
}
