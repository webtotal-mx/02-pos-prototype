# Tasks

## 1. Datos ficticios y navegación del flujo

- [x] 1.1 Ampliar los datos DEMO de las mesas libres con la información ficticia necesaria para POS06 y crear un resolver que mantenga coherente la mesa seleccionada; verificar con una inspección del DOM que cada mesa libre conserva su propio identificador, comanda y contexto.
- [x] 1.2 Implementar el parser y despacho de rutas hash para salón, Mesa y Comanda, Gestionar cuenta, Cerrar comanda y Cobro, incluyendo un estado seguro para IDs inválidos; verificar que cada hash renderice una vista sin error y que el ID de mesa se conserve.

## 2. Vistas y transiciones contextuales

- [x] 2.1 Implementar la vista Mesa y Comanda basada en POS06 y conectar la acción "Abrir mesa" de todas las mesas libres; verificar el recorrido desde las mesas 01, 03 y 06 y la presentación de sus datos específicos.
- [x] 2.2 Implementar la vista Gestionar cuenta basada en POS07 y conectar el botón existente del panel de comanda/cuenta con la mesa actualmente seleccionada; verificar que el encabezado, la comanda y las acciones correspondan a la mesa de origen.
- [x] 2.3 Implementar la vista demostrativa Cerrar comanda como paso entre cuenta y cobro, con resumen y acción explícita para continuar; verificar que la navegación conserve la mesa y la comanda seleccionadas.
- [x] 2.4 Implementar la vista de Cobro basada en POS08 y el registro "Registrar pago DEMO"; verificar que propina, método de pago, aviso offline y resultado ilustrativo aparezcan sin mutar los datos base ni procesar pagos.

## 3. Estilos, accesibilidad y referencia visual

- [x] 3.1 Agregar estilos compartidos y responsive para las cuatro vistas contextuales, manteniendo Montserrat, Inter, paleta de marca, etiquetas DEMO, foco visible y objetivos táctiles; verificar visualmente los anchos aproximados de 390px, 768px y escritorio sin desbordamiento horizontal.
- [x] 3.2 Capturar la vista Cerrar comanda servida localmente en viewport 390×844 y guardar `docs/references/POS/09- POS · Cerrar comanda · 390x844.png`; verificar que el archivo exista, mida 390×844 y refleje la vista implementada.

## 4. Validación de integración del prototipo

- [x] 4.1 Ejecutar `node --check app.js` y levantar el servidor con el comando definido en `package.json`; verificar que `index.html` cargue desde `http://localhost:4173`.
- [x] 4.2 Recorrer Inicio → POS → abrir cada mesa libre → gestionar cuenta → cerrar comanda → cobro DEMO → ERP/KDS → Inicio; verificar que la navegación global siga funcionando, que no haya errores de consola y que ninguna acción afirme persistencia o cobro real.

## Workflow follow-up

- Revisar la implementación y ejecutar la verificación OpenSpec antes de archivar el cambio.
- Archivar el cambio cuando las tareas y las evidencias de validación estén completas.
