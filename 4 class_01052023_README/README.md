
# Intro a la web

## HTML

Hypertext markup lenguage

lenguaje que por medio de etiquetas udentifica elementos.

por ejemplo:

la etiqueta de encabezado H1 se puede usar para el titulo de un ditio web:

`<h1> titulo </h1>`

### ¿como creo un sitio web?

1. crear una carpera donde mantendre mis archivos.
2. crear dentro la carpeta mi archivo `index.html`
3. crear la estructuta del HTML:
    - Escribiendo "!" o  "html:5" y dando enter.
    - Cambiar `<title>Document</title>`
4. Recortar la estructura del HTML
    - `<head></head>` : metadatos, cabeceras, cofiguraciones y el titulo e importaciones.
    - `<body></body>` : estructura visual de la pagina. el contenido.
5. utilizar etiquetas semánticas:

```
<header>
    <nav></nav>
</header>
<main>
    <section></section>
    <aside></aside>
</main>
<footer></footer>
```

6. empieza a añadir las etiquetas que requieras no olvides que cada una puede tener atributos diferentes y atributos en común:
    - el común:
        - class: etiqueta para clasificar elementos, por ejemplo: 
         - `<p class="primero">` 
         - `<p class="primero bg-negro">`
         - `<p class="primero texto">`
        - una etique puede tener tantas clases que requiera, mientras se separen por un espacio.
        - id: identificador para tratar los elementos que queremos sean únicos y tener una forma de acceder directamente a ellos

7. agrega estilos:
    - Inline
    - Interno
    - Externo: Es importar los estilos que viven en un archivo fuera del html con la extensión `.css`
        - Siguiendo los pasos:
            1.  Crear archivo `style.css`.
            2. Enlazar con html ecribiendo dentro del head al final:
            `link:css` y enter.
            y empiezo a escribir usando selectores.
            
8. los selectores son:
    - nombre de la etiqueta
    - clase
    - id
9. Este es el orden de especificidad o de prioridad que da CSS a los selectores de mayor a menor:

- !important
- Estilos en linea
- #Id
- Clases, atributos y pseudoclases
- Elementos y pseudoelementos
- selector universal
