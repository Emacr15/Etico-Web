import {
  ArrowRight,
  Camera,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { type FormEvent, useState } from "react";

import { Container } from "../components/layout/Container";
import { Footer } from "../components/layout/Footer/Footer";
import { Navbar } from "../components/layout/Navbar";

export function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("_honey")) return;

    setSubmissionStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@eticocr.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) throw new Error("No fue posible enviar el formulario");

      form.reset();
      setSubmissionStatus("success");
    } catch {
      setSubmissionStatus("error");
    }
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-page__hero">
          <Container>
            <div className="contact-page__hero-copy">
              <span>CONTACTO</span>

              <h1>
                Hablemos sobre
                <strong> tu negocio.</strong>
              </h1>

              <p>
                Cuéntanos qué necesitas y encontremos juntos la mejor
                solución tecnológica para tu operación.
              </p>
            </div>
          </Container>
        </section>

        <section className="contact-page__content">
          <Container>
            <div className="contact-page__layout">
              <aside className="contact-page__info">
                <article className="contact-info-card contact-info-card--blue">
                  <div className="contact-info-card__glow" />
                  <div className="contact-info-card__icon"><MapPin size={24} /></div>
                  <h3>Ubicación</h3>
                  <p>Uruca, San José, Costa Rica</p>
                </article>

                <article className="contact-info-card contact-info-card--purple">
                  <div className="contact-info-card__glow" />
                  <div className="contact-info-card__icon"><Mail size={24} /></div>
                  <h3>Escríbenos</h3>
                  <a href="mailto:info@eticocr.com">info@eticocr.com</a>
                  <p>Te responderemos lo antes posible.</p>
                </article>

                <article className="contact-info-card contact-info-card--cyan">
                  <div className="contact-info-card__glow" />
                  <div className="contact-info-card__icon"><Phone size={24} /></div>
                  <h3>WhatsApp / Teléfono</h3>
                  <a href="https://wa.me/50661312886" target="_blank" rel="noopener noreferrer">
                    +506 6131 2886
                  </a>
                  <p>Atención para consultas comerciales.</p>
                </article>
              </aside>

              <section className="contact-form-panel">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    className="contact-form__honeypot"
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <input type="hidden" name="_subject" value="Nuevo mensaje desde Etico" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_url" value="https://eticocr.com/contacto" />
                  <div className="contact-form__row">
                    <label className="contact-field">
                      <span>Nombre completo</span>
                      <input type="text" name="name" placeholder="Ingresa tu nombre completo" required />
                    </label>

                    <label className="contact-field">
                      <span>Teléfono / WhatsApp</span>
                      <input type="tel" name="phone" placeholder="Ingresa tu número de teléfono" />
                    </label>
                  </div>

                  <label className="contact-field">
                    <span>Correo electrónico</span>
                    <input type="email" name="email" placeholder="Ingresa tu correo electrónico" required />
                  </label>

                  <label className="contact-field">
                    <span>¿Qué solución te interesa?</span>
                    <select name="solution" defaultValue="">
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="eticopos">EticoPOS</option>
                      <option value="factura">Etico Factura</option>
                      <option value="device">Etico Device</option>
                      <option value="management">Etico Management</option>
                      <option value="hotel">EticoHotel</option>
                      <option value="restaurant">EticoPOS Restaurante</option>
                      <option value="workshop">EticoPOS Talleres</option>
                      <option value="custom">Desarrollo a medida</option>
                    </select>
                  </label>

                  <label className="contact-field contact-field--message">
                    <span>Cuéntanos sobre tu proyecto</span>
                    <textarea name="message" placeholder="Cuéntanos cómo podemos ayudarte..." maxLength={1000} required />
                  </label>

                  <label className="contact-form__terms">
                    <input type="checkbox" name="terms" value="Aceptados" required />
                    <span>Acepto los términos y condiciones</span>
                  </label>

                  <button
                    type="submit"
                    className="contact-form__submit"
                    disabled={submissionStatus === "sending"}
                  >
                    {submissionStatus === "sending" ? "Enviando..." : "Enviar mensaje"}
                    {submissionStatus === "sending"
                      ? <LoaderCircle className="contact-form__spinner" size={17} />
                      : <ArrowRight size={17} />}
                  </button>

                  <div className="contact-form__status" aria-live="polite">
                    {submissionStatus === "success" && (
                      <p className="contact-form__status--success">
                        Tu mensaje fue enviado. Te responderemos lo antes posible.
                      </p>
                    )}
                    {submissionStatus === "error" && (
                      <p className="contact-form__status--error">
                        No pudimos enviar el mensaje. Inténtalo nuevamente o escríbenos a info@eticocr.com.
                      </p>
                    )}
                  </div>
                </form>
              </section>
            </div>

            <div className="contact-social">
              <div>
                <strong>Síguenos en nuestras redes</strong>
                <p>Entérate de novedades, productos y actualizaciones de Etico.</p>
              </div>

              <div className="contact-social__links">
                <a href="#"><Camera size={18} /> Instagram</a>
                <a href="#"><Users size={18} /> Facebook</a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
