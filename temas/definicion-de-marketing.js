/* Pasillo 2 · 2do paso: concepto de marketing y estrategia */
T.push({
  id:"marketing", n:2, name:"Marketing y estrategia", color:"var(--t-marketing)",
  tagline:"Concepto de marketing, estrategia vs. planeación, variables controlables, marketing estratégico y operativo, y las 7P.",
  wiki:"Mercadotecnia", refs:[
    ["Sun Tzu|arte de la guerra|engaño|sin luchar","El arte de la guerra","¿Qué es estrategia?"],
    ["Clausewitz|ganar la guerra","Carl von Clausewitz","¿Qué es estrategia?"],
    ["Echeverría|planeación|acción recíproca|ingenieros","Planificación estratégica","Planeación vs. estrategia"],
    ["Eisenhower|planes","Dwight D. Eisenhower","Planeación vs. estrategia"],
    ["Benedetti|táctica","Mario Benedetti","Táctica y estrategia"],
    ["competencia|no marketing","Competencia (economía)","Sin competencia no hay marketing"],
    ["controlables|fortalezas|debilidades|oportunidades|amenazas","Análisis DAFO","Variables controlables"],
    ["palanca|herramienta|demanda","Marketing mix","El marketing como herramienta"],
    ["estratégico|operativo|Lambin|análisis|acción|matriz GE","Marketing estratégico","Las dos caras"],
    ["implementación|evaluación|retroalimentación|metas","Planificación estratégica","Planeación estratégica de marketing"],
    ["7 ?P|personas|procesos|prueba física|evidencia","Mezcla de mercadotecnia","Las 7P"],
    ["4 ?P|mix|plaza|precio|promoción","Mezcla de mercadotecnia","Marketing mix en un plato"],
    ["concepto de marketing|orientación al cliente|Stanton","Mercadotecnia","Concepto de marketing"],
    ["Bilancio|provocar","Mercadotecnia","¿Qué es marketing?"]
  ],
  notes:`
  <div class="note"><h3>¿Qué es marketing?</h3>
    <p>En palabras simples: un <b>conjunto coordinado de actividades</b> (proceso) que intenta <b>provocar una respuesta</b> (conducta) de consumo en un grupo de personas determinado, en un <b>ambiente competitivo</b>, con el propósito de lograr un objetivo corporativo.</p>
    <p>Lectura sugerida: <i>Marketing: el valor de provocar</i>, de Guillermo Bilancio.</p>
    <div class="flow"><span>Valor percibido</span><i>→</i><span>Satisfacción</span><i>→</i><span>Lealtad</span><i>→</i><span>Rentabilidad y crecimiento</span><i>↺</i></div>
  </div>
  <div class="note"><h3>Concepto de marketing (orientación al marketing)</h3>
    <p>Es fundamental para el éxito de la organización:</p>
    <ol>
      <li>La organización y sus trabajadores se centran en <b>detectar y satisfacer las necesidades</b> de los clientes.</li>
      <li>Todas las actividades de marketing (o relacionadas) están <b>coordinadas</b>.</li>
      <li>Hay <b>observación permanente del entorno</b>: mercado y sociedad.</li>
      <li>Se observa a la <b>competencia</b> existente y potencial.</li>
    </ol>
    ${fig("marketing",6,"Orientación al cliente + objetivos de desempeño + actividades coordinadas → satisfacción del cliente → éxito de la organización (Stanton)")}
  </div>
  <div class="note"><h3>¿Qué es estrategia?</h3>
    <p>Nace en el ámbito <b>militar</b>: <i>El arte de la guerra</i>, del general chino <b>Sun Tzu</b>, hace unos 2.300 años. Dos principios:</p>
    <ul><li>Todo el arte de la guerra se basa en el engaño.</li><li>El supremo arte de la guerra es someter al enemigo sin luchar.</li></ul>
    <p><b>Carl von Clausewitz</b> (1780–1831), militar prusiano, autor de <i>De la guerra</i>. Para él, estrategia es “todo aquello que hay que hacer para ganar la guerra”.</p>
    <span class="formula">Estrategia = un plan en un ambiente competitivo</span>
    <p>Más completo: un conjunto de acciones (tácticas) con el propósito de lograr un objetivo en un ambiente competitivo.</p>
  </div>
  <div class="note"><h3>Planeación vs. estrategia</h3>
    <p>Según <b>Rafael Echeverría</b> (<i>Ontología del lenguaje</i>):</p>
    <dl class="kv">
      <dt>Planeación</dt><dd>Diseño de acciones en un espacio relativamente protegido. Lo central es el <b>uso eficiente de los recursos</b> para un objetivo dado. Carácter tecnológico, tarea típica de ingenieros.</dd>
      <dt>Estrategia</dt><dd>Diseño de acciones bajo condiciones de <b>acción recíproca</b>: importa lo que harán otros agentes autónomos. Hay que anticipar sus acciones, mientras ellos anticipan las nuestras.</dd>
    </dl>
    <blockquote>En las batallas te das cuenta de que los planes son inservibles, pero hacer planes es indispensable.<cite>Dwight D. Eisenhower</cite></blockquote>
  </div>
  <div class="note"><h3>Táctica y estrategia</h3>
    <p>El poema de <b>Mario Benedetti</b> ilustra la diferencia: las <b>tácticas</b> son las acciones concretas (“mirarte, aprender cómo sos, hablarte y escucharte”); la <b>estrategia</b> es el objetivo de fondo que las orienta (“que un día cualquiera… por fin me necesites”).</p>
  </div>
  <div class="note"><h3>Sin competencia no hay marketing</h3>
    <div class="flow"><span>¿Hay competencia?</span><i>No →</i><span>No marketing</span></div>
    <div class="flow"><span>¿Hay competencia?</span><i>Sí →</i><span>Marketing</span><i>→</i><span>Estrategia</span></div>
    <p>El marketing y la estrategia existen porque hay competencia.</p>
  </div>
  <div class="note wide"><h3>Variables controlables y no controlables</h3>
    <dl class="kv">
      <dt>Controlables</dt><dd>El marketing de la organización (sus <b>fortalezas y debilidades</b>) y el <b>marketing mix</b>: producto, promoción, distribución y precio.</dd>
      <dt>No controlables</dt><dd>El <b>entorno</b> (marco legal, tecnología, sistema político, exterior, economía, sistema social, clima, otros), el <b>mercado</b> (segmentos) y la <b>competencia</b>. Generan <b>oportunidades y amenazas</b>.</dd>
    </dl>
    ${fig("marketing",15,"La organización usa actividades coordinadas del mix para llegar a los segmentos, a través de un entorno que no controla")}
  </div>
  <div class="note"><h3>El marketing como herramienta</h3>
    <p>El marketing es la <b>palanca</b> que mueve la <b>demanda</b>.</p>
    ${fig("marketing",16,"Un hombre mueve el bloque DEMANDA con la palanca MARKETING")}
  </div>
  <div class="note"><h3>Marketing mix en un plato</h3>
    <p>Incluso un plato de comida (una cazuela) involucra las 4P: <b>producto</b>, <b>promoción</b>, <b>distribución</b> (punto de venta) y <b>precio</b>.</p>
    ${fig("marketing",17,"Las 4P alrededor de un plato de cazuela")}
  </div>
  <div class="note wide"><h3>Las dos caras del proceso de marketing</h3>
    <p>Según <b>Lambin</b> (<i>Dirección de Marketing</i>):</p>
    <dl class="kv">
      <dt>Marketing estratégico</dt><dd>Orientado al <b>análisis</b>: análisis de necesidades → segmentación del mercado → análisis de atractividad → análisis de competitividad → elección de posicionamiento y estrategia.</dd>
      <dt>Marketing operativo</dt><dd>Orientado a la <b>acción</b>: producto → distribución → precio → comunicación → programa de marketing.</dd>
    </dl>
    <p>Herramientas asociadas: SIM (sistema de información de marketing) y PESTAL, segmentación y pronóstico de ventas, matriz GE, fuerzas de Porter y ventaja competitiva, posicionamiento y diferenciación.</p>
    ${fig("marketing",19,"Marketing estratégico (análisis) y marketing operativo (acción), con sus herramientas")}
  </div>
  <div class="note wide"><h3>Planeación estratégica de marketing</h3>
    <div class="flow"><span>Planeación</span><i>→</i><span>Implementación</span><i>→</i><span>Evaluación</span><i>↺ retroalimentación</i></div>
    <dl class="kv">
      <dt>Planeación</dt><dd>Seleccionar el segmento de mercado, fijar metas y seleccionar estrategias y tácticas.</dd>
      <dt>Implementación</dt><dd>Selección de personal, recursos, organización y operación.</dd>
      <dt>Evaluación</dt><dd>Comparar resultados vs. metas.</dd>
      <dt>Retroalimentación</dt><dd>Ajustar metas, cambiar estrategias o tácticas, o corregir la implementación.</dd>
    </dl>
    ${fig("marketing",20,"Planeación, implementación y evaluación con retroalimentación")}
  </div>
  <div class="note"><h3>Las 7P del marketing</h3>
    <p>A las 4P (producto, precio, plaza, promoción) se suman tres pensadas para servicios: <b>personas</b> (people), <b>procesos</b> y <b>prueba física</b> (evidencia física), todas alrededor del público objetivo.</p>
    <p>En clase se discutió: estas tres P adicionales pueden entenderse como parte del <b>producto</b>.</p>
    ${fig("marketing",22,"Las 7P, con Proceso, Prueba física y Gente marcadas y unidas a Producto")}
  </div>`,
  cards:[
    ["Marketing, en palabras simples","Conjunto coordinado de actividades que intenta provocar una conducta de consumo en un grupo determinado, en un ambiente competitivo, para lograr un objetivo corporativo."],
    ["Los 4 pilares del concepto de marketing","Centrarse en las necesidades del cliente, actividades coordinadas, observación permanente del entorno y observación de la competencia."],
    ["Origen del concepto de estrategia","Militar: El arte de la guerra, de Sun Tzu, hace unos 2.300 años."],
    ["Los 2 principios de Sun Tzu","Todo el arte de la guerra se basa en el engaño. El supremo arte es someter al enemigo sin luchar."],
    ["Estrategia según Clausewitz","“Todo aquello que hay que hacer para ganar la guerra.”"],
    ["Estrategia (definición simple)","Un plan en un ambiente competitivo: un conjunto de acciones (tácticas) para lograr un objetivo."],
    ["Planeación (Echeverría)","Diseño de acciones en un espacio protegido, centrado en el uso eficiente de recursos para un objetivo dado."],
    ["Estrategia (Echeverría)","Diseño de acciones bajo acción recíproca: anticipar lo que harán otros agentes autónomos."],
    ["Frase de Eisenhower","“En las batallas te das cuenta de que los planes son inservibles, pero hacer planes es indispensable.”"],
    ["Táctica vs. estrategia","Táctica: acción concreta. Estrategia: el objetivo de fondo que orienta las tácticas."],
    ["¿Por qué existe el marketing?","Porque hay competencia. Sin competencia, no hay marketing."],
    ["Variables controlables","Fortalezas y debilidades de la organización, y el marketing mix (producto, precio, plaza, promoción)."],
    ["Variables no controlables","Entorno (legal, tecnológico, político, económico, social, clima…), mercado y competencia."],
    ["Marketing estratégico (Lambin)","Orientado al análisis: necesidades, segmentación, atractividad, competitividad y elección de posicionamiento."],
    ["Marketing operativo (Lambin)","Orientado a la acción: producto, distribución, precio, comunicación y programa de marketing."],
    ["Etapas de la planeación estratégica de marketing","Planeación → Implementación → Evaluación, con retroalimentación."],
    ["Retroalimentación","Ajustar metas, cambiar estrategias o tácticas, o corregir la implementación."],
    ["Las 7P","Producto, precio, plaza, promoción + personas, procesos y prueba física."],
    ["El marketing como herramienta","Es la palanca que mueve la demanda."]
  ],
  quiz:[
    {q:"¿Dónde se origina el concepto de estrategia?",o:["En el ámbito militar","En la economía clásica","En la publicidad","En la ingeniería"],w:"Nace en lo militar, con El arte de la guerra de Sun Tzu."},
    {q:"¿Quién escribió El arte de la guerra?",o:["Sun Tzu","Clausewitz","Napoleón","Eisenhower"],w:"El general chino Sun Tzu, hace unos 2.300 años."},
    {q:"“El supremo arte de la guerra es someter al enemigo…”",o:["…sin luchar","…con engaños","…con más recursos","…antes que él"],w:"Es uno de los dos principios de Sun Tzu."},
    {q:"Para Clausewitz, estrategia es…",o:["Todo aquello que hay que hacer para ganar la guerra","El uso eficiente de los recursos","El arte del engaño","Un plan sin competencia"],w:"Clausewitz, autor de De la guerra."},
    {q:"Según Echeverría, lo central de la planeación es…",o:["El uso eficiente de los recursos","Anticipar a otros agentes","Engañar a la competencia","Provocar al consumidor"],w:"La planeación ocurre en un espacio protegido; la estrategia, bajo acción recíproca."},
    {q:"Según Echeverría, la estrategia se diseña bajo condiciones de…",o:["Acción recíproca","Espacio protegido","Recursos ilimitados","Monopolio"],w:"Hay que anticipar las acciones de otros agentes autónomos."},
    {q:"“Un plan en un ambiente competitivo” es la definición simple de…",o:["Estrategia","Táctica","Planeación","Marketing mix"],w:"Estrategia = plan en un ambiente competitivo."},
    {q:"Según el diagrama de clase, si NO hay competencia…",o:["No hay marketing","Hay más marketing","Hay estrategia","Se necesita más publicidad"],w:"El marketing y la estrategia existen porque hay competencia."},
    {q:"¿Cuál es una variable controlable?",o:["El precio","La inflación","La competencia","El marco legal"],w:"El marketing mix es controlable; el entorno, el mercado y la competencia no."},
    {q:"¿Cuál es una variable NO controlable?",o:["El sistema político","La promoción","La distribución","El producto"],w:"El entorno (político, legal, económico…) no se controla."},
    {q:"Según Lambin, el marketing orientado al análisis es el…",o:["Marketing estratégico","Marketing operativo","Marketing directo","Marketing masivo"],w:"Estratégico = análisis; operativo = acción."},
    {q:"Elegir el posicionamiento es parte del marketing…",o:["Estratégico","Operativo","Directo","Relacional"],w:"Es el último paso del marketing estratégico de Lambin."},
    {q:"Definir el precio y la distribución es parte del marketing…",o:["Operativo","Estratégico","Masivo","Interno"],w:"El marketing operativo trabaja las 4P."},
    {q:"En la planeación estratégica de marketing, comparar resultados vs. metas es parte de la…",o:["Evaluación","Planeación","Implementación","Segmentación"],w:"Planeación → Implementación → Evaluación."},
    {q:"Seleccionar personal y recursos corresponde a la etapa de…",o:["Implementación","Planeación","Evaluación","Retroalimentación"],w:"La implementación organiza personal, recursos y operación."},
    {q:"¿Cuáles son las 3 P que se agregan en las 7P?",o:["Personas, procesos y prueba física","Plaza, precio y promoción","Producto, packaging y publicidad","Posicionamiento, percepción y propósito"],w:"Personas (people), procesos y prueba física, pensadas para servicios."},
    {q:"En la metáfora de la palanca, el marketing sirve para mover…",o:["La demanda","Los costos","La competencia","El entorno"],w:"El marketing es la herramienta (palanca) que mueve la demanda."}
  ],
  pairs:[
    ["Sun Tzu","El arte de la guerra"],["Clausewitz","Todo lo que hay que hacer para ganar la guerra"],["Echeverría","Planeación vs. estrategia"],
    ["Eisenhower","Los planes son inservibles, planificar es indispensable"],["Benedetti","Poema Táctica y estrategia"],["Lambin","Marketing estratégico y operativo"],
    ["Planeación","Uso eficiente de recursos en un espacio protegido"],["Estrategia","Plan en un ambiente competitivo"],["Táctica","Acción concreta al servicio de la estrategia"],
    ["Marketing estratégico","Orientado al análisis"],["Marketing operativo","Orientado a la acción"],["Bilancio","Marketing: el valor de provocar"]
  ],
  order:[
    {t:"Planeación estratégica de marketing",i:["Planeación","Implementación","Evaluación","Retroalimentación"]},
    {t:"Marketing estratégico según Lambin",i:["Análisis de necesidades","Segmentación del mercado","Análisis de atractividad","Análisis de competitividad","Elección de posicionamiento"]}
  ],
  sort:[
    {t:"Variables controlables y no controlables",b:["Controlable","No controlable"],i:[["Producto",0],["Precio",0],["Promoción",0],["Distribución",0],["Fortalezas de la empresa",0],["Marco legal",1],["Tecnología del país",1],["Economía",1],["Clima",1],["Competencia",1],["Sistema social",1]]},
    {t:"Marketing estratégico u operativo (Lambin)",b:["Estratégico (análisis)","Operativo (acción)"],i:[["Análisis de necesidades",0],["Segmentación del mercado",0],["Análisis de atractividad",0],["Elección de posicionamiento",0],["Producto",1],["Distribución",1],["Precio",1],["Comunicación",1],["Programa de marketing",1]]},
    {t:"Etapas de la planeación estratégica",b:["Planeación","Implementación","Evaluación"],i:[["Seleccionar el segmento",0],["Fijar metas",0],["Seleccionar estrategias y tácticas",0],["Selección de personal",1],["Asignar recursos",1],["Organización y operación",1],["Comparar resultados vs. metas",2]]}
  ]
});
