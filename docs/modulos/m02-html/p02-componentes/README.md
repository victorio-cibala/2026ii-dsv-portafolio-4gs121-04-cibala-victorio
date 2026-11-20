# Práctica 2 — Guía de componentes

**Sitio de la Clínica Veterinaria ConSentidos**
Desarrollo de Software V · Módulo II: Páginas web y HTML
Prof. José Peralta B. · Universidad Tecnológica de Panamá, Centro Regional de Veraguas

---

## Qué contiene este paquete

| Archivo | Qué es |
| --- | --- |
| `assets/css/consentidos.css` | Hoja de estilos del sitio, sin cambios respecto a la Práctica 1. **No la modifiques.** |
| `assets/img/logo-consentidos.svg` | Logotipo de la clínica. |
| `assets/img/luna.svg` | Ilustración de Luna, para la imagen con leyenda. |
| `assets/media/recordatorio.mp3` | Tono de recordatorio de citas, para el `<audio>`. |
| `assets/media/consejos.webm` | Video de consejos, formato WebM. |
| `assets/media/consejos.mp4` | El mismo video, formato MP4. |
| `assets/media/consejos-es.vtt` | Subtítulos en español, formato WebVTT. |
| `assets/media/consejos-poster.jpg` | Imagen de portada del video. |
| `assets/docs/guia-vacunacion.pdf` | PDF para incrustar con `<object>` y para descargar. |
| `assets/js/componentes.js` | Script de la barra de progreso. **Vista previa del Módulo IV:** no tienes que entenderlo todavía. |

## Dónde va

```
docs/modulos/m02-html/p02-componentes/
```

Cuando termines, la carpeta debe verse así:

```
p02-componentes/
├── README.md              ← este archivo
├── index.html             ← copiado de la Práctica 1 y actualizado
├── servicios.html         ← lo escribes tú
├── componentes.html       ← lo escribes tú
├── paginas/
│   └── test.html          ← lo escribes tú
└── assets/
    ├── css/consentidos.css
    ├── img/logo-consentidos.svg, luna.svg
    ├── js/componentes.js
    ├── media/  (audio, video, subtítulos y portada)
    └── docs/guia-vacunacion.pdf
```

## Qué vas a crear

| Página | Qué es |
| --- | --- |
| `index.html` | La portada, que ya tenías de la Práctica 1. Se actualiza con el menú del sitio y dos enlaces nuevos. |
| `servicios.html` | Contenido real: encabezados jerárquicos, listas, glosario y una cita de fuente oficial. |
| `paginas/test.html` | Página auxiliar. Está un nivel más abajo, así que sus rutas suben con `../`. |
| `componentes.html` | **La página de referencia.** Reúne los componentes del sitio y, de cada uno, muestra una descripción, la demostración y el código con que está hecho. La consultarás el resto del curso. |

> En la página de referencia, el código se escribe **escapado**: `&lt;p&gt;` en
> lugar de `<p>`. Es lo único que hace que se vea como texto en vez de
> ejecutarse. Si lo copias sin escapar, el ejemplo aparece dos veces y el código
> por ninguna parte — y el validador no te avisará, porque el marcado es válido.

## Cómo empezar

1. Copia **toda** la carpeta `p01-estructura/` y renómbrala `p02-componentes/`.
2. Sustituye su `assets/` y su `README.md` por los de este paquete: trae más
   archivos, y el README que debe quedar en la carpeta es este.
3. Crea la carpeta `paginas/`.
4. Abre con **Live Server** y sigue la guía.

> **Abre siempre con Live Server.** Si abres con doble clic, el navegador usa el
> protocolo `file://` y **bloquea los subtítulos del video**. No es un error
> tuyo: es una medida de seguridad del navegador.

## El script de la barra de progreso

`assets/js/componentes.js` espera encontrar cuatro elementos con estos
identificadores exactos:

| `id` | Elemento |
| --- | --- |
| `plan-vacunas` | La barra `<progress>` |
| `plan-texto` | El `<output>` que muestra el avance en palabras |
| `btn-dosis` | El botón que registra una dosis |
| `btn-reiniciar` | El botón que reinicia el plan |

Si cambias un `id`, los botones dejan de funcionar. Enlázalo en el `<head>`:

```html
<script src="assets/js/componentes.js" defer></script>
```

## Antes de entregar

1. Valida las **cuatro** páginas en <https://validator.w3.org>.
2. Comprueba la lista de verificación de la guía.
3. Registra la ficha de la práctica en `docs/modulos/index.html`.
4. Confirma y sube:

   ```bash
   git add docs/modulos/m02-html/p02-componentes docs/modulos/index.html
   git commit -m "Práctica 2: contenido, multimedia y componentes interactivos"
   git push
   ```

5. Sube a Moodle el PDF de evidencia, con el nombre exacto
   `4GS121-NN_Apellido-Nombre_M02_Pra02.pdf`.

## Recuerda

- Tu identificación va **en la cabecera** de las cuatro páginas: nombre completo
  y código de grupo. Nunca la cédula.
- Nombres de archivos y carpetas en **minúsculas**, sin espacios ni tildes.
- Las herramientas de desarrollo del navegador se abren con **F12** o
  **Ctrl+Shift+I**. La pestaña **Red** resuelve casi cualquier problema de rutas.
