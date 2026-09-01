import {
  ArrowUpRight,
  Bluetooth,
  CheckCircle2,
  Printer,
  Smartphone,
  Wifi,
} from "lucide-react";

import { Container } from "../layout/Container";

const devices = [
  { id: "printer-main", name: "Impresora principal", model: "Epson TM-T20", status: "En línea", online: true },
  { id: "sunmi", name: "SUNMI Printer", model: "Impresora integrada", status: "En línea", online: true },
  { id: "cashier-02", name: "Caja 02", model: "Terminal", status: "Desconectado", online: false },
];

export function ManagementSection() {
  return (
    <section className="management">
      <Container>
        <article className="management-card">
          <div className="management-card__info">
            <div className="management-card__icon"><Smartphone size={27} /></div>

            <div className="management-card__content">
              <div className="management-card__heading">
                <h2>Etico Management</h2>
                <span>App Android</span>
              </div>

              <h3>Administración de dispositivos</h3>
              <p>
                Administra impresoras y equipos vinculados a Etico desde una aplicación Android.
                Consulta su estado, conexión y configuración desde un solo lugar.
              </p>

              <div className="management-card__features">
                <span><Printer size={15} /> Impresoras</span>
                <span><Bluetooth size={15} /> Bluetooth</span>
                <span><Wifi size={15} /> Estado en línea</span>
              </div>

              <a href="/contacto">Explorar proyecto <ArrowUpRight size={16} /></a>
            </div>
          </div>

          <div className="management-app">
            <div className="management-app__phone">
              <div className="management-app__header">
                <div><small>ETICO MANAGEMENT</small><strong>Dispositivos</strong></div>
                <div className="management-app__avatar">E</div>
              </div>

              <div className="management-app__summary">
                <div><span>Dispositivos</span><strong>3</strong></div>
                <div><span>En línea</span><strong>2</strong></div>
              </div>

              <div className="management-app__devices">
                {devices.map((device) => (
                  <div key={device.id} className="device-row">
                    <div className="device-row__icon"><Printer size={18} /></div>
                    <div className="device-row__content">
                      <strong>{device.name}</strong>
                      <span>{device.model}</span>
                    </div>
                    <div className={device.online ? "device-row__status device-row__status--online" : "device-row__status"}>
                      {device.online && <CheckCircle2 size={13} />}
                      {device.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
