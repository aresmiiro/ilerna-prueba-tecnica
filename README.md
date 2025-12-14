# Prueba Técnica - iLERNA Landing Page

Interfaz responsive para la promoción "Referidos" de iLERNA, desarrollada con React, Vite y SCSS.

## Tecnologías

- **React 18** con hooks
- **Vite** para build y dev server
- **SCSS** con arquitectura ITCSS (variables, mixins, utilities)
- **Componentes reutilizables** siguiendo BEM
- **Responsive** para mobile, tablet y desktop

## Instalación y ejecución

1. **Instalar dependencias**:

   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:

   ```bash
   npm run dev
   ```

   Abre [http://localhost:5173](http://localhost:5173) en el navegador.

3. **Build para producción** (opcional):
   ```bash
   npm run build
   ```

## Estructura del proyecto

- `src/components/` - Componentes reutilizables (Button, Input, Modal, etc.)
- `src/styles/` - Arquitectura SCSS (abstracts, base, utilities)
- `src/pages/` - Páginas principales
- `public/assets/` - Imágenes y fuentes

## Características implementadas

- Formulario con validación visual
- Modal con contenido legal
- Diseño responsive
- Accesibilidad (ARIA)
- Sistema de diseño escalable con SCSS
