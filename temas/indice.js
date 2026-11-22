/* ===================== CONTENIDO =====================
   Cada pasillo vive en su propio archivo de temas/ y se agrega a T con T.push().
   index.html carga este archivo primero, luego los temas y al final main.js.
   El orden del estante lo da el campo n (main.js ordena T por n).
   Campos: id (sin guiones), n, name, color, tagline, wiki (búsqueda por defecto), refs [patrón, búsqueda en Wikipedia, texto del apunte opcional],
   notes (HTML de apuntes), cards [frente, reverso],
   quiz {q, o: [correcta, ...distractores], w: explicación}, pairs, order {t, i}, sort {t, b: cajas, i: [texto, caja]} */
const T = [];
/* Diapositiva del profesor dentro de un apunte: fig("precio", 12, "Leyenda").
   La imagen está en img/<pasillo>/pNN.jpg (NN = página del PDF). Al hacer clic se abre en grande. */
function fig(dir, page, cap){
  const src = "img/"+dir+"/p"+String(page).padStart(2,"0")+".jpg";
  return '<figure class="fig"><a href="'+src+'" target="_blank" rel="noopener"><img src="'+src+'" alt="'+cap.replace(/"/g,"&quot;")+'" loading="lazy"></a><figcaption>'+cap+' · Diapositiva '+page+'</figcaption></figure>';
}
