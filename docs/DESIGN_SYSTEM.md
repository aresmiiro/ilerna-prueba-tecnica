# Sistema de Diseño - Ilerna

## Índice

1. [Tipografía](#tipografía)
2. [Paleta de Colores](#paleta-de-colores)
3. [Espaciado](#espaciado)
4. [Tamaños Base](#tamaños-base)
5. [Componentes](#componentes)

---

## Tipografía

### Familias Tipográficas

#### Tipografía Principal: Poppins

Fuente principal del proyecto, utilizada para la mayoría del contenido.

```scss
$font-primary: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

**Pesos disponibles:**

- Light: 300
- Regular: 400
- Medium: 500
- SemiBold: 600
- Bold: 700

#### Tipografía Secundaria: Nunito

Fuente secundaria, utilizada en casos específicos como links legales.

```scss
$font-secondary: "Nunito", sans-serif;
```

**Pesos disponibles:**

- Regular: 400
- SemiBold: 600
- Bold: 700

---

### Escala de Tamaños

| Variable          | Valor    | Píxeles | Uso Principal                    |
| ----------------- | -------- | ------- | -------------------------------- |
| `$font-size-xs`   | 0.75rem  | 12px    | Textos legales, autorizaciones   |
| `$font-size-sm`   | 0.875rem | 14px    | Enlaces, teléfono header, labels |
| `$font-size-base` | 1rem     | 16px    | Texto base, inputs, botones      |
| `$font-size-md`   | 1.125rem | 18px    | Párrafos destacados              |
| `$font-size-lg`   | 1.25rem  | 20px    | Botones grandes                  |
| `$font-size-xl`   | 1.5rem   | 24px    | Títulos de tarjetas              |
| `$font-size-2xl`  | 2rem     | 32px    | H2, H1 móvil                     |
| `$font-size-3xl`  | 2.5rem   | 40px    | H1 tablet, títulos modal         |
| `$font-size-4xl`  | 3rem     | 48px    | -                                |
| `$font-size-5xl`  | 3.3rem   | 52.8px  | H1 desktop                       |

---

### Pesos Tipográficos

| Variable                | Valor | Uso                           |
| ----------------------- | ----- | ----------------------------- |
| `$font-weight-regular`  | 400   | Texto normal                  |
| `$font-weight-medium`   | 500   | Énfasis moderado              |
| `$font-weight-semibold` | 600   | Títulos, encabezados          |
| `$font-weight-bold`     | 700   | Elementos destacados, botones |

---

## Paleta de Colores

### Color Principal - Turquesa/Cian

```scss
$color-primary: #48b9ce; // Turquesa principal
$color-primary-dark: #00808d; // Turquesa oscuro (hover states)
$color-primary-light: #bfeaf1; // Turquesa claro (backgrounds decorativos)
```

**Uso:**

- Botones secundarios
- Botón de teléfono en header
- Decoraciones (destacado de títulos en Hero)
- Estados hover

---

### Escala de Grises

| Variable      | Hex     | Uso                        |
| ------------- | ------- | -------------------------- |
| `$white`      | #ffffff | Fondos, texto en botones   |
| `$gray-100`   | #f5f5f5 | Fondos sutiles             |
| `$gray-200`   | #e0e0e0 | Botones disabled           |
| `$gray-300`   | #dadada | Bordes                     |
| `$gray-400`   | #979797 | Elementos desactivados     |
| `$black`      | #000000 | Negro puro, bordes botones |
| `$black-dark` | #1a1a1a | Fondo header top, botones  |

---

### Colores de Texto

| Variable                | Hex     | Uso                            |
| ----------------------- | ------- | ------------------------------ |
| `$color-text-primary`   | #020202 | Texto principal del sitio      |
| `$color-text-secondary` | #333333 | Texto secundario, placeholders |
| `$color-text-light`     | #999999 | Texto terciario                |

---

### Colores Funcionales

#### Estados

```scss
$color-error: #dc3545; // Mensajes de error, validaciones
```

#### Bordes

```scss
$color-border: #dadada; // Bordes por defecto
$color-border-focus: #87ceeb; // Bordes en estado focus (inputs)
```

#### Fondos

```scss
$color-bg-body: #f8f9fa; // Fondo general del sitio
$color-bg-primary: #f8f9fa; // Fondo primario
$color-bg-legal: #f3f3f3; // Fondo caja de texto legal
$color-bg-modal-footer: #d4f1f4; // Fondo footer del modal
```

---

## Espaciado

### Sistema Base (Múltiplos de 4px)

| Variable      | Valor | Uso Común                     |
| ------------- | ----- | ----------------------------- |
| `$spacing-1`  | 4px   | Gaps mínimos                  |
| `$spacing-2`  | 8px   | Separación pequeña            |
| `$spacing-3`  | 12px  | Padding interno               |
| `$spacing-4`  | 16px  | Espaciado base                |
| `$spacing-5`  | 20px  | Border radius especial        |
| `$spacing-6`  | 24px  | Separación media              |
| `$spacing-8`  | 32px  | Padding de tarjetas (móvil)   |
| `$spacing-10` | 40px  | Padding de tarjetas (desktop) |
| `$spacing-12` | 48px  | Separación grande             |
| `$spacing-16` | 64px  | Padding secciones             |
| `$spacing-20` | 89px  | Espaciado especial            |
| `$spacing-24` | 96px  | Separación máxima             |

### Clases Utilitarias de Espaciado

Disponibles para todos los valores de spacing (1-24):

#### Margin

```scss
.m-{n}     // Margin en todos los lados
.mt-{n}    // Margin top
.mb-{n}    // Margin bottom
.ml-{n}    // Margin left
.mr-{n}    // Margin right
.mx-{n}    // Margin horizontal
.my-{n}    // Margin vertical
.m-auto    // Margin auto
```

#### Padding

```scss
.p-{n}     // Padding en todos los lados
.pt-{n}    // Padding top
.pb-{n}    // Padding bottom
.pl-{n}    // Padding left
.pr-{n}    // Padding right
.px-{n}    // Padding horizontal
.py-{n}    // Padding vertical
```

#### Gap

```scss
.gap-{n}   // Gap para flex/grid
```

---

## Tamaños Base

### Breakpoints

| Variable              | Valor  | Uso                             |
| --------------------- | ------ | ------------------------------- |
| `$breakpoint-mobile`  | 768px  | Punto de quiebre móvil a tablet |
| `$breakpoint-tablet`  | 1024px | Punto de quiebre tablet         |
| `$breakpoint-desktop` | 1280px | Punto de quiebre a desktop      |

**Mixins disponibles:**

```scss
@include mobile {
} // max-width: 767px
@include tablet {
} // min-width: 768px
@include desktop {
} // min-width: 1280px
```

---

### Sombras

| Variable           | Valor                       | Uso                           |
| ------------------ | --------------------------- | ----------------------------- |
| `$shadow-sm`       | 0 1px 2px rgba(0,0,0,0.05)  | Sombra sutil                  |
| `$shadow-base`     | 0 2px 4px rgba(0,0,0,0.1)   | Sombra base (header)          |
| `$shadow-md`       | 0 4px 8px rgba(0,0,0,0.1)   | Sombra media                  |
| `$shadow-lg`       | 0 8px 16px rgba(0,0,0,0.15) | Sombra grande                 |
| `$shadow-xl`       | 0 12px 24px rgba(0,0,0,0.2) | Sombra extra grande           |
| `$shadow-card`     | 0 2px 24px rgba(0,0,0,0.24) | Sombra de tarjetas (FormCard) |
| `$shadow-dropdown` | 0 4px 12px rgba(0,0,0,0.15) | Sombra dropdowns              |

---

### Bordes

#### Anchos

```scss
$border-width-base: 2px; // Borde estándar (inputs, selects)
$border-width-thick: 3px; // Borde grueso (botones)
```

#### Radios (Border Radius)

| Variable       | Valor | Uso                           |
| -------------- | ----- | ----------------------------- |
| `$radius-sm`   | 4px   | Scrollbar, elementos pequeños |
| `$radius-base` | 8px   | Inputs, selects               |
| `$radius-md`   | 12px  | Modal                         |
| `$radius-lg`   | 16px  | FormCard                      |
| `$radius-xl`   | 24px  | -                             |
| `$radius-pill` | 100px | Botones, badge teléfono       |

---

### Grid System

```scss
$grid-columns: 12; // Sistema de 12 columnas
$grid-gap: 24px; // Espacio entre columnas
$grid-max-width: 1200px; // Ancho máximo del container
```

**Mixin container:**

```scss
@include container;
// width: 100%, max-width: 1200px, padding: 0 16px (móvil), 0 (desktop)
```

---

## Clases Utilitarias

### Display

```scss
.d-none, .d-block, .d-inline, .d-inline-block
.d-flex, .d-inline-flex, .d-grid
```

### Flexbox

```scss
.flex-row, .flex-column, .flex-wrap
.justify-start, .justify-end, .justify-center, .justify-between
.align-start, .align-end, .align-center
.flex-1, .flex-auto, .flex-none
```

### Text

```scss
.text-left, .text-center, .text-right
.text-lowercase, .text-uppercase, .text-capitalize
.text-truncate, .text-break
```

### Colors

```scss
.text-primary, .text-secondary, .text-light, .text-error
.bg-primary, .bg-white, .bg-gray-100
```

### Sizing

```scss
.w-100, .w-auto
.h-100, .h-auto
```

### Position

```scss
.position-relative, .position-absolute
.position-fixed, .position-sticky
```

### Bordes y Decoración

```scss
.border-none
.text-decoration-none, .text-decoration-underline
```

### Otros

```scss
.overflow-auto, .overflow-hidden
.cursor-pointer, .cursor-not-allowed
.rounded-sm, .rounded, .rounded-md, .rounded-lg
.shadow-sm, .shadow, .shadow-md
.transition-fast, .transition-base
.bg-transparent
.pe-none, .pe-auto
```

---

## Mixins Disponibles

### Responsive

```scss
@include mobile {
} // max-width: 767px
@include tablet {
} // min-width: 768px
@include desktop {
} // min-width: 1280px
```

### Layout

```scss
@include flex-center; // display: flex + center
@include flex-between; // display: flex + space-between
@include flex-column; // display: flex + column
@include container; // max-width 1200px + padding responsive
@include grid-12; // grid 12 columnas
```

### Componentes

```scss
@include button-base; // Estilos base de botón
@include form-field-base; // Estilos base de input/select
@include card; // Tarjeta con sombra
```

---

## Estructura de Archivos

```
src/styles/
├── abstracts/
│   ├── _variables.scss    # Todas las variables del sistema
│   └── _mixins.scss       # Mixins reutilizables
├── base/
│   ├── _fonts.scss        # @font-face declarations
│   ├── _typography.scss   # Estilos tipográficos base
│   └── _reset.scss        # CSS reset
├── utilities/
│   ├── _spacing.scss      # Clases de spacing
│   └── _utilities.scss    # Clases utilitarias
└── globals.scss           # Punto de entrada principal
```

---

**Ejemplo de importación:**

```scss
@use "../../../styles/abstracts/variables" as v;
@use "../../../styles/abstracts/mixins" as m;
@use "../../../styles/utilities/utilities" as *;
```

---
