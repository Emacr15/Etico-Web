import { Footer } from "../components/layout/Footer/Footer";
import { Navbar } from "../components/layout/Navbar";

import { PricingCTA } from "../components/pricing/PricingCTA";
import { PricingHero } from "../components/pricing/PricingHero";
import { PricingSection } from "../components/pricing/PricingSection";

import { pricingProducts } from "../config/pricing";

export function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="pricing-page">
        <PricingHero />

        <PricingSection
          eyebrow="PUNTO DE VENTA"
          title="Un EticoPOS para cada etapa de tu negocio."
          description="Empieza con las herramientas esenciales y agrega más control a medida que tu operación crece."
          category="pos"
          products={pricingProducts}
        />

        <PricingSection
          eyebrow="FACTURACIÓN"
          title="Facturación electrónica."
          description="Desde una API para integraciones hasta una aplicación completa para administrar comprobantes."
          category="billing"
          products={pricingProducts}
        />

        <PricingSection
          eyebrow="DISPOSITIVOS"
          title="Conecta el software con tu equipo."
          description="Aplicaciones y servicios para impresoras, terminales y dispositivos vinculados al ecosistema Etico."
          category="devices"
          products={pricingProducts}
        />

        <PricingSection
          eyebrow="SOLUCIONES ESPECIALIZADAS"
          title="Sistemas para diferentes tipos de negocio."
          description="Herramientas especializadas construidas alrededor de la operación real de cada industria."
          category="business"
          products={pricingProducts}
        />

        <PricingCTA />
      </main>

      <Footer />
    </>
  );
}
