const app = document.querySelector("#app");

const brand = (dark = false) => `
  <a class="brand-mark" href="#home" aria-label="Ir al inicio de Web Total POS">
    <span class="brand-icon"></span>
    <span>Web<br><span style="color:var(--orange)">Total POS</span></span>
  </a>`;

function shell(active, content) {
  return `
    <div class="demo-bar">
      <strong>PROTOTIPO · DATOS DEMO</strong>
      <span>Explora las vistas de Web Total POS</span>
      <nav class="demo-switcher" aria-label="Cambiar producto">
        <a class="${active === "home" ? "active" : ""}" href="#home" ${active === "home" ? 'aria-current="page"' : ""}>Inicio</a>
        ${["erp", "pos", "kds"].map((item) => `<a class="${active === item ? "active" : ""}" href="#${item}" ${active === item ? 'aria-current="page"' : ""}>${item.toUpperCase()}</a>`).join("")}
      </nav>
    </div>${content}`;
}

function home() {
  const products = [
    {
      id: "pos",
      label: "POS",
      title: "Opera tu salón",
      description: "Administra mesas, comandas y cuentas desde una experiencia táctil y ágil.",
      icon: "⌁",
      meta: "Mesas · Pedidos · Cobro",
    },
    {
      id: "kds",
      label: "KDS",
      title: "Coordina tu cocina",
      description: "Mantén las comandas visibles, priorizadas y listas para entregar.",
      icon: "▦",
      meta: "Comandas · Preparando · Listo",
    },
    {
      id: "erp",
      label: "ERP",
      title: "Controla tu negocio",
      description: "Consulta ventas, inventario y operación para tomar mejores decisiones.",
      icon: "▥",
      meta: "Ventas · Inventario · Reportes",
    },
  ];

  return shell("home", `
    <section class="view home">
      <div class="home-orbit home-orbit-one" aria-hidden="true"></div>
      <div class="home-orbit home-orbit-two" aria-hidden="true"></div>
      <div class="home-main">
        <header class="home-header">
          ${brand()}
          <span class="home-status"><i></i> Entorno demostrativo</span>
        </header>
        <section class="home-hero" aria-labelledby="home-title">
          <div class="home-hero-copy">
            <p class="home-eyebrow">CENTRO DE OPERACIONES</p>
            <h1 id="home-title">Todo tu restaurante conectado, <span>todo bajo control.</span></h1>
            <p class="home-lead">Una sola plataforma para coordinar el salón, la cocina y la administración de tu restaurante.</p>
            <p class="home-note">Selecciona una experiencia para explorar el prototipo.</p>
          </div>
          <div class="home-hero-mark" aria-hidden="true">
            <span class="home-ring home-ring-orange"></span>
            <span class="home-ring home-ring-charcoal"></span>
            <span class="home-ring home-ring-light"></span>
            <span class="home-ring-dot"></span>
          </div>
        </section>
        <section class="home-products" aria-labelledby="products-title">
          <div class="home-section-heading">
            <div>
              <p class="home-eyebrow">ELIGE TU ESPACIO</p>
              <h2 id="products-title">Tres vistas. Una operación.</h2>
            </div>
            <span class="home-section-count">03 EXPERIENCIAS</span>
          </div>
          <div class="home-grid">
            ${products.map((product, index) => `
              <a class="product-card product-${product.id}" href="#${product.id}">
                <div class="product-card-top">
                  <span class="product-index">0${index + 1}</span>
                  <span class="product-icon" aria-hidden="true">${product.icon}</span>
                </div>
                <div class="product-card-body">
                  <p class="product-label">${product.label}</p>
                  <h3>${product.title}</h3>
                  <p>${product.description}</p>
                </div>
                <div class="product-card-footer">
                  <span>${product.meta}</span>
                  <span class="product-arrow" aria-hidden="true">↗</span>
                </div>
              </a>`).join("")}
          </div>
        </section>
        <footer class="home-footer">
          <span>Web Total POS</span>
          <span>Datos ficticios · Sin operaciones reales</span>
        </footer>
      </div>
    </section>`);
}

function erp() {
  return shell("erp", `
    <section class="view erp">
      <aside class="erp-sidebar">
        ${brand()}
        <span class="side-icon active">⌂</span><span class="side-icon">⌁</span><span class="side-icon">◇</span><span class="side-icon">🛒</span><span class="side-icon">♧</span><span class="side-icon">▥</span>
        <span class="side-icon side-bottom">⚙</span>
      </aside>
      <div class="erp-main">
        <header class="erp-header">
          <div><h1>Panel administrativo</h1><p class="muted">Visión general del negocio</p></div>
          <div class="erp-controls"><button class="select">▣ &nbsp; Sucursal Centro　⌄</button><button class="select">▣ &nbsp; Hoy　⌄</button><button class="select">🟠 &nbsp; Ana López　⌄</button></div>
        </header>
        <p class="sync">Datos DEMO · última sincronización 19:12</p>
        <section class="kpis">
          <article class="card kpi">Ventas de hoy<strong>$24,850</strong><small>↗ +12.4% &nbsp;vs. ayer</small></article>
          <article class="card kpi">Órdenes<strong>128</strong><small>↗ +8.5% &nbsp;vs. ayer</small></article>
          <article class="card kpi">Ticket promedio<strong>$194</strong><small>↗ +3.1% &nbsp;vs. ayer</small></article>
          <article class="card kpi">Mesas activas<strong>9</strong><small>de 12 mesas</small></article>
        </section>
        <section class="erp-grid">
          <article class="card panel"><h2>▥ &nbsp; Ventas de la semana</h2><div class="bars">${["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"].map((day, i) => `<div class="bar" style="height:${55 + i * 8}%"><span>${day}</span></div>`).join("")}</div></article>
          <article class="card panel"><h2>△ &nbsp; Alertas de inventario</h2>${["🍅 Tomate|Stock actual: 4 kg|Bajo stock","🧀 Queso|Stock actual: 10 kg|Reordenar","💧 Agua mineral|Stock actual: 8 unidades|8 unidades"].map(x => { const [a,b,c] = x.split("|"); return `<div class="alert-row"><div><b>${a}</b><br><small class="muted">${b}</small></div><span class="pill">${c}</span></div>`; }).join("")}</article>
          <article class="card panel"><h2>☆ &nbsp; Productos más vendidos</h2><table class="table"><thead><tr><th>#</th><th>Producto</th><th>Unidades</th><th>Ventas</th></tr></thead><tbody><tr><td>1</td><td>🍔 Hamburguesa Clásica</td><td>36</td><td>$7,920</td></tr><tr><td>2</td><td>🌮 Tacos al Pastor</td><td>28</td><td>$5,320</td></tr><tr><td>3</td><td>🍕 Pizza Pepperoni</td><td>18</td><td>$4,500</td></tr></tbody></table></article>
          <article class="card panel"><h2>◎ &nbsp; Operación en tiempo real</h2><div class="live-row green">⚑ Mesas libres <b>3</b></div><div class="live-row yellow">♧ Mesas ocupadas <b>6</b></div><div class="live-row blue">▣ Mesas reservadas <b>2</b></div><div class="live-row red">▤ Mesas por cobrar <b>1</b></div></article>
        </section>
      </div>
    </section>`);
}

