import CareInAction from "@/components/CareInAction";
import ConsultationDock from "@/components/ConsultationDock";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="bl-page">
      <Header />
      <main>
        <Hero />
        <Services />
        <CareInAction />
        <Enquiry />
      </main>
      <Footer />
      <ConsultationDock />
    </div>
  );
}
