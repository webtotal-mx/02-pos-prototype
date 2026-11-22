# Proposal

## Why

El prototipo actualmente abre directamente la vista ERP y no ofrece un punto de entrada claro para descubrir las tres experiencias disponibles. Se necesita una portada inicial que comunique la propuesta de Web Total POS y permita elegir rápidamente entre POS, KDS y ERP.

## What Changes

- Agregar una vista inicial de bienvenida para el prototipo HTML.
- Presentar accesos visibles a las experiencias POS, KDS y ERP.
- Incorporar una breve descripción del propósito y contexto de cada experiencia.
- Usar navegación mediante hash para abrir cada vista y permitir regresar a la portada.
- Mantener las acciones, datos y estados como demostrativos.
- Aplicar una composición responsive alineada con las referencias visuales y la identidad de Web Total POS.

## Capabilities

### New Capabilities

- `prototype-home-navigation`: proporciona una portada inicial clara para el prototipo de Web Total POS, desde la que las personas pueden identificar y abrir las experiencias de operación del salón, cocina y administración desde un único punto de entrada.

### Modified Capabilities

<!-- No existen capacidades previamente especificadas en este proyecto. -->

## Impact

- `index.html`: seguirá siendo el punto de entrada del prototipo.
- `app.js`: incorporará la vista inicial y el enrutamiento visual mediante hash.
- `styles.css`: incorporará los estilos responsive de la portada, tarjetas y estados de navegación.
- No se agregan dependencias, APIs, persistencia, autenticación ni integraciones externas.