const posTables = [
  { id: "01", status: "free", statusLabel: "Libre", context: "Disponible para recibir", action: "occupy", actionLabel: "Abrir mesa" },
  { id: "02", status: "occupied", statusLabel: "Ocupada", context: "4 personas · Ana López", action: "ticket", actionLabel: "Ver comanda", order: { id: "CMD-000185", people: 4, waiter: "Ana López", items: [{ name: "2 × Tacos al pastor", note: "Sin cebolla · nota a cocina", total: "$240.00" }, { name: "1 × Agua mineral", note: "", total: "$35.00" }], note: "Enviar tacos a cocina caliente", total: "$275.00" } },
  { id: "03", status: "free", statusLabel: "Libre", context: "Disponible para recibir", action: "occupy", actionLabel: "Abrir mesa" },
  { id: "04", status: "occupied", statusLabel: "Ocupada", context: "2 personas · Luis García", action: "ticket", actionLabel: "Ver comanda", order: { id: "CMD-000187", people: 2, waiter: "Luis García", items: [{ name: "1 × Ensalada César", note: "Aderezo aparte", total: "$165.00" }, { name: "2 × Limonada", note: "", total: "$90.00" }], note: "Cliente solicita cuenta al terminar", total: "$255.00" } },
  { id: "05", status: "reserved", statusLabel: "Reservada", context: "19:30 · 6 personas", action: "reservation", actionLabel: "Ver reserva", reservation: { time: "19:30", people: 6, guest: "Mariana Ruiz" } },
  { id: "06", status: "free", statusLabel: "Libre", context: "Disponible para recibir", action: "occupy", actionLabel: "Abrir mesa" },
  { id: "07", status: "occupied", statusLabel: "Ocupada", context: "3 personas · Carlos Méndez", action: "ticket", actionLabel: "Ver comanda", order: { id: "CMD-000189", people: 3, waiter: "Carlos Méndez", items: [{ name: "3 × Tacos al pastor", note: "Salsa aparte", total: "$360.00" }], note: "Comanda en preparación", total: "$360.00" } },
  { id: "08", status: "due", statusLabel: "Por cobrar", context: "5 personas · cuenta abierta", action: "ticket", actionLabel: "Gestionar cuenta", order: { id: "CMD-000190", people: 5, waiter: "Ana López", items: [{ name: "2 × Hamburguesa clásica", note: "", total: "$380.00" }, { name: "3 × Agua mineral", note: "", total: "$105.00" }], note: "Cliente solicita dividir la cuenta", total: "$485.00" } },
  { id: "09", status: "reserved", statusLabel: "Reservada", context: "20:00 · 2 personas", action: "reservation", actionLabel: "Ver reserva", reservation: { time: "20:00", people: 2, guest: "Jorge Navarro" } },
];

const posStatusLabels = {
  free: "Libres",
  occupied: "Ocupadas",
  reserved: "Reservadas",
  due: "Por cobrar",
};

function getPosStatusCount(status) {
  return posTables.filter((table) => table.status === status).length;
}

function getTableFlowData(table) {
  const order = table.order || table.openingOrder;
  if (order) return order;

  return {
    id: `CMD-DEMO-${table.id}`,
    people: table.reservation?.people || 0,
    waiter: table.reservation?.guest || "Sin responsable",
    elapsed: "—",
    items: [],
    note: table.reservation ? `Reserva a las ${table.reservation.time}.` : "Sin comanda abierta.",
    alert: "No hay productos registrados en esta mesa.",
    total: "$0.00",
  };
}

function getTableStatusLabel(table, flow = false) {
  return flow && table.status === "free" ? "Abierta DEMO" : table.statusLabel;
}

function renderPosSummary() {
  return Object.entries(posStatusLabels).map(([status, label]) => `
    <article class="pos-summary-card ${status}">
      <span class="state-marker" aria-hidden="true"></span>
      <div><strong>${getPosStatusCount(status)}</strong><span>${label}</span></div>
    </article>`).join("");
}

function renderPosTable(table) {
  const detail = table.order
    ? `${table.order.id} · ${table.order.people} personas`
    : table.reservation
      ? `${table.reservation.time} · ${table.reservation.people} personas`
      : table.context;

  return `
    <article class="table-card ${table.status}" data-table-id="${table.id}">
      <div class="table-card-heading">
        <h3>Mesa ${table.id}</h3>
        <span class="status-badge"><span class="state-marker" aria-hidden="true"></span>${table.statusLabel}</span>
      </div>
      <p class="table-context">${detail}</p>
      <p class="table-support">${table.order ? `Responsable: ${table.order.waiter}` : table.reservation ? `Reserva: ${table.reservation.guest}` : "Lista para recibir personas"}</p>
      <button class="table-action" data-action="${table.action}" data-table-id="${table.id}">${table.actionLabel} <span aria-hidden="true">→</span></button>
    </article>`;
}

function renderTicket(table) {
  if (!table.order) {
    const reservation = table.reservation;
    return `
      <div class="ticket-heading"><div><p class="eyebrow">Detalle de mesa</p><h2 id="ticket-title">Mesa ${table.id}</h2></div><span class="status-badge"><span class="state-marker" aria-hidden="true"></span>${table.statusLabel}</span></div>
      <p class="muted">${reservation ? `Reserva a las ${reservation.time} · ${reservation.people} personas` : "Sin comanda abierta"}</p>
      <div class="ticket-empty"><span class="state-marker" aria-hidden="true"></span><strong>${reservation ? "Reserva confirmada en DEMO" : "Mesa disponible"}</strong><p>${reservation ? `A nombre de ${reservation.guest}. Esta consulta no modifica la reserva.` : "La apertura de la mesa es una simulación sin persistencia."}</p></div>
      <button class="btn btn-outline" data-action="${table.action}" data-table-id="${table.id}">${table.actionLabel}</button>`;
  }

  return `
    <div class="ticket-heading"><div><p class="eyebrow">Comanda DEMO</p><h2 id="ticket-title">Mesa ${table.id}</h2></div><span class="status-badge"><span class="state-marker" aria-hidden="true"></span>${table.statusLabel}</span></div>
    <p class="muted">${table.order.id} · ${table.order.people} personas · ${table.order.waiter}</p>
    <div class="ticket-items">${table.order.items.map((item) => `<div class="ticket-item"><span><b>${item.name}</b>${item.note ? `<br><small class="muted">${item.note}</small>` : ""}</span><b>${item.total}</b></div>`).join("")}</div>
    <p class="ticket-note"><b>Nota:</b> ${table.order.note}</p>
    <div class="ticket-total"><span>Total ficticio</span><span>${table.order.total}</span></div>
    <button class="btn btn-orange" data-action="pay" data-table-id="${table.id}">Gestionar cuenta</button>
     <small class="ticket-disclaimer">Acción ilustrativa · no procesa pagos reales</small>`;
}

