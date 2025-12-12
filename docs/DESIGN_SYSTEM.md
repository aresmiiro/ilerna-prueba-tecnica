# 🎨 Sistema de Diseño - ILERNA

## 📋 Índice

1. [Tipografía](#-tipografía)
2. [Paleta de Colores](#-paleta-de-colores)
3. [Espaciado](#-espaciado)
4. [Tamaños Base](#-tamaños-base)
5. [Componentes](#-componentes)
6. [Responsive](#-responsive)

---

## 🔤 Tipografía

### Familia de Fuentes

#### Fuente Principal (Básica)

- **Nombre**: Avenir Next
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Uso**: Textos generales, formularios, botones, contenido
- **Variable SASS**: `$font-primary`

#### Fuente Secundaria

- **Nombre**: Avenir Next (misma familia para consistencia)
- **Uso**: Títulos y encabezados especiales
- **Variable SASS**: `$font-secondary`

### Escala Tipográfica

Basada en el diseño de Figma con progresión armónica:

| Elemento              | Tamaño | Peso            | Uso                    | Variable SASS     |
| --------------------- | ------ | --------------- | ---------------------- | ----------------- |
| H1 - Título Principal | 58px   | 700 (Bold)      | Título hero            | `$font-size-2xl`  |
| H2 - Subtítulo        | 32px   | 600 (Demi Bold) | "Solicita información" | `$font-size-xl`   |
| Body Large            | 18px   | 400 (Regular)   | Descripción principal  | `$font-size-md`   |
| Body Base             | 16px   | 400 (Regular)   | Inputs, texto normal   | `$font-size-base` |
| Small                 | 14px   | 400 (Regular)   | Texto legal, ayuda     | `$font-size-sm`   |
| Button                | 20px   | 700 (Bold)      | Texto de botones       | `$font-size-lg`   |

### Pesos de Fuente

| Peso      | Valor | Uso                              | Variable SASS           |
| --------- | ----- | -------------------------------- | ----------------------- |
| Regular   | 400   | Texto normal                     | `$font-weight-regular`  |
| Medium    | 500   | Énfasis suave                    | `$font-weight-medium`   |
| Demi Bold | 600   | Subtítulos                       | `$font-weight-semibold` |
| Bold      | 700   | Títulos, botones, énfasis fuerte | `$font-weight-bold`     |

### Altura de Línea

| Tipo    | Valor | Uso              | Variable SASS          |
| ------- | ----- | ---------------- | ---------------------- |
| Tight   | 1.25  | Títulos grandes  | `$line-height-tight`   |
| Normal  | 1.5   | Texto de lectura | `$line-height-normal`  |
| Relaxed | 1.75  | Párrafos largos  | `$line-height-relaxed` |

```

---

## 🎨 Paleta de Colores

### Colores Principales

| Color           | Hex       | Uso                                    | Variable SASS          |
| --------------- | --------- | -------------------------------------- | ---------------------- |
| 🔵 Azul Celeste | `#87ceeb` | Fondo decorativo, elementos visuales   | `$color-primary`       |
| 🔵 Azul Claro   | `#b0e0e6` | Variante clara del primario            | `$color-primary-light` |
| 🔵 Azul Oscuro  | `#5dade2` | Links, hover states, flecha decorativa | `$color-primary-dark`  |

### Colores de Texto

| Color              | Hex       | Uso                                    | Variable SASS           |
| ------------------ | --------- | -------------------------------------- | ----------------------- |
| ⚫ Negro Principal | `#020202` | Títulos, textos principales            | `$color-text-primary`   |
| 🔘 Gris Oscuro     | `#333333` | Placeholders, textos secundarios       | `$color-text-secondary` |
| ⚪ Gris Claro      | `#666666` | Textos de ayuda, información adicional | `$color-text-light`     |

### Colores de Fondo

| Color             | Hex                | Uso                            | Variable SASS       |
| ----------------- | ------------------ | ------------------------------ | ------------------- |
| ⬜ Beige Claro    | `#faf9f6`          | Fondo general de la página     | `$color-bg-primary` |
| ⬜ Blanco         | `#ffffff`          | Tarjetas, formularios, modales | `$color-bg-card`    |
| ⬜ Gris Muy Claro | `rgba(0,0,0,0.04)` | Fondo de texto legal           | `$color-bg-legal`   |

### Colores de Borde

| Color         | Hex               | Uso                          | Variable SASS         |
| ------------- | ----------------- | ---------------------------- | --------------------- |
| ⬛ Negro 80%  | `rgba(0,0,0,0.8)` | Bordes de inputs y elementos | `$color-border`       |
| ⬜ Gris Claro | `#e5e5e5`         | Bordes sutiles               | `$color-border-light` |
| 🔵 Azul Focus | `#5dade2`         | Borde al enfocar inputs      | `$color-border-focus` |

### Colores de Estado

| Color      | Hex       | Uso                                      | Variable SASS    |
| ---------- | --------- | ---------------------------------------- | ---------------- |
| 🟢 Success | `#22c55e` | Validación correcta, mensajes positivos  | `$color-success` |
| 🔴 Error   | `#dc3545` | Errores de validación, mensajes de error | `$color-error`   |
| 🟠 Warning | `#f59e0b` | Advertencias, información importante     | `$color-warning` |
| 🔵 Info    | `#3b82f6` | Información adicional, tooltips          | `$color-info`    |

### Ejemplos Visuales

```

Fondo de Página: ▓▓▓▓▓▓▓▓ #faf9f6
Tarjeta (FormCard): ████████ #ffffff
Texto Principal: ████████ #020202
Decoración: ▓▓▓▓▓▓▓▓ #87ceeb
Error: ████████ #dc3545

````

---

## 📏 Espaciado

### Sistema de Espaciado

Basado en múltiplos de **8px** para mantener consistencia visual:

| Nombre | Valor   | Píxeles | Uso                        | Variable SASS |
| ------ | ------- | ------- | -------------------------- | ------------- |
| 0      | 0       | 0px     | Sin espacio                | `$spacing-0`  |
| 1      | 0.25rem | 4px     | Espacios mínimos           | `$spacing-1`  |
| 2      | 0.5rem  | 8px     | Separación pequeña         | `$spacing-2`  |
| 3      | 0.75rem | 12px    | Padding reducido           | `$spacing-3`  |
| 4      | 1rem    | 16px    | Espaciado estándar         | `$spacing-4`  |
| 5      | 1.25rem | 20px    | Espaciado medio            | `$spacing-5`  |
| 6      | 1.5rem  | 24px    | Separación entre inputs    | `$spacing-6`  |
| 8      | 2rem    | 32px    | Padding de tarjetas        | `$spacing-8`  |
| 10     | 2.5rem  | 40px    | Separación media-grande    | `$spacing-10` |
| 12     | 3rem    | 48px    | Separación entre secciones | `$spacing-12` |
| 16     | 4rem    | 64px    | Espacios grandes           | `$spacing-16` |
| 20     | 5rem    | 80px    | Separación muy grande      | `$spacing-20` |

### Espaciado Específico del Diseño

| Uso                             | Valor           | Variable SASS        |
| ------------------------------- | --------------- | -------------------- |
| Gap entre inputs del formulario | 24px            | `$spacing-form-gap`  |
| Separación contenido-formulario | 60px            | `$spacing-section`   |
| Padding lateral del container   | 120px (desktop) | `$spacing-container` |

### Guía de Uso

#### Dentro de Componentes

- **Padding pequeño**: 8-12px (`$spacing-2` a `$spacing-3`)
- **Padding medio**: 16-24px (`$spacing-4` a `$spacing-6`)
- **Padding grande**: 32-40px (`$spacing-8` a `$spacing-10`)

#### Entre Componentes

- **Separación mínima**: 16px (`$spacing-4`)
- **Separación estándar**: 24px (`$spacing-6`)
- **Separación entre secciones**: 48-60px (`$spacing-12` a `$spacing-section`)

### Ejemplos de Aplicación

```scss
// Formulario: gap entre inputs
.form-card__fields {
  display: flex;
  flex-direction: column;
  gap: $spacing-6; // 24px
}

// Tarjeta: padding interno
.form-card {
  padding: $spacing-8; // 32px
}

// Container: padding lateral
.landing__container {
  padding-left: $spacing-container; // 120px en desktop
  padding-right: $spacing-container;
}
````

---

## 📐 Tamaños Base

### Componentes de Formulario

#### Input Fields

| Propiedad              | Valor | Variable SASS        |
| ---------------------- | ----- | -------------------- |
| **Altura**             | 48px  | `$input-height`      |
| **Padding Horizontal** | 12px  | `$input-padding-x`   |
| **Padding Vertical**   | 10px  | `$input-padding-y`   |
| **Border Width**       | 1.6px | `$border-width-base` |
| **Border Radius**      | 8px   | `$radius-base`       |
| **Font Size**          | 16px  | `$font-size-base`    |

```scss
// Implementación
.input {
  height: $input-height;
  padding: $input-padding-y $input-padding-x;
  border: $border-width-base solid $color-border;
  border-radius: $radius-base;
}
```

#### Botones

| Propiedad              | Valor | Variable SASS         |
| ---------------------- | ----- | --------------------- |
| **Altura**             | 56px  | `$button-height`      |
| **Padding Horizontal** | 30px  | `$button-padding-x`   |
| **Padding Vertical**   | 18px  | `$button-padding-y`   |
| **Border Width**       | 2.4px | `$border-width-thick` |
| **Border Radius**      | 55px  | `$radius-pill`        |
| **Font Size**          | 20px  | `$font-size-lg`       |

```scss
// Implementación
.btn {
  height: $button-height;
  padding: $button-padding-y $button-padding-x;
  border: $border-width-thick solid $black;
  border-radius: $radius-pill;
}
```

### Contenedores

#### Form Card

| Propiedad         | Valor                         | Variable SASS        |
| ----------------- | ----------------------------- | -------------------- |
| **Ancho Máximo**  | 387px                         | `$form-card-width`   |
| **Padding**       | 32px                          | `$form-card-padding` |
| **Border Radius** | 24px                          | `$radius-lg`         |
| **Box Shadow**    | 0px 2px 24px rgba(0,0,0,0.24) | `$shadow-card`       |

#### Container Principal

| Propiedad                     | Valor  | Variable SASS          |
| ----------------------------- | ------ | ---------------------- |
| **Max Width**                 | 1440px | `$container-max-width` |
| **Padding Lateral (Desktop)** | 120px  | `$container-padding`   |
| **Padding Lateral (Mobile)**  | 16px   | `$spacing-4`           |

### Bordes y Radios

| Tipo   | Valor  | Uso                  | Variable SASS  |
| ------ | ------ | -------------------- | -------------- |
| Small  | 4px    | Elementos pequeños   | `$radius-sm`   |
| Base   | 8px    | Inputs, selects      | `$radius-base` |
| Medium | 12px   | Cards pequeñas       | `$radius-md`   |
| Large  | 24px   | Form Card, Modal     | `$radius-lg`   |
| Pill   | 55px   | Botones              | `$radius-pill` |
| Full   | 9999px | Elementos circulares | `$radius-full` |

### Sombras

| Tipo     | Valor                         | Uso                | Variable SASS      |
| -------- | ----------------------------- | ------------------ | ------------------ |
| Small    | 0 1px 2px rgba(0,0,0,0.05)    | Sombras sutiles    | `$shadow-sm`       |
| Medium   | 0 4px 6px rgba(0,0,0,0.1)     | Elevación media    | `$shadow-md`       |
| Large    | 0 10px 15px rgba(0,0,0,0.1)   | Hover states       | `$shadow-lg`       |
| Card     | 0px 2px 24px rgba(0,0,0,0.24) | Form Card (Figma)  | `$shadow-card`     |
| Dropdown | 0 4px 12px rgba(0,0,0,0.15)   | Menus desplegables | `$shadow-dropdown` |

---

## 🧩 Componentes

### Button

```scss
// Uso del sistema
.btn {
  @include button-base;
  background: $color-text-primary;
  color: $color-bg-card;

  &:hover {
    @include button-hover;
  }
}
```

### Input

```scss
// Uso del sistema
.input__field {
  @include input-base;

  &--error {
    @include input-error;
  }
}
```

### Form Card

```scss
// Uso del sistema
.form-card {
  @include card;
  width: $form-card-width;

  &__fields {
    display: flex;
    flex-direction: column;
    gap: $spacing-form-gap;
  }
}
```

---

## 📱 Responsive

### Breakpoints

| Dispositivo       | Rango          | Columnas     | Variable SASS     |
| ----------------- | -------------- | ------------ | ----------------- |
| **Mobile Small**  | 0 - 575px      | 1 columna    | `$breakpoint-xs`  |
| **Mobile Large**  | 576px - 767px  | 1 columna    | `$breakpoint-sm`  |
| **Tablet**        | 768px - 991px  | 1-2 columnas | `$breakpoint-md`  |
| **Desktop**       | 992px - 1199px | 12 columnas  | `$breakpoint-lg`  |
| **Desktop Large** | 1200px+        | 12 columnas  | `$breakpoint-xl`  |
| **Desktop XL**    | 1440px+        | 12 columnas  | `$breakpoint-xxl` |

### Layout Responsive

#### Mobile (< 768px)

- Layout: **1 columna** (apilado)
- Contenido y formulario uno debajo del otro
- Padding reducido: 20px

#### Tablet (768px - 991px)

- Layout: **1 columna** (apilado)
- Formulario centrado
- Padding: 40px

#### Desktop (≥ 992px)

- Layout: **2 columnas** (contenido 7cols + formulario 5cols)
- Grid de 12 columnas visible en fondo
- Padding: 120px lateral

### Ejemplos de Uso

```scss
// Mobile First
.landing__content {
  display: grid;
  grid-template-columns: 1fr; // Mobile: 1 columna
  gap: $spacing-10;

  @include tablet {
    gap: $spacing-12; // Tablet: más espacio
  }

  @include desktop {
    grid-template-columns: 1fr $form-card-width; // Desktop: 2 columnas
    gap: $spacing-section;
  }
}
```

---

## 🎯 Uso del Sistema

### Importar Variables y Mixins

```scss
// En cualquier componente SCSS
@import "../../../styles/abstracts/variables";
@import "../../../styles/abstracts/mixins";

.mi-componente {
  background: $color-bg-card;
  padding: $spacing-6;
  border-radius: $radius-lg;

  @include desktop {
    padding: $spacing-8;
  }
}
```
