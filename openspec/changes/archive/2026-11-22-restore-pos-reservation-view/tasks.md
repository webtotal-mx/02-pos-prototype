# Tasks

## 1. Ruta y resolución de reservas

- [x] 1.1 Extender el parser de hashes para reconocer `#pos-reservation-<id>` y validar que la mesa exista y tenga una reserva; verificar que un identificador inválido muestre el estado seguro existente sin error de JavaScript.
- [x] 1.2 Conectar la acción **Ver reserva** de las mesas reservadas con la nueva ruta contextual; verificar que las mesas 05 y 09 cambien al hash correspondiente al activarse desde el salón.

## 2. Vista contextual demostrativa

- [x] 2.1 Implementar el renderizador de consulta de reserva usando el shell contextual existente y mostrar Mesa, estado `Reservada`, horario, personas y persona invitada; verificar mediante inspección del DOM que los datos de las mesas 05 y 09 sean distintos y correctos.
- [x] 2.2 Agregar el aviso DEMO, la acción visible para regresar al salón y el estado de consulta sin acciones de edición; verificar que regresar a `#pos` conserve ambas mesas como `Reservada` y que no cambie `posTables`.

## 3. Presentación responsive y accesibilidad

- [x] 3.1 Reutilizar o extender los estilos contextuales para la tarjeta de reserva en móvil, tablet y escritorio, conservando Montserrat, Inter, paleta de marca y foco visible; verificar visualmente los anchos aproximados de 390px, 768px y escritorio sin desbordamiento horizontal.
- [x] 3.2 Verificar que el enlace de regreso tenga etiqueta comprensible, objetivo táctil utilizable y foco visible, y que la vista de reserva pueda recorrerse y activarse con teclado.

## 4. Validación de integración

- [x] 4.1 Ejecutar `node --check app.js` y levantar el servidor definido en `package.json`; verificar que `http://localhost:4173` cargue `index.html` y que `#pos-reservation-05` renderice la vista directamente.
- [x] 4.2 Recorrer Inicio → POS → reservas 05 y 09 → regreso al salón → ERP/KDS → Inicio; verificar que no haya errores de consola, que no se agreguen dependencias ni persistencia y que el lenguaje mantenga el carácter DEMO.

## Workflow follow-up

- Revisar la implementación y ejecutar la verificación OpenSpec antes de archivar el cambio.
- Archivar el cambio cuando las tareas y las evidencias de validación estén completas.