function getFlowHref(kind, tableId) {
  return `#pos-${kind}-${tableId}`;
}

function renderFlowHeader(table) {
  return `
    <header class="pos-flow-top">
      <a class="pos-flow-back" href="#pos">← Salón</a>
      ${brand()}
      <div class="pos-flow-context"><strong>Salón principal</strong><span>Mesa ${table.id}</span></div>
      <span class="pos-flow-profile" aria-label="Usuario Ana López">AL</span>
    </header>`;
}

function renderFlowNotice(text = "Datos DEMO · no ejecuta transacciones reales.") {
  return `<p class="pos-flow-notice">${text}</p>`;
}

function renderFlowShell(table, content) {
  return shell("pos", `
    <section class="view pos pos-flow">
      ${renderFlowHeader(table)}
      <main class="pos-flow-main">${content}</main>
    </section>`);
}

function parseMoney(value) {
  return Number.parseFloat(String(value).replace(/[$,]/g, "")) || 0;
}

function formatMoney(value) {
  return `$${value.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function getPaymentSummary(table) {
  const subtotal = parseMoney(getTableFlowData(table).total);
  const tax = subtotal * 0.16;
  const tip = subtotal * 0.1;
  return { subtotal, tax, tip, total: subtotal + tax + tip };
}

function renderTableFlow(table) {
  const order = getTableFlowData(table);
  const statusLabel = getTableStatusLabel(table, true);
  const items = order.items.length
    ? order.items.map((item) => `
        <article class="pos-product-card">
          <div><strong>${item.name}</strong><small>${item.note || "Sin nota adicional"}</small></div>
          <b>${item.total}</b>
        </article>`).join("")
    : `<div class="pos-empty-card">Esta mesa todavía no tiene productos registrados.</div>`;

  return renderFlowShell(table, `
    <div class="pos-flow-copy">
      <p class="eyebrow">COMANDA DEMO</p>
      <h1 id="flow-title">Mesa ${table.id}</h1>
      <span class="pos-flow-status ${table.status}"><span class="state-marker" aria-hidden="true"></span>${statusLabel}</span>
      <p class="pos-flow-meta">${order.id} · ${order.people} personas · ${order.waiter} · ${order.elapsed}</p>
    </div>
    <section class="pos-flow-section" aria-labelledby="products-title">
      <h2 id="products-title">Productos</h2>
      <div class="pos-product-list">${items}</div>
    </section>
    <section class="pos-alert-card" aria-label="Alerta de comanda">
      <p>ALERTA / RESTRICCIÓN</p>
      <strong>${order.alert}</strong>
      <small>Confirmación requerida antes de enviar</small>
      <span class="pos-alert-badge">CONFIRMACIÓN REQUERIDA</span>
    </section>
    <section class="pos-flow-section" aria-labelledby="continuity-title">
      <h2 id="continuity-title">Nota de continuidad</h2>
      <div class="pos-continuity-card">
        <strong>Turno actual · ${order.waiter} · ${order.elapsed}</strong>
        <span>${order.note}</span>
      </div>
    </section>
    <button class="btn btn-orange pos-flow-primary" data-action="confirm-kitchen" data-table-id="${table.id}">Confirmar y enviar a cocina</button>
    ${renderFlowNotice("La alerta quedará visible en KDS.")}`);
}

function renderAccountView(table) {
  const order = getTableFlowData(table);
  const actions = [
    ["Transferir mesa", "Cambiar responsable o mesa"],
    ["Dividir cuenta", "Separar consumos"],
    ["Combinar mesas", "Unificar cuentas"],
  ];

  return renderFlowShell(table, `
    <div class="pos-flow-copy">
      <h1 id="flow-title">Gestionar mesa ${table.id}</h1>
      <p class="pos-flow-meta strong">${order.id} · ${order.people} personas</p>
    </div>
    <section class="pos-flow-section" aria-labelledby="account-actions-title">
      <h2 id="account-actions-title">Acciones de cuenta</h2>
      <div class="pos-account-actions">
        ${actions.map(([title, description]) => `
          <button class="pos-account-action" data-action="account-action" data-table-id="${table.id}" data-account-action="${title}">
            <span><strong>${title}</strong><small>${description}</small></span><b aria-hidden="true">›</b>
          </button>`).join("")}
      </div>
    </section>
    <div class="pos-permission-card">Permiso configurable requerido</div>
    <p class="pos-account-help">Todas las acciones solicitan confirmación y dejan historial.</p>
    <section class="pos-flow-section" aria-labelledby="account-note-title">
      <h2 id="account-note-title">Nota de continuidad</h2>
      <div class="pos-continuity-card"><span>${order.note}</span></div>
    </section>
    <a class="btn btn-orange pos-flow-primary pos-flow-link" href="${getFlowHref("close", table.id)}">Cerrar comanda</a>
    ${renderFlowNotice()}`);
}

function renderCloseView(table) {
  const order = getTableFlowData(table);
  const payment = getPaymentSummary(table);

  return renderFlowShell(table, `
    <div class="pos-flow-copy">
      <p class="eyebrow">CIERRE DE COMANDA DEMO</p>
      <h1 id="flow-title">Cerrar comanda · Mesa ${table.id}</h1>
      <p class="pos-flow-meta">${order.id} · ${order.people} personas · ${order.waiter}</p>
    </div>
    <section class="pos-close-summary" aria-labelledby="close-summary-title">
      <div class="pos-close-summary-head"><h2 id="close-summary-title">Resumen de cuenta</h2><span>Pendiente de cobro</span></div>
      ${order.items.map((item) => `<div class="pos-summary-row"><span>${item.name}</span><b>${item.total}</b></div>`).join("")}
      <div class="pos-summary-row"><span>Subtotal ficticio</span><b>${formatMoney(payment.subtotal)}</b></div>
      <div class="pos-summary-total"><span>Total estimado</span><strong>${formatMoney(payment.total)}</strong></div>
    </section>
    <div class="pos-close-checklist">
      <strong>Antes de cerrar</strong>
      <span>Confirma que la comanda esté completa y que la cuenta corresponda a Mesa ${table.id}.</span>
    </div>
    <div class="pos-flow-button-group">
      <a class="btn btn-outline pos-flow-secondary" href="${getFlowHref("account", table.id)}">Regresar a cuenta</a>
      <a class="btn btn-orange pos-flow-primary pos-flow-link" href="${getFlowHref("payment", table.id)}">Continuar al cobro</a>
    </div>
    ${renderFlowNotice("Cierre ilustrativo · no cambia el estado de la mesa.")}`);
}

function renderPaymentView(table) {
  const order = getTableFlowData(table);
  const payment = getPaymentSummary(table);

  return renderFlowShell(table, `
    <div class="pos-flow-copy">
      <h1 id="flow-title">Cobro · Mesa ${table.id}</h1>
      <p class="pos-flow-meta strong">Cuenta ${order.id} · DEMO</p>
    </div>
    <section class="pos-payment-summary" aria-labelledby="payment-summary-title">
      <h2 id="payment-summary-title">Resumen</h2>
      <div class="pos-summary-row"><span>Subtotal</span><b>${formatMoney(payment.subtotal)}</b></div>
      <div class="pos-summary-row"><span>Impuesto sucursal 16 %</span><b>${formatMoney(payment.tax)}</b></div>
      <div class="pos-summary-row"><span>Propina sugerida 10 %</span><b>${formatMoney(payment.tip)}</b></div>
      <div class="pos-summary-total"><span>Total</span><strong>${formatMoney(payment.total)}</strong></div>
    </section>
    <section class="pos-flow-section" aria-labelledby="tip-title">
      <h2 id="tip-title">Propina</h2>
      <div class="pos-choice-row" role="group" aria-label="Seleccionar propina">
        <button class="pos-choice" data-action="select-payment-option">0 %</button>
        <button class="pos-choice selected" data-action="select-payment-option">10 %</button>
        <button class="pos-choice" data-action="select-payment-option">Personalizada</button>
      </div>
      <p class="pos-fixed-amount">Cantidad fija: $ <span>_____</span></p>
    </section>
    <section class="pos-flow-section" aria-labelledby="method-title">
      <h2 id="method-title">Método por sucursal</h2>
      <div class="pos-choice-row" role="group" aria-label="Seleccionar método de pago">
        ${["Efectivo", "Crédito", "Débito", "Cheque"].map((method, index) => `<button class="pos-choice${index === 0 ? " selected" : ""}" data-action="select-payment-option">${method}</button>`).join("")}
      </div>
    </section>
    <button class="btn btn-orange pos-flow-primary" data-action="register-payment" data-table-id="${table.id}">Registrar pago DEMO</button>
    <p class="pos-payment-status">Offline: mesa liberada · cuenta Por cobrar / pendiente de confirmación.</p>`);
}

function renderPosFlowError(tableId) {
  return shell("pos", `
    <section class="view pos pos-flow">
      <main class="pos-flow-main pos-flow-error">
        <p class="eyebrow">VISTA DEMO</p>
        <h1>Mesa no encontrada</h1>
        <p class="muted">No hay datos ficticios para la mesa ${tableId || "solicitada"}.</p>
        <a class="btn btn-orange pos-flow-link" href="#pos">Regresar al salón</a>
      </main>
    </section>`);
}

function pos() {
  const selectedTable = posTables.find((table) => table.id === "02");

  return shell("pos", `
    <section class="view pos">
      <header class="pos-top">
        ${brand()}
        <div class="pos-top-context"><strong>Salón principal</strong><span>Turno actual · 14:25</span></div>
        <button class="btn btn-orange pos-profile" aria-label="Usuario Ana López">AL</button>
      </header>
      <div class="pos-main">
        <section class="pos-floor" aria-labelledby="pos-title">
          <header class="pos-heading">
            <div><p class="eyebrow">OPERACIÓN DE SALÓN</p><h1 id="pos-title">Distribución de mesas</h1><p class="muted">Selecciona una mesa para abrir su siguiente paso.</p></div>
            <span class="pos-demo-label">Vista DEMO</span>
          </header>
          <section class="pos-summary" aria-label="Resumen de estados de mesas">${renderPosSummary()}</section>
          <div class="tables" aria-label="Mesas del salón">${posTables.map(renderPosTable).join("")}</div>
        </section>
        <aside class="card ticket" id="ticket" aria-labelledby="ticket-title">${renderTicket(selectedTable)}</aside>
      </div>
      <div class="pos-toast" id="toast" role="status" aria-live="polite"></div>
    </section>`);
}

// KDS workflow ---------------------------------------------------------------
// This collection is intentionally session-only. It represents kitchen
// activity without persistence, a backend, or real synchronization.
const kdsOrders = [
  {
    id: "4590",
    table: "07",
    receivedAt: "14:20",
    age: "5 min",
    state: "new",
    items: [
      { quantity: 2, name: "Hamburguesa clásica" },
      { quantity: 1, name: "Papas a la francesa" },
    ],
    notes: "Sin cebolla.",
    restriction: "Sin cacahuate. Cliente con alergia confirmada.",
  },
  {
    id: "4592",
    table: "12",
    receivedAt: "14:23",
    age: "2 min",
    state: "new",
    items: [{ quantity: 3, name: "Tacos al pastor" }, { quantity: 1, name: "Arroz" }],
    notes: "Salsa aparte.",
  },
  {
    id: "4589",
    table: "03",
    receivedAt: "14:13",
    age: "12 min",
    state: "preparing",
    items: [{ quantity: 2, name: "Pasta Alfredo" }, { quantity: 1, name: "Ensalada César" }],
    notes: "Sin notas adicionales.",
  },
  {
    id: "4591",
    table: "04",
    receivedAt: "14:16",
    age: "9 min",
    state: "preparing",
    items: [{ quantity: 1, name: "Pechuga a la plancha" }, { quantity: 2, name: "Arroz blanco" }],
    notes: "Sin gluten · confirmar.",
  },
  {
    id: "4588",
    table: "02",
    receivedAt: "14:07",
    age: "18 min",
    state: "ready",
    items: [{ quantity: 1, name: "Pizza mediana" }, { quantity: 2, name: "Limonada" }],
    notes: "Pedido completo.",
  },
  {
    id: "4587",
    table: "05",
    receivedAt: "14:04",
    age: "21 min",
    state: "ready",
    items: [{ quantity: 2, name: "Hamburguesa" }, { quantity: 1, name: "Papas" }],
    notes: "Pedido completo.",
  },
];

const kdsStateLabels = { new: "Nuevos", preparing: "En preparación", ready: "Listos" };
const kdsActionLabels = { new: "Iniciar preparación", preparing: "Marcar como listo", ready: "Entregar pedido" };
let kdsDisconnected = false;
let kdsPendingConfirmation = null;

function getKdsOrder(orderId) {
  return kdsOrders.find((order) => order.id === orderId);
}

function renderKdsOrderItems(order) {
  return order.items.map((item) => `<li><strong>${item.quantity} ×</strong> ${item.name}</li>`).join("");
}

function renderKdsCard(order) {
  const hasRestriction = order.restriction ? `<p class="kds-restriction">⚠ ${order.restriction}</p>` : "";
  return `
    <article class="order ${order.restriction ? "has-restriction" : ""}" data-order-id="${order.id}">
      <div class="order-head"><strong>#${order.id}</strong><span>${order.age}</span></div>
      <h3>Mesa ${order.table}</h3>
      <ul>${renderKdsOrderItems(order)}</ul>
      <p class="kds-order-note">${order.notes}</p>
      ${hasRestriction}
      <div class="kds-card-actions">
        <a class="kds-detail-link" href="#kds-order-${order.id}">Ver detalle</a>
        <button data-action="kds-transition" data-order-id="${order.id}">${kdsActionLabels[order.state]}</button>
      </div>
    </article>`;
}

function renderKdsNotice() {
  return `
    <div class="kds-status-row">
      <span class="kds-demo-badge">DATOS DEMO</span>
      <span class="kds-sync-status">${kdsDisconnected ? "⚠ Sin conexión operativa · cambios solo locales" : "● Sincronización simulada · última revisión 14:25"}</span>
      <button class="kds-connect-toggle" data-action="kds-toggle-connection">${kdsDisconnected ? "Simular conexión" : "Simular desconexión"}</button>
    </div>`;
}

function renderKds() {
  return shell("kds", `
    <section class="view kds">
      <header class="kds-top">${brand(true)}
        <div class="kds-title"><h1>COMANDAS · COCINA CENTRAL</h1><p>Servicio comida · Estación: Cocina caliente</p></div>
        <button class="kds-action">▣ VISTA TV</button><span class="kds-clock">14:25</span>
      </header>
      <main class="kds-main">
        ${renderKdsNotice()}
        <div class="kds-grid">
          ${Object.entries(kdsStateLabels).map(([state, label]) => {
            const orders = kdsOrders.filter((order) => order.state === state);
            return `<section class="kds-column ${state}" aria-labelledby="kds-${state}-title">
              <h2 id="kds-${state}-title">${label.toUpperCase()} · ${orders.length}</h2>
              ${orders.length ? orders.map(renderKdsCard).join("") : `<div class="kds-empty">No hay comandas en este estado.</div>`}
            </section>`;
          }).join("")}
        </div>
      </main>
      ${renderKdsConfirmation()}
      <div class="pos-toast" id="toast" role="status" aria-live="polite"></div>
    </section>`);
}

function kds() {
  return renderKds();
}

function renderKdsConfirmation() {
  const order = kdsPendingConfirmation ? getKdsOrder(kdsPendingConfirmation) : null;
  if (!order) return "";
  return `
    <div class="kds-modal-backdrop">
      <section class="kds-confirmation" role="alertdialog" aria-modal="true" aria-labelledby="kds-confirm-title">
        <p class="kds-alert-label">⚠ ALERGIA / RESTRICCIÓN · CONFIRMACIÓN OBLIGATORIA</p>
        <h2 id="kds-confirm-title">Confirma antes de avanzar la Comanda #${order.id}</h2>
        <p>${order.restriction}</p>
        <div class="kds-confirm-actions">
          <button class="btn btn-outline" data-action="kds-cancel-confirmation">Cancelar</button>
          <button class="btn btn-orange" data-action="kds-confirm-transition" data-order-id="${order.id}">Confirmar y continuar</button>
        </div>
      </section>
    </div>`;
}

function renderKdsDetail(order) {
  if (!order) {
    return shell("kds", `<section class="view kds"><main class="kds-detail-main"><p class="eyebrow">VISTA DEMO</p><h1>Comanda no encontrada</h1><a class="btn btn-orange" href="#kds">Regresar a comandas</a></main></section>`);
  }
  return shell("kds", `
    <section class="view kds">
      <header class="kds-top">${brand(true)}<div class="kds-title"><h1>DETALLE DE COMANDA</h1><p>Cocina caliente · Datos DEMO</p></div><span class="kds-clock">14:25</span></header>
      <main class="kds-detail-main">
        <a class="kds-back-link" href="#kds">← Regresar a comandas</a>
        <div class="kds-detail-heading"><div><p class="eyebrow">COMANDA DEMO</p><h1>Comanda #${order.id} · Mesa ${order.table}</h1><p>Recibida a las ${order.receivedAt} · Antigüedad ${order.age}</p></div><span class="kds-state-badge ${order.state}">${kdsStateLabels[order.state]}</span></div>
        <div class="kds-detail-grid">
          <section class="kds-detail-card"><h2>Productos</h2><ul class="kds-detail-items">${renderKdsOrderItems(order)}</ul><p class="kds-detail-notes"><strong>Notas:</strong> ${order.notes}</p></section>
          <aside class="kds-detail-side">
            ${order.restriction ? `<section class="kds-restriction-card"><p>⚠ ALERGIA / RESTRICCIÓN</p><strong>${order.restriction}</strong><span>Confirmación obligatoria antes de avanzar.</span></section>` : ""}
            <button class="btn btn-orange kds-detail-action" data-action="kds-transition" data-order-id="${order.id}">${kdsActionLabels[order.state]}</button>
            <p class="kds-demo-note">Acción DEMO · no envía cambios a producción.</p>
          </aside>
        </div>
      </main>
      ${renderKdsConfirmation()}
      <div class="pos-toast" id="toast" role="status" aria-live="polite"></div>
    </section>`);
}

function transitionKdsOrder(orderId, confirmed = false) {
  const order = getKdsOrder(orderId);
  if (!order) return;
  if (order.restriction && !confirmed) {
    kdsPendingConfirmation = orderId;
    renderFlow();
    return;
  }

  const nextState = { new: "preparing", preparing: "ready", ready: "completed" }[order.state];
  if (!nextState) {
    showToast("La comanda ya fue retirada del tablero DEMO");
    return;
  }
  order.state = nextState;
  kdsPendingConfirmation = null;
  if (nextState === "completed") {
    window.location.hash = "#kds";
    renderFlow();
    showToast(`Comanda #${order.id} entregada · acción DEMO`);
    return;
  }
  renderFlow();
  showToast(`Comanda #${order.id} ahora está en ${kdsStateLabels[nextState]} · acción DEMO`);
}

