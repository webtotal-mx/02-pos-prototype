# Tasks

## 1. Modelo demo y navegación KDS

- [x] 1.1 Definir la colección en memoria de comandas, estados y datos de #4590 en `app.js`; verificar que el estado inicial ubique #4590 en `Nuevos` sin agregar persistencia.
- [x] 1.2 Completar el enrutamiento hash para `#kds` y el detalle de la Comanda #4590; verificar que la tarjeta KDS de la pantalla inicial abra el tablero y que `Regresar a comandas` conserve el estado actual.
- [x] 1.3 Renderizar el tablero con columnas `Nuevos`, `En preparación` y `Listos`, tarjetas y acciones contextuales; verificar visualmente que cada comanda se muestre en una sola columna.

## 2. Transiciones y excepciones

- [x] 2.1 Implementar las transiciones `Nuevos` → `En preparación` → `Listos` → retirada del tablero mediante acciones demo; verificar que cada acción mueva o retire la comanda y muestre confirmación.
- [x] 2.2 Implementar el detalle de #4590 con productos, cantidades, notas, hora demo y alerta de alergia/restricción; verificar que el contenido coincida con la referencia `03- KDS · COMANDA #4590 · MESA 07.png`.
- [x] 2.3 Agregar confirmación explícita antes de avanzar una comanda con restricción y conservar el estado cuando se cancela; verificar ambos caminos desde el detalle y desde la tarjeta.
- [x] 2.4 Agregar avisos visibles de DEMO, sincronización simulada, desconexión y acciones completadas; verificar que ningún mensaje afirme persistencia o envío real.

## 3. Tratamiento visual y referencias

- [x] 3.1 Ajustar `styles.css` para estados, botones, alerta, confirmación, avisos y responsive KDS; verificar contraste visual, foco visible y legibilidad en el viewport de referencia.
- [x] 3.2 Crear o documentar en `docs/references/KDS/` las seis referencias visuales propuestas para nuevo, preparación, listo, restricción, desconexión y acción completada; verificar que los archivos estén nombrados y asociados al flujo.
- [x] 3.3 Revisar textos visibles para conservar español mexicano, vocabulario `Comanda`, `Mesa`, `Preparando`/`Listo` y el carácter demostrativo; verificar mediante inspección de la interfaz.

## 4. Validación integrada

- [x] 4.1 Ejecutar `node --check app.js` y verificar que no existan errores de sintaxis.
- [x] 4.2 Iniciar el servidor con `npm run dev`, cargar `http://localhost:4173` y recorrer inicio → KDS → detalle → cada transición; verificar el flujo en navegador y documentar cualquier limitación.
