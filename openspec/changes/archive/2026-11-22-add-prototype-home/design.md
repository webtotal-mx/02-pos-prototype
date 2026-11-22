# Design

## Context

El prototipo es una aplicación estática con HTML, CSS y JavaScript nativos. `app.js` ya contiene las funciones de renderizado para ERP, POS y KDS, además de una barra de navegación común; actualmente `render()` inicia siempre en ERP. No hay router, persistencia ni dependencias de npm que deban conservar estado.

La portada deberá seguir las referencias de `docs/references/` y los lineamientos de `docs/brand/`, usando una composición moderna y minimalista, naranja de marca, carbón, blanco y tipografías ya declaradas en `styles.css`.

La capacidad `prototype-home-navigation` proporciona una portada inicial clara para el prototipo de Web Total POS, de modo que las personas puedan identificar y abrir las experiencias de operación del salón, cocina y administración desde un único punto de entrada.

## Goals / Non-Goals

**Goals:**

- Convertir la URL base en una portada visual que explique y conecte las tres experiencias.
- Integrar la navegación de portada y secciones con el ciclo de renderizado existente.
- Habilitar URLs reproducibles mediante `#home`, `#pos`, `#kds` y `#erp`.
- Mantener navegación por teclado, foco visible y controles semánticos.
- Conservar el carácter demostrativo de todas las experiencias.

**Non-Goals:**

- Crear rutas de servidor, autenticación o autorización.
- Agregar persistencia, base de datos, APIs o sincronización real.
- Cambiar el contenido funcional interno de ERP, POS o KDS.
- Incorporar nuevas dependencias o un framework.
- Sustituir el logotipo oficial por una imagen rasterizada nueva.

## Decisions

### Vista inicial dentro del renderizado actual

Se agregará una función de vista inicial junto a `erp()`, `pos()` y `kds()`. `render(view)` seleccionará la vista solicitada y conservará el shell común para las secciones existentes.

**Alternativa considerada:** crear un segundo HTML para la portada. Se descarta porque duplicaría la entrada, complicaría el regreso a las vistas y no aporta valor en un prototipo estático.

### Navegación basada en hash

Los controles usarán hashes (`#home`, `#pos`, `#kds`, `#erp`) y un único listener de `hashchange` volverá a renderizar la vista correspondiente. Un hash ausente o desconocido mostrará `home`.

**Alternativa considerada:** usar únicamente estado en memoria con `render("pos")`. Se descarta porque no permite compartir enlaces directos ni usar correctamente los controles de historial del navegador.

### Tarjetas accionables y semánticas

Cada experiencia se mostrará como una tarjeta con un enlace o botón claramente identificable, nombre, descripción y acción. Los controles serán elementos HTML nativos para conservar activación con teclado y estados de foco.

**Alternativa considerada:** hacer toda la tarjeta un `div` con listeners de clic. Se descarta por peor accesibilidad y por separar el comportamiento del elemento accionable.

### Composición visual

La portada tendrá:

- Encabezado de marca y etiqueta visible de `PROTOTIPO · DATOS DEMO`.
- Hero con el mensaje de marca “Todo tu restaurante conectado, todo bajo control.”
- Tres tarjetas con tratamientos diferenciados para `POS`, `KDS` y `ERP`, sin depender únicamente del color.
- Fondo claro, formas decorativas sutiles y acentos naranja/carbón.
- Estados hover y focus con contraste suficiente.
- Grid de tres columnas en escritorio y una columna en pantallas estrechas.

Se reutilizarán variables, tipografías y estilos de marca existentes en `styles.css`; no se añadirán librerías visuales.

### Regreso a la portada

La navegación común de cada sección incluirá un control `Inicio` que apunte a `#home`. El selector de experiencias existente se conservará para cambiar directamente entre POS, KDS y ERP.

## Risks / Trade-offs

- **[Riesgo]** Un hash inválido puede dejar la interfaz sin contenido esperado. → Normalizar cualquier hash desconocido a `home`.
- **[Riesgo]** Las tarjetas pueden perder legibilidad en móvil. → Usar grid responsive, contenido breve y objetivos táctiles amplios.
- **[Riesgo]** El foco puede ser poco visible sobre fondos decorativos. → Definir un estilo de `:focus-visible` con anillo naranja/carbón y probar navegación con teclado.
- **[Riesgo]** El prototipo depende de Google Fonts para Montserrat e Inter. → Mantener las familias de respaldo actuales para que la portada siga funcionando sin red.
- **[Riesgo]** La marca puede representarse de forma inconsistente. → Reutilizar el tratamiento de marca existente y revisar los manuales en `docs/brand/` antes de ajustar colores o logotipo.

## Migration Plan

No se requiere migración de datos ni despliegue especial. La implementación reemplazará el destino inicial de `render()` por la vista determinada por `location.hash`; los hashes de sección serán compatibles con el comportamiento existente una vez implementados.

Para revertir el cambio, se puede restaurar la llamada inicial a ERP y retirar la vista de portada, los listeners de hash y sus estilos, sin afectar datos porque el prototipo no tiene persistencia.
