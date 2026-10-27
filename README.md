# dis8011-app-study

**Góndola de Marketing**: web lúdica para estudiar los apuntes de [markdown/](markdown/). Se abre con doble clic en `index.html`, sin instalar nada.

## Estructura

```text
index.html   Esqueleto de la página; carga style.css y main.js
style.css    Colores y fuentes, inicio, pasillos, juegos y ajustes para celular
main.js      Contenido de los temas, progreso guardado, pantallas, juegos y rutas
```

`main.js` está ordenado por secciones marcadas con comentarios `/* ===== … ===== */`: contenido (un `T.push({...})` por tema), estado, utilidades, confeti, vistas, juegos (tarjetas, quiz, parejas, ordena, clasifica, relámpago) y rutas.

## Agregar o editar contenido

Busca el `T.push({...})` del tema en `main.js`. En `quiz`, la **primera** opción de `o` es la correcta (se barajan al jugar). Para un tema nuevo, agrega otro `T.push({...})` junto a los demás.
