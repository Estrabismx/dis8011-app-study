# dis8011-app-study

**Góndola de Marketing**: web lúdica para estudiar los apuntes de [markdown/](markdown/). Se abre con doble clic en `index.html`, sin instalar nada.

## Estructura

```text
index.html   Esqueleto de la página; carga los temas y luego main.js
style.css    Colores y fuentes, inicio, pasillos, juegos, figuras y ajustes para celular
main.js      Progreso guardado, pantallas, juegos y rutas (sin contenido)
temas/       Un archivo por pasillo con su contenido (T.push({...}))
img/         Diapositivas de los PDF usadas en los apuntes: img/<pasillo>/pNN.jpg
pdf/         PDF originales del curso
markdown/    Texto de cada PDF convertido con MarkItDown
json/        Descripción de las imágenes de cada PDF, página por página
```

`main.js` está ordenado por secciones marcadas con comentarios `/* ===== … ===== */`: estado, utilidades, confeti, vistas, juegos (tarjetas, quiz, parejas, ordena, clasifica, relámpago) y rutas.

## Pasillos

Van en el orden del curso, según el campo `n` de cada tema:

| n | Pasillo | Archivo | id |
| --- | --- | --- | --- |
| 1 | El principio | `temas/conocimiento-e-informacion.js` | `principio` |
| 2 | Marketing y estrategia | `temas/definicion-de-marketing.js` | `marketing` |
| 3 | Segmentación de mercado | `temas/segmentacion-de-mercado.js` | `segmentacion` |
| 4 | Posicionamiento | `temas/posicionamiento.js` | `posicionamiento` |
| 5 | Perfil del consumidor | `temas/perfil-del-consumidor.js` | `perfil` |
| 6 | Producto | `temas/producto.js` | `producto` |
| 7 | Marca | `temas/marca.js` | `branding` |
| 8 | Arquitectura de marca | `temas/arquitectura-de-marca.js` | `marca` |
| 9 | Ciclo de vida del producto | `temas/ciclo-de-vida.js` | `ciclo` |
| 10 | Precio | `temas/precio.js` | `precio` |
| 11 | Distribución (plaza) | `temas/distribucion.js` | `distribucion` |
| 12 | Promoción | `temas/mix-promocional.js` | `promocion` |
| 13 | Viaje del cliente | `temas/viaje-del-cliente.js` | `viaje` |

El `id` se guarda en el progreso del navegador: no lo cambies o se pierde el avance de ese pasillo. Tampoco puede llevar guiones.

## Agregar o editar contenido

Edita el archivo del pasillo en `temas/`. En `quiz`, la **primera** opción de `o` es la correcta (se barajan al jugar).

Para un pasillo nuevo: crea `temas/<nombre>.js` con un `T.push({...})`, agrega su `<script>` en `index.html` (antes de `main.js`) y define su color `--t-<id>` en `style.css` (modo claro y los dos bloques de modo oscuro).

Para mostrar una diapositiva en los apuntes, usa `${fig("<carpeta>", <página>, "Leyenda")}` dentro de `notes`. La imagen debe existir en `img/<carpeta>/pNN.jpg`.

Cada tema tiene `refs`: una lista de `[patrón, búsqueda en Wikipedia, texto del apunte]`. Tras responder una pregunta del quiz, se usa la primera entrada cuyo patrón (palabras separadas por `|`, sin distinguir mayúsculas) aparezca en la pregunta o en su respuesta correcta. Esa entrada define el enlace "Profundizar en Wikipedia" y el apunte que se muestra con "Ver en los apuntes". El tercer valor es opcional y sirve para forzar un apunte específico. Si ninguna entrada calza, se usa `wiki`.
