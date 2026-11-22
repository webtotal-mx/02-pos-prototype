# Spec Delta

## Purpose

Permite validar el flujo demostrativo de cocina desde la recepción de una comanda hasta su entrega, incluyendo el detalle de pedido, estados operativos y excepciones visibles para el personal de cocina.

## ADDED Requirements

### Requirement: KDS muestra comandas agrupadas por estado

El sistema SHALL mostrar las comandas demo agrupadas en las columnas `Nuevos`, `En preparación` y `Listos`, con la mesa, antigüedad, productos principales y una acción disponible.

#### Scenario: Tablero KDS inicial

- **WHEN** la persona usuaria entra a la vista KDS desde la tarjeta KDS de la pantalla inicial
- **THEN** el tablero muestra las tres columnas y la Comanda #4590 en `Nuevos`

#### Scenario: Estado demo de sincronización

- **WHEN** la persona usuaria observa el tablero KDS
- **THEN** ve una indicación de datos DEMO y una sincronización ficticia sin afirmar conexión con un sistema productivo

### Requirement: Persona usuaria puede consultar el detalle de una comanda

El sistema SHALL permitir abrir el detalle de una comanda desde el tablero y regresar al tablero sin perder el estado demo mostrado.

#### Scenario: Abrir detalle de la Comanda #4590

- **WHEN** la persona usuaria selecciona la Comanda #4590 o su acción `Ver detalle`
- **THEN** se muestra `Comanda #4590 · Mesa 07`, hora de recepción, productos, cantidades, notas y la alerta de alergia/restricción

#### Scenario: Regresar al tablero

- **WHEN** la persona usuaria activa `Regresar a comandas`
- **THEN** vuelve a la vista KDS con la comanda en la columna que corresponda a su estado actual

### Requirement: Persona usuaria puede avanzar una comanda entre estados

El sistema SHALL ofrecer acciones demo para mover una comanda únicamente en el orden `Nuevos` → `En preparación` → `Listos` → retirada del tablero activo.

#### Scenario: Iniciar preparación

- **WHEN** la persona usuaria activa `Iniciar preparación` sobre una comanda en `Nuevos`
- **THEN** la comanda aparece en `En preparación` y se muestra una confirmación visible de la acción

#### Scenario: Marcar como listo

- **WHEN** la persona usuaria activa `Marcar como listo` sobre una comanda en `En preparación`
- **THEN** la comanda aparece en `Listos` y se muestra una confirmación visible de la acción

#### Scenario: Entregar pedido

- **WHEN** la persona usuaria activa `Entregar pedido` sobre una comanda en `Listos`
- **THEN** la comanda deja de aparecer en las columnas activas y se muestra una confirmación demo de entrega

### Requirement: KDS protege la confirmación de restricciones

El sistema SHALL solicitar una confirmación explícita antes de avanzar una comanda que tenga una alerta de alergia o restricción.

#### Scenario: Confirmar restricción de la Comanda #4590

- **WHEN** la persona usuaria intenta avanzar la Comanda #4590 con la alerta activa
- **THEN** se muestra `ALERGIA / RESTRICCIÓN · CONFIRMACIÓN OBLIGATORIA` junto con el mensaje `Sin cacahuate. Cliente con alergia confirmada.` y una acción explícita para continuar

#### Scenario: Cancelar confirmación

- **WHEN** la persona usuaria cancela la confirmación de la restricción
- **THEN** la comanda conserva su estado anterior y la alerta permanece visible

### Requirement: KDS comunica estados excepcionales de forma demostrativa

El sistema SHALL representar los estados de error o desconexión con texto y elementos visuales complementarios, sin simular una sincronización real.

#### Scenario: Vista desconectada

- **WHEN** se activa el estado demo sin conexión
- **THEN** el tablero muestra un aviso de conectividad, conserva las comandas ficticias visibles y evita afirmar que los cambios fueron enviados a producción
