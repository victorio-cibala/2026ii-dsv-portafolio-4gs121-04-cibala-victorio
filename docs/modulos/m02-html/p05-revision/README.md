# Práctica 5 — Revisión de seguridad y calidad

**Sitio de la Clínica Veterinaria ConSentidos**
Desarrollo de Software V · Módulo II: Páginas web y HTML
Prof. José Peralta B. · Universidad Tecnológica de Panamá, Centro Regional de Veraguas

---

## Qué contiene este paquete

| Archivo | Qué es |
| --- | --- |
| `revision.html` | El informe de revisión, con su estructura y sus tablas. Lo completas tú. |
| `README.md` | Este archivo. Sustituye al de la Práctica 4. |

No hay recursos nuevos: la hoja de estilos, las imágenes y los scripts son los
que ya tienes.

## Qué vas a hacer

Esta práctica no construye una página nueva de contenido: revisa el sitio
completo con lo visto en las secciones 2.10 y 2.11 de la Unidad 2.

1. Comprobar que la validación del formulario **no protege** los datos.
2. Añadir una **política de seguridad de contenidos** (CSP) a las seis
   páginas, construida a partir de lo que bloquea la consola.
3. Revisar los enlaces que abren otra pestaña y el contenido incrustado.
4. Validar las páginas, recorrerlas con el teclado y medir su accesibilidad.
5. Dejar todo anotado en `revision.html`.

## Dónde va

```
docs/modulos/m02-html/p05-revision/
```

Cuando termines:

```
p05-revision/
├── README.md              ← este archivo
├── index.html             ← copiado, con la CSP y el enlace al informe
├── servicios.html         ← copiado, con la CSP
├── componentes.html       ← copiado, con la CSP
├── tarifas.html           ← copiado, con la CSP
├── cita.html              ← copiado, con la CSP
├── revision.html          ← nuevo, de este paquete
├── paginas/
│   └── test.html          ← copiado, con la CSP
└── assets/
```

## Cómo empezar

1. Copia **toda** la carpeta `p04-formulario/` y renómbrala `p05-revision/`.
2. Sustituye su `README.md` por el de este paquete y copia `revision.html`.
3. Abre con **Live Server** y sigue la guía.

## Dos avisos antes de empezar

> **La consola es tu herramienta principal.** Ábrela con **F12** o
> **Ctrl+Shift+I**, pestaña **Consola**. Cada recurso que bloquee tu política
> aparece ahí con la directiva responsable.
>
> **Live Server también aparece en la consola.** Inyecta un pequeño script para
> recargar la página al guardar, y tu política lo bloquea. Ese aviso es
> esperado: no se resuelve añadiendo `'unsafe-inline'`. En GitHub Pages no
> aparece.

## Antes de entregar

1. Valida las **siete** páginas en <https://validator.w3.org>.
2. Abre cada página publicada con la consola abierta: no debe quedar ningún
   recurso del sitio bloqueado.
3. Registra la ficha de la práctica en `docs/modulos/index.html`.
4. Confirma y sube:

   ```bash
   git add docs/modulos/m02-html/p05-revision docs/modulos/index.html
   git commit -m "Práctica 5: política de seguridad e informe de revisión"
   git push
   ```

5. Sube a Moodle el PDF de evidencia, con el nombre exacto
   `4GS121-NN_Apellido-Nombre_M02_Pra05.pdf`.

## Recuerda

- Tu identificación va **en la cabecera** de todas las páginas, también en
  `revision.html`.
- Todo lo que llega al navegador se puede modificar. La validación del
  formulario ayuda a quien lo llena; la que protege los datos es la del
  servidor.
