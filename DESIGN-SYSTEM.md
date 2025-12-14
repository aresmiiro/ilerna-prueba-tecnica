# Sistema de Diseño - Ilerna

Documentación completa del sistema de diseño implementado en el proyecto.

## Tabla de Contenidos

- [Tipografías](#tipografías)
- [Paleta de Colores](#paleta-de-colores)
- [Espaciado](#espaciado)
- [Tamaños Base](#tamaños-base)
- [Otros Elementos](#otros-elementos)

---

## Tipografías

### Fuentes

#### Tipografía Principal: **Poppins**
Usada para títulos, encabezados y texto principal del sitio.

**Pesos disponibles:**
- Light (300)
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)

**Uso:**
```scss
font-family: $font-primary; // 'Poppins', sans-serif
```

#### Tipografía Secundaria: **Nunito**
Usada para elementos complementarios y variaciones tipográficas.

**Pesos disponibles:**
- Regular (400)
- SemiBold (600)
- Bold (700)

**Uso:**
```scss
font-family: $font-secondary; // 'Nunito', sans-serif
```

---

### Escalas Tipográficas

#### Tamaños de Fuente

| Variable | Valor | Uso |
|----------|-------|-----|
| `$font-size-xs` | 0.75rem (12px) | Texto muy pequeño |
| `$font-size-sm` | 0.875rem (14px) | Links, textos pequeños |
| `$font-size-base` | 1rem (16px) | Inputs, selects, texto base |
| `$font-size-md` | 1.125rem (18px) | Párrafos, botones |
| `$font-size-lg` | 1.25rem (20px) | Texto destacado |
| `$font-size-xl` | 1.5rem (24px) | h3, h2 (tablet) |
| `$font-size-2xl` | 2rem (32px) | h2 (desktop), h1 (mobile) |
| `$font-size-3xl` | 2.5rem (40px) | h1 (tablet) |
| `$font-size-4xl` | 3rem (48px) | - |
| `$font-size-5xl` | 3.3rem (52.8px) | h1 (desktop) |

#### Pesos de Fuente

| Variable | Valor | Uso |
|----------|-------|-----|
| `$font-weight-regular` | 400 | Texto regular |
| `$font-weight-medium` | 500 | Texto medio |
| `$font-weight-semibold` | 600 | Títulos y encabezados |
| `$font-weight-bold` | 700 | Botones y elementos destacados |

#### Alturas de Línea (Line Height)

| Variable | Valor | Uso |
|----------|-------|-----|
| `$line-height-tight` | 1.2 | Títulos y encabezados |
| `$line-height-normal` | 1.5 | Texto general |
| `$line-height-relaxed` | 1.8 | Texto extenso con mayor legibilidad |

---

### Jerarquía de Títulos

#### H1
- **Mobile:** 2rem (32px)
- **Tablet:** 2.5rem (40px)
- **Desktop:** 3.3rem (52.8px)
- **Peso:** SemiBold (600)
- **Line height:** 1.2

#### H2
- **Mobile:** 1.5rem (24px)
- **Tablet/Desktop:** 2rem (32px)
- **Peso:** SemiBold (600)
- **Line height:** 1.2

#### H3
- **Mobile:** 1.25rem (20px)
- **Tablet/Desktop:** 1.5rem (24px)
- **Peso:** SemiBold (600)
- **Line height:** 1.5

#### H4
- **Mobile:** 1.125rem (18px)
- **Tablet/Desktop:** 1.25rem (20px)
- **Peso:** SemiBold (600)
- **Line height:** 1.5

#### H5
- **Mobile:** 1rem (16px)
- **Tablet/Desktop:** 1.125rem (18px)
- **Peso:** SemiBold (600)
- **Line height:** 1.5

#### H6
- **Mobile:** 0.875rem (14px)
- **Tablet/Desktop:** 1rem (16px)
- **Peso:** SemiBold (600)
- **Line height:** 1.5

---

### Clases de Utilidad Tipográfica

#### Peso de Fuente
```scss
.text-regular    // font-weight: 400
.text-medium     // font-weight: 500
.text-demi-bold  // font-weight: 600
.text-bold       // font-weight: 700
```

#### Color de Texto
```scss
.text-primary    // color: #020202
.text-secondary  // color: #333333
.text-light      // color: #999999
.text-white      // color: #ffffff
```

---

## Paleta de Colores

### Colores Principales

#### Color Primario (Turquesa/Cian)
```scss
$color-primary: #48b9ce;       // Color principal
$color-primary-dark: #00808d;  // Versión oscura
$color-primary-light: #bfeaf1; // Versión clara
```

**Uso:** Botones principales, enlaces destacados, elementos de marca.

---

### Escala de Grises

| Variable | Valor | Uso |
|----------|-------|-----|
| `$white` | #ffffff | Fondos blancos |
| `$gray-100` | #f5f5f5 | Fondos muy claros |
| `$gray-200` | #e0e0e0 | Separadores sutiles |
| `$gray-300` | #dadada | Bordes |
| `$gray-400` | #979797 | Elementos deshabilitados |
| `$black` | #000000 | Negro puro |
| `$black-dark` | #1a1a1a | Casi negro |

---

### Colores de Texto

| Variable | Valor | Uso |
|----------|-------|-----|
| `$color-text-primary` | #020202 | Texto principal |
| `$color-text-secondary` | #333333 | Texto secundario |
| `$color-text-light` | #999999 | Texto terciario/sutil |

---

### Colores de Estado

| Variable | Valor | Uso |
|----------|-------|-----|
| `$color-error` | #dc3545 | Mensajes de error |

---

### Colores de Bordes

| Variable | Valor | Uso |
|----------|-------|-----|
| `$color-border` | #dadada | Bordes normales |
| `$color-border-focus` | #87ceeb | Bordes en estado focus |

---

### Colores de Fondo

| Variable | Valor | Uso |
|----------|-------|-----|
| `$color-bg-body` | #f8f9fa | Fondo del body |
| `$color-bg-primary` | #f8f9fa | Fondo primario |
| `$color-bg-legal` | #f3f3f3 | Fondo de sección legal |
| `$color-bg-modal-footer` | #d4f1f4 | Fondo del footer del modal |

---

## Espaciado

### Sistema de Espaciado (Base 8px)

Nuestro sistema de diseño utiliza un sistema de espaciado basado en múltiplos de 4px, lo que garantiza consistencia visual.

| Variable | Valor | Uso |
|----------|-------|-----|
| `$spacing-1` | 4px | Espaciado mínimo |
| `$spacing-2` | 8px | Espaciado muy pequeño |
| `$spacing-3` | 12px | Espaciado pequeño |
| `$spacing-4` | 16px | Espaciado base |
| `$spacing-5` | 20px | Espaciado medio-pequeño |
| `$spacing-6` | 24px | Espaciado medio |
| `$spacing-8` | 32px | Espaciado grande |
| `$spacing-10` | 40px | Espaciado muy grande |
| `$spacing-12` | 48px | Espaciado extra grande |
| `$spacing-16` | 64px | Espaciado XXL |
| `$spacing-20` | 89px | Espaciado especial |
| `$spacing-24` | 96px | Espaciado máximo |
| `$spacing-form-gap` | 24px | Gap entre elementos de formulario |

---

### Clases de Utilidad de Espaciado

El sistema incluye clases de utilidad completas para margin, padding y gap:

#### Margin
```scss
// Todos los lados
.m-{0-24}

// Individual
.mt-{0-24}  // margin-top
.mb-{0-24}  // margin-bottom
.ml-{0-24}  // margin-left
.mr-{0-24}  // margin-right

// Combinadas
.mx-{0-24}  // margin horizontal (left + right)
.my-{0-24}  // margin vertical (top + bottom)

// Auto
.m-auto, .mx-auto, .ml-auto, .mr-auto
```

#### Padding
```scss
// Todos los lados
.p-{0-24}

// Individual
.pt-{0-24}  // padding-top
.pb-{0-24}  // padding-bottom
.pl-{0-24}  // padding-left
.pr-{0-24}  // padding-right

// Combinadas
.px-{0-24}  // padding horizontal (left + right)
.py-{0-24}  // padding vertical (top + bottom)
```

#### Gap (Flexbox/Grid)
```scss
.gap-{0-24}  // Para elementos flex o grid
```

**Ejemplo de uso:**
```html
<div class="mt-6 mb-4 px-6">
  <!-- margin-top: 24px, margin-bottom: 16px, padding-horizontal: 24px -->
</div>
```

---

## Tamaños Base

### Breakpoints Responsivos

| Variable | Valor | Uso |
|----------|-------|-----|
| `$breakpoint-mobile` | 768px | Punto de quiebre para móvil |
| `$breakpoint-tablet` | 1024px | Punto de quiebre para tablet |
| `$breakpoint-desktop` | 1280px | Punto de quiebre para desktop |

**Uso con mixins:**
```scss
@include mobile { /* estilos móvil */ }
@include tablet { /* estilos tablet */ }
@include desktop { /* estilos desktop */ }
```

---

### Sombras (Shadows)

| Variable | Valor | Uso |
|----------|-------|-----|
| `$shadow-sm` | 0 1px 2px rgba(0, 0, 0, 0.05) | Sombra sutil |
| `$shadow-base` | 0 2px 4px rgba(0, 0, 0, 0.1) | Sombra base |
| `$shadow-md` | 0 4px 8px rgba(0, 0, 0, 0.1) | Sombra media |
| `$shadow-lg` | 0 8px 16px rgba(0, 0, 0, 0.15) | Sombra grande |
| `$shadow-xl` | 0 12px 24px rgba(0, 0, 0, 0.2) | Sombra extra grande |
| `$shadow-card` | 0 2px 24px rgba(0, 0, 0, 0.24) | Sombra para tarjetas |
| `$shadow-dropdown` | 0 4px 12px rgba(0, 0, 0, 0.15) | Sombra para dropdowns |

---

### Bordes y Radios

#### Anchos de Borde
```scss
$border-width-base: 2px;   // Borde estándar
$border-width-thick: 3px;  // Borde grueso
```

#### Radios de Borde (Border Radius)

| Variable | Valor | Uso |
|----------|-------|-----|
| `$radius-sm` | 4px | Radio pequeño |
| `$radius-base` | 8px | Radio base |
| `$radius-md` | 12px | Radio medio |
| `$radius-lg` | 16px | Radio grande |
| `$radius-xl` | 24px | Radio extra grande |
| `$radius-pill` | 100px | Radio completo (píldora) |

---

### Transiciones

#### Duraciones
```scss
$transition-fast: 150ms;   // Transición rápida
$transition-base: 250ms;   // Transición estándar
$transition-slow: 350ms;   // Transición lenta
```

#### Funciones de Easing
```scss
$easing-in: ease-in;
$easing-out: ease-out;
$easing-in-out: ease-in-out;
```

**Uso:**
```scss
transition: all $transition-base $easing-in-out;
```

---

### Z-Index

Sistema de capas definido para evitar conflictos de superposición:

| Variable | Valor | Uso |
|----------|-------|-----|
| `$z-index-dropdown` | 1000 | Menús desplegables |
| `$z-index-sticky` | 1020 | Elementos sticky |
| `$z-index-header` | 1030 | Header del sitio |
| `$z-index-modal-backdrop` | 1040 | Fondo del modal |
| `$z-index-modal` | 1050 | Modal |
| `$z-index-popover` | 1060 | Popovers |
| `$z-index-tooltip` | 1070 | Tooltips |

---

## Otros Elementos

### Grid System

```scss
$grid-columns: 12;           // Número de columnas
$grid-gap: 24px;            // Espacio entre columnas
$grid-max-width: 1200px;    // Ancho máximo del contenedor
```

---

### Tamaños de Componentes

#### Botones
```scss
$button-height: 56px;       // Altura del botón
$button-padding-y: 1px;     // Padding vertical
$button-padding-x: 32px;    // Padding horizontal
```

#### Inputs y Selects
```scss
$input-height: 60px;        // Altura del input
$input-padding-y: 18px;     // Padding vertical
$input-padding-x: 24px;     // Padding horizontal
```

#### Form Card
```scss
$form-card-padding: 48px;   // Padding de las tarjetas de formulario
```

---

## Ubicación de los Archivos

- **Variables:** [src/styles/abstracts/_variables.scss](src/styles/abstracts/_variables.scss)
- **Tipografía:** [src/styles/base/_typography.scss](src/styles/base/_typography.scss)
- **Fuentes:** [src/styles/base/_fonts.scss](src/styles/base/_fonts.scss)
- **Espaciado:** [src/styles/utilities/_spacing.scss](src/styles/utilities/_spacing.scss)
- **Mixins:** [src/styles/abstracts/_mixins.scss](src/styles/abstracts/_mixins.scss)

---

## Mejores Prácticas

1. **Usa siempre las variables** en lugar de valores hardcoded
2. **Respeta el sistema de espaciado** basado en múltiplos de 4px
3. **Utiliza las clases de utilidad** cuando sea apropiado para mantener consistencia
4. **Mantén la jerarquía tipográfica** definida
5. **Sigue los breakpoints** establecidos para diseño responsive
6. **Usa z-index predefinidos** para evitar conflictos de capas

---

## Recursos Adicionales

Para consultar los estilos implementados, revisa:
- Componentes en [src/components/](src/components/)
- Estilos globales en [src/styles/globals.scss](src/styles/globals.scss)
- Utilidades en [src/styles/utilities/](src/styles/utilities/)

---

**Última actualización:** Diciembre 2025
