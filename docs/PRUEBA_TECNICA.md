# 🎨 INFO PRUEBA TÉCNICA FRONT END DEVELOPER ILERNA

## Como iniciar el proyecto?

Usar NPM INSTALL y NPM RUN DEV

- **Notas**

- He usado fuentes diferentes ya que la del diseño es de pago.
- He agregado un footer y un header parecido al que hay en Figma para rellenar
- Component co-location es la practica que he usado para organizar el SASS, los modulos encapsulados con el sass y los estilos mas globales en caoas en styles.

## Cuéntanos cómo organizarías un sistema de componentes reutilizables en un framework CSS o en una librería UI.

Todo depende mucho de que tipo de proyecto y en que librería, ya que en React suelo usar metodología modular.

Para organizar un sistema de componentes reutilizables, intento que todo sea modular, fácil de mantener y que escale bien. La idea es separar responsabilidades y no mezclar estilos globales con lógica de componentes. Tambien intento crear mixins e utilities para hacerlo todo mas limpio y menos colapsado de codigo.

Normalmente en estos niveles:

Base: estilos globales como fonts, reset, etc.

Utilidades: clases pequeñas y reutilizables para layout y helpers (flex, spacing, text-align…).

Componentes: botones, cards, formularios, etc., pensados para ser independientes y reutilizables (en este caso no ha sido así ya que he usado React Components como metodología.)

Abstracts: son las variables, mixins y funcitions, ya que son herramientas, no generan css.

Evito la herencia y prefiero composición, usando variantes y estados cuando hace falta. Para nombrar clases uso BEM para seguir una arquitectura entedible.

En cuanto a los archivos, suelo organizarlos con Atom design (con nombres mas entendibles):

src/
├── components/
│ ├── elements/ # Componentes básicos (Button, Input, Icon)
│ ├── blocks/ # Combinaciones simples (SearchBar, Card)
│ ├── modules/ # Secciones complejas (Header, ProductGrid)
│ └── templates / # Layouts de página
│
├── styles/
│ ├── abstracts/
│ │ ├── \_variables.scss
│ │ ├── \_mixins.scss
│ │ └── \_functions.scss
│ ├── base/
│ │ ├── \_reset.scss
│ │ ├── \_typography.scss
│ │ └── \_global.scss
│ ├── utilities/ # Clases helper
│ │ ├── \_spacing.scss
│ │ ├── \_flex.scss
│ │ └── \_text.scss
│ └── main.scss
Así cada componente vive en su propia carpeta, es fácil de encontrar y modificar sin romper el resto.
