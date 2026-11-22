# Design

## Context

La vista KDS se renderiza desde `app.js` como parte del enrutamiento hash y actualmente presenta tarjetas estáticas cuyas acciones solo generan una respuesta visual limitada. El prototipo usa HTML, CSS y JavaScript nativos, datos ficticios y no tiene persistencia ni backend. Las referencias de `docs/references/KDS/` establecen el tablero de cocina, el detalle de la Comanda #4590 y los estados de excepción.

## Goals / Non-Goals

**Goals:**

- Mantener una sola experiencia KDS accesible desde la pantalla inicial.
- Representar un modelo de estado demo compartido entre tablero y detalle.
- Permitir navegación hash al detalle de #4590 y regreso al tablero.
- Hacer visibles las transiciones, confirmaciones, restricciones y estados de conectividad.
- Mantener consistencia con marca, vocabulario KDS y comportamiento responsive existente.

**Non-Goals:**

- Persistir estados después de recargar la página.
- Conectar comandas con POS, ERP, impresoras, pantallas o servicios externos.
- Procesar pagos, validar alergias en sistemas reales o enviar órdenes a producción.
- Crear una vista TV sin interacción distinta del flujo KDS interactivo.

## Decisions

### Estado demo en memoria, separado de la URL

Se mantendrá una colección de comandas en memoria con un estado normalizado (`new`, `preparing`, `ready`, `completed`) y una bandera de excepción para #4590. La URL solo representará la vista (`#kds` o el detalle), mientras que el estado de la comanda permanecerá disponible al cambiar de vista durante la sesión.

**Alternativa considerada:** codificar cada estado en el hash. Se descarta porque mezclaría navegación con datos de demostración y dificultaría mantener el tablero y el detalle sincronizados.

### Acciones centralizadas con transiciones válidas

Las acciones pasarán por un único controlador que valide el estado actual, solicite confirmación cuando exista restricción y después vuelva a renderizar. Las transiciones inválidas no deben cambiar la comanda y deben comunicar el resultado mediante un aviso visible.

**Alternativa considerada:** mutar clases CSS directamente desde cada botón. Se descarta porque duplicaría reglas y permitiría inconsistencias entre tablero y detalle.

### Detalle específico y extensible por identificador

El detalle se resolverá por identificador de comanda, comenzando con `#4590`, y mostrará los mismos datos que la tarjeta más la alerta y las notas completas. La estructura permitirá agregar otras comandas sin crear una ruta o plantilla completamente distinta.

**Alternativa considerada:** una página HTML independiente. Se descarta porque rompería el prototipo estático de una sola entrada y duplicaría navegación y estilos.

### Referencias visuales como entregables de diseño

Se documentarán seis imágenes propuestas en `docs/references/KDS/` para cubrir estado nuevo, preparación, listo, confirmación de restricción, desconexión y acción completada. Las imágenes serán referencias visuales del prototipo, no activos funcionales ni sustitutos de capas HTML editables.

## Risks / Trade-offs

- **[Estado reiniciado al recargar]** → Mostrar claramente que es una demo y no agregar persistencia sin solicitud explícita.
- **[Confusión entre entrega demo y entrega real]** → Usar etiquetas `DEMO`, mensajes no transaccionales y avisos de sincronización simulada.
- **[Alerta dependiente del color]** → Combinar color naranja/rojo con título, texto explícito, icono o símbolo y acción de confirmación.
- **[Tablero saturado en pantallas pequeñas]** → Conservar columnas legibles y permitir desplazamiento horizontal o apilamiento responsive según los estilos existentes.
- **[Diferencia entre referencias y prototipo actual]** → Revisar las cinco referencias KDS existentes antes de ajustar estilos y validar que el vocabulario permanezca en español mexicano.
