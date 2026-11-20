# Práctica 4 — Formularios

**Sitio de la Clínica Veterinaria ConSentidos**
Desarrollo de Software V · Módulo II: Páginas web y HTML
Prof. José Peralta B. · Universidad Tecnológica de Panamá, Centro Regional de Veraguas

---

## Qué contiene este paquete

| Archivo | Qué es |
| --- | --- |
| `assets/css/consentidos.css` | Hoja de estilos del sitio, sin cambios. **No la modifiques.** |
| `assets/img/logo-consentidos.svg` | Logotipo de la clínica. |
| `assets/js/cita.js` | **Archivo nuevo.** Escribe en el `<output>` el valor del deslizador. *Vista previa del Módulo IV:* no tienes que entenderlo todavía. |

## Qué vas a crear

Una sola página, `cita.html`, con el formulario de solicitud de cita dividido
en **tres `fieldset`**:

| Bloque | Qué practica |
| --- | --- |
| Datos del propietario | `label` + `for` + `id`, `type` de texto, correo, teléfono y URL, `pattern`, `title`, `autocomplete` e `inputmode`. |
| Datos de la mascota | `select` con `optgroup`, `datalist`, `number` con `min`/`max`/`step`, `date`, `color`, `file` y un `fieldset` anidado de opciones. |
| Datos de la cita | `time`, grupos de `radio` y `checkbox`, `range` con su `output`, `textarea`, `readonly` y un campo `hidden`. |

Además actualizas el menú del sitio en las cuatro páginas que ya tenías.

## Dónde va

```
docs/modulos/m02-html/p04-formulario/
```

Cuando termines:

```
p04-formulario/
├── README.md
├── index.html             ← copiado, con el menú actualizado
├── servicios.html         ← copiado, con el menú actualizado
├── componentes.html       ← copiado, con el menú actualizado
├── tarifas.html           ← copiado, con el menú actualizado
├── cita.html              ← nuevo
├── paginas/
│   └── test.html          ← copiado
└── assets/
    └── js/cita.js         ← nuevo, de este paquete
```

## Cómo empezar

1. Copia **toda** la carpeta `p03-tablas/` y renómbrala `p04-formulario/`.
2. Copia `assets/js/cita.js` de este paquete dentro de tu `assets/js/`.
3. Sustituye su `README.md` por el de este paquete.
4. Añade la entrada «Solicitar cita» al menú de las cuatro páginas.
5. Crea `cita.html` partiendo de una copia de `tarifas.html`.
6. Abre con **Live Server** y sigue la guía.

## Las tres confusiones que hay que resolver antes de escribir

> **`id` frente a `name`.** El `id` identifica el elemento dentro de la página
> y es lo que apunta `label for`. El `name` es el nombre con el que el dato
> viaja en el envío. **Un control sin `name` no se envía**, aunque se vea
> perfectamente.
>
> **`label` frente a `placeholder`.** El `placeholder` desaparece al escribir,
> tiene poco contraste y muchos lectores de pantalla no lo anuncian. Es un
> ejemplo del formato esperado, nunca una etiqueta.
>
> **`readonly` frente a `disabled`.** Los dos impiden escribir, pero el dato
> de un campo `readonly` **sí se envía** y el de uno `disabled`, no.

## El formulario no va a enviar nada, y es correcto

Al pulsar «Solicitar la cita» el navegador intentará enviar los datos a
`/api/citas`, que no existe: GitHub Pages es un **servidor estático**, entrega
archivos y no ejecuta programas. Verás un error del servidor, no un error
tuyo. Es la demostración práctica de lo que explica la Unidad 1 sobre sitios
estáticos y dinámicos.

Lo que sí debe funcionar es la **validación**: si faltan campos obligatorios o
alguno tiene un formato incorrecto, el navegador detiene el envío antes de
salir de la página.

## El script del deslizador

`assets/js/cita.js` espera encontrar exactamente estos dos identificadores:

| `id` | Elemento |
| --- | --- |
| `urgencia` | El `<input type="range">` |
| `urgencia-texto` | El `<output>` que muestra el nivel en palabras |

Si cambias uno, el `<output>` deja de actualizarse. Enlázalo en el `<head>`:

```html
<script src="assets/js/cita.js" defer></script>
```

## Antes de entregar

1. Valida las **seis** páginas en <https://validator.w3.org>.
2. Recorre el formulario entero **solo con la tecla Tab**.
3. Haz clic en el **texto** de tres etiquetas: el foco debe saltar a su campo.
4. Registra la ficha de la práctica en `docs/modulos/index.html`.
5. Confirma y sube:

   ```bash
   git add docs/modulos/m02-html/p04-formulario docs/modulos/index.html
   git commit -m "Práctica 4: formulario de solicitud de cita"
   git push
   ```

6. Sube a Moodle el PDF de evidencia, con el nombre exacto
   `4GS121-NN_Apellido-Nombre_M02_Pra04.pdf`.

## Recuerda

- Tu identificación va **en la cabecera** de todas las páginas: nombre completo
  y código de grupo.
- **Nunca** pongas datos sensibles en un campo `hidden`: se leen en el código
  fuente de la página.
- La validación del navegador **no es seguridad**. Compruébalo tú mismo en la
  Práctica 5.
- Las herramientas de desarrollo se abren con **F12** o **Ctrl+Shift+I**.
