# Spec Delta

## Purpose

La capacidad proporciona una portada inicial clara para el prototipo de Web Total POS, de modo que las personas puedan identificar y abrir las experiencias de operación del salón, cocina y administración desde un único punto de entrada.

## ADDED Requirements

### Requirement: La portada presenta las experiencias disponibles

La vista inicial SHALL presentar accesos diferenciados para POS, KDS y ERP, con el nombre y una descripción breve de cada experiencia.

#### Scenario: La persona abre el prototipo sin una sección seleccionada

- **WHEN** la persona visita la URL base del prototipo sin un hash de sección válido
- **THEN** el sistema muestra la portada inicial en lugar de abrir directamente ERP, POS o KDS

#### Scenario: La persona identifica el destino de una tarjeta

- **WHEN** la persona observa la portada
- **THEN** cada acceso muestra una etiqueta y una descripción que permiten distinguir salón/POS, cocina/KDS y administración/ERP

### Requirement: La portada permite abrir una experiencia

La vista inicial SHALL permitir que la persona abra cualquiera de las tres experiencias mediante un control visible y accionable.

#### Scenario: La persona abre POS

- **WHEN** la persona activa el acceso de POS
- **THEN** el prototipo muestra la vista del salón y refleja la sección POS en la URL

#### Scenario: La persona abre KDS

- **WHEN** la persona activa el acceso de KDS
- **THEN** el prototipo muestra la vista de comandas de cocina y refleja la sección KDS en la URL

#### Scenario: La persona abre ERP

- **WHEN** la persona activa el acceso de ERP
- **THEN** el prototipo muestra el panel administrativo y refleja la sección ERP en la URL

### Requirement: La navegación permite regresar a la portada

Las vistas POS, KDS y ERP SHALL ofrecer una forma visible de regresar a la portada sin perder el carácter demostrativo del prototipo.

#### Scenario: La persona regresa desde una sección

- **WHEN** la persona activa el control para volver al inicio desde POS, KDS o ERP
- **THEN** el prototipo muestra nuevamente la portada y actualiza la URL para indicar que no hay una sección seleccionada

#### Scenario: La persona abre un hash de sección válido directamente

- **WHEN** la persona visita la URL con `#pos`, `#kds` o `#erp`
- **THEN** el prototipo abre directamente la sección correspondiente

### Requirement: La portada funciona en tamaños de pantalla compatibles

La portada SHALL conservar legibilidad, jerarquía visual y controles accionables en escritorio, tablet y móvil.

#### Scenario: La portada se muestra en una pantalla estrecha

- **WHEN** el ancho disponible corresponde a un dispositivo móvil
- **THEN** los accesos se reorganizan sin desbordamiento horizontal y sus controles siguen siendo utilizables

#### Scenario: La persona navega con teclado

- **WHEN** la persona recorre los accesos de la portada mediante teclado
- **THEN** cada control recibe un indicador de foco visible y puede activarse sin apuntador
