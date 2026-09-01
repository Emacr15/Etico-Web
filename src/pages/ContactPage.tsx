import {
  ArrowRight,
  Camera,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

import { Container } from "../components/layout/Container";
import { Footer } from "../components/layout/Footer/Footer";
import { Navbar } from "../components/layout/Navbar";

export function ContactPage() {
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
                  <p>San José, Costa Rica</p>
                </article>

                <article className="contact-info-card contact-info-card--purple">
                  <div className="contact-info-card__glow" />
                  <div className="contact-info-card__icon"><Mail size={24} /></div>
                  <h3>Escríbenos</h3>
                  <a href="mailto:contacto@etico.cr">contacto@etico.cr</a>
                  <p>Te responderemos lo antes posible.</p>
                </article>

                <article className="contact-info-card contact-info-card--cyan">
                  <div className="contact-info-card__glow" />
                  <div className="contact-info-card__icon"><Phone size={24} /></div>
                  <h3>WhatsApp / Teléfono</h3>
                  <a href="#">+506 0000 0000</a>
                  <p>Atención para consultas comerciales.</p>
                </article>
              </aside>

              <section className="contact-form-panel">
                <form className="contact-form">
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
                    <input type="checkbox" required />
                    <span>Acepto los términos y condiciones</span>
                  </label>

                  <button type="submit" className="contact-form__submit">
                    Enviar mensaje
                    <ArrowRight size={17} />
                  </button>
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
