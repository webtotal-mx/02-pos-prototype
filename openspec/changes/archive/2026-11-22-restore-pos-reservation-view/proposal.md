# Proposal

## Why

Las mesas reservadas del POS ya muestran horario, número de personas y nombre
de la persona invitada, pero **Ver reserva** solo actualiza el panel lateral y
un aviso temporal. Esto deja la consulta menos clara que los demás recorridos
contextuales del salón y dificulta revisar la reserva en móvil. Se necesita
restaurar una vista dedicada que conserve el contexto de la mesa y haga
explícito que la consulta es demostrativa y no modifica la reserva.

## What Changes

- Agregar una ruta hash contextual para consultar una reserva desde una mesa
  reservada.
- Renderizar una vista de detalle con mesa, estado, horario, personas,
  persona invitada y avisos de datos DEMO.
- Conectar la acción **Ver reserva** de las mesas reservadas con la nueva vista,
  incluyendo regreso al salón.
- Mantener la consulta sin persistencia, mutaciones de estado, confirmaciones
  reales ni integración con un sistema de reservaciones.
- Conservar la navegación global, el responsive existente, el foco visible y
  el vocabulario de POS en español mexicano.

## Capabilities

### New Capabilities

<!-- No se introduce una capacidad independiente; la consulta pertenece al
     comportamiento durable del salón POS. -->

### Modified Capabilities

- `pos-salon`: las mesas reservadas deben abrir una vista contextual que
  presente la información ficticia de la reserva y permita regresar al salón
  sin alterar sus datos.

## Impact

- `app.js`: ampliar el parser de rutas, el renderizado contextual y el manejo
  de la acción de reserva.
- `styles.css`: reutilizar y, si hace falta, extender los estilos del flujo
  contextual para el detalle responsive de reserva.
- `openspec/specs/pos-salon/spec.md`: agregar requisitos y escenarios para la
  consulta contextual de reservas.
- No se agregan dependencias, APIs, persistencia, autenticación, dispositivos
  ni procesamiento de pagos.
