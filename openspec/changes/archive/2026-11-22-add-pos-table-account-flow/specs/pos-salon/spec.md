# Spec Delta

## MODIFIED Requirements

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

## ADDED Requirements

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
