# Design

## Context

La SPA actual renderiza el POS desde `app.js`, conserva los datos ficticios en
`posTables` y usa acciones delegadas mediante `data-action`. La ruta `#pos`
renderiza el salón y mantiene un panel de detalle, pero las acciones de abrir
mesa y gestionar cuenta no cambian de vista. `styles.css` ya contiene la
paleta, tipografías, foco visible y breakpoints que deben reutilizarse.

La solución debe seguir siendo HTML, CSS y JavaScript nativos, conservar ERP,
POS y KDS, y mantener explícito el carácter DEMO. Las referencias POS06, POS07
y POS08 definen la jerarquía visual móvil de los pasos de comanda, cuenta y
cobro.

## Goals / Non-Goals

**Goals:**

- Permitir recorrer el flujo completo manteniendo el identificador y los datos
  ficticios de la mesa seleccionada.
- Reutilizar una única fuente de datos de mesas y derivar de ella las vistas
  contextuales.
- Mantener `#pos` como entrada al salón y agregar rutas hash internas para los
  pasos del flujo.
- Crear una vista de cierre coherente con POS06–POS08 y capturar su referencia
  PNG en 390×844.
- Conservar navegación por teclado, foco visible, objetivos táctiles y
  adaptación responsive.

**Non-Goals:**

- Persistir cambios de estado, comanda, división, transferencia o pago.
- Procesar pagos, calcular impuestos reales, conectar terminales o sincronizar
  con KDS o un servidor.
- Agregar npm, router, framework, almacenamiento local o backend.
- Rediseñar ERP, KDS o la navegación global fuera de los enlaces necesarios para
  regresar al POS.

## Decisions

### 1. Usar rutas hash explícitas para los pasos contextuales

Se conservará `#pos` para la distribución y se usarán rutas hash derivadas del
flujo, como `#pos-table-01`, `#pos-account-02`, `#pos-close-02` y
`#pos-payment-02`. El renderizador identificará la vista y el ID de mesa desde
el hash, validará que la mesa exista y mostrará un estado seguro si el ID no es
válido.

Esto permite recargar o compartir una vista dentro del prototipo sin introducir
un router. Se descarta depender solo de variables globales porque se perdería
el contexto al navegar o recargar; también se descarta una página HTML por paso
porque duplicaría el shell y los estilos.

### 2. Separar datos base de datos derivados del flujo

`posTables` seguirá siendo la fuente de estados y comandas existentes. Las
mesas libres incorporarán datos ficticios de apertura suficientes para mostrar
POS06 de forma específica por mesa, sin cambiar permanentemente su estado
original. Un helper resolverá la información de visualización de la mesa para
que las vistas de detalle, cuenta, cierre y cobro consuman el mismo contexto.

Las acciones no mutarán `posTables`: solo navegan, actualizan contenido
demostrativo o muestran feedback temporal. Así se conserva el alcance sin
persistencia y se evita que los contadores del salón se vuelvan inconsistentes.

### 3. Componer las vistas contextuales con una estructura compartida

Se agregarán renderizadores separados para:

- Mesa y Comanda, alineada con POS06.
- Gestionar cuenta, alineada con POS07.
- Cerrar comanda, como paso intermedio con resumen, confirmación y CTA hacia
  cobro.
- Cobro, alineada con POS08 y con métodos, propina y registro DEMO.

Un shell contextual compartirá encabezado, marca, salón, usuario, mesa,
comanda y aviso DEMO. Los botones usarán enlaces hash cuando representen
transiciones y botones reales cuando requieran feedback local, manteniendo
foco visible y activación por teclado.

### 4. Mantener el panel desktop como punto de entrada a Gestionar cuenta

El botón existente del panel derecho conservará el texto **Gestionar cuenta** y
enviará a la ruta de cuenta de la mesa actualmente mostrada. Las tarjetas de
mesas libres enviarán a su detalle POS06; las tarjetas ocupadas, reservadas y
por cobrar conservarán sus acciones contextuales, con la cuenta por cobrar
enviando a POS07 cuando corresponda.

Esto evita convertir el dashboard del salón en una copia de las pantallas
móviles y conserva la jerarquía desktop ya validada.

### 5. Capturar la nueva referencia desde el prototipo servido localmente

La vista de cierre se diseñará con el mismo CSS responsive y se capturará con
el servidor local en un viewport de 390×844. La imagen se guardará como
`docs/references/POS/09- POS · Cerrar comanda · 390x844.png`, junto a POS06,
POS07 y POS08. La PNG será evidencia visual de referencia, no un sustituto de
las capas HTML editables.

## Risks / Trade-offs

- [Las rutas hash nuevas pueden entrar con un ID inexistente] → Validar el ID
  contra `posTables` y mostrar un estado DEMO de mesa no encontrada con enlace
  de regreso a `#pos`.
- [Las mesas libres no tienen comanda original] → Mantener datos de apertura
  ficticios separados y etiquetados como DEMO, sin modificar el estado base ni
  afirmar que se creó una orden real.
- [Las cuatro vistas pueden duplicar marcado] → Compartir helpers para
  encabezado, resumen, acciones y avisos, dejando solo el contenido específico
  de cada paso en su renderizador.
- [La referencia PNG puede diferir si cambian las fuentes remotas] → Capturar
  después de cargar el servidor local y documentar que la apariencia depende
  de la disponibilidad de Montserrat e Inter.
- [El flujo visual puede parecer transaccional] → Mantener etiquetas DEMO,
  avisos de no persistencia y mensajes de cobro ilustrativo en cada paso.

## Migration Plan

1. Ampliar el modelo ficticio y el parser de rutas en `app.js`.
2. Implementar los renderizadores y transiciones del flujo POS.
3. Agregar estilos responsive y estados de error/retorno en `styles.css`.
4. Ejecutar `node --check app.js` y servir el prototipo con `npm run dev`.
5. Capturar la vista de cierre a 390×844 en la nueva referencia PNG.
6. Recorrer POS, ERP, KDS y regreso a Inicio; si hubiera que revertir, retirar
   las rutas y estilos nuevos sin migración de datos.
