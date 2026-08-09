import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import { Container } from "../layout/Container";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <div className="contact-section__layout">
          <div className="contact-info">
            <span className="contact-info__eyebrow">CONTACTO</span>

            <h2>
              Hablemos sobre
              <strong> tu próximo proyecto.</strong>
            </h2>

            <p className="contact-info__description">
              Cuéntanos tus ideas y objetivos. Estamos aquí para ayudarte a
              encontrar la mejor solución para tu negocio.
            </p>

            <div className="contact-info__items">
              <a
                href="mailto:contacto@etico.cr"
                className="contact-info__item"
              >
                <div className="contact-info__icon">
                  <Mail size={18} />
                </div>

                <div>
                  <span>Correo electrónico</span>
                  <strong>contacto@etico.cr</strong>
                </div>
              </a>

              <a href="#" className="contact-info__item">
                <div className="contact-info__icon">
                  <MessageCircle size={18} />
                </div>

                <div>
                  <span>WhatsApp / Teléfono</span>
                  <strong>+506 1234 5678</strong>
                </div>
              </a>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <MapPin size={18} />
                </div>

                <div>
                  <span>Ubicación</span>
                  <strong>Costa Rica</strong>
                </div>
              </div>
            </div>

            <div className="contact-info__socials">
              <a href="#" aria-label="Instagram">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a href="#" aria-label="Facebook">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V4.2c-.8-.1-1.8-.2-3.1-.2C10.8 4 9 5.9 9 9.3V12H6v4h3v8h4v-8h3.3l.7-4H13V9.7c0-1.2.3-1.7 1-1.7Z" />
                </svg>
              </a>
            </div>

            <div className="contact-info__dots" aria-hidden="true" />
          </div>

          <div className="contact-form-card">
            <div className="contact-form-card__header">
              <h3>Envíanos un mensaje</h3>
              <p>Completa el formulario y te responderemos a la brevedad.</p>
            </div>

            <form className="contact-form">
              <div className="contact-form__row">
                <label className="contact-field">
                  <span>Nombre completo *</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>Correo electrónico *</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    required
                  />
                </label>
              </div>

              <label className="contact-field">
                <span>Empresa</span>
                <input
                  type="text"
                  name="company"
                  placeholder="Nombre de tu empresa"
                />
              </label>

              <div className="contact-form__row">
                <label className="contact-field">
                  <span>Teléfono / WhatsApp</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+506 1234 5678"
                  />
                </label>

                <label className="contact-field">
                  <span>¿Qué tipo de proyecto tienes en mente?</span>
                  <select name="projectType" defaultValue="">
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="pos">Punto de venta</option>
                    <option value="restaurant">EticoPOS Restaurante</option>
                    <option value="hotel">Gestión hotelera</option>
                    <option value="workshop">Talleres</option>
                    <option value="billing">Facturación electrónica</option>
                    <option value="devices">
                      Dispositivos e integraciones
                    </option>
                    <option value="custom">Desarrollo a medida</option>
                    <option value="other">Otro</option>
                  </select>
                </label>
              </div>

              <label className="contact-field contact-field--textarea">
                <span>Cuéntanos más sobre tu proyecto *</span>
                <textarea
                  name="message"
                  placeholder="Cuéntanos sobre tu idea, objetivos y cómo podemos ayudarte..."
                  maxLength={500}
                  required
                />
                <small>0/500</small>
              </label>

              <div className="contact-form__footer">
                <span className="contact-form__privacy">
                  <ShieldCheck size={15} />
                  Tu información está segura y no será compartida.
                </span>

                <button type="submit" className="contact-form__submit">
                  Hablemos de tu proyecto
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
