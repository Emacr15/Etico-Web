import {
  BarChart3,
  Boxes,
  Clock3,
  LayoutDashboard,
  MonitorSmartphone,
  Package,
  Search,
  Settings,
  ShoppingCart,
  Store,
  Users,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Café americano",
    category: "Bebidas",
    price: "₡1.500",
  },
  {
    id: 2,
    name: "Sandwich especial",
    category: "Comidas",
    price: "₡2.800",
  },
  {
    id: 3,
    name: "Coca Cola 600ml",
    category: "Bebidas",
    price: "₡1.200",
  },
  {
    id: 4,
    name: "Pan integral",
    category: "Panadería",
    price: "₡950",
  },
];

export function EticoPosHeroPreview() {
  return (
    <div className="eticopos-real-preview">
      {/* SIDEBAR */}

      <aside className="eticopos-real-preview__sidebar">
        <div className="eticopos-real-preview__business">
          <div className="eticopos-real-preview__business-icon">
            <Store size={13} />
          </div>

          <div>
            <strong>Mi negocio</strong>
            <span>EticoPOS</span>
          </div>
        </div>

        <div className="eticopos-real-preview__online">
          <span />
          Online
        </div>

        <nav className="eticopos-real-preview__menu">
          <div>
            <LayoutDashboard size={13} />
            <span>Dashboard</span>
          </div>

          <div className="is-active">
            <ShoppingCart size={13} />
            <span>Punto de Venta</span>
          </div>

          <div>
            <Clock3 size={13} />
            <span>Turnos</span>
          </div>

          <div>
            <BarChart3 size={13} />
            <span>Ventas</span>
          </div>

          <div>
            <Package size={13} />
            <span>Productos</span>
          </div>

          <div>
            <Boxes size={13} />
            <span>Inventario</span>
          </div>

          <div>
            <Users size={13} />
            <span>Clientes</span>
          </div>

          <div>
            <MonitorSmartphone size={13} />
            <span>Dispositivos</span>
          </div>

          <div>
            <Settings size={13} />
            <span>Configuración</span>
          </div>
        </nav>

        <div className="eticopos-real-preview__user">
          <div>A</div>

          <span>
            <strong>admin</strong>
            Owner
          </span>
        </div>
      </aside>

      {/* POS */}

      <div className="eticopos-real-preview__workspace">
        <header className="eticopos-real-preview__topbar">
          <div className="eticopos-real-preview__business-name">
            <div>
              <Store size={12} />
            </div>

            <strong>Mi negocio</strong>
          </div>

          <div className="eticopos-real-preview__time">
            <strong>08:25 p. m.</strong>
            <span>07/08/2026</span>
          </div>
        </header>

        <main className="eticopos-real-preview__main">
          <section className="eticopos-real-preview__catalog">
            <div className="eticopos-real-preview__search">
              <Search size={13} />

              <span>
                Buscar producto...
              </span>
            </div>

            <div className="eticopos-real-preview__categories">
              <button className="is-active">
                Todos
              </button>

              <button>
                Bebidas
              </button>

              <button>
                General
              </button>

              <button>
                Panadería
              </button>
            </div>

            <div className="eticopos-real-preview__products">
              {products.map((product, index) => (
                <article
                  key={product.id}
                  className="eticopos-real-product"
                >
                  <div
                    className={`eticopos-real-product__image eticopos-real-product__image--${index + 1}`}
                  >
                    <Package size={23} />
                  </div>

                  <div className="eticopos-real-product__info">
                    <strong>
                      {product.name}
                    </strong>

                    <span>
                      {product.category}
                    </span>

                    <b>
                      {product.price}
                    </b>
                  </div>

                  <button>
                    Agregar
                  </button>

                  <div className="eticopos-real-product__status">
                    <span>
                      Disponible
                    </span>

                    <small>
                      Stock
                    </small>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SALE */}

          <aside className="eticopos-real-preview__sale">
            <div className="eticopos-real-preview__sale-title">
              <div>
                <ShoppingCart size={14} />

                <strong>
                  Venta actual
                </strong>
              </div>

              <small>
                FAC-000078
              </small>
            </div>

            <div className="eticopos-real-preview__client">
              <span>
                Cliente
              </span>

              <div>
                <div>
                  <Users size={12} />
                </div>

                <strong>
                  Sin cliente seleccionado
                </strong>
              </div>
            </div>

            <div className="eticopos-real-preview__empty-sale">
              <ShoppingCart size={22} />

              <span>
                Agrega productos para
                comenzar una venta
              </span>
            </div>

            <div className="eticopos-real-preview__sale-summary">
              <div className="eticopos-real-preview__article-count">
                <span>
                  Total de artículos
                </span>

                <strong>
                  0 artículos
                </strong>
              </div>

              <div>
                <span>
                  Subtotal
                </span>

                <span>
                  ₡0
                </span>
              </div>

              <div>
                <span>
                  Descuento
                </span>

                <span>
                  -₡0
                </span>
              </div>

              <div className="eticopos-real-preview__total">
                <strong>
                  Total
                </strong>

                <strong>
                  ₡0
                </strong>
              </div>

              <button className="eticopos-real-preview__charge">
                Cobrar

                <span>
                  ₡0
                </span>
              </button>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
