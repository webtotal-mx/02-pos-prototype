# Proposal

## Why

La vista POS actualmente muestra la distribución del salón, pero las acciones de
abrir mesa y gestionar cuenta no continúan hacia las pantallas representadas por
las referencias POS06, POS07 y POS08. Esto impide recorrer el flujo demostrativo
completo desde la selección de una mesa hasta el cierre de comanda y el cobro.

## What Changes

- Conectar la acción **Abrir mesa** de todas las mesas libres con una vista de
  mesa y comanda basada en POS06.
- Mostrar en esa vista la información ficticia correspondiente a la mesa
  seleccionada, sin reutilizar de forma incorrecta los datos de otra mesa.
- Conectar **Gestionar cuenta** desde el panel de comanda/cuenta actual con una
  vista basada en POS07.
- Agregar una vista intermedia de cierre de comanda, con una referencia PNG
  nueva en `docs/references/POS/`.
- Conectar el cierre de comanda con la pantalla de cobro basada en POS08.
- Mantener todas las acciones como demostrativas, sin persistencia, pagos reales,
  autenticación ni integración con dispositivos.
- Conservar la navegación existente entre Inicio, ERP, POS y KDS, así como el
  comportamiento responsive y el foco visible.

## Capabilities

### New Capabilities

<!-- No se crea una capacidad nueva: el flujo pertenece a la operación POS existente. -->

### Modified Capabilities

- `pos-salon`: ampliar el flujo contextual de mesa para soportar apertura de
  mesas libres, detalle de comanda, gestión de cuenta, cierre de comanda y
  navegación demostrativa hacia cobro.

## Impact

- `app.js`: estado de mesa seleccionada, vistas POS del flujo, acciones y
  navegación entre pasos.
- `styles.css`: componentes responsive para las vistas de mesa, cuenta, cierre y
  cobro.
- `docs/references/POS/`: nueva referencia PNG para cerrar la comanda.
- No se agregan dependencias npm, APIs, persistencia ni servicios externos.
