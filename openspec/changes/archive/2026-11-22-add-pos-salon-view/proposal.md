# Proposal

## Why

La vista POS actual permite explorar mesas y una cuenta, pero no comunica con suficiente claridad el estado operativo del salón ni reproduce la experiencia táctil mostrada en las referencias para móvil, tablet y escritorio. Este cambio consolida una vista de salón demostrativa que permita identificar rápidamente mesas libres, ocupadas, reservadas y por cobrar, y abrir la comanda o cuenta correspondiente sin presentar operaciones reales.

## What Changes

- Crear la capacidad POS de salón con una distribución responsive orientada a operación táctil.
- Presentar un resumen visible de mesas por estado: libres, ocupadas, reservadas y por cobrar.
- Mostrar tarjetas de mesa con estado textual y visual, datos ficticios de personas/mesero/horario y acciones contextuales.
- Permitir abrir una mesa disponible, consultar la comanda de una mesa ocupada y gestionar ilustrativamente una cuenta pendiente.
- Mantener la navegación existente entre Inicio, POS, KDS y ERP, así como el aviso persistente de prototipo y datos DEMO.
- Adaptar la vista a móvil, tablet y escritorio sin desbordamiento horizontal y con controles accionables.
- Mantener todas las acciones, estados, pagos y sincronizaciones como simulaciones sin persistencia ni integración externa.

## Capabilities

### New Capabilities

- `pos-salon`: Vista responsive y demostrativa para operar mesas, comandas y cuentas del salón mediante estados, tarjetas y acciones contextuales.

### Modified Capabilities

<!-- No se modifican los requisitos de la capacidad de navegación de la portada. -->

## Impact

- `app.js`: ampliar la vista POS, sus datos ficticios y sus interacciones de demostración.
- `styles.css`: agregar estilos para resumen de estados, tarjetas de mesa, filtros/acciones táctiles y breakpoints responsive del salón.
- `index.html`: sin cambios estructurales previstos; conserva el punto de entrada estático.
- No se agregan dependencias npm, APIs, persistencia, autenticación, dispositivos ni procesamiento de pagos.
- La implementación deberá tomar como referencia las pantallas POS de `docs/references/POS/` y respetar los manuales de marca en `docs/brand/`.
