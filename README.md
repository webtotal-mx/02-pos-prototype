# Web Total POS · Prototipo HTML

Prototipo estático y demostrativo de Web Total POS, basado en las referencias visuales de `docs/references/`.

## Cómo ejecutarlo

El proyecto no requiere instalar dependencias:

```bash
npm run dev
```

Después, abre <http://localhost:4173> en tu navegador.

También puedes abrir `index.html` directamente en el navegador.

## Vistas

- **ERP:** panel administrativo para escritorio.
- **POS:** operación del salón con mesas, comandas y cuentas.
- **KDS:** pantalla de cocina con comandas en estado **Nuevas**, **En preparación** y **Listas**.

El selector de la parte superior permite cambiar entre las tres experiencias. Las acciones son simuladas y los datos están marcados como **DEMO**: no hay persistencia, sincronización con un servidor ni cobros reales.

## Flujo KDS demostrativo

Desde la vista KDS puedes:

1. Consultar la Comanda **#4590 · Mesa 07** y su detalle de productos, notas y restricción alimentaria.
2. Avanzarla de **Nuevos** a **En preparación**, después a **Listos** y finalmente entregarla.
3. Confirmar explícitamente la alerta de alergia antes de cada transición.
4. Activar la desconexión demo para revisar el aviso de conectividad sin simular envío a producción.

Rutas disponibles:

- `#kds`: tablero de comandas.
- `#kds-order-4590`: detalle de la Comanda #4590.

El estado del flujo vive únicamente en memoria y se reinicia al recargar la página.

## Estructura principal

- `index.html`: punto de entrada del prototipo.
- `styles.css`: estilos, diseño responsive y componentes visuales.
- `app.js`: vistas y comportamiento interactivo de demostración.
- `docs/references/`: referencias visuales del ERP, POS y KDS.

## Validación local

Para revisar la sintaxis de JavaScript:

```bash
node --check app.js
```

Para comprobar la carga completa, inicia el servidor con `npm run dev` y abre <http://localhost:4173>.

## Alcance

Este proyecto sirve para validar flujos y decisiones visuales. No es todavía una aplicación productiva: no incluye autenticación, base de datos, conexión con dispositivos, persistencia de información ni procesamiento de pagos.
