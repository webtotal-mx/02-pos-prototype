# Design

## Context

El prototipo se sirve como HTML estático sin dependencias npm y actualmente renderiza POS desde `app.js` usando la ruta `#pos`, estilos compartidos en `styles.css` y acciones demostrativas basadas en `data-action`. La vista existente ya cuenta con encabezado, tarjetas de mesa y panel de cuenta, pero solo modela mesas libres/ocupadas y una comanda fija. La solución debe conservar el shell de navegación, el aviso de datos DEMO y las experiencias ERP/KDS.

Las referencias POS de `docs/references/POS/` establecen una operación touch-first: encabezado compacto, resumen de estados, tarjetas con estados explícitos, filtros en móvil y una jerarquía que prioriza la distribución del salón. Los manuales de marca establecen `#FF7A00`, `#1F1F1F`, `#E9E9E9`, `#FFFFFF`, Montserrat para títulos y Inter para cuerpo.

## Goals / Non-Goals

**Goals:**

- Convertir la vista `#pos` en una experiencia de salón reconocible en móvil, tablet y escritorio.
- Mantener una única fuente de datos ficticios para que el resumen, las tarjetas y el detalle sean coherentes.
- Reutilizar las convenciones actuales de navegación, foco visible, toast y acciones `data-action`.
- Diferenciar estados mediante texto, icono o forma y color, manteniendo acciones con objetivos táctiles adecuados.

**Non-Goals:**

- Crear backend, persistencia, autenticación, sincronización real o integración con impresoras, terminales o dispositivos.
- Implementar un flujo transaccional de cobro, división real de cuenta o modificación persistente de comandas.
- Cambiar las vistas ERP, KDS o la capacidad de navegación de la portada.
- Sustituir el logotipo por una imagen deformada o crear una nueva dependencia visual.

## Decisions

### 1. Mantener POS como una ruta hash y una vista dentro del renderizador actual

La vista seguirá entrando por `#pos` y se conservará `pos()` como punto de composición. Esto evita alterar la navegación existente y mantiene el prototipo como una aplicación estática simple.

**Alternativa considerada:** crear una página HTML independiente para POS. Se descarta porque duplicaría el shell, rompería el selector superior y aumentaría el mantenimiento.

### 2. Modelar mesas como datos ficticios y derivar el resumen de estados

Se definirá una colección de mesas con identificador, estado, personas, responsable, horario, comanda, artículos y total cuando aplique. El resumen contará esa colección en vez de mantener números independientes; las tarjetas y el panel de detalle consumirán los mismos datos.

**Alternativa considerada:** conservar HTML repetido con contadores escritos a mano. Se descarta porque puede mostrar un resumen inconsistente con las tarjetas y dificulta ampliar estados.

### 3. Mantener un panel de detalle estable y acciones simuladas

El panel de la derecha en escritorio se conservará como detalle de mesa; en móvil se colocará después de la distribución o se mostrará como bloque destacado. Las acciones actualizarán el contenido o mostrarán el toast DEMO sin mutar una fuente persistente.

**Alternativa considerada:** usar modales o cambiar de ruta por cada mesa. Se descarta para mantener el alcance del prototipo y reducir complejidad responsive.

### 4. Usar clases semánticas por estado y breakpoints existentes

Se agregarán clases como `free`, `occupied`, `reserved` y `due` junto con etiquetas visibles; los colores se usarán como apoyo. Los breakpoints actuales se extenderán para una cuadrícula de escritorio, una distribución de tablet y una columna táctil en móvil.

**Alternativa considerada:** comunicar los estados solo con color. Se descarta por legibilidad, accesibilidad y porque las referencias muestran etiquetas persistentes.

### 5. Conservar JavaScript nativo y el patrón de acciones existente

Se ampliará el mapa de mensajes y el registro de eventos actual, evitando librerías, almacenamiento local o una capa de estado adicional. Los controles nuevos serán botones reales o enlaces accionables con foco visible.

**Alternativa considerada:** añadir un framework o una librería de componentes. Se descarta porque contradice la arquitectura declarada del prototipo y no aporta valor para el alcance demostrativo.

## Risks / Trade-offs

- [Los datos derivados pueden cambiar al interactuar] → Mantener las acciones como feedback visual temporal y recalcular solo desde la colección ficticia inicial; no afirmar persistencia.
- [La densidad de tarjetas puede reducir legibilidad en móvil] → Usar una columna, padding táctil generoso, texto contextual breve y ocultar decoración no esencial en el breakpoint estrecho.
- [Los emojis o símbolos pueden variar entre plataformas] → Acompañar cada icono con texto visible y no depender del glifo para comunicar el estado.
- [La tipografía remota puede no cargar sin conexión] → Conservar Montserrat/Inter como primera opción y las familias de respaldo ya existentes; documentar que la validación visual local depende de la disponibilidad de la fuente.
- [El prototipo no demuestra semántica de lector de pantalla o teclado completo] → Mantener HTML semántico, botones reales, `aria-label`/`aria-current` donde aplique y foco visible, pero reportar esa limitación durante la validación.

## Migration Plan

1. Actualizar `app.js` y `styles.css` dentro de la ruta existente `#pos`.
2. Validar sintaxis con `node --check app.js` y abrir el prototipo mediante `npm run dev`.
3. Comprobar manualmente POS en anchos móvil, tablet y escritorio, además de navegación a ERP/KDS y regreso a Inicio.
4. Si la propuesta debe revertirse, retirar únicamente los cambios de POS en `app.js` y `styles.css`; no requiere migración de datos porque no existe persistencia.
