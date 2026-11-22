# Spec Delta

## Purpose

Permite visualizar y operar de forma demostrativa la distribución del salón, sus mesas, comandas y cuentas desde una experiencia clara y adaptable a los dispositivos usados por el personal.

## ADDED Requirements

### Requirement: El salón presenta un resumen de estados

La vista POS SHALL presentar un resumen visible y comprensible de las mesas libres, ocupadas, reservadas y por cobrar.

#### Scenario: La persona consulta la distribución del salón

- **WHEN** la persona abre la vista POS
- **THEN** observa un indicador diferenciado para cada estado y su cantidad ficticia correspondiente

#### Scenario: El resumen conserva significado sin depender del color

- **WHEN** la persona revisa los indicadores de estado
- **THEN** cada estado se identifica mediante texto y una señal visual adicional, no únicamente mediante color

### Requirement: Las mesas muestran su estado y contexto operativo

Cada mesa SHALL mostrarse como una tarjeta con identificador, estado textual y contexto ficticio relevante para ese estado.

#### Scenario: La persona identifica una mesa libre

- **WHEN** observa una tarjeta de mesa libre
- **THEN** la tarjeta muestra el identificador, el estado "Libre" y una indicación de disponibilidad

#### Scenario: La persona identifica una mesa ocupada

- **WHEN** observa una tarjeta de mesa ocupada
- **THEN** la tarjeta muestra el identificador, el estado "Ocupada" y datos ficticios de personas o responsable

#### Scenario: La persona identifica una mesa reservada o por cobrar

- **WHEN** observa una tarjeta reservada o por cobrar
- **THEN** la tarjeta muestra el estado correspondiente y el dato contextual ficticio disponible, como horario, personas o responsable

### Requirement: La persona puede abrir el flujo contextual de una mesa

La vista SHALL ofrecer una acción visible y accionable en cada mesa para abrir el siguiente paso pertinente del flujo demostrativo.

#### Scenario: La persona abre una mesa libre

- **WHEN** activa la acción de una mesa libre
- **THEN** el prototipo muestra una confirmación visual de apertura simulada sin crear persistencia

#### Scenario: La persona consulta una mesa ocupada

- **WHEN** activa la acción de una mesa ocupada
- **THEN** el prototipo muestra la comanda o cuenta ficticia asociada a esa mesa

#### Scenario: La persona gestiona una cuenta por cobrar

- **WHEN** activa la acción de una mesa por cobrar
- **THEN** el prototipo muestra una confirmación de gestión ilustrativa y deja claro que no es un cobro real

### Requirement: El detalle de comanda o cuenta conserva el contexto de la mesa

Cuando se abre el detalle de una mesa, el panel SHALL mostrar la mesa, el identificador de comanda, los artículos ficticios, el total y una acción de cuenta claramente demostrativa.

#### Scenario: La persona revisa una comanda

- **WHEN** abre el detalle de una mesa ocupada
- **THEN** identifica la mesa y la comanda, consulta artículos y notas ficticias, y ve el total de la cuenta

#### Scenario: La persona activa gestionar cuenta

- **WHEN** activa la acción de gestionar cuenta
- **THEN** el prototipo muestra un resultado ilustrativo sin procesar pago ni afirmar una transacción

### Requirement: La vista POS se adapta al dispositivo y permite interacción accesible

La vista SHALL conservar jerarquía, legibilidad y controles accionables en móvil, tablet y escritorio, incluyendo foco visible y ausencia de desbordamiento horizontal.

#### Scenario: La persona usa la vista en móvil

- **WHEN** el ancho disponible corresponde a un teléfono
- **THEN** el resumen y las tarjetas se reorganizan sin desbordamiento y los controles mantienen un objetivo táctil utilizable

#### Scenario: La persona usa la vista en tablet o escritorio

- **WHEN** el ancho disponible corresponde a tablet o escritorio
- **THEN** la distribución utiliza el espacio disponible para mostrar las mesas y el detalle sin perder sus jerarquías

#### Scenario: La persona navega con teclado

- **WHEN** recorre los controles de la vista mediante teclado
- **THEN** cada control accionable recibe un foco visible y puede activarse sin apuntador

### Requirement: El flujo mantiene el carácter demostrativo del prototipo

Los datos, cambios de estado, sincronizaciones y pagos de la vista POS SHALL identificarse como ficticios o ilustrativos y no SHALL persistir fuera de la sesión de demostración.

#### Scenario: La persona observa el encabezado del POS

- **WHEN** abre la vista del salón
- **THEN** identifica que está en un prototipo con datos DEMO

#### Scenario: La persona completa una acción simulada

- **WHEN** abre una mesa, consulta una comanda o gestiona una cuenta
- **THEN** recibe una respuesta visual demostrativa y ninguna afirmación de operación real o persistente
