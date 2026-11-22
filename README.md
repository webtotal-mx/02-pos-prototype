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

## Estructura principal

- `index.html`: punto de entrada del prototipo.
- `styles.css`: estilos, diseño responsive y componentes visuales.
- `app.js`: vistas y comportamiento interactivo de demostración.
- `docs/references/`: referencias visuales del ERP, POS y KDS.

## Alcance

Este proyecto sirve para validar flujos y decisiones visuales. No es todavía una aplicación productiva: no incluye autenticación, base de datos, conexión con dispositivos, persistencia de información ni procesamiento de pagos.
