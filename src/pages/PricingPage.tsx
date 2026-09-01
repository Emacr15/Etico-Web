import { useSearchParams } from "react-router-dom";

import { Container } from "../components/layout/Container";
import { Footer } from "../components/layout/Footer/Footer";
import { Navbar } from "../components/layout/Navbar";

import { PricingCTA } from "../components/pricing/PricingCTA";
import { PricingHero } from "../components/pricing/PricingHero";
import { PricingSection } from "../components/pricing/PricingSection";
import { Pagination } from "../components/ui/Pagination";

import { pricingProducts } from "../config/pricing";

export function PricingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sections = [
    {
      eyebrow: "PUNTO DE VENTA",
      title: "Un EticoPOS para cada etapa de tu negocio.",
      description: "Empieza con las herramientas esenciales y agrega más control a medida que tu operación crece.",
      category: "pos",
    },
    {
      eyebrow: "FACTURACIÓN",
      title: "Facturación electrónica.",
      description: "Desde una API para integraciones hasta una aplicación completa para administrar comprobantes.",
      category: "billing",
    },
    {
      eyebrow: "DISPOSITIVOS",
      title: "Conecta el software con tu equipo.",
      description: "Aplicaciones y servicios para impresoras, terminales y dispositivos vinculados al ecosistema Etico.",
      category: "devices",
    },
    {
      eyebrow: "SOLUCIONES ESPECIALIZADAS",
      title: "Sistemas para diferentes tipos de negocio.",
      description: "Herramientas especializadas construidas alrededor de la operación real de cada industria.",
      category: "business",
    },
  ] as const;
  const sectionsPerPage = 2;
  const totalPages = Math.ceil(sections.length / sectionsPerPage);
  const requestedPage = Number(searchParams.get("pagina") ?? 1);
  const currentPage = Number.isInteger(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), totalPages)
    : 1;
  const visibleSections = sections.slice(
    (currentPage - 1) * sectionsPerPage,
    currentPage * sectionsPerPage,
  );

  const changePage = (page: number) => {
    setSearchParams(page === 1 ? {} : { pagina: String(page) });
    document.querySelector(".pricing-group")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Navbar />

      <main className="pricing-page">
        <PricingHero />

        {visibleSections.map((section) => (
          <PricingSection
            key={section.category}
            {...section}
            products={pricingProducts}
          />
        ))}

        <Container>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={changePage}
            label="Páginas de planes"
          />
        </Container>

        <PricingCTA />
      </main>

      <Footer />
    </>
  );
}
