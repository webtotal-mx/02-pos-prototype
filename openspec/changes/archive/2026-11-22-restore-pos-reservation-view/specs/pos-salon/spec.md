# Spec Delta

## ADDED Requirements

### Requirement: La persona puede consultar una reserva en una vista contextual

Una mesa reservada SHALL abrir una vista dedicada que muestre el estado de la mesa y los datos ficticios disponibles de su reserva.

#### Scenario: La persona abre una reserva desde el salón

- **WHEN** activa **Ver reserva** en una mesa reservada
- **THEN** el prototipo muestra una vista contextual con el identificador de la mesa, el estado "Reservada", el horario, el número de personas y el nombre de la persona invitada

#### Scenario: La persona regresa al salón desde la reserva

- **WHEN** activa la acción visible para regresar al salón
- **THEN** el prototipo vuelve a la distribución de mesas y conserva las mesas reservadas como reservadas

#### Scenario: La consulta mantiene el carácter demostrativo

- **WHEN** la persona revisa o abandona la vista de reserva
- **THEN** observa una indicación de datos DEMO y la consulta no modifica la reserva, no crea persistencia ni confirma una operación real

### Requirement: La vista contextual de reserva conserva accesibilidad y adaptación responsive

La vista de reserva SHALL mantener jerarquía legible, controles accionables y foco visible en móvil, tablet y escritorio.

#### Scenario: La persona consulta una reserva desde un teléfono

- **WHEN** abre la reserva en un ancho reducido
- **THEN** la información y las acciones se reorganizan sin desbordamiento horizontal y el control de regreso conserva un objetivo táctil utilizable

#### Scenario: La persona navega la reserva con teclado

- **WHEN** recorre los controles de la vista mediante teclado
- **THEN** el control de regreso recibe un foco visible y puede activarse sin apuntador
