# Proposal

## Why

La experiencia KDS actual permite visualizar comandas, pero no representa el flujo operativo de cocina ni permite consultar el detalle de una comanda. Esto limita la validación del prototipo frente a las referencias de comandas, estados y excepciones de sincronización.

## What Changes

- Vincular la tarjeta KDS de la pantalla inicial con el tablero de comandas.
- Incorporar una vista de detalle para la Comanda #4590 · Mesa 07.
- Permitir avanzar comandas entre `Nuevos`, `En preparación` y `Listos`.
- Agregar las acciones demo `Iniciar preparación`, `Marcar como listo` y `Entregar pedido`.
- Mostrar confirmación obligatoria para la alerta de alergia/restricción de la Comanda #4590.
- Mantener visibles los avisos de datos DEMO, sincronización simulada y estado sin conexión.
- Documentar referencias visuales adicionales para las variantes del flujo KDS en `docs/references/KDS`.

## Capabilities

### New Capabilities

- `kds-order-workflow`: tablero KDS, detalle de comanda y transición demostrativa entre estados de cocina.

### Modified Capabilities

<!-- No se modifican requisitos de capacidades existentes. La tarjeta KDS ya existe; el cambio completa su destino y flujo asociado. -->

## Impact

- `app.js`: enrutamiento hash, renderizado del tablero y detalle, estado demo de comandas y acciones de transición.
- `styles.css`: estilos para estados, acciones, alertas, confirmaciones y vista de detalle KDS.
- `docs/references/KDS/`: nuevas referencias visuales del flujo propuesto.
- No se agregan dependencias, persistencia, backend, sincronización real ni procesamiento de pagos.
