# pos-salon Specification

## Purpose

Permite visualizar y operar de forma demostrativa la distribución del salón, sus mesas, comandas y cuentas desde una experiencia clara y adaptable a los dispositivos usados por el personal.

## Requirements

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

La vista SHALL ofrecer una acción visible y accionable en cada mesa para abrir el siguiente paso pertinente del flujo demostrativo y conservar la mesa seleccionada durante ese flujo.

#### Scenario: La persona abre una mesa libre

- **WHEN** activa la acción "Abrir mesa" de cualquier mesa libre
- **THEN** el prototipo abre la vista de Mesa y Comanda correspondiente a esa mesa, muestra sus datos ficticios y no crea persistencia

#### Scenario: La persona consulta una mesa ocupada

- **WHEN** activa la acción de una mesa ocupada
- **THEN** el prototipo muestra la comanda o cuenta ficticia asociada a esa mesa

#### Scenario: La persona gestiona una cuenta por cobrar

- **WHEN** activa la acción de una mesa por cobrar
- **THEN** el prototipo muestra la vista demostrativa de gestión de cuenta de esa mesa y deja claro que no es un cobro real

### Requirement: El detalle de comanda o cuenta conserva el contexto de la mesa

Cuando se abre el detalle de una mesa, el panel o vista SHALL mostrar la mesa seleccionada, su identificador de comanda cuando aplique, sus artículos ficticios, el total y la acción contextual disponible para continuar el flujo.

#### Scenario: La persona revisa una comanda

- **WHEN** abre el detalle de una mesa ocupada o abre una mesa libre
- **THEN** identifica la mesa seleccionada, consulta los datos ficticios de comanda, artículos, notas o alertas disponibles y ve el total o el estado de cuenta correspondiente

#### Scenario: La persona activa gestionar cuenta

- **WHEN** activa la acción "Gestionar cuenta" desde el detalle de una mesa con comanda
- **THEN** el prototipo abre la vista de gestión de cuenta asociada a la misma mesa sin procesar pago ni afirmar una transacción

### Requirement: La vista POS se adapta al dispositivo y permite interacción accesible

La vista SHALL conservar jerarquía, legibilidad y controles accionables en móvil, tablet y escritorio, incluyendo foco visible y ausencia de desbordamiento horizontal, también en las vistas contextuales de mesa, cuenta, cierre y cobro.

#### Scenario: La persona usa la vista en móvil

- **WHEN** el ancho disponible corresponde a un teléfono y recorre cualquier paso del flujo POS
- **THEN** el contenido se muestra en una columna sin desbordamiento y las acciones mantienen un objetivo táctil utilizable

#### Scenario: La persona usa la vista en tablet o escritorio

- **WHEN** el ancho disponible corresponde a tablet o escritorio
- **THEN** la distribución utiliza el espacio disponible sin perder la mesa seleccionada, sus datos ni la jerarquía de acciones

#### Scenario: La persona navega con teclado

- **WHEN** recorre los controles de la vista mediante teclado
- **THEN** cada control accionable recibe un foco visible y puede activarse sin apuntador

### Requirement: El flujo mantiene el carácter demostrativo del prototipo

Los datos, cambios de estado, sincronizaciones y pagos de la vista POS SHALL identificarse como ficticios o ilustrativos y no SHALL persistir fuera de la sesión de demostración.

#### Scenario: La persona observa el encabezado del POS

- **WHEN** abre la vista del salón o cualquier vista contextual del flujo POS
- **THEN** identifica que está en un prototipo con datos DEMO

#### Scenario: La persona completa una acción simulada

- **WHEN** abre una mesa, consulta una comanda, gestiona una cuenta, cierra una comanda o registra un pago
- **THEN** recibe una respuesta visual demostrativa y ninguna afirmación de operación real o persistente

### Requirement: El flujo de cuenta conduce al cierre y al cobro demostrativo

La vista POS SHALL ofrecer una secuencia comprensible desde la gestión de cuenta hasta el cierre de comanda y la pantalla de cobro, manteniendo la mesa seleccionada en cada paso.

#### Scenario: La persona abre gestionar cuenta

- **WHEN** activa "Gestionar cuenta" desde el detalle de una mesa
- **THEN** observa acciones de cuenta basadas en la referencia POS07, el identificador de comanda y la mesa seleccionada

#### Scenario: La persona inicia el cierre de comanda

- **WHEN** activa la acción de cerrar la comanda desde el flujo de cuenta
- **THEN** observa una vista de cierre de comanda con resumen ficticio y una acción explícita para continuar al cobro

#### Scenario: La persona continúa al cobro

- **WHEN** activa la acción para continuar al cobro desde el cierre de comanda
- **THEN** observa una pantalla basada en POS08 con resumen, propina, método de pago y la etiqueta de pago DEMO

#### Scenario: La persona registra un pago demostrativo

- **WHEN** activa "Registrar pago DEMO"
- **THEN** el prototipo muestra el resultado ilustrativo correspondiente, conserva el aviso de operación pendiente o sin conexión y no ejecuta un cobro real

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
