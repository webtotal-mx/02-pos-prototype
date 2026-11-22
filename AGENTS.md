# Instrucciones para el agente

- Este directorio contiene el prototipo HTML de WebTotalPOS. Mantén el trabajo enfocado en el prototipo y no en el entregable nativo de Figma documentado en el repositorio principal.
- El prototipo es una aplicación estática sin dependencias externas de npm. Usa HTML, CSS y JavaScript nativos, salvo que se solicite explícitamente cambiar la arquitectura.
- Archivos principales:
  - `index.html`: punto de entrada.
  - `styles.css`: estilos y comportamiento responsive visual.
  - `app.js`: vistas e interacciones simuladas.
  - `README.md`: instrucciones de uso y alcance.
- Antes de agregar herramientas o cambiar la estructura, revisa `package.json`, `index.html` y cualquier script o configuración local. Considera esos archivos como la fuente de verdad para los comandos del proyecto.
- Conserva las tres experiencias del prototipo: ERP administrativo, POS para salón y KDS para cocina.
- Mantén los datos, pagos, sincronizaciones y cambios de estado como demostrativos. No presentes el prototipo como un sistema conectado a producción.

## Comandos del proyecto

- `npm run dev`: inicia el servidor local con Python en `http://localhost:4173`.
- `npm start`: inicia el mismo servidor como alternativa.
- No hay un corredor de pruebas configurado actualmente; valida cambios de JavaScript con `node --check app.js` y confirma que `index.html` cargue desde el servidor local.

## Spec Driven Development - Skills

- El proyecto usa OpenSpec con el esquema `spec-driven`, configurado en `openspec/config.yaml`.
- Antes de iniciar una operación de OpenSpec, ejecuta `openspec list --json` y respeta la ruta raíz que reporte el comando.
- Usa el flujo adecuado para el trabajo solicitado: explorar para investigar, proponer para planear y aplicar para implementar cambios autorizados.
- No marques tareas como terminadas sin validar el resultado en el prototipo y documentar cualquier limitación o pendiente.
- No crees manualmente la carpeta `openspec/` ni inventes nombres de cambios o artefactos.

## Referencias de diseño

- Usa las referencias visuales de `docs/references/` como guía principal y conserva el vocabulario del producto: `Mesa`, `Comanda`, `Pedido`, `Cuenta`, `Pago`, `Turno`, `Corte`, `Preparando` y `Listo`.
- Antes de hacer cambios visuales, revisa los documentos de marca en `docs/brand/`.
- Usa `docs/brand/Manual de marca.pdf` y `docs/brand/Manual de identidad.pdf` como fuentes de verdad para colores, tipografías, logotipo y demás elementos de identidad visual.

## MCPs

- Usa Context7 como herramienta para consultar documentación técnica actualizada de frameworks, bibliotecas y tecnologías que encuentres en este proyecto y necesites consultar, verificar y actualizar.
- Las capturas de pantalla de Playwright y cualquier cosa relacionada con Playwright tiene que estar en la carpeta `.playwright-mcp` (gitignoreada). El MCP de Playwright ya está configurado en `opencode.json`.

## Reglas de código

- Usa la filosofía / conjunto de principios y buenas prácticas `Code Clean`.
- Usa nombres de archivos, funciones, variables y clases en **inglés**. El texto visible para las personas usuarias debe estar en español mexicano.
- Toda conversación, explicación y reporte hacia el usuario va en **español mexicano** (tuteo, «tú»). Nada de voseo rioplatense («podés», «contanos», «activá»).
- Mantén HTML semántico, estilos responsive y JavaScript sencillo; evita duplicación innecesaria y dependencias nuevas.
- Después de cambios relevantes, ejecuta las validaciones disponibles en `package.json` y comprueba que el servidor local cargue `index.html`.
- No agregues persistencia, autenticación, integraciones con dispositivos ni procesamiento de pagos sin una solicitud explícita.
