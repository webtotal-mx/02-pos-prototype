# Design

## Context

El prototipo es una SPA estática que renderiza las vistas desde `app.js` y
usa hashes para navegar. El flujo contextual vigente ya comparte encabezado,
aviso DEMO, ancho de contenido, foco visible y breakpoints en `styles.css`.
Las mesas reservadas en `posTables` ya contienen `time`, `people` y `guest`,
pero el manejador activo de la vista contextual solo muestra un toast para la
acción `reservation`.

La implementación debe conservar HTML, CSS y JavaScript nativos, la fuente de
datos ficticios en memoria y el carácter no persistente del prototipo.

## Goals / Non-Goals

**Goals:**

- Convertir **Ver reserva** en una transición a una vista contextual dedicada.
- Mostrar los campos disponibles de `table.reservation` junto con el
  identificador y estado de la mesa.
- Reutilizar la estructura visual contextual existente y sus reglas responsive.
- Permitir regresar al salón mediante un enlace hash claro y accesible.
- Mantener la consulta como lectura DEMO sin alterar `posTables`.

**Non-Goals:**

- Crear, editar, cancelar o confirmar reservas.
- Agregar calendario, búsqueda, filtros, backend, almacenamiento o una nueva
  dependencia.
- Cambiar las vistas de comanda, cuenta, cierre, cobro, ERP o KDS.
- Crear una pantalla distinta para cada mesa reservada.

## Decisions

### 1. Usar una ruta hash contextual `reservation`

El parser reconocerá hashes con la misma estructura de los flujos actuales,
por ejemplo `#pos-reservation-05`. La acción **Ver reserva** navegará a esta
ruta y el renderizador resolverá la mesa desde la colección existente.

Se elige una ruta explícita en lugar de solo reemplazar el panel lateral
porque conserva el contexto al recargar o compartir la vista y mantiene el
patrón ya utilizado por Mesa, Cuenta, Cerrar comanda y Cobro. No se agregará
un router ni una página HTML nueva.

### 2. Crear un renderizador específico de reserva

Se agregará un renderizador de reserva al flujo contextual. Compartirá
`flowHeader`, `flowNotice`, el contenedor `context-main`, la navegación de
regreso y las clases de estado existentes, pero usará una tarjeta de resumen
de reserva con:

- Mesa y estado `Reservada`.
- Horario de llegada ficticio.
- Número de personas.
- Nombre de la persona invitada.
- Aviso de consulta DEMO sin cambios.

No se reutilizará `flowOrderCard`, porque una reserva no es una comanda y
carece de artículos o total.

### 3. Mantener la acción como navegación sin mutación

`handleFlowAction` enviará la acción `reservation` al hash contextual y
`renderFlow` mostrará la vista cuando el hash sea válido. La vista solo
leerá `table.reservation`; no se añadirá una reserva derivada ni se cambiará
el estado de la mesa. Los identificadores inexistentes seguirán el estado
seguro de ruta no encontrada ya usado por el flujo.

### 4. Reutilizar estilos y extender solo lo necesario

La tarjeta usará las clases contextuales existentes para bordes, tipografía,
avisos, botones, foco y layout móvil. Si la composición necesita una
variante, se añadirá una clase específica de reserva en `styles.css` con los
mismos tokens de marca. No se crearán estilos paralelos ni se modificarán
breakpoints globales sin necesidad.

## Risks / Trade-offs

- [Una ruta de reserva podría recibir una mesa no reservada] → Validar la
  mesa y su objeto `reservation` antes de renderizar; mostrar el estado seguro
  del prototipo si no existe.
- [La vista podría parecer una operación editable] → Usar lenguaje de
  consulta, un aviso DEMO persistente y no ofrecer botones de confirmar,
  editar o cancelar.
- [La implementación activa convive con helpers de flujo anteriores en el
  archivo] → Integrar el cambio en el parser, renderizador y manejador activos
  de `renderFlow`, sin ampliar la duplicación ni alterar recorridos existentes.
- [El nombre de la persona invitada puede confundirse con responsable de mesa]
  → Etiquetar explícitamente el campo como persona invitada y mantener el
  horario y las personas como datos separados.

## Migration Plan

1. Ampliar el parser de hash y el despacho de `renderFlow` para la vista de
   reserva.
2. Conectar **Ver reserva** con la nueva ruta y agregar el renderizador y los
   estilos mínimos necesarios.
3. Ejecutar `node --check app.js` y validar la vista servida desde
   `http://localhost:4173`.
4. Recorrer las mesas 05 y 09, regresar al salón y verificar que sus estados y
   datos no cambien, además de revisar Inicio, ERP y KDS.
5. Si se revierte el cambio, retirar la ruta y el renderizador; no se requiere
   migración de datos porque no hay persistencia.
