# Tasks

## 1. Datos y estructura de la vista POS

- [x] 1.1 Reorganizar la función `pos()` en `app.js` para usar una colección de mesas ficticias con estados Libre, Ocupada, Reservada y Por cobrar, y derivar el resumen de cantidades desde esos datos; verificar que `#pos` renderice los cuatro indicadores y todas las tarjetas esperadas.
- [x] 1.2 Construir el marcado semántico del salón con encabezado, resumen de estados, tarjetas de mesa, acciones contextuales y panel de comanda/cuenta; verificar que cada mesa muestre identificador, estado textual y contexto ficticio relevante.
- [x] 1.3 Mantener el aviso de prototipo y datos DEMO en la vista POS, y conservar enlaces funcionales a Inicio, ERP y KDS; verificar que la navegación entre hashes existentes siga renderizando sus vistas sin errores.

## 2. Interacciones demostrativas

- [x] 2.1 Conectar las acciones de mesa libre, ocupada, reservada y por cobrar al patrón `data-action` existente; verificar que cada acción produzca un feedback visual claro y no realice persistencia.
- [x] 2.2 Hacer que el panel de detalle conserve la mesa, comanda, artículos, notas y total ficticios seleccionados, incluyendo la acción "Gestionar cuenta"; verificar que el detalle corresponda a la tarjeta activada y que el cobro se comunique como ilustrativo.
- [x] 2.3 Actualizar los nombres de funciones, variables y clases nuevas en inglés sin cambiar el texto visible en español mexicano; verificar que `node --check app.js` termine correctamente.

## 3. Estilos responsive y accesibilidad visual

- [x] 3.1 Agregar estilos para el resumen, tarjetas y panel de detalle usando la paleta de marca, Montserrat para títulos e Inter para cuerpo, con clases semánticas por estado y señales redundantes de texto/forma/color; verificar visualmente la legibilidad de Libre, Ocupada, Reservada y Por cobrar.
- [x] 3.2 Ajustar breakpoints de POS para móvil, tablet y escritorio, incluyendo una disposición táctil sin desbordamiento horizontal y objetivos accionables generosos; verificar la vista en anchos aproximados de 390px, 768px y 1024px.
- [x] 3.3 Mantener foco visible, etiquetas persistentes y controles HTML accionables en la vista POS; verificar navegación básica con teclado y que las acciones no dependan únicamente del color o de un símbolo.

## 4. Validación de integración

- [x] 4.1 Ejecutar las validaciones disponibles (`node --check app.js` y el servidor definido por `npm run dev`) y comprobar que `index.html` carga correctamente desde `http://localhost:4173`.
- [x] 4.2 Recorrer manualmente Inicio → POS → detalle/feedback → KDS/ERP → Inicio y registrar cualquier limitación del prototipo; verificar que no se hayan agregado dependencias, persistencia, autenticación ni pagos reales.

## Workflow follow-up

- Revisar el cambio completo y solicitar la verificación OpenSpec antes de archivarlo.
