# Tasks

## 1. Initial View and Navigation

- [x] 1.1 Actualizar `index.html` para que el contenedor de la aplicación tenga semántica de contenido principal y metadatos adecuados para la portada; verificar que el documento siga cargando `styles.css` y `app.js` sin errores.
- [x] 1.2 Agregar la vista `home` en `app.js` con marca, mensaje principal, etiqueta de datos DEMO y tarjetas diferenciadas para POS, KDS y ERP; verificar que la URL base muestre la portada en lugar de ERP.
- [x] 1.3 Implementar la navegación mediante `#home`, `#pos`, `#kds` y `#erp`, incluyendo normalización de hashes desconocidos y actualización por `hashchange`; verificar el acceso directo a cada hash y el regreso a la portada.
- [x] 1.4 Incorporar un control visible `Inicio` en el shell compartido y conservar el selector existente entre POS, KDS y ERP; verificar que las tres vistas existentes sigan renderizando sus contenidos y acciones DEMO.

## 2. Responsive Design and Accessibility

- [x] 2.1 Crear los estilos de la portada en `styles.css` usando las variables, tipografías, colores y tratamiento de marca existentes; verificar la jerarquía visual en una ventana de escritorio.
- [x] 2.2 Agregar estados hover, `:focus-visible`, contraste y objetivos táctiles para las tarjetas y controles; verificar que la navegación con teclado muestre foco visible y active cada destino.
- [x] 2.3 Ajustar el layout responsive para tablet y móvil sin desbordamiento horizontal; verificar la reorganización de las tarjetas en una ventana estrecha.

## 3. Integration Verification

- [x] 3.1 Ejecutar `node --check app.js` y corregir cualquier error de sintaxis; verificar que la comprobación termine exitosamente.
- [x] 3.2 Levantar el servidor con `npm run dev` y solicitar `http://localhost:4173` para confirmar una respuesta HTTP exitosa y la carga de `index.html`.
- [x] 3.3 Recorrer manualmente los flujos portada → POS/KDS/ERP → Inicio y confirmar que los datos, pagos y estados continúan marcados como DEMO; registrar cualquier pendiente visual o funcional antes de cerrar el cambio.