function getRouteFromHash() {
  const requestedView = window.location.hash.replace(/^#/, "").toLowerCase();
  const flowMatch = requestedView.match(/^pos-(table|account|close|payment)-(\d{2})$/);

  if (flowMatch) {
    return { view: "pos-flow", kind: flowMatch[1], tableId: flowMatch[2] };
  }

  if (["home", "pos", "kds", "erp"].includes(requestedView)) {
    return { view: requestedView || "home", kind: requestedView || "home" };
  }

  return { view: "home", kind: "home" };
}

function getViewFromHash() {
  return getRouteFromHash().view;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function handleAction(button) {
  const action = button.dataset.action;
  const table = posTables.find((item) => item.id === button.dataset.tableId);

  if (table && document.querySelector("#ticket")) {
    if (action === "occupy") {
      window.location.hash = getFlowHref("table", table.id);
      return;
    }
    if (action === "account" || action === "pay") {
      window.location.hash = getFlowHref("account", table.id);
      return;
    }
    if (["ticket", "reservation"].includes(action)) {
      document.querySelector("#ticket").innerHTML = renderTicket(table);
      document.querySelector("#ticket").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    if (action === "ticket") showToast(`Comanda ${table.order.id} cargada · consulta DEMO`);
    if (action === "reservation") showToast(`Reserva de Mesa ${table.id} consultada · datos DEMO`);
    return;
  }

  if (action === "confirm-kitchen") {
    showToast(`Comanda de Mesa ${button.dataset.tableId} enviada a cocina · acción DEMO`);
    button.textContent = "Enviada a cocina DEMO";
    button.disabled = true;
    return;
  }

  if (action === "account-action") {
    showToast(`${button.dataset.accountAction} · confirmación DEMO requerida`);
    return;
  }

  if (action === "select-payment-option") {
    const group = button.closest(".pos-choice-row");
    group?.querySelectorAll(".pos-choice").forEach((option) => option.classList.remove("selected"));
    button.classList.add("selected");
    return;
  }

  if (action === "register-payment") {
    showToast(`Pago de Mesa ${button.dataset.tableId} registrado · resultado DEMO pendiente`);
    button.textContent = "Pago DEMO registrado";
    button.disabled = true;
    return;
  }

  if (action === "kds") {
    showToast("Estado actualizado · sincronización DEMO");
    button.closest(".order").style.opacity = ".55";
  }
}

function render(route = getRouteFromHash()) {
  route = typeof route === "string" ? { view: route } : route;
  if (route.view === "pos-flow") {
    const table = posTables.find((item) => item.id === route.tableId);
    if (!table) {
      app.innerHTML = renderPosFlowError(route.tableId);
    } else if (route.kind === "table") {
      app.innerHTML = renderTableFlow(table);
    } else if (route.kind === "account") {
      app.innerHTML = renderAccountView(table);
    } else if (route.kind === "close") {
      app.innerHTML = renderCloseView(table);
    } else {
      app.innerHTML = renderPaymentView(table);
    }
  } else {
    app.innerHTML = route.view === "home" ? home() : route.view === "pos" ? pos() : route.view === "kds" ? kds() : erp();
  }
  const actionSurface = document.querySelector(".pos, .kds");
  if (actionSurface) {
    actionSurface.addEventListener("click", (event) => {
      const button = event.target.closest("[data-action]");
      if (button) handleAction(button);
    });
  }
}

// POS contextual flow -------------------------------------------------------
// This data is intentionally separate from the base table status. It lets the
// prototype show a believable opening flow without persisting a new comanda.
Object.assign(posTables.find((table) => table.id === "01"), {
  demoOrder: {
    id: "CMD-DEMO-001",
    people: 2,
    waiter: "Ana López",
    items: [{ name: "2 × Enchiladas de pollo", note: "Apertura ilustrativa · sin cebolla", total: "$280.00" }],
    note: "Mesa abierta en modo DEMO; confirmar antes de enviar.",
    total: "$280.00",
    alert: "Confirmar disponibilidad de cocina antes de enviar",
    continuation: "Cliente solicita atención rápida.",
  },
});
Object.assign(posTables.find((table) => table.id === "03"), {
  demoOrder: {
    id: "CMD-DEMO-003",
    people: 3,
    waiter: "Luis García",
    items: [{ name: "3 × Tacos al pastor", note: "Salsa aparte · apertura ilustrativa", total: "$360.00" }],
    note: "Mesa abierta en modo DEMO; confirmar antes de enviar.",
    total: "$360.00",
    alert: "Salsa aparte · confirmar con la cocina",
    continuation: "Cliente solicita cuenta individual.",
  },
});
Object.assign(posTables.find((table) => table.id === "06"), {
  demoOrder: {
    id: "CMD-DEMO-006",
    people: 4,
    waiter: "Ana López",
    items: [
      { name: "1 × Hamburguesa clásica", note: "Apertura ilustrativa · papas aparte", total: "$190.00" },
      { name: "2 × Limonada", note: "Sin hielo", total: "$90.00" },
    ],
    note: "Mesa abierta en modo DEMO; confirmar antes de enviar.",
    total: "$280.00",
    alert: "Sin alertas activas · revisar nota antes de enviar",
    continuation: "Cliente solicita atención en terraza.",
  },
});

const flowPayment = { tip: "10", method: "cash", registered: false };

function resolvePosTable(tableId) {
  const table = posTables.find((item) => item.id === tableId);
  if (!table) return null;
  return { ...table, order: table.order || table.demoOrder || null };
}

function parsePosHash() {
  const hash = window.location.hash.replace(/^#/, "").toLowerCase();
  if (["", "home", "erp", "kds"].includes(hash)) return { view: hash || "home" };
  const kdsOrderMatch = hash.match(/^kds-order-(\d+)$/);
  if (kdsOrderMatch) return { view: "kds", orderId: kdsOrderMatch[1] };
  if (hash === "pos") return { view: "salon" };
  const match = hash.match(/^pos-(table|account|close|payment|reservation)-([a-z0-9-]+)$/);
  return match ? { view: match[1], tableId: match[2].toUpperCase() } : { view: "unknown" };
}

function flowHeader(table) {
  return `
    <header class="pos-top contextual-header">
      <a class="contextual-back" href="#pos" aria-label="Regresar al salón">← <span>Salón</span></a>
      ${brand()}
      <div class="pos-top-context"><strong>Salón principal · Mesa ${table.id}</strong><span>Turno actual · 14:25</span></div>
      <button class="btn btn-orange pos-profile" aria-label="Usuario Ana López">AL</button>
    </header>`;
}

function flowNotice(text) {
  return `<div class="context-notice" role="note"><span aria-hidden="true">◉</span><span>${text}</span></div>`;
}

function flowOrder(table) {
  return table.order || table.demoOrder;
}

function flowOrderCard(table) {
  const order = flowOrder(table);
  return `
    <section class="context-order-summary" aria-label="Resumen de comanda">
      <div class="summary-order-heading"><div><p class="eyebrow">COMANDA DEMO</p><h2>${order.id}</h2></div><span class="summary-status">${table.status === "free" ? "Apertura ilustrativa" : "En consulta"}</span></div>
      <p class="muted">${order.people} personas · Responsable: ${order.waiter}</p>
      <div class="context-items">${order.items.map((item) => `<div class="context-item"><span><b>${item.name}</b><small>${item.note || "Sin notas adicionales"}</small></span><strong>${item.total}</strong></div>`).join("")}</div>
      <div class="context-total"><span>Total ficticio</span><strong>${order.total}</strong></div>
    </section>`;
}

function flowTableView(table) {
  const order = flowOrder(table);
  return shell("pos", `
    <section class="view pos contextual-view">
      ${flowHeader(table)}
      <main class="context-main" aria-labelledby="context-title">
        <div class="context-breadcrumb">POS / Mesa y Comanda / Mesa ${table.id}</div>
        <header class="context-heading"><div><p class="eyebrow">MESA Y COMANDA</p><h1 id="context-title">Mesa ${table.id}</h1><p class="muted">${order.id} · ${order.people} personas · ${order.waiter}</p></div><span class="pos-demo-label">Vista DEMO</span></header>
        ${flowNotice(table.status === "free" ? "Apertura DEMO · la mesa conserva su estado Libre en el salón" : "Consulta DEMO · la comanda base no se modifica")}
        <div class="context-grid">
          ${flowOrderCard(table)}
          <aside class="context-side">
            <section class="context-alert alert-warning"><strong>Nota de continuidad</strong><p>${order.continuation || "Sin notas de continuidad."}</p></section>
            <section class="context-alert alert-danger"><strong>${order.alert || "Sin alertas activas"}</strong><p>La confirmación es ilustrativa y no envía información a cocina.</p></section>
            <div class="context-actions"><a class="btn btn-orange btn-block" href="#pos-account-${table.id}">Gestionar cuenta</a><button class="btn btn-outline btn-block" data-action="demo-send">Confirmar y enviar a cocina</button><small>Respuesta DEMO · sin persistencia</small></div>
          </aside>
        </div>
      </main>
      <div class="pos-toast" id="toast" role="status" aria-live="polite"></div>
    </section>`);
}

function flowReservationView(table) {
  const reservation = table.reservation;
  return shell("pos", `
    <section class="view pos contextual-view reservation-view">
      ${flowHeader(table)}
      <main class="context-main reservation-main" aria-labelledby="context-title">
        <div class="context-breadcrumb">POS / Reservaciones / Mesa ${table.id}</div>
        <header class="context-heading">
          <div>
            <p class="eyebrow">CONSULTA DE RESERVA</p>
            <h1 id="context-title">Reserva · Mesa ${table.id}</h1>
            <p class="muted">Consulta de datos ficticios de la reserva</p>
          </div>
          <span class="pos-demo-label">Consulta DEMO</span>
        </header>
        ${flowNotice("Consulta DEMO · la reserva no se modifica ni se confirma")}
        <div class="context-grid">
          <section class="context-order-summary reservation-card" aria-label="Detalle de reserva DEMO">
            <div class="summary-order-heading">
              <div><p class="eyebrow">RESERVA DEMO</p><h2>Mesa ${table.id}</h2></div>
              <span class="summary-status reservation-status"><span class="state-marker" aria-hidden="true"></span>${table.statusLabel}</span>
            </div>
            <dl class="reservation-details">
              <div class="reservation-detail"><dt>Horario</dt><dd>${reservation.time}</dd></div>
              <div class="reservation-detail"><dt>Personas</dt><dd>${reservation.people}</dd></div>
              <div class="reservation-detail"><dt>Persona invitada</dt><dd>${reservation.guest}</dd></div>
              <div class="reservation-detail"><dt>Estado</dt><dd>${table.statusLabel}</dd></div>
            </dl>
            <p class="reservation-note">Esta vista solo permite consultar la reserva ficticia. No incluye acciones para editar, cancelar o confirmar.</p>
          </section>
          <aside class="context-side">
            <section class="context-alert alert-warning">
              <strong>Información de llegada</strong>
              <p>La Mesa ${table.id} está reservada para ${reservation.time}. Los datos son ilustrativos y no generan una operación.</p>
            </section>
            <div class="context-actions">
              <a class="btn btn-orange btn-block" href="#pos">Regresar al salón</a>
              <small>Consulta DEMO · sin persistencia</small>
            </div>
          </aside>
        </div>
      </main>
    </section>`);
}

function flowAccountView(table) {
  const order = flowOrder(table);
  const actions = ["Transferir mesa|Cambiar responsable o mesa", "Dividir cuenta|Separar consumos", "Combinar mesas|Unificar cuentas"].map((item) => {
    const [title, description] = item.split("|");
    return `<button class="account-action" data-action="demo-account"><span><b>${title}</b><small>${description}</small></span><strong aria-hidden="true">›</strong></button>`;
  }).join("");
  return shell("pos", `
    <section class="view pos contextual-view">
      ${flowHeader(table)}
      <main class="context-main" aria-labelledby="context-title">
        <div class="context-breadcrumb">POS / Gestionar cuenta / Mesa ${table.id}</div>
        <header class="context-heading"><div><p class="eyebrow">GESTIONAR CUENTA</p><h1 id="context-title">Gestionar mesa ${table.id}</h1><p class="muted">${order.id} · ${order.people} personas · DEMO</p></div><span class="pos-demo-label">Cuenta DEMO</span></header>
        ${flowNotice("Todas las acciones de cuenta son ilustrativas y solicitan confirmación")}
        <div class="account-layout">
          <section class="account-panel"><h2>Acciones de cuenta</h2><div class="account-actions">${actions}</div><div class="permission-warning"><strong>Permiso configurable requerido</strong><span>Este prototipo no cambia responsables ni cuentas.</span></div></section>
          <aside class="account-summary">${flowOrderCard(table)}<div class="context-alert alert-warning"><strong>Nota de continuidad</strong><p>${order.continuation || "Sin notas de continuidad."}</p></div></aside>
        </div>
        <div class="flow-actions"><a class="btn btn-outline" href="#pos-table-${table.id}">← Regresar a Mesa ${table.id}</a><a class="btn btn-orange" href="#pos-close-${table.id}">Cerrar comanda <span aria-hidden="true">→</span></a></div>
      </main>
      <div class="pos-toast" id="toast" role="status" aria-live="polite"></div>
    </section>`);
}

function flowCloseView(table) {
  const order = flowOrder(table);
  return shell("pos", `
    <section class="view pos contextual-view">
      ${flowHeader(table)}
      <main class="context-main close-main" aria-labelledby="context-title">
        <div class="context-breadcrumb">POS / Gestionar cuenta / Cerrar comanda / Mesa ${table.id}</div>
        <header class="context-heading"><div><p class="eyebrow">CIERRE DE COMANDA</p><h1 id="context-title">Cerrar comanda</h1><p class="muted">Mesa ${table.id} · ${order.id} · Paso demostrativo</p></div><span class="pos-demo-label">Paso 3 de 4</span></header>
        ${flowNotice("Revisa el resumen antes de continuar · el cierre no se guarda")}
        <section class="close-card" aria-label="Resumen de cierre"><div class="close-card-heading"><div><p class="eyebrow">RESUMEN DE CUENTA</p><h2>Mesa ${table.id}</h2><p>${order.people} personas · ${order.waiter}</p></div><span class="close-mark" aria-hidden="true">✓</span></div><div class="close-lines">${order.items.map((item) => `<div><span>${item.name}</span><strong>${item.total}</strong></div>`).join("")}</div><div class="close-total"><span>Total a cobrar</span><strong>${order.total}</strong></div></section>
        <section class="close-checklist"><h2>Antes de continuar</h2><div><span class="check-icon" aria-hidden="true">✓</span><p><b>Comanda revisada</b><small>Los datos son ficticios y corresponden a la Mesa ${table.id}.</small></p></div><div><span class="check-icon" aria-hidden="true">✓</span><p><b>Cuenta lista para cobro DEMO</b><small>El siguiente paso solo muestra la pantalla de cobro.</small></p></div></section>
        <div class="flow-actions"><a class="btn btn-outline" href="#pos-account-${table.id}">← Regresar a cuenta</a><a class="btn btn-orange" href="#pos-payment-${table.id}">Continuar al cobro <span aria-hidden="true">→</span></a></div><p class="offline-note">Sin conexión operativa · cierre pendiente de confirmación</p>
      </main>
    </section>`);
}

function paymentSummary(table) {
  const order = flowOrder(table);
  const tax = order.id === "CMD-000190" ? "$77.60" : "$44.80";
  const tip = order.id === "CMD-000190" ? "$48.50" : "$28.00";
  const total = order.id === "CMD-000190" ? "$607.60" : "$324.80";
  return `<section class="payment-summary"><div class="summary-order-heading"><div><p class="eyebrow">RESUMEN DEMO</p><h2>Mesa ${table.id}</h2></div><span class="payment-pending">Pendiente</span></div><div class="payment-lines"><div><span>Subtotal</span><strong>${order.total}</strong></div><div><span>Impuesto sucursal 16 %</span><strong>${tax}</strong></div><div><span>Propina sugerida 10 %</span><strong>${tip}</strong></div><div class="payment-total"><span>Total ilustrativo</span><strong>${total}</strong></div></div></section>`;
}

function flowPaymentView(table) {
  const order = flowOrder(table);
  return shell("pos", `
    <section class="view pos contextual-view">
      ${flowHeader(table)}
      <main class="context-main payment-main" aria-labelledby="context-title">
        <div class="context-breadcrumb">POS / Cerrar comanda / Cobro / Mesa ${table.id}</div>
        <header class="context-heading"><div><p class="eyebrow">COBRO ILUSTRATIVO</p><h1 id="context-title">Cobro · Mesa ${table.id}</h1><p class="muted">${order.id} · DEMO</p></div><span class="pos-demo-label">Paso 4 de 4</span></header>
        ${flowNotice("Pago DEMO · no conecta terminales ni procesa dinero real")}
        <div class="payment-layout"><div class="payment-controls">${paymentSummary(table)}
          <section class="choice-section"><h2>Propina</h2><div class="choice-group" role="group" aria-label="Seleccionar propina"><button class="choice ${flowPayment.tip === "0" ? "selected" : ""}" data-action="select-tip" data-value="0">0 %</button><button class="choice ${flowPayment.tip === "10" ? "selected" : ""}" data-action="select-tip" data-value="10">10 %</button><button class="choice ${flowPayment.tip === "custom" ? "selected" : ""}" data-action="select-tip" data-value="custom">Personalizada</button></div><p class="fixed-amount">Cantidad fija: $ <span>${flowPayment.tip === "10" ? "28.00" : "—"}</span></p></section>
          <section class="choice-section"><h2>Método por sucursal</h2><div class="choice-group method-group" role="group" aria-label="Seleccionar método de pago"><button class="choice ${flowPayment.method === "cash" ? "selected" : ""}" data-action="select-method" data-value="cash">Efectivo</button><button class="choice ${flowPayment.method === "credit" ? "selected" : ""}" data-action="select-method" data-value="credit">Crédito</button><button class="choice ${flowPayment.method === "debit" ? "selected" : ""}" data-action="select-method" data-value="debit">Débito</button><button class="choice ${flowPayment.method === "check" ? "selected" : ""}" data-action="select-method" data-value="check">Cheque</button></div></section>
          <button class="btn btn-orange btn-block payment-submit" data-action="register-payment">Registrar pago DEMO</button><p class="offline-note">Offline: mesa liberada · cuenta Por cobrar / pendiente de confirmación.</p>${flowPayment.registered ? `<div class="payment-result" role="status"><strong>Registro ilustrativo creado</strong><span>Pago pendiente de confirmación · ningún cobro fue procesado.</span></div>` : ""}
        </div></div>
        <div class="flow-actions"><a class="btn btn-outline" href="#pos-close-${table.id}">← Regresar al cierre</a><a class="text-link" href="#pos">Volver al salón</a></div>
      </main><div class="pos-toast" id="toast" role="status" aria-live="polite"></div>
    </section>`);
}

function invalidPosRoute(route) {
  return shell("pos", `<section class="view pos contextual-view"><main class="safe-state"><span class="safe-state-icon" aria-hidden="true">?</span><p class="eyebrow">RUTA DEMO</p><h1>Mesa no encontrada</h1><p>No existe una mesa con el identificador <b>${route.tableId || "vacío"}</b>. Regresa al salón para continuar.</p><a class="btn btn-orange" href="#pos">Volver al salón</a></main></section>`);
}

function handleFlowAction(button) {
  const action = button.dataset.action;
  if (action === "kds-transition") {
    transitionKdsOrder(button.dataset.orderId);
    return;
  }
  if (action === "kds-confirm-transition") {
    transitionKdsOrder(button.dataset.orderId, true);
    return;
  }
  if (action === "kds-cancel-confirmation") {
    kdsPendingConfirmation = null;
    renderFlow();
    return;
  }
  if (action === "kds-toggle-connection") {
    kdsDisconnected = !kdsDisconnected;
    renderFlow();
    showToast(kdsDisconnected ? "Desconexión simulada · datos DEMO conservados" : "Conexión simulada · ningún cambio fue enviado");
    return;
  }
  if (action === "occupy" || action === "ticket" || action === "pay") {
    const table = posTables.find((item) => item.id === button.dataset.tableId);
    if (!table) return;
    window.location.hash = `#pos-${table.status === "due" || action === "pay" ? "account" : "table"}-${table.id}`;
    return;
  }
  if (action === "reservation") {
    const table = posTables.find((item) => item.id === button.dataset.tableId);
    if (!table?.reservation || table.status !== "reserved") return;
    window.location.hash = `#pos-reservation-${table.id}`;
    return;
  }
  if (action === "demo-send") {
    showToast("Confirmación ilustrativa · no se envió la comanda");
    return;
  }
  if (action === "demo-account") {
    showToast("Acción de cuenta disponible solo como DEMO");
    return;
  }
  if (action === "select-tip") {
    flowPayment.tip = button.dataset.value;
    renderFlow();
    return;
  }
  if (action === "select-method") {
    flowPayment.method = button.dataset.value;
    renderFlow();
    return;
  }
  if (action === "register-payment") {
    flowPayment.registered = true;
    renderFlow();
  }
}

function renderFlow() {
  const route = parsePosHash();
  const table = route.tableId ? resolvePosTable(route.tableId) : null;
  const reservationTable = table?.status === "reserved" && table.reservation ? table : null;
  if (route.view === "home" || route.view === "erp" || route.view === "kds") app.innerHTML = route.view === "home" ? home() : route.view === "erp" ? erp() : route.orderId ? renderKdsDetail(getKdsOrder(route.orderId)) : kds();
  else if (route.view === "salon") app.innerHTML = pos();
  else if (route.view === "table" && table) app.innerHTML = flowTableView(table);
  else if (route.view === "account" && table) app.innerHTML = flowAccountView(table);
  else if (route.view === "close" && table) app.innerHTML = flowCloseView(table);
  else if (route.view === "payment" && table) app.innerHTML = flowPaymentView(table);
  else if (route.view === "reservation" && reservationTable) app.innerHTML = flowReservationView(reservationTable);
  else if (route.view === "unknown" || (route.view !== "salon" && !table) || route.view === "reservation") app.innerHTML = invalidPosRoute(route);

  const actionSurface = document.querySelector(".pos, .kds");
  if (actionSurface) actionSurface.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (button) handleFlowAction(button);
  });
}

window.addEventListener("hashchange", renderFlow);
renderFlow();
