# Práctica 3 — Tablas

**Sitio de la Clínica Veterinaria ConSentidos**
Desarrollo de Software V · Módulo II: Páginas web y HTML
Prof. José Peralta B. · Universidad Tecnológica de Panamá, Centro Regional de Veraguas

---

## Qué contiene este paquete

| Archivo | Qué es |
| --- | --- |
| `assets/css/consentidos.css` | Hoja de estilos del sitio, sin cambios. **No la modifiques.** |
| `assets/img/logo-consentidos.svg` | Logotipo de la clínica. |

Esta práctica no trae recursos nuevos: todo lo que vas a entregar lo escribes tú.
Si ya tienes la carpeta de la Práctica 2, el `assets/` que tienes sirve igual.

## Qué vas a crear

Una sola página, `tarifas.html`, con **tres tablas** de dificultad creciente:

| Tabla | Qué practica |
| --- | --- |
| Tarifario de servicios | `caption`, `thead`, `tbody`, `tfoot` y `scope` de fila y columna. |
| Horario de los veterinarios | `rowspan` y `colspan`, contando bien las columnas. |
| Tarifas por especie | `colgroup`, `scope="colgroup"` e `id` + `headers`. |

Además actualizas el menú del sitio en las cuatro páginas que ya tenías.

## Dónde va

```
docs/modulos/m02-html/p03-tablas/
```

Cuando termines:

```
p03-tablas/
├── README.md
├── index.html             ← copiado, con el menú actualizado
├── servicios.html         ← copiado, con el menú actualizado
├── componentes.html       ← copiado, con el menú actualizado
├── tarifas.html           ← nuevo
├── paginas/
│   └── test.html          ← copiado
└── assets/
```

## Cómo empezar

1. Copia **toda** la carpeta `p02-componentes/` y renómbrala `p03-tablas/`.
2. Sustituye su `README.md` por el de este paquete.
3. Añade la entrada «Tarifas» al menú de las cuatro páginas.
4. Crea `tarifas.html` partiendo de una copia de `servicios.html`.
5. Abre con **Live Server** y sigue la guía.

## La pregunta que decide si algo es una tabla

> **¿Esta información tiene sentido en una hoja de cálculo?**
>
> Si la respuesta es sí, es una tabla. Si es no —un menú, una galería, la
> distribución de la página—, no lo es. Para colocar elementos en la pantalla
> están Flexbox y CSS Grid, que verás en el Módulo III.

## Lo que no se ve pero se califica

Una tabla mal construida **se ve perfectamente bien**. Lo que falla es su
significado, y solo aparece de dos maneras:

- Con un **lector de pantalla**: sin `scope`, la celda del precio se anuncia
  como un «25.00» suelto, sin decir de qué servicio ni de qué especie.
- Con el **teclado**: si el contenedor de la tabla no lleva `tabindex="0"`,
  una tabla ancha solo se puede desplazar con el ratón.

Las dos cosas están en la lista de verificación de la guía y en la rúbrica.

## Antes de entregar

1. Valida las **cinco** páginas en <https://validator.w3.org>.
2. Estrecha la ventana y recorre las tablas **solo con la tecla Tab**.
3. Registra la ficha de la práctica en `docs/modulos/index.html`.
4. Confirma y sube:

   ```bash
   git add docs/modulos/m02-html/p03-tablas docs/modulos/index.html
   git commit -m "Práctica 3: tablas de tarifas, horario y precios por especie"
   git push
   ```

5. Sube a Moodle el PDF de evidencia, con el nombre exacto
   `4GS121-NN_Apellido-Nombre_M02_Pra03.pdf`.

## Recuerda

- Tu identificación va **en la cabecera** de todas las páginas: nombre completo
  y código de grupo.
- Los `id` son únicos en **toda la página**, no por tabla.
- Las herramientas de desarrollo se abren con **F12** o **Ctrl+Shift+I**.
