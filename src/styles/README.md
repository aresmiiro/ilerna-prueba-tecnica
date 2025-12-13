# Estructura de Estilos

Esta carpeta contiene el sistema de diseño del proyecto organizado siguiendo las mejores prácticas de SASS.

## 📁 Estructura

```
styles/
├── /abstracts          # Variables y mixins
│   ├── _variables.scss # Todas las variables del sistema de diseño
│   └── _mixins.scss    # Todos los mixins reutilizables
├── /base               # Estilos base globales
│   ├── _reset.scss     # Reset CSS
│   ├── _typography.scss # Tipografías globales
│   ├── _grid.scss      # Sistema de grid (legacy)
│   └── _fonts.scss     # Declaración de fuentes
├── /layout             # Grids, contenedores y spacing
│   ├── _grid.scss      # Sistema de grid
│   └── _spacing.scss   # Utilidades de spacing
├── /components         # Estilos globales compartidos (opcional)
└── globals.scss        # Punto de entrada principal
```

## 🎨 Abstracts

### _variables.scss
Contiene todas las variables organizadas por categoría:
- **Colores**: Paleta del proyecto
- **Tipografía**: Fuentes, tamaños, pesos, line-heights
- **Spacing**: Sistema de espaciado de 8px
- **Breakpoints**: Puntos de quiebre responsive
- **Sombras**: Sombras predefinidas
- **Bordes**: Bordes y radios
- **Transiciones**: Tiempos y easings
- **Z-index**: Capas de apilamiento
- **Grid**: Configuración del grid
- **Componentes**: Variables específicas de componentes

### _mixins.scss
Mixins reutilizables organizados por función:
- **Responsive**: `mobile()`, `tablet()`, `desktop()`, `from()`, `until()`
- **Layout**: `flex-center()`, `flex-between()`, `container()`, `grid-12()`
- **Componentes**: `input-base()`, `button-base()`, `card()`

## 💡 Cómo usar en CSS Modules

```scss
// En cualquier .module.scss
@use '../../styles/abstracts/variables' as v;
@use '../../styles/abstracts/mixins' as m;

.myComponent {
  color: v.$color-primary;
  padding: v.$spacing-4;

  @include m.mobile {
    padding: v.$spacing-2;
  }
}
```

## ✅ Ventajas de esta estructura

1. **Modular**: Cada archivo tiene una responsabilidad única
2. **Escalable**: Fácil de mantener y extender
3. **Organizado**: Variables y mixins en un solo lugar (abstracts/)
4. **Limpio**: Layout separado de la lógica de componentes
5. **Reutilizable**: Abstracts compartidos entre todos los componentes
6. **Mantenible**: Cambios centralizados
