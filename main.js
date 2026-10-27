/* ===================== CONTENIDO =====================
   Cada tema se agrega a T con T.push().
   Campos: id, n, name, color, tagline, wiki (búsqueda por defecto), refs [patrón, búsqueda en Wikipedia, texto del apunte opcional],
   notes (HTML de apuntes), cards [frente, reverso],
   quiz {q, o: [correcta, ...distractores], w: explicación}, pairs, order {t, i}, sort {t, b: cajas, i: [texto, caja]} */
const T = [];
/* Pasillo 1 · Arquitectura de marca */
T.push({
  id:"marca", n:1, name:"Arquitectura de marca", color:"var(--t-marca)",
  tagline:"Qué es una marca, identidad vs. imagen, posicionamiento y cómo se organiza un portafolio.",
  wiki:"Marca", refs:[
    ["^branding","Branding","Branding"],["^marcas nuevas","Arquitectura de marca","Estrategia de marca según"],
    ["extensión de línea|nuevo sabor","Extensión de línea"],["extensión de marca|BIC","Extensión de marca"],
    ["multimarcas|Lexus","Arquitectura de marca"],["flanquead|hacia abajo|menor poder","Arquitectura de marca"],
    ["Ries|Trout|posicionamiento","Posicionamiento"],["identidad|imagen|verbal|conceptual|tono|propósito","Identidad corporativa","Identidad de marca"],
    ["segmenta","Segmentación de mercado"],["ancho|profundidad|consistencia|artículo|jerarquía|inventario|versiones","Mezcla de productos"],
    ["arquitectura|Kotler","Arquitectura de marca","Arquitectura de marca y mezcla"],["mezcla|línea de productos","Mezcla de productos","Arquitectura de marca y mezcla"],
    ["amplitud","Arquitectura de marca","Desarrollo de marcas"]
  ],
  notes:`
  <div class="note"><h3>¿Qué es una marca?</h3>
    <p>Un nombre, término, símbolo y/o diseño especial con el que se identifican los bienes o servicios de una empresa en particular.</p>
    <span class="formula">MARCA = NOMBRE COMERCIAL + LOGOTIPO + ISOTIPO</span>
    <blockquote>El valor (para los clientes) adicional de un producto respecto del que tendría otro producto idéntico sin la marca.<cite>Leuthesser</cite></blockquote>
    <blockquote>La ventaja competitiva, sostenible y diferenciada respecto de los competidores que se traduce en mayor volumen o mayor margen.<cite>Marketing Science Institute</cite></blockquote>
  </div>
  <div class="note"><h3>Branding</h3>
    <p>Tiene que ver con la <b>identidad</b> de la marca: valores y conceptos ligados a un modo de vida, una forma de sentir, vivir y pensar.</p>
    <p>Nike, Microsoft o Coca-Cola no solo venden productos, sino un concepto, actitudes e ideas. El branding apunta a los sentimientos y deseos más profundos: busca una <b>conexión emocional</b>. Muchas marcas se volvieron íconos culturales.</p>
  </div>
  <div class="note"><h3>Identidad de marca</h3>
    <p>Conjunto de elementos que la empresa construye para expresar quién es y cómo quiere ser reconocida. Tiene tres dimensiones:</p>
    <dl class="kv"><dt>Conceptual</dt><dd>propósito, valores, personalidad</dd><dt>Verbal</dt><dd>nombre, tono, lenguaje</dd><dt>Visual</dt><dd>logotipo, isotipo, tipografía, color, sistema gráfico</dd></dl>
    <div class="flow"><span>IDENTIDAD</span><i>= lo que la marca construye y proyecta</i></div>
    <div class="flow"><span>IMAGEN</span><i>= lo que las personas perciben</i></div>
    <p>La efectividad del posicionamiento depende de la <b>relevancia, diferenciación y coherencia</b> entre ambas.</p>
  </div>
  <div class="note"><h3>Posicionamiento</h3>
    <p>Lugar que ocupa una marca o producto en la mente de los consumidores, en relación a atributos relevantes y a la competencia. Su propósito es darle un significado que lo distinga e induzca a comprarlo.</p>
    <blockquote>El posicionamiento es lo que las personas piensan sobre tu marca, no lo que tú dices que es.<cite>Al Ries & Jack Trout</cite></blockquote>
    <p>Primero se <b>segmenta</b>: se definen segmentos, se analizan oportunidades de valor, se ajustan capacidades y se definen objetivos y estrategia de posicionamiento por segmento.</p>
  </div>
  <div class="note wide"><h3>Arquitectura de marca y mezcla de productos</h3>
    <blockquote>La forma en que una empresa organiza y estructura sus marcas, productos y servicios para optimizar el valor de cada una y de la organización en su conjunto.<cite>Kotler & Keller, Dirección de Marketing</cite></blockquote>
    <p>Ejemplos de portafolio: <b>Nestlé</b> (10 categorías: agua, cereales, chocolates y confites, cafés y bebidas, culinarios, Health Science, nutrición infantil, alimentos para mascotas, Nestlé Profesional, lácteos) y <b>P&G</b> (10 categorías en 5 sectores: Health Care, Beauty, Grooming, Fabric & Home Care, Baby, Feminine & Family Care).</p>
    <dl class="kv">
      <dt>Mezcla de productos</dt><dd>Todos los productos que ofrece a la venta una compañía.</dd>
      <dt>Línea de productos</dt><dd>Productos con relación estrecha: funcionan de forma similar, se venden a los mismos clientes, en los mismos tipos de tiendas o en un rango específico de precios.</dd>
      <dt>Tipo de producto</dt><dd>Artículos de una línea que comparten alguna de las posibles formas del producto.</dd>
      <dt>Artículo</dt><dd>Unidad distintiva dentro de una línea (tamaño, precio, apariencia…). También llamado unidad de inventario.</dd>
    </dl>
  </div>
  <div class="note"><h3>Estructura de la mezcla</h3>
    <dl class="kv">
      <dt>Ancho</dt><dd>número de líneas comercializadas</dd>
      <dt>Extensión</dt><dd>número total de artículos dentro de cada línea</dd>
      <dt>Profundidad</dt><dd>cantidad de versiones de cada producto de cada línea</dd>
      <dt>Consistencia</dt><dd>qué tan relacionadas están las líneas entre sí</dd>
    </dl>
  </div>
  <div class="note"><h3>Jerarquía de productos</h3>
    <div class="flow"><span>Familia de necesidades</span><i>→</i><span>Familia de producto</span><i>→</i><span>Clase de producto</span><i>→</i><span>Línea de producto</span><i>→</i><span>Tipo de producto</span><i>→</i><span>Artículo</span></div>
    <p>De la necesidad fundamental a la unidad que se puede distinguir dentro de una marca o línea.</p>
  </div>
  <div class="note"><h3>Desarrollo de marcas</h3>
    <p><b>Amplitud:</b> número y naturaleza de los productos vinculados a las marcas de la empresa. Pregunta difícil: ¿cuántas líneas y variantes debe tener?</p>
    <ul>
      <li><b>Penetrar nuevos segmentos:</b> hacia abajo (marcas para menor poder de compra) o hacia arriba (marcas premium).</li>
      <li><b>Proteger marcas líderes:</b> marcas flanqueadoras frente a la competencia.</li>
      <li><b>Generar rentabilidad:</b> aprovechar marcas consolidadas.</li>
      <li><b>Estimular la competencia interna:</b> más innovación y desempeño.</li>
      <li><b>Generar sinergias:</b> economías de escala en marketing y distribución.</li>
    </ul>
  </div>
  <div class="note wide"><h3>Estrategia de marca según clase de producto</h3>
    <div class="mx">
      <div></div><div class="ax">Clase existente</div><div class="ax">Clase nueva</div>
      <div class="ax y">Marca existente</div>
      <div class="q"><b>Extensión de línea</b><span>Nuevos sabores, envases, colores, ingredientes o tamaños bajo la misma marca.</span></div>
      <div class="q"><b>Extensión de marca</b><span>Misma marca en una nueva clase: BIC en lápices, afeitadoras y encendedores. Funciona si el posicionamiento es coherente.</span></div>
      <div class="ax y">Marca nueva</div>
      <div class="q"><b>Multimarcas</b><span>Marcas adicionales en la misma clase para segmentos distintos: P&G Ace–Ariel, Honda–Acura, Toyota–Lexus.</span></div>
      <div class="q"><b>Marcas nuevas</b><span>Ninguna marca actual sirve para la nueva clase. Si BIC hiciera cepillos de dientes, probablemente no los llamaría BIC.</span></div>
    </div>
  </div>`,
  cards:[
    ["¿Qué es una marca?","Un nombre, término, símbolo y/o diseño especial con el que se identifican los bienes o servicios de una empresa en particular."],
    ["Fórmula de marca","MARCA = NOMBRE COMERCIAL + LOGOTIPO + ISOTIPO"],
    ["Marca según Leuthesser","El valor (para los clientes) adicional de un producto respecto del que tendría otro producto idéntico sin la marca."],
    ["Marca según el Marketing Science Institute","La ventaja competitiva, sostenible y diferenciada respecto de los competidores que se traduce en mayor volumen o mayor margen para la empresa."],
    ["Branding","Trabaja la identidad de la marca: valores y conceptos ligados a un modo de vida. Se dirige a los sentimientos y busca una conexión emocional con el cliente."],
    ["Identidad de marca","Conjunto de elementos que la empresa construye para expresar quién es y cómo quiere ser reconocida."],
    ["Las 3 dimensiones de la identidad","Conceptual (propósito, valores, personalidad) · Verbal (nombre, tono, lenguaje) · Visual (logotipo, isotipo, tipografía, color, sistema gráfico)."],
    ["Identidad vs. Imagen","Identidad: lo que la marca construye y proyecta. Imagen: lo que las personas perciben."],
    ["¿De qué depende la efectividad del posicionamiento?","De la relevancia, diferenciación y coherencia entre identidad e imagen."],
    ["Posicionamiento","Lugar que ocupa una marca o producto en la mente de los consumidores, respecto de atributos relevantes y de la competencia."],
    ["Frase de Ries & Trout","“El posicionamiento es lo que las personas piensan sobre tu marca, no lo que tú dices que es.”"],
    ["Arquitectura de marca (Kotler & Keller)","La forma en que una empresa organiza y estructura sus marcas, productos y servicios para optimizar el valor de cada una y de la organización en su conjunto."],
    ["Mezcla de productos","Todos los productos que ofrece a la venta una compañía."],
    ["Línea de productos","Grupo de productos muy relacionados: funcionan similar, se venden a los mismos clientes, en los mismos tipos de tiendas o en un rango de precios específico."],
    ["Tipo de producto","Artículos dentro de una línea que comparten alguna de las posibles formas del producto."],
    ["Artículo","Unidad distintiva dentro de una línea (por tamaño, precio, apariencia u otro atributo). También llamada unidad de inventario."],
    ["Ancho / Extensión","Ancho: número de líneas comercializadas. Extensión: número total de artículos dentro de cada línea."],
    ["Profundidad / Consistencia","Profundidad: versiones de cada producto de cada línea. Consistencia: qué tan relacionadas están las líneas entre sí."],
    ["Amplitud de desarrollo de marca","Número y naturaleza de los diferentes productos vinculados a las marcas que vende la empresa."],
    ["Funciones del desarrollo de marcas","Penetrar nuevos segmentos (hacia abajo / hacia arriba), proteger marcas líderes, generar rentabilidad, estimular la competencia interna y generar sinergias."],
    ["Extensión de línea","Nuevos tipos o artículos en la misma línea y bajo la misma marca: sabores, formatos de envase, colores, ingredientes, tamaños."],
    ["Extensión de marca","Lanzar un producto en una nueva clase bajo la misma marca. Ej: BIC en lápices, máquinas de afeitar y encendedores."],
    ["Multimarcas","Marcas adicionales en la misma clase para segmentos distintos. Ej: P&G Ace–Ariel, Honda–Acura, Toyota–Lexus."],
    ["Marcas nuevas","Cuando ninguna marca actual es adecuada para una nueva clase. Ej: si BIC hiciera cepillos de dientes, probablemente no los llamaría BIC."]
  ],
  quiz:[
    {q:"¿Cuál es la fórmula de marca vista en clase?",o:["Nombre comercial + logotipo + isotipo","Nombre + precio + envase","Logotipo + eslogan + color","Producto + servicio + garantía"],w:"MARCA = NOMBRE COMERCIAL + LOGOTIPO + ISOTIPO."},
    {q:"“El posicionamiento es lo que las personas piensan sobre tu marca, no lo que tú dices que es.” ¿De quién es la frase?",o:["Al Ries & Jack Trout","Kotler & Keller","Leuthesser","Peter Drucker"],w:"Es de Al Ries & Jack Trout."},
    {q:"Lo que las personas perciben de una marca se llama…",o:["Imagen","Identidad","Isotipo","Arquitectura"],w:"Identidad es lo que la marca construye y proyecta; imagen es lo que la gente percibe."},
    {q:"El tono y el lenguaje de una marca pertenecen a la dimensión…",o:["Verbal","Conceptual","Visual","Operativa"],w:"Verbal: nombre, tono, lenguaje."},
    {q:"El propósito, los valores y la personalidad pertenecen a la dimensión…",o:["Conceptual","Verbal","Visual","Comercial"],w:"Conceptual: propósito, valores, personalidad."},
    {q:"El número de líneas que comercializa una empresa es su…",o:["Ancho","Extensión","Profundidad","Consistencia"],w:"Ancho = número de líneas comercializadas."},
    {q:"La cantidad de versiones de cada producto dentro de cada línea es la…",o:["Profundidad","Extensión","Ancho","Consistencia"],w:"Profundidad = versiones de cada producto de cada línea."},
    {q:"Qué tan relacionadas están entre sí las líneas de productos se llama…",o:["Consistencia","Profundidad","Ancho","Amplitud"],w:"Consistencia = relación entre las líneas."},
    {q:"Toyota crea Lexus para un segmento distinto dentro de la misma clase de producto. ¿Qué estrategia es?",o:["Multimarcas","Extensión de línea","Extensión de marca","Marcas nuevas"],w:"Multimarcas: marca adicional en la misma clase."},
    {q:"BIC usa su marca para lápices, máquinas de afeitar y encendedores. ¿Qué estrategia es?",o:["Extensión de marca","Extensión de línea","Multimarcas","Marcas nuevas"],w:"Extensión de marca: misma marca en una nueva clase."},
    {q:"Una bebida lanza un nuevo sabor bajo la misma marca. ¿Qué estrategia es?",o:["Extensión de línea","Extensión de marca","Multimarcas","Marcas nuevas"],w:"Extensión de línea: más tipos o artículos en la misma línea y marca."},
    {q:"Unidad distintiva dentro de una línea, también conocida como unidad de inventario:",o:["Artículo","Tipo de producto","Clase de producto","Familia de producto"],w:"El artículo es la unidad de inventario."},
    {q:"Usar marcas flanqueadoras frente a la competencia sirve para…",o:["Proteger marcas líderes","Generar sinergias","Penetrar segmentos hacia arriba","Estimular la competencia interna"],w:"Las marcas flanqueadoras protegen a las marcas líderes."},
    {q:"Crear marcas nuevas para segmentos con menor poder de compra es penetrar segmentos…",o:["Hacia abajo","Hacia arriba","Flanqueando","Por sinergia"],w:"Hacia abajo = menor poder de compra; hacia arriba = marcas premium."},
    {q:"La efectividad del posicionamiento depende de…",o:["Relevancia, diferenciación y coherencia","Precio, plaza y promoción","Logotipo, isotipo y tipografía","Volumen, margen y costos"],w:"Relevancia, diferenciación y coherencia entre identidad e imagen."},
    {q:"¿Qué se debe considerar al inicio de una estrategia orientada al mercado?",o:["La segmentación del mercado","El diseño del logotipo","La fijación del precio","Una extensión de marca"],w:"Primero se segmenta y luego se define el posicionamiento por segmento."},
    {q:"En la jerarquía de productos, ¿qué nivel va justo después de “Familia de necesidades”?",o:["Familia de producto","Clase de producto","Línea de producto","Artículo"],w:"Familia de necesidades → Familia de producto → Clase → Línea → Tipo → Artículo."}
  ],
  pairs:[
    ["Identidad","Lo que la marca construye y proyecta"],["Imagen","Lo que las personas perciben"],
    ["Ancho","Número de líneas comercializadas"],["Extensión","Total de artículos dentro de cada línea"],
    ["Profundidad","Versiones de cada producto de cada línea"],["Consistencia","Qué tan relacionadas están las líneas"],
    ["Mezcla de productos","Todo lo que vende una compañía"],["Artículo","Unidad de inventario de una línea"],
    ["Posicionamiento","Lugar que ocupa la marca en la mente"],["Extensión de línea","Nuevo sabor o envase con la misma marca"],
    ["Extensión de marca","Misma marca en una nueva clase"],["Multimarcas","Otra marca en la misma clase (Toyota → Lexus)"],
    ["Marcas nuevas","Nueva marca para una nueva clase"],["Marcas flanqueadoras","Protegen a las marcas líderes"]
  ],
  order:[
    {t:"Jerarquía de productos: de lo más amplio a lo más específico",i:["Familia de necesidades","Familia de producto","Clase de producto","Línea de producto","Tipo de producto","Artículo"]}
  ],
  sort:[
    {t:"Dimensiones de la identidad",b:["Conceptual","Verbal","Visual"],i:[["Propósito",0],["Valores",0],["Personalidad",0],["Nombre",1],["Tono",1],["Lenguaje",1],["Logotipo",2],["Isotipo",2],["Tipografía",2],["Color",2],["Sistema gráfico",2]]},
    {t:"Estrategia de marca",b:["Extensión de línea","Extensión de marca","Multimarcas","Marcas nuevas"],i:[["Un yogur lanza sabor maracuyá con la misma marca",0],["Nuevo formato de envase de 3 litros",0],["Un detergente agrega una versión con nuevo ingrediente",0],["BIC vende encendedores con su marca",1],["BIC vende máquinas de afeitar",1],["Honda crea Acura",2],["Toyota crea Lexus",2],["P&G vende Ace y Ariel",2],["BIC haría cepillos de dientes con otro nombre",3],["Ninguna marca actual sirve para la nueva clase",3]]}
  ]
});
/* Pasillo 2 · Ciclo de vida del producto */
T.push({
  id:"ciclo", n:2, name:"Ciclo de vida del producto", color:"var(--t-ciclo)",
  tagline:"Etapas del ciclo, matriz BCG, innovación y cómo anticiparse al futuro.",
  wiki:"Ciclo de vida del producto", refs:[
    ["BCG|vaca|estrella|interrogación|perro","Matriz BCG"],["Drucker","Peter Drucker"],["Nokia","Nokia"],
    ["design thinking","Design thinking"],["prospectiva|forecasting","Prospectiva"],
    ["señales|rupturas|tendencias|emprendedores","Prospectiva"],["invento|innovación","Innovación"],["exigentes|entorno","Macroentorno"],
    ["por primera vez|nuevo para la empresa","Desarrollo de nuevos productos"],["introducción|crecimiento|madurez|declive","Ciclo de vida del producto"],
    ["producto nuevo","Desarrollo de nuevos productos","¿Cómo reconocer"],["recibir valor|creatividad","Marketing estratégico","En resumen"]
  ],
  notes:`
  <div class="note wide"><h3>Las etapas</h3>
    <p>Los productos, como las personas, atraviesan un ciclo de vida: crecen, declinan, mueren y nacen otros que los reemplazan. Los nuevos productos son esenciales para mantener el crecimiento de la compañía.</p>
    <div class="mx" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr))">
      <div class="q"><b>Introducción</b><span>Crecimiento lento en ventas. Altos gastos asociados.</span></div>
      <div class="q"><b>Crecimiento</b><span>Período de aceptación en el mercado (ventas) y mejora de utilidades.</span></div>
      <div class="q"><b>Madurez</b><span>Penetración potencial máxima del mercado. Utilidades estables o se reducen por estrategias defensivas.</span></div>
      <div class="q"><b>Declive</b><span>Las ventas caen y las utilidades se reducen.</span></div>
    </div>
  </div>
  <div class="note wide"><h3>Matriz BCG: crecimiento y participación</h3>
    <p>Analiza la posición de un producto o negocio para decidir dónde <b>invertir, retirar la inversión o abandonar</b>. BCG: consultora creada en EE.UU. en 1963 por Bruce Henderson (ex alumno de Harvard Business School).</p>
    <div class="mx">
      <div></div><div class="ax">Participación alta</div><div class="ax">Participación baja</div>
      <div class="ax y">Crecimiento alto</div>
      <div class="q"><b>★ Estrella</b><span>Generan rentabilidad pero requieren constantes inversiones: flujo de fondos nulo o negativo.</span></div>
      <div class="q"><b>? Interrogación</b><span>No se sabe qué pasará. Hay que reevaluar la estrategia: puede volverse estrella o perro.</span></div>
      <div class="ax y">Crecimiento bajo</div>
      <div class="q"><b>$ Vaca</b><span>Generan ingresos con importante rentabilidad y bajas inversiones.</span></div>
      <div class="q"><b>✕ Perro</b><span>Última etapa del ciclo. Normalmente no conviene mantenerlos en el portafolio.</span></div>
    </div>
  </div>
  <div class="note"><h3>¿Por qué estudiar el ciclo de vida?</h3>
    <p>Cada producto de la mezcla está en una etapa distinta, así que hay que mirar el portafolio completo para:</p>
    <ul><li>Diversificar el riesgo.</li><li>Evitar que varios productos entren en declive a la vez.</li><li>Introducir nuevos productos antes de que los actuales pierdan vigencia.</li><li>Mantener una oferta equilibrada y sostenible.</li></ul>
    <p><b>El desafío no es evitar el declive, sino anticiparse a él.</b></p>
  </div>
  <div class="note"><h3>El caso Nokia</h3>
    <p>Fue un gigante de la telefonía móvil. Sus errores: <b>falta de adaptación al cambio tecnológico</b> (llegaron iPhone y Android) y <b>falta de innovación</b> (solo mejoró productos existentes). Lección: adaptarse, innovar de forma proactiva y buscar nuevas oportunidades.</p>
    <p>Además, cuando un producto es exitoso, atrae nuevos competidores con productos similares, sustitutos o mejorados.</p>
  </div>
  <div class="note"><h3>¿Cómo reconocer un nuevo producto?</h3>
    <p><b>Desde el mercado:</b></p>
    <ul><li><b>Totalmente nuevos:</b> satisfacen una necesidad sin solución equivalente.</li><li><b>Sustancialmente mejorados:</b> cambios sustanciales frente a lo existente.</li></ul>
    <p><b>Desde la empresa:</b></p>
    <ul><li><b>Nuevos para la empresa:</b> ya existen en el mercado, pero la empresa los incorpora por primera vez.</li></ul>
  </div>
  <div class="note"><h3>Innovación</h3>
    <blockquote>En una empresa sólo hay dos funciones básicas, el Marketing y la Innovación.<cite>Peter Drucker (1905–2005), el mayor filósofo de la administración del siglo XX</cite></blockquote>
    <ul>
      <li><b>Innovación:</b> crear o mejorar un producto o servicio que agrega valor y es aceptado por el mercado.</li>
      <li><b>Invento ≠ Innovación:</b> un invento es innovación cuando genera beneficios y el consumidor está dispuesto a pagar por ellos.</li>
      <li>Se construye sobre conocimiento previo: primero se aprende, luego se crean nuevas aplicaciones.</li>
      <li>Innovar no es una opción, es una necesidad: el entorno cambia constantemente.</li>
    </ul>
  </div>
  <div class="note"><h3>Un entorno en permanente cambio</h3>
    <dl class="kv">
      <dt>Mercado / Demanda</dt><dd>consumidores más informados y exigentes; búsqueda de mayor valor</dd>
      <dt>Industria / Oferta</dt><dd>más competencia, más alternativas, nuevos modelos de negocio</dd>
      <dt>Macroentorno</dt><dd>cambios tecnológicos, sociales y económicos, regulatorios y ambientales</dd>
    </dl>
    <p><b>Design Thinking:</b> resolución de problemas que combina empatía, creatividad y análisis para soluciones centradas en las necesidades reales de los usuarios.</p>
  </div>
  <div class="note"><h3>Dos formas de entender el futuro</h3>
    <p><b>Forecasting</b> proyecta: parte del pasado.</p>
    <div class="flow"><span>Pasado</span><i>→</i><span>Presente</span><i>→</i><span>Futuro probable</span></div>
    <p><i>¿Qué creemos que va a ocurrir?</i></p>
    <p><b>Prospectiva estratégica</b> explora: parte del presente.</p>
    <div class="flow"><span>Presente</span><i>→</i><span>Futuros posibles</span></div>
    <p><i>¿Qué podría ocurrir y cómo nos preparamos?</i></p>
  </div>
  <div class="note"><h3>Observar el entorno</h3>
    <ul>
      <li><b>Señales de futuro:</b> indicios emergentes de cambios que podrían adquirir importancia.</li>
      <li><b>Rupturas:</b> acontecimientos que alteran significativamente las reglas.</li>
      <li><b>Tendencias:</b> cambios que se desarrollan y consolidan en el tiempo.</li>
    </ul>
    <div class="flow"><span>Tendencias + Señales + Rupturas</span><i>→</i><span>Oportunidades de innovación</span></div>
    <p>Los emprendedores exitosos detectan primero las señales, las transforman en oportunidades y, <b>antes de que sean tendencias</b>, desarrollan productos o servicios.</p>
  </div>
  <div class="note"><h3>En resumen</h3>
    <p>El marketing estratégico intenta resolver el “conflicto” producto-mercado para entregar valor, generar riqueza y aumentar bienestar. <b>“Para recibir valor, hay que dar valor.”</b></p>
    <p>La creatividad no es tener ideas brillantes por inspiración: es <b>seguir un proceso</b> que transforma un problema en una solución con valor para las personas.</p>
  </div>`,
  cards:[
    ["Introducción","Crecimiento lento en ventas y altos gastos asociados."],
    ["Crecimiento","Período de aceptación en el mercado: suben las ventas y mejoran las utilidades."],
    ["Madurez","Penetración potencial máxima del mercado. Utilidades estables o que se reducen por estrategias defensivas."],
    ["Declive","Las ventas muestran una caída y las utilidades se reducen."],
    ["Matriz BCG: ¿para qué sirve?","Analiza la posición de un producto o negocio para decidir dónde invertir, retirar la inversión o abandonar. Cruza participación de mercado y crecimiento de la demanda."],
    ["BCG: Estrella","Alta participación, alto crecimiento. Rentables, pero requieren constantes inversiones: flujo de fondos nulo o negativo."],
    ["BCG: Vaca","Alta participación, bajo crecimiento. Generan ingresos con importante rentabilidad y bajas inversiones."],
    ["BCG: Interrogación","Baja participación, alto crecimiento. No se sabe qué pasará: hay que reevaluar; puede volverse estrella o perro."],
    ["BCG: Perro","Baja participación, bajo crecimiento. Última etapa del ciclo; normalmente no conviene mantenerlos."],
    ["¿Por qué estudiar el ciclo de vida?","Diversificar el riesgo, evitar declives simultáneos, introducir nuevos productos a tiempo y mantener una oferta equilibrada. El desafío es anticiparse al declive."],
    ["Errores de Nokia","Falta de adaptación al cambio tecnológico (iPhone, Android) y falta de innovación: solo mejoró productos existentes."],
    ["Tipos de producto nuevo","Mercado: totalmente nuevos o sustancialmente mejorados. Empresa: nuevos para la empresa (ya existen en el mercado)."],
    ["Frase de Peter Drucker","“En una empresa sólo hay dos funciones básicas, el Marketing y la Innovación.”"],
    ["Invento vs. Innovación","Un invento se vuelve innovación cuando genera beneficios para el consumidor y este está dispuesto a pagar por ellos."],
    ["Design Thinking","Enfoque de resolución de problemas que combina empatía, creatividad y análisis, centrado en las necesidades reales de los usuarios."],
    ["Forecasting","Parte del pasado y proyecta tendencias: Pasado → Presente → Futuro probable. ¿Qué creemos que va a ocurrir?"],
    ["Prospectiva estratégica","Parte del presente y explora futuros posibles. ¿Qué podría ocurrir y cómo nos preparamos?"],
    ["Señales, rupturas y tendencias","Señales: indicios emergentes. Rupturas: alteran las reglas. Tendencias: se consolidan en el tiempo. Juntas → oportunidades de innovación."],
    ["“Para recibir valor…”","“…hay que dar valor.” El marketing estratégico resuelve el conflicto producto-mercado."],
    ["¿Qué es la creatividad (en negocios)?","Seguir un proceso que transforma un problema en una solución con valor para las personas, no tener ideas brillantes por inspiración."]
  ],
  quiz:[
    {q:"Etapa con crecimiento lento en ventas y altos gastos asociados:",o:["Introducción","Crecimiento","Madurez","Declive"],w:"Introducción."},
    {q:"Penetración potencial máxima y utilidades estables o en baja por estrategias defensivas:",o:["Madurez","Crecimiento","Introducción","Declive"],w:"Madurez."},
    {q:"Período de aceptación en el mercado y mejora de utilidades:",o:["Crecimiento","Madurez","Introducción","Declive"],w:"Crecimiento."},
    {q:"¿Qué variables cruza la matriz BCG?",o:["Participación de mercado y crecimiento de la demanda","Precio y calidad","Satisfacción y lealtad","Costos y ventas"],w:"Es la matriz de crecimiento y participación."},
    {q:"Un producto con alta participación en un mercado de bajo crecimiento es una…",o:["Vaca","Estrella","Interrogación","Perro"],w:"Vaca: genera ingresos con bajas inversiones."},
    {q:"Productos rentables que requieren constantes inversiones y tienen flujo de fondos nulo o negativo:",o:["Estrella","Vaca","Perro","Interrogación"],w:"Estrella."},
    {q:"No se sabe qué pasará con ellos; pueden convertirse en estrella o perro:",o:["Interrogación","Vaca","Estrella","Perro"],w:"Interrogación: hay que reevaluar la estrategia."},
    {q:"En la matriz BCG, ¿cuál normalmente no conviene mantener en el portafolio?",o:["Perro","Vaca","Estrella","Interrogación"],w:"Perro: última etapa del ciclo."},
    {q:"Según Peter Drucker, las dos funciones básicas de una empresa son…",o:["Marketing e Innovación","Finanzas y Producción","Ventas y Logística","Marketing y Finanzas"],w:"Marketing e Innovación."},
    {q:"Un invento se transforma en innovación cuando…",o:["Genera beneficios y el consumidor está dispuesto a pagar","Se patenta","Lo usa la competencia","Es tecnológicamente avanzado"],w:"Invento ≠ innovación: debe ser aceptado y valorado por el mercado."},
    {q:"“¿Qué podría ocurrir y cómo nos preparamos?” es la pregunta de…",o:["La prospectiva estratégica","El forecasting","La matriz BCG","El Design Thinking"],w:"La prospectiva explora futuros posibles; el forecasting proyecta el probable."},
    {q:"Indicios emergentes de cambios que podrían adquirir importancia:",o:["Señales de futuro","Rupturas","Tendencias","Forecasting"],w:"Señales de futuro."},
    {q:"Acontecimientos que alteran significativamente las reglas existentes:",o:["Rupturas","Tendencias","Señales de futuro","Ciclos"],w:"Rupturas."},
    {q:"¿Cuáles fueron los errores clave de Nokia?",o:["Falta de adaptación tecnológica y de innovación","Precios demasiado bajos","Exceso de marcas","Mala distribución"],w:"No se adaptó a iPhone y Android, y solo mejoró productos existentes."},
    {q:"Un producto que ya existe en el mercado, pero que la empresa ofrece por primera vez, es…",o:["Nuevo para la empresa","Totalmente nuevo","Sustancialmente mejorado","Un perro"],w:"Nuevo desde el punto de vista de la empresa."},
    {q:"Completa: “El desafío no es evitar el declive, sino…”",o:["anticiparse a él","postergarlo","ignorarlo","bajar los precios"],w:"…anticiparse a él."},
    {q:"El Design Thinking combina…",o:["Empatía, creatividad y análisis","Precio, plaza y promoción","Datos, patrones e insights","Pasado, presente y futuro"],w:"Empatía, creatividad y análisis."},
    {q:"“Consumidores más exigentes” es un cambio a nivel de…",o:["Mercado / Demanda","Industria / Oferta","Macroentorno","Empresa"],w:"Mercado / Demanda."},
    {q:"Los emprendedores exitosos desarrollan productos…",o:["Antes de que las señales se vuelvan tendencias","Cuando la tendencia ya está consolidada","Solo tras una ruptura","Después de que el producto entra en madurez"],w:"Detectan señales, las vuelven oportunidades y actúan antes de que sean tendencias."}
  ],
  pairs:[
    ["Introducción","Ventas lentas y altos gastos"],["Crecimiento","Aceptación y mejora de utilidades"],
    ["Madurez","Penetración máxima; estrategias defensivas"],["Declive","Ventas y utilidades caen"],
    ["Estrella","Rentable, pero exige inversión constante"],["Vaca","Genera caja con baja inversión"],
    ["Interrogación","Incierto: estrella o perro"],["Perro","Última etapa; conviene retirarlo"],
    ["Forecasting","Proyecta el pasado a un futuro probable"],["Prospectiva","Explora futuros posibles"],
    ["Señales de futuro","Indicios emergentes de cambio"],["Rupturas","Hechos que alteran las reglas"],
    ["Tendencias","Cambios que se consolidan en el tiempo"],["Design Thinking","Empatía + creatividad + análisis"]
  ],
  order:[
    {t:"Etapas del ciclo de vida",i:["Introducción","Crecimiento","Madurez","Declive"]},
    {t:"Cómo actúa un emprendedor exitoso",i:["Detecta señales de futuro","Las transforma en oportunidades","Desarrolla productos o servicios","Las señales se convierten en tendencias"]},
    {t:"Forecasting: el recorrido",i:["Pasado","Presente","Futuro probable"]}
  ],
  sort:[
    {t:"Matriz BCG",b:["Estrella","Vaca","Interrogación","Perro"],i:[["Alta participación + alto crecimiento",0],["Requiere inversión constante; flujo nulo o negativo",0],["Alta participación + bajo crecimiento",1],["Genera ingresos con bajas inversiones",1],["Baja participación + alto crecimiento",2],["Hay que reevaluar la estrategia",2],["Baja participación + bajo crecimiento",3],["Última etapa del ciclo de vida",3]]},
    {t:"Etapa del ciclo de vida",b:["Introducción","Crecimiento","Madurez","Declive"],i:[["Crecimiento lento en ventas",0],["Altos gastos asociados",0],["Período de aceptación en el mercado",1],["Mejora de utilidades",1],["Penetración potencial máxima",2],["Estrategias defensivas",2],["Las ventas muestran una caída",3],["Aparecen productos que lo reemplazan",3]]},
    {t:"Entorno en permanente cambio",b:["Mercado / Demanda","Industria / Oferta","Macroentorno"],i:[["Consumidores más informados",0],["Consumidores más exigentes",0],["Búsqueda de mayor valor",0],["Mayor competencia",1],["Más alternativas de productos y servicios",1],["Nuevos modelos de negocio",1],["Cambios tecnológicos",2],["Cambios sociales y económicos",2],["Cambios regulatorios y ambientales",2]]}
  ]
});
/* Pasillo 3 · Perfil del consumidor */
T.push({
  id:"perfil", n:3, name:"Perfil del consumidor", color:"var(--t-perfil)",
  tagline:"Buyer persona, sesgos cognitivos, roles y riesgos de compra, y Data Mining.",
  wiki:"Comportamiento del consumidor", refs:[
    ["^perfil del consumidor","Perfil del consumidor","Perfil del consumidor"],["^impactos","Segmentación de mercado","Impacto en las decisiones"],
    ["^4 métodos","Investigación de mercados","Métodos para construir"],["buyer persona","Buyer persona"],["psicográfic","Segmentación psicográfica"],["anclaje|100.000","Efecto anclaje"],
    ["disponibilidad|robos","Heurística de disponibilidad"],["representatividad|envase verde","Heurística de representatividad"],
    ["aversión|pierdas","Aversión a la pérdida"],["efecto marco|libre de grasa","Efecto marco"],["halo","Efecto halo"],
    ["kahneman|heurísticas","Sesgo cognitivo"],["riesgo","Riesgo percibido"],["clustering","Análisis de grupos"],
    ["asociación","Reglas de asociación"],["regresión logística","Regresión logística"],["CRISP","CRISP-DM"],
    ["churn","Churn rate"],["data mining|datos","Minería de datos","Data Mining (minería"],
    ["decisor|iniciador|consumidor|comprador|influenciador","Proceso de decisión de compra"]
  ],
  notes:`
  <div class="note"><h3>Perfil del consumidor</h3>
    <p>Representación de un cliente típico del segmento objetivo, con características que permiten comprender quién es e inferir cómo se comporta, qué necesita o qué lo motiva a comprar.</p>
    <p>Puede incluir:</p>
    <div class="chips"><span>Demográficas</span><span>Psicográficas (estilo de vida, personalidad)</span><span>Hábitos de compra y consumo</span><span>Preferencias y puntos de dolor</span></div>
    <dl class="kv"><dt>Segmento</dt><dd>grupo de consumidores con características similares</dd><dt>Buyer Persona</dt><dd>representación del consumidor típico de ese segmento</dd></dl>
  </div>
  <div class="note"><h3>Métodos para construir perfiles</h3>
    <dl class="kv">
      <dt>Cualitativas</dt><dd>comprenden motivaciones, percepciones y experiencias</dd>
      <dt>Cuantitativas</dt><dd>miden comportamientos y relaciones con datos estadísticos</dd>
      <dt>Datos digitales</dt><dd>navegación, compras, clics e interacciones online</dd>
      <dt>Análisis avanzado</dt><dd>Data Mining para descubrir patrones y grupos</dd>
    </dl>
  </div>
  <div class="note"><h3>Impacto en las decisiones</h3>
    <ul>
      <li><b>Uso más eficiente de recursos:</b> foco en segmentos con mayor potencial.</li>
      <li><b>Mayor efectividad promocional:</b> mensajes, medios y canales más específicos.</li>
      <li><b>Oferta más adecuada:</b> productos y propuestas de valor ajustadas.</li>
      <li><b>Mejor experiencia y fidelización:</b> más satisfacción y lealtad.</li>
      <li><b>Ventajas competitivas:</b> diferenciarse con mejor conocimiento del cliente.</li>
    </ul>
  </div>
  <div class="note wide"><h3>Pero no todo es tan racional: sesgos cognitivos</h3>
    <p><b>Kahneman y Tversky</b> demostraron que no siempre decidimos de forma racional: usamos atajos mentales (<b>heurísticas</b>) que simplifican, pero generan <b>sesgos sistemáticos</b> al percibir precios, evaluar alternativas e interpretar información.</p>
    <div class="tbl"><table><thead><tr><th>Sesgo</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td><b>Anclaje</b></td><td>Rebajado de $100.000 a $60.000: los $100.000 son la referencia y $60.000 parece barato.</td></tr>
      <tr><td><b>Disponibilidad</b></td><td>Tras ver noticias de robos de autos, se valora más contratar un seguro automotriz.</td></tr>
      <tr><td><b>Representatividad</b></td><td>Envase verde, naturaleza y aspecto artesanal → se asume saludable o ecológico.</td></tr>
      <tr><td><b>Aversión a la pérdida</b></td><td>“No pierdas tus puntos: vencen mañana” impulsa más que ofrecer puntos extra.</td></tr>
      <tr><td><b>Efecto marco (framing)</b></td><td>“90% libre de grasa” atrae más que “contiene 10% de grasa”.</td></tr>
      <tr><td><b>Efecto halo</b></td><td>Si la marca parece innovadora, se supone que sus productos son de alta calidad.</td></tr>
    </tbody></table></div>
  </div>
  <div class="note"><h3>Roles en el proceso de compra</h3>
    <ul>
      <li><b>Iniciador:</b> detecta la necesidad y plantea la posibilidad.</li>
      <li><b>Influenciador:</b> opina, prescribe o aconseja. Hoy más del 60% busca información en la red antes de comprar (viajes, hospedaje, autos, productos para bebés).</li>
      <li><b>Decisor:</b> toma la decisión final: qué, cuándo, dónde, a quién y en qué condiciones.</li>
      <li><b>Comprador:</b> hace la compra; puede o no ser el decisor.</li>
      <li><b>Consumidor:</b> usa el producto y es también el evaluador. No siempre es iniciador, decisor ni comprador.</li>
    </ul>
  </div>
  <div class="note"><h3>Cinco riesgos percibidos</h3>
    <ol>
      <li><b>Monetario:</b> podría perder dinero.</li>
      <li><b>Funcional:</b> puede que no funcione como debería.</li>
      <li><b>Físico:</b> parece peligroso, podría hacerme daño.</li>
      <li><b>Social:</b> ¿qué pensarán mis amigos?</li>
      <li><b>Psicológico:</b> ¿me sentiré culpable o irresponsable?</li>
    </ol>
    <p class="extra">Fuente: <i>Diferenciarse o morir</i>, Jack Trout y Steve Rivkin.</p>
  </div>
  <div class="note wide"><h3>Data Mining (minería de datos)</h3>
    <p>Analizar grandes volúmenes de datos para descubrir patrones, relaciones y tendencias útiles para decidir.</p>
    <div class="flow"><span>Datos</span><i>→</i><span>Patrones</span><i>→</i><span>Insights</span><i>→</i><span>Decisiones</span></div>
    <p>En marketing permite: segmentar clientes, predecir comportamientos, personalizar campañas, detectar relaciones entre productos e identificar oportunidades.</p>
    <p><b>Proceso:</b></p>
    <div class="flow"><span>Problema de marketing</span><i>→</i><span>Obtención y preparación de datos</span><i>→</i><span>Técnicas de análisis</span><i>→</i><span>Evaluación</span><i>→</i><span>Insights</span><i>→</i><span>Decisiones</span></div>
    <p>Parte de un problema de negocio y termina en una acción. <b>CRISP-DM</b> (Cross-Industry Standard Process for Data Mining) es la metodología que ordena las etapas de un proyecto.</p>
    <div class="tbl"><table><thead><tr><th>Técnica</th><th>¿Qué hace?</th></tr></thead><tbody>
      <tr><td><b>Clustering</b></td><td>Agrupa clientes similares → segmentación</td></tr>
      <tr><td><b>Árboles de decisión</b></td><td>Clasifican y predicen comportamientos</td></tr>
      <tr><td><b>Reglas de asociación</b></td><td>Detectan productos o comportamientos relacionados</td></tr>
      <tr><td><b>Regresión logística</b></td><td>Estima probabilidades de ocurrencia</td></tr>
    </tbody></table></div>
    <p>Herramientas: R, Python, SPSS, RapidMiner.</p>
    <p><b>Ejemplo Churn (abandono):</b></p>
    <div class="flow"><span>Consumo + reclamos + antigüedad</span><i>→</i><span>Data Mining</span><i>→</i><span>Clientes con mayor probabilidad de abandono</span><i>→</i><span>Insight</span><i>→</i><span>Campaña de retención personalizada</span><i>→</i><span>Menos churn</span></div>
  </div>`,
  cards:[
    ["Perfil del consumidor","Representación de un cliente típico del segmento objetivo, con características que permiten comprender quién es e inferir cómo se comporta, qué necesita y qué lo motiva."],
    ["¿Qué puede incluir un perfil?","Características demográficas, psicográficas (estilo de vida, personalidad), hábitos de compra y consumo, preferencias y puntos de dolor."],
    ["Segmento vs. Buyer Persona","Segmento: grupo de consumidores con características similares. Buyer Persona: representación del consumidor típico de ese segmento."],
    ["4 métodos para construir perfiles","Técnicas cualitativas, técnicas cuantitativas, datos digitales y análisis avanzado (Data Mining)."],
    ["Impactos del perfil del consumidor","Uso eficiente de recursos, mayor efectividad promocional, oferta más adecuada, mejor experiencia y fidelización, ventajas competitivas."],
    ["Kahneman y Tversky","Demostraron que no siempre decidimos racionalmente: usamos heurísticas (atajos mentales) que generan sesgos sistemáticos."],
    ["Sesgo de anclaje","Un valor inicial sirve de referencia. Ej: rebajado de $100.000 a $60.000 → parece barato."],
    ["Sesgo de disponibilidad","Lo que recordamos fácilmente pesa más. Ej: tras noticias de robos, se valora más un seguro automotriz."],
    ["Sesgo de representatividad","Juzgar por apariencia típica. Ej: envase verde y artesanal → “es saludable o ecológico”."],
    ["Aversión a la pérdida","Perder duele más que ganar. Ej: “No pierdas tus puntos: vencen mañana”."],
    ["Efecto marco (framing)","La forma de presentar cambia la decisión. Ej: “90% libre de grasa” vs. “contiene 10% de grasa”."],
    ["Efecto halo","Una característica positiva se extiende al resto. Ej: marca innovadora → productos de alta calidad."],
    ["Los 5 roles de compra","Iniciador, influenciador, decisor, comprador y consumidor."],
    ["Influenciador","Opina, prescribe o aconseja. Más del 60% busca información en la red antes de comprar ciertos productos."],
    ["Consumidor (rol)","Quien usa el producto y además lo evalúa. No siempre es el iniciador, el decisor ni el comprador."],
    ["Los 5 riesgos percibidos","Monetario, funcional, físico, social y psicológico (Trout y Rivkin, Diferenciarse o morir)."],
    ["Data Mining","Proceso de analizar grandes volúmenes de datos para descubrir patrones, relaciones y tendencias útiles para decidir."],
    ["Secuencia del Data Mining","Datos → Patrones → Insights → Decisiones."],
    ["CRISP-DM","Cross-Industry Standard Process for Data Mining: metodología que ordena las etapas de un proyecto de Data Mining."],
    ["Técnicas de Data Mining","Clustering (agrupa), árboles de decisión (clasifican/predicen), reglas de asociación (relacionan), regresión logística (estima probabilidades)."],
    ["Churn","Abandono de clientes. Data Mining detecta quiénes tienen mayor probabilidad de irse para lanzar campañas de retención."]
  ],
  quiz:[
    {q:"Representación del consumidor típico de un segmento:",o:["Buyer Persona","Segmento","Cluster","Insight"],w:"El segmento es el grupo; la Buyer Persona es su representante típico."},
    {q:"Estilo de vida y personalidad son características…",o:["Psicográficas","Demográficas","Geográficas","Transaccionales"],w:"Psicográficas."},
    {q:"Un producto aparece rebajado de $100.000 a $60.000 y parece barato. ¿Qué sesgo es?",o:["Anclaje","Disponibilidad","Efecto halo","Representatividad"],w:"Anclaje: el precio original funciona como referencia."},
    {q:"Tras ver muchas noticias de robos, alguien valora más un seguro automotriz:",o:["Disponibilidad","Anclaje","Efecto marco","Aversión a la pérdida"],w:"Disponibilidad."},
    {q:"Envase verde e imágenes de naturaleza → “debe ser saludable”:",o:["Representatividad","Efecto halo","Disponibilidad","Anclaje"],w:"Representatividad."},
    {q:"“No pierdas tus puntos acumulados: vencen mañana”:",o:["Aversión a la pérdida","Efecto marco","Anclaje","Disponibilidad"],w:"Aversión a la pérdida."},
    {q:"“90% libre de grasa” atrae más que “contiene 10% de grasa”:",o:["Efecto marco","Representatividad","Efecto halo","Anclaje"],w:"Efecto marco (framing)."},
    {q:"Como la marca parece innovadora, se asume que todos sus productos son de calidad:",o:["Efecto halo","Efecto marco","Disponibilidad","Anclaje"],w:"Efecto halo."},
    {q:"¿Quiénes demostraron que usamos heurísticas que generan sesgos?",o:["Kahneman y Tversky","Ries y Trout","Kotler y Keller","Trout y Rivkin"],w:"Daniel Kahneman y Amos Tversky."},
    {q:"La persona que toma la decisión final de compra es el…",o:["Decisor","Comprador","Iniciador","Influenciador"],w:"Decisor: qué, cuándo, dónde, a quién y en qué condiciones."},
    {q:"Quien detecta primero la necesidad y plantea la posibilidad de comprar es el…",o:["Iniciador","Decisor","Consumidor","Comprador"],w:"Iniciador."},
    {q:"Quien usa el producto y además actúa como evaluador es el…",o:["Consumidor","Comprador","Decisor","Influenciador"],w:"Consumidor."},
    {q:"“¿Qué pensarán mis amigos si compro esto?” es un riesgo…",o:["Social","Psicológico","Funcional","Monetario"],w:"Riesgo social."},
    {q:"“¿Me sentiré culpable o irresponsable si compro esto?” es un riesgo…",o:["Psicológico","Social","Físico","Monetario"],w:"Riesgo psicológico."},
    {q:"“Puede que no funcione o no haga lo que debería” es un riesgo…",o:["Funcional","Físico","Monetario","Social"],w:"Riesgo funcional."},
    {q:"Técnica de Data Mining que agrupa clientes similares para segmentar:",o:["Clustering","Regresión logística","Reglas de asociación","Árboles de decisión"],w:"Clustering."},
    {q:"Técnica que detecta productos o comportamientos relacionados:",o:["Reglas de asociación","Clustering","Regresión logística","CRISP-DM"],w:"Reglas de asociación."},
    {q:"Técnica que estima probabilidades de ocurrencia:",o:["Regresión logística","Clustering","Reglas de asociación","Árboles de decisión"],w:"Regresión logística."},
    {q:"La secuencia correcta del Data Mining es…",o:["Datos → Patrones → Insights → Decisiones","Insights → Datos → Decisiones → Patrones","Patrones → Datos → Decisiones → Insights","Decisiones → Datos → Insights → Patrones"],w:"Datos → Patrones → Insights → Decisiones."},
    {q:"¿Qué es CRISP-DM?",o:["Una metodología que ordena las etapas de un proyecto de Data Mining","Un software estadístico","Un tipo de sesgo cognitivo","Una métrica de satisfacción"],w:"Cross-Industry Standard Process for Data Mining."},
    {q:"En marketing, “churn” significa…",o:["Abandono de clientes","Recomendación de clientes","Segmentación","Fidelización"],w:"Churn = abandono de clientes."},
    {q:"El Data Mining parte de ___ y termina en ___.",o:["un problema de negocio / una acción","una acción / un problema","un insight / los datos","una campaña / un cluster"],w:"Parte de un problema de negocio y termina en una acción."}
  ],
  pairs:[
    ["Anclaje","$100.000 tachado hace ver barato $60.000"],["Disponibilidad","Noticias de robos → contratar seguro"],
    ["Representatividad","Envase verde → “debe ser saludable”"],["Aversión a la pérdida","“Tus puntos vencen mañana”"],
    ["Efecto marco","“90% libre de grasa”"],["Efecto halo","Marca innovadora → asumo calidad"],
    ["Iniciador","Detecta la necesidad"],["Influenciador","Opina y aconseja"],
    ["Decisor","Toma la decisión final"],["Comprador","Realiza la compra"],["Consumidor","Usa y evalúa el producto"],
    ["Clustering","Agrupa clientes similares"],["Árboles de decisión","Clasifican y predicen"],
    ["Reglas de asociación","Detectan productos relacionados"],["Regresión logística","Estima probabilidades"]
  ],
  order:[
    {t:"Proceso de Data Mining",i:["Problema de marketing","Obtención y preparación de datos","Aplicación de técnicas de análisis","Evaluación de resultados","Insights","Decisiones de marketing"]},
    {t:"De los datos a la decisión",i:["Datos","Patrones","Insights","Decisiones"]},
    {t:"Ejemplo Churn: de los datos a la acción",i:["Datos de consumo + reclamos + antigüedad","Data Mining","Detecta clientes con mayor probabilidad de abandono","Insight","Campaña de retención personalizada","Resultado: reducir el churn"]}
  ],
  sort:[
    {t:"Sesgos cognitivos",b:["Anclaje","Disponibilidad","Representatividad","Aversión a la pérdida","Efecto marco","Efecto halo"],i:[["“Antes $100.000, ahora $60.000”",0],["Ver primero el plan más caro hace que el resto parezca barato",0],["Tras noticias de robos, contratar un seguro",1],["Después de un reportaje sobre intoxicaciones, comprar un filtro de agua",1],["Envase verde y artesanal → “es ecológico”",2],["Etiqueta con hojas y madera → “es natural”",2],["“Tus puntos vencen mañana”",3],["“Última oportunidad: no pierdas tu descuento”",3],["“90% libre de grasa”",4],["“95% de éxito” en vez de “5% de fallas”",4],["Marca innovadora → “sus productos son de calidad”",5],["Un famoso querido → confío en lo que promociona",5]]},
    {t:"Roles de compra (una familia compra un auto)",b:["Iniciador","Influenciador","Decisor","Comprador","Consumidor"],i:[["El hijo dice que necesitan un auto más grande",0],["Un amigo mecánico recomienda un modelo",1],["Una reseña en YouTube sobre el modelo",1],["La madre elige el modelo y las condiciones",2],["El padre va a la automotora y paga",3],["Toda la familia usa el auto a diario",4],["Quien lo maneja y opina si cumplió lo esperado",4]]},
    {t:"Riesgos percibidos",b:["Monetario","Funcional","Físico","Social","Psicológico"],i:[["Podría perder dinero con este producto",0],["¿Y si en una semana baja de precio?",0],["Puede que no haga lo que debería",1],["¿Y si la batería no dura lo prometido?",1],["Parece peligroso, podría hacerme daño",2],["¿Este scooter será seguro en la calle?",2],["¿Qué pensarán mis amigos si compro esto?",3],["¿Me veré ridículo con esta ropa?",3],["¿Me sentiré culpable o irresponsable?",4],["¿Me arrepentiré de darme este gusto caro?",4]]},
    {t:"Métodos para construir perfiles",b:["Cualitativas","Cuantitativas","Datos digitales","Análisis avanzado"],i:[["Comprenden motivaciones y percepciones",0],["Entrevistas en profundidad sobre experiencias",0],["Miden comportamientos con datos estadísticos",1],["Encuesta a 500 personas con escala numérica",1],["Analizan navegación, clics e interacciones",2],["Historial de compras en la tienda online",2],["Data Mining para descubrir patrones",3],["Descubrir grupos de consumidores en grandes bases",3]]}
  ]
});
/* Pasillo 4 · Precio */
T.push({
  id:"precio", n:4, name:"Precio", color:"var(--t-precio)",
  tagline:"Estrategia comercial, elasticidad, descuentos y estrategias basadas (y no basadas) en el precio.",
  wiki:"Fijación de precios", refs:[
    ["^competencia basada","Guerra de precios","Competencia basada en el precio"],["no basada|desplazar","Diferenciación de producto"],["escalada|reacción defensiva","Guerra de precios"],
    ["elasticidad","Elasticidad-precio de la demanda"],["descreme|rango de corrección","Descremado de precios"],
    ["masiva","Precio de penetración"],["precio líder|bajo el costo","Producto gancho"],["impar|9.990","Precio psicológico"],
    ["flexible","Discriminación de precios"],["instalaciones|despacho|transporte","Incoterms"],["descuento","Descuento"],
    ["estrategia","Estrategia"],["calidad|costos","Precio"],
    ["unidades monetarias","Precio","Precio"],["mismo precio","Fijación de precios","Estrategias basadas en el precio"]
  ],
  notes:`
  <div class="note"><h3>Estrategia comercial</h3>
    <p>Conjunto de acciones (tácticas) con el propósito de lograr un objetivo en un ambiente competitivo. O más simple: <b>un plan en un ambiente competitivo</b>.</p>
  </div>
  <div class="note"><h3>Precio</h3>
    <p>Monto expresado en unidades monetarias que se asigna a un producto o servicio para hacer posible su adquisición.</p>
    <ul>
      <li>A las personas no les interesan los costos de la empresa: solo el <b>valor</b> que las cosas tienen para ellas.</li>
      <li>El precio también entrega información, no necesariamente real, de la <b>calidad y el valor</b>.</li>
      <li>Es un determinante relevante de la demanda e influye directamente en ingresos y utilidad.</li>
      <li>Su papel es importante, pero <b>no suficiente</b> para explicar el éxito de una estrategia.</li>
    </ul>
  </div>
  <div class="note"><h3>Elasticidad de la demanda</h3>
    <p>Efecto que producen los cambios en el precio unitario en el número de unidades vendidas y en los ingresos totales.</p>
  </div>
  <div class="note wide"><h3>Descuentos y bonificaciones</h3>
    <p>Disminuyen el precio de lista (o base): un menor precio o una concesión, como productos adicionales o servicios complementarios sin costo.</p>
    <dl class="kv">
      <dt>Por cantidad</dt><dd>rebajas al comprar mayor volumen o monto, para estimular compras más grandes</dd>
      <dt>Acumulativos</dt><dd>según el volumen comprado en un período: puntos de supermercado, kilómetros de aerolíneas</dd>
      <dt>Comerciales</dt><dd>según la posición en la cadena de distribución; suelen relacionarse con el volumen</dd>
      <dt>Pronto pago</dt><dd>por pagar dentro de un plazo: 2% antes de 10 días, 1% entre 10 y 20 días</dd>
      <dt>Estacionales</dt><dd>en períodos de baja demanda para estimularla: hoteles, líneas aéreas</dd>
    </dl>
  </div>
  <div class="note"><h3>Competencia basada en el precio</h3>
    <ol>
      <li>Tener los precios más bajos posibles como estrategia central.</li>
      <li>Usar el precio como acción frente a la competencia u otro evento:
        <ul>
          <li><b>Modificación por la empresa:</b> ante aumento de costos, subir el precio o bajar la calidad; ante pérdida de participación, bajar el precio considerando la reacción de la competencia.</li>
          <li><b>Reacción ante la competencia:</b> bajar el precio para defender participación, con riesgo de una escalada de rebajas donde todos pierden y cuesta volver a los precios anteriores.</li>
        </ul>
      </li>
    </ol>
  </div>
  <div class="note"><h3>Competencia no basada en el precio</h3>
    <p>Se mantienen precios estables y se compite con otras variables del mix. En vez de moverse <b>a lo largo</b> de la curva de demanda cambiando precios, se busca <b>desplazarla</b> mediante diferenciación (variedad, calidad de servicio) o acciones como la publicidad.</p>
  </div>
  <div class="note wide"><h3>Estrategias basadas en el precio</h3>
    <div class="mx" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
      <div class="q"><b>1. Precio de introducción: Descreme</b><span>Precio alto dentro del rango esperado. Competencia mínima al inicio; permite segmentar por ingreso hacia quienes valoran los atributos; hay rango de corrección (es más fácil bajar que subir el precio).</span></div>
      <div class="q"><b>1. Precio de introducción: Masiva</b><span>Precio inicial bajo para llegar al mercado masivo. Más efectiva si la demanda es muy elástica, hay economías de escala y se espera fuerte competencia pronto.</span></div>
      <div class="q"><b>2. Un precio</b><span>El mismo precio para todos los compradores.</span></div>
      <div class="q"><b>3. Precio flexible</b><span>Difiere entre compradores aunque compren lo mismo: importa la negociación o el momento. Autos, propiedades, hoteles, pasajes aéreos.</span></div>
      <div class="q"><b>4. Precio líder</b><span>Rebajar productos de alta demanda, incluso bajo el costo, para atraer clientes que comprarán otros productos no rebajados.</span></div>
      <div class="q"><b>5. Precio impar</b><span>Montos impares que sugieren precios más bajos. No hay evidencia concluyente de más ventas; las tiendas de prestigio no lo usan.</span></div>
      <div class="q"><b>6. Flete: en instalaciones del vendedor</b><span>El comprador asume transporte y responsabilidad; el vendedor solo carga el producto. La distancia es clave para competir.</span></div>
      <div class="q"><b>6. Flete: en instalaciones del comprador</b><span>El productor absorbe el flete hasta el comprador, cuando es pequeño frente al precio o para fortalecer su posición. Ej: despacho gratis en una zona.</span></div>
    </div>
  </div>`,
  cards:[
    ["Estrategia","Conjunto de acciones (tácticas) para lograr un objetivo en un ambiente competitivo. Más simple: un plan en un ambiente competitivo."],
    ["Precio","Monto en unidades monetarias asignado a un producto o servicio para hacer posible su adquisición."],
    ["¿Qué más comunica el precio?","Información, no necesariamente real, sobre la calidad y el valor del producto."],
    ["¿Qué le interesa al cliente: costo o valor?","Al cliente no le interesan los costos de la empresa, solo el valor que las cosas tienen para él."],
    ["Elasticidad de la demanda","Efecto de los cambios en el precio unitario sobre las unidades vendidas y los ingresos totales."],
    ["Descuentos y bonificaciones","Disminuyen el precio de lista: un menor precio o una concesión (productos adicionales, servicios sin costo)."],
    ["Descuento por cantidad","Rebaja al adquirir mayor volumen o monto, para estimular compras más grandes."],
    ["Descuento acumulativo","Según el volumen comprado en un período. Ej: puntos de supermercado, kilómetros de aerolíneas."],
    ["Descuento comercial","Según la posición en la cadena de distribución; suele relacionarse con el volumen."],
    ["Descuento por pronto pago","Por pagar dentro de un plazo. Ej: 2% antes de 10 días, 1% entre 10 y 20 días."],
    ["Descuento estacional","En períodos de baja demanda para estimularla. Ej: hoteles, líneas aéreas."],
    ["Precio de descreme","Precio alto dentro del rango esperado al lanzar. Poca competencia, segmenta por ingreso y deja rango de corrección a la baja."],
    ["Precio de penetración masiva","Precio inicial bajo para llegar al mercado masivo. Funciona con demanda muy elástica, economías de escala y competencia pronta."],
    ["Un precio","El mismo precio para todos los compradores, sin diferencias."],
    ["Precio flexible","Distinto entre compradores aunque compren lo mismo. Ej: autos, propiedades, hoteles, pasajes aéreos."],
    ["Precio líder","Rebajar productos de alta demanda (incluso bajo el costo) para atraer clientes que comprarán otros productos."],
    ["Precio impar","Montos impares que sugieren un precio menor. Sin resultados concluyentes; las tiendas de prestigio no lo usan."],
    ["Flete: en instalaciones del vendedor","El comprador corre con el costo y la responsabilidad del transporte. La distancia afecta la competitividad."],
    ["Flete: en instalaciones del comprador","El productor absorbe el transporte hasta el comprador. Ej: despacho gratis dentro de una zona."],
    ["Competencia basada en el precio","Precios lo más bajos posibles como estrategia central, o usar el precio como acción frente a la competencia."],
    ["Riesgo de bajar precios para defenderse","Una escalada de rebajas en la industria donde todos pierden y cuesta volver a los precios anteriores."],
    ["Competencia no basada en el precio","Precios estables; se busca desplazar la curva de demanda con diferenciación o publicidad, en vez de moverse a lo largo de ella."]
  ],
  quiz:[
    {q:"La definición más simple de estrategia vista en clase es…",o:["Un plan en un ambiente competitivo","Un conjunto de precios","Una campaña publicitaria","Una meta de ventas"],w:"Un plan en un ambiente competitivo."},
    {q:"El efecto de los cambios del precio unitario en las unidades vendidas e ingresos se llama…",o:["Elasticidad de la demanda","Descreme","Margen","Precio flexible"],w:"Elasticidad de la demanda."},
    {q:"Puntos canjeables del supermercado y kilómetros de aerolíneas son descuentos…",o:["Acumulativos","Por cantidad","Comerciales","Estacionales"],w:"Acumulativos: según el volumen en un período."},
    {q:"“2% de descuento si pagas antes de 10 días” es un descuento…",o:["Por pronto pago","Comercial","Estacional","Por cantidad"],w:"Pronto pago."},
    {q:"Un hotel baja sus tarifas en temporada baja. Es un descuento…",o:["Estacional","Acumulativo","Por pronto pago","Comercial"],w:"Estacional: estimula la demanda en períodos bajos."},
    {q:"Una rebaja según la posición en la cadena de distribución es un descuento…",o:["Comercial","Por cantidad","Acumulativo","Estacional"],w:"Comercial."},
    {q:"Al lanzar un producto, fijar un precio alto dentro del rango esperado es…",o:["Descreme","Penetración masiva","Precio líder","Precio impar"],w:"Descreme."},
    {q:"La estrategia masiva es más efectiva cuando…",o:["La demanda es muy elástica","No hay competencia","El producto es de lujo","No hay economías de escala"],w:"Demanda muy elástica, economías de escala y competencia pronta."},
    {q:"¿Por qué el descreme tiene “rango de corrección”?",o:["Es más fácil bajar el precio que subirlo","Porque no hay costos","Porque el precio es fijo por ley","Porque se vende a pérdida"],w:"Es más fácil ajustar el precio a la baja que al alza."},
    {q:"Autos, propiedades y pasajes aéreos suelen usar…",o:["Precio flexible","Un precio","Precio impar","Precio líder"],w:"Precio flexible: importa la negociación o el momento de compra."},
    {q:"Un supermercado rebaja el azúcar bajo el costo para atraer clientes. Es…",o:["Precio líder","Descreme","Precio flexible","Descuento comercial"],w:"Precio líder."},
    {q:"Sobre el precio impar ($9.990), lo correcto es que…",o:["No hay resultados concluyentes y las tiendas de prestigio no lo usan","Siempre aumenta las ventas","Es obligatorio en retail","Solo lo usan las tiendas de lujo"],w:"Sugiere precios más bajos, pero sin evidencia concluyente."},
    {q:"Si el comprador corre con el costo del transporte, el precio es…",o:["En instalaciones del vendedor","En instalaciones del comprador","Precio flexible","Descuento comercial"],w:"En instalaciones del vendedor."},
    {q:"Despacho gratis dentro de una zona corresponde a precio…",o:["En instalaciones del comprador","En instalaciones del vendedor","Impar","De descreme"],w:"El productor absorbe el flete hasta el comprador."},
    {q:"La competencia no basada en el precio busca…",o:["Desplazar la curva de demanda con diferenciación o publicidad","Bajar precios constantemente","Moverse a lo largo de la curva de demanda","Igualar precios con la competencia"],w:"Desplazar la curva, no moverse a lo largo de ella."},
    {q:"El riesgo de bajar precios como reacción defensiva es…",o:["Una escalada de rebajas en que todos pierden","Subir la participación","Mejorar la imagen de marca","Mayor margen"],w:"Una guerra de rebajas de la que cuesta salir."},
    {q:"Además del monto en dinero, el precio entrega…",o:["Información (no necesariamente real) sobre calidad y valor","El costo exacto del producto","La utilidad de la empresa","La elasticidad"],w:"Información sobre calidad y valor."},
    {q:"Ante un aumento de costos, la empresa puede…",o:["Subir el precio o bajar la calidad","Solo bajar el precio","Eliminar los descuentos por ley","Aumentar la elasticidad"],w:"Subir precio o bajar calidad (o promover agresivamente y mantener precio)."}
  ],
  pairs:[
    ["Elasticidad","Efecto del precio en unidades e ingresos"],["Desc. por cantidad","Rebaja por comprar más volumen"],
    ["Desc. acumulativo","Puntos o kilómetros en un período"],["Desc. comercial","Según la posición en la cadena"],
    ["Desc. pronto pago","2% si pagas antes de 10 días"],["Desc. estacional","Hotel en temporada baja"],
    ["Descreme","Precio alto al lanzar"],["Masiva","Precio bajo para el mercado masivo"],
    ["Un precio","Mismo precio para todos"],["Precio flexible","Varía por negociación: autos, pasajes"],
    ["Precio líder","Rebajar lo más demandado para atraer"],["Precio impar","$9.990 sugiere precio menor"],
    ["Inst. del vendedor","El comprador paga el transporte"],["Inst. del comprador","El vendedor absorbe el flete"]
  ],
  order:[],
  sort:[
    {t:"Tipos de descuento",b:["Cantidad","Acumulativo","Comercial","Pronto pago","Estacional"],i:[["Lleva 3 y paga menos por unidad",0],["Rebaja por comprar mayor volumen o monto",0],["Puntos canjeables en el supermercado",1],["Kilómetros de aerolínea",1],["Precio menor al distribuidor mayorista",2],["Rebaja según la posición en la cadena de distribución",2],["2% si pagas antes de 10 días",3],["1% si pagas entre 10 y 20 días",3],["Hotel más barato en temporada baja",4],["Pasajes rebajados en meses de baja demanda",4]]},
    {t:"¿Descreme o masiva?",b:["Descreme","Masiva"],i:[["Precio alto en el rango esperado",0],["Competencia mínima al inicio",0],["Segmento que responde a los atributos",0],["Hay rango de corrección a la baja",0],["Precio inicial bajo",1],["Demanda muy elástica",1],["Economías de escala en la producción",1],["Se espera fuerte competencia pronto",1]]},
    {t:"Estrategias de precio",b:["Un precio","Precio flexible","Precio líder","Precio impar"],i:[["El mismo precio para todos los compradores",0],["Sin diferencias entre clientes que compran lo mismo",0],["Negociar el precio de una propiedad",1],["Pasajes que cambian según el momento de compra",1],["Rebajar el azúcar bajo costo para atraer clientes",2],["Producto rebajado que atrae a comprar otros",2],["$19.990 en vez de $20.000",3],["Las tiendas de prestigio lo evitan",3]]},
    {t:"¿Basada o no basada en el precio?",b:["Basada en el precio","No basada en el precio"],i:[["Precios lo más bajos posibles como estrategia central",0],["Bajar el precio para defender participación",0],["Responder a una rebaja de la competencia",0],["Mantener precios estables",1],["Diferenciar por calidad de servicio",1],["Desplazar la curva de demanda con publicidad",1]]}
  ]
});
/* Pasillo 5 · Viaje del cliente */
T.push({
  id:"viaje", n:5, name:"Viaje del cliente", color:"var(--t-viaje)",
  tagline:"Customer Journey, satisfacción vs. lealtad, modelos de servicio, CX, CSAT y NPS.",
  wiki:"Customer journey", refs:[
    ["rehenes|mercenarios|terroristas|apóstoles","Lealtad del cliente"],["nórdica|producto sin servicio","Marketing de servicios"],
    ["SERVQUAL|brechas","SERVQUAL"],["servucción|interno-operativo","Servucción"],["molecular|periféricos","Marketing de servicios"],
    ["intenso|momento final","Regla del pico y final"],["touch points|interactúa","Punto de contacto"],
    ["predice|limitación","Satisfacción del cliente","Satisfacción vs. Experiencia"],
    ["CSAT","Satisfacción del cliente","Customer Satisfaction Score"],
    ["externo-experiencial","Customer journey"],["evaluar|alternativas","Customer journey","Awareness"],
    ["CX|experiencia del cliente","Experiencia del cliente","Satisfacción vs. Experiencia"],
    ["NPS|recomend","Net Promoter Score","Net Promoter Score"],["satisfacción|lealtad","Satisfacción del cliente"],
    ["pain points","Customer journey","pain points"],["customer journey","Customer journey","Viaje del cliente (Customer"]
  ],
  notes:`
  <div class="note"><h3>Circuito del crecimiento</h3>
    <div class="flow"><span>Valor percibido</span><i>→</i><span>Satisfacción</span><i>→</i><span>Comportamiento leal</span><i>→</i><span>Rentabilidad y crecimiento</span><i>↺</i></div>
  </div>
  <div class="note"><h3>“No hay producto sin servicio, ni servicio sin producto”</h3>
    <p>Escuela Nórdica del Marketing de Servicios (<b>Gummesson, Lehtinen y Lovelock</b>, años 80): todo producto tiene elementos de servicio (garantía, atención, entrega, soporte) y todo servicio se apoya en algo físico o técnico. Es el principio de <b>inseparabilidad funcional</b>, núcleo del marketing relacional.</p>
  </div>
  <div class="note wide"><h3>Satisfacción – lealtad: cuatro tipos de cliente</h3>
    <div class="mx">
      <div></div><div class="ax">Satisfacción baja</div><div class="ax">Satisfacción alta</div>
      <div class="ax y">Lealtad alta</div>
      <div class="q"><b>Rehenes</b><span>Tienen mala experiencia, pero no pueden cambiarse en el corto plazo por costos de cambio, contratos, etc.</span></div>
      <div class="q"><b>Apóstoles</b><span>Su experiencia es muy satisfactoria o supera sus expectativas, y se lo cuentan a otros.</span></div>
      <div class="ax y">Lealtad baja</div>
      <div class="q"><b>Terroristas</b><span>Vivieron una mala experiencia, transmiten frustración a su círculo y abandonan a la primera oportunidad.</span></div>
      <div class="q"><b>Mercenarios</b><span>Desafían la regla satisfacción/lealtad: buscan precio, compran por impulso o moda. No son leales a nadie.</span></div>
    </div>
    <p>Los apóstoles abren nuevas relaciones y posibilidades de creación de valor: construyen rentabilidad futura.</p>
  </div>
  <div class="note wide"><h3>Cuatro modelos de servicio</h3>
    <div class="tbl"><table><thead><tr><th></th><th>Servucción (1980)</th><th>Molecular (1982)</th><th>SERVQUAL (1985)</th><th>Customer Journey (2000)</th></tr></thead><tbody>
      <tr><th>Enfoque</th><td>Interno-operativo</td><td>Visual y estructural</td><td>Evaluativo de la calidad percibida</td><td>Externo-experiencial</td></tr>
      <tr><th>Finalidad</th><td>Entender cómo se produce el servicio</td><td>Mapear elementos tangibles e intangibles</td><td>Medir brechas entre expectativas y percepciones</td><td>Entender cómo vive el cliente el servicio</td></tr>
      <tr><th>Componentes</th><td>Cliente, personal de contacto, soporte físico, procesos internos</td><td>Núcleo del servicio, elementos periféricos, secuencia temporal</td><td>Fiabilidad, capacidad de respuesta, seguridad, empatía, elementos tangibles</td><td>Etapas del recorrido, puntos de contacto, emociones y percepciones</td></tr>
      <tr><th>Punto de vista</th><td>La empresa</td><td>Diseño estructurado</td><td>El cliente, sobre la calidad</td><td>El cliente</td></tr>
      <tr><th>Énfasis</th><td>La operación</td><td>La estructura como sistema</td><td>Desempeño vs. expectativas</td><td>La experiencia</td></tr>
    </tbody></table></div>
    <p>Similitudes: involucran al cliente, muestran componentes clave y buscan mejorar experiencia, calidad, satisfacción y fidelización.</p>
  </div>
  <div class="note wide"><h3>Viaje del cliente (Customer Journey, CX)</h3>
    <p>Describe cada encuentro, directo o indirecto, que un cliente tiene con tu marca o servicio. Es una técnica que analiza <b>gráficamente</b> el recorrido y la experiencia de un tipo de usuario. La experiencia trasciende el momento de compra y consumo.</p>
    <div class="mx" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr))">
      <div class="q"><b>Descubrir</b><span>Awareness. Identifica productos que satisfacen necesidades y deseos.</span></div>
      <div class="q"><b>Evaluar</b><span>Consideration. Compara alternativas y establece un criterio de decisión.</span></div>
      <div class="q"><b>Adquirir</b><span>Acquisition. Dedica tiempo y dinero a conseguirlo.</span></div>
      <div class="q"><b>Servicio</b><span>Service. Lo integra en su vida cotidiana (aprende, se ejercita…).</span></div>
      <div class="q"><b>Lealtad</b><span>Loyalty. Estrecha su relación con la marca y otros consumidores.</span></div>
    </div>
    <p>Momentos: <b>expectativas</b> (“utilidad anticipativa”), momento de compra, momento de consumo y disfrute, y <b>“social currency”</b>.</p>
  </div>
  <div class="note"><h3>¿De qué nos acordamos?</h3>
    <p>La experiencia se vive como un conjunto de <b>fotos</b> más que como una película: recordamos pocas cosas, sobre todo <b>lo vivido en el instante más intenso y en el momento final</b>. Es una secuencia de <b>hitos</b>.</p>
    <p>Por eso conviene conocer el journey y saber dónde mejorar la interacción. En el mapa se marcan hitos y <b>dolores (pain points)</b>.</p>
  </div>
  <div class="note"><h3>Beneficios de crear el Customer Journey</h3>
    <ul>
      <li>Detectar los <b>touch points</b> (puntos de contacto).</li>
      <li>Centrarse en las necesidades de cada etapa de compra.</li>
      <li>Ver si el viaje sigue un orden lógico.</li>
      <li>Mirar los procesos de venta desde el cliente.</li>
      <li>Medir la brecha entre experiencia deseada y recibida.</li>
      <li>Priorizar mejoras de procesos internos.</li>
      <li>Concentrar esfuerzos y gastos para maximizar efectividad y ROI.</li>
    </ul>
  </div>
  <div class="note wide"><h3>Satisfacción vs. Experiencia del cliente</h3>
    <p><b>CX:</b> percepción acumulada de todas las interacciones con la marca a lo largo del tiempo (NPS, CES y herramientas cualitativas). <b>Satisfacción:</b> grado en que una interacción específica cumplió las expectativas (CSAT o PSAT). <b>La satisfacción es una fotografía; la CX es la película de toda la relación.</b></p>
    <div class="tbl"><table><thead><tr><th>Dimensión</th><th>Satisfacción</th><th>Experiencia (CX)</th></tr></thead><tbody>
      <tr><td>Alcance temporal</td><td>Puntual (post-interacción)</td><td>Ciclo de vida completo</td></tr>
      <tr><td>Qué mide</td><td>Expectativa vs. realidad en un momento</td><td>Percepción acumulada en todos los touchpoints</td></tr>
      <tr><td>Métricas</td><td>CSAT, PSAT</td><td>NPS, CES, Customer Journey Analytics</td></tr>
      <tr><td>Quién la gestiona</td><td>Soporte o atención al cliente</td><td>Toda la organización</td></tr>
      <tr><td>Indicador de lealtad</td><td>Débil (correlación moderada con retención)</td><td>Fuerte (alta correlación con retención y LTV)</td></tr>
      <tr><td>Herramientas</td><td>Encuestas post-interacción, tickets resueltos</td><td>Plataformas CX, mapas de journey, análisis de texto y sentimiento</td></tr>
      <tr><td>Limitación</td><td>No predice abandono; efecto halo post-resolución</td><td>Requiere más infraestructura y alineación</td></tr>
    </tbody></table></div>
  </div>
  <div class="note"><h3>CSAT y NPS</h3>
    <div class="tbl"><table><thead><tr><th></th><th>CSAT</th><th>NPS</th></tr></thead><tbody>
      <tr><td>Nombre</td><td>Customer Satisfaction Score</td><td>Net Promoter Score</td></tr>
      <tr><td>Mide</td><td>Satisfacción</td><td>Recomendación</td></tr>
      <tr><td>Pregunta</td><td>¿Qué tan satisfecho está con…?</td><td>¿Recomendaría XXX a un amigo? ¿Por qué?</td></tr>
      <tr><td>Escala</td><td>1 a 7</td><td>0 a 10</td></tr>
    </tbody></table></div>
  </div>
  <div class="note"><h3>Net Promoter Score</h3>
    <p>Medida universal usada por miles de empresas: indica la probabilidad de que los clientes recomienden una empresa o producto. Se obtiene con una encuesta simple: “¿En qué medida recomendarías nuestra compañía a un amigo?” (0 a 10) más el motivo. Los motivos son los <b>drivers</b> de satisfacción que explican el NPS.</p>
    <p><b>Ventajas:</b> es muy simple; es comparable entre empresas y sectores; se puede medir en el tiempo.</p>
    <p class="extra">Dato extra (no viene en el apunte): por convención, promotores = 9–10, pasivos = 7–8, detractores = 0–6, y NPS = % promotores − % detractores.</p>
  </div>`,
  cards:[
    ["Circuito del crecimiento","Valor percibido → Satisfacción → Comportamiento leal → Rentabilidad y crecimiento."],
    ["Apóstoles","Alta satisfacción y alta lealtad: su experiencia supera expectativas y lo cuentan a otros."],
    ["Rehenes","Alta lealtad pero baja satisfacción: no pueden cambiarse por costos de cambio, contratos, etc."],
    ["Mercenarios","Alta satisfacción pero baja lealtad: buscadores de precio, impulsivos, siguen la moda. No son leales a nadie."],
    ["Terroristas","Baja satisfacción y baja lealtad: transmiten su frustración y abandonan a la primera oportunidad."],
    ["“No hay producto sin servicio, ni servicio sin producto”","Escuela Nórdica (Gummesson, Lehtinen y Lovelock, años 80): inseparabilidad funcional entre producto y servicio."],
    ["Servucción (1980)","Enfoque interno-operativo: cómo se produce el servicio. Cliente, personal de contacto, soporte físico, procesos internos."],
    ["Modelo Molecular (1982)","Enfoque visual y estructural: mapea tangibles e intangibles. Núcleo, elementos periféricos, secuencia temporal."],
    ["SERVQUAL (1985)","Enfoque evaluativo: mide brechas entre expectativas y percepciones. Fiabilidad, respuesta, seguridad, empatía, tangibles."],
    ["Customer Journey (2000)","Enfoque externo-experiencial: cómo vive el cliente el servicio. Etapas, puntos de contacto, emociones y percepciones."],
    ["¿Qué es el Customer Journey?","Describe cada encuentro, directo o indirecto, del cliente con la marca. Analiza gráficamente el recorrido y la experiencia de un tipo de usuario."],
    ["Las 5 etapas del journey","Descubrir (awareness), Evaluar (consideration), Adquirir (acquisition), Servicio (service), Lealtad (loyalty)."],
    ["¿Qué recordamos de una experiencia?","Lo vivido en el instante más intenso y en el momento final. La experiencia se vive como fotos, no como película."],
    ["Touch points","Puntos en que los clientes interactúan con el negocio."],
    ["Pain points","Dolores o puntos de fricción del cliente durante el recorrido."],
    ["Experiencia del cliente (CX)","Percepción acumulada de todas las interacciones con la marca a lo largo del tiempo. Se mide con NPS y CES."],
    ["Satisfacción del cliente","Grado en que una interacción específica cumplió las expectativas. Se mide con CSAT o PSAT."],
    ["Foto vs. película","La satisfacción es una fotografía de un momento; la experiencia del cliente es la película de toda la relación."],
    ["CSAT","Customer Satisfaction Score. Mide satisfacción: “¿Qué tan satisfecho está con…?”. Escala 1 a 7."],
    ["NPS","Net Promoter Score. Mide recomendación: “¿Recomendaría XXX a un amigo? ¿Por qué?”. Escala 0 a 10."],
    ["Ventajas del NPS","Muy simple, comparable entre empresas y sectores, y medible en el tiempo."],
    ["Drivers del NPS","Los motivos que dan los clientes tras la pregunta de recomendación: explican el NPS."]
  ],
  quiz:[
    {q:"Clientes con alta lealtad pero mala experiencia, que no pueden cambiarse por contratos o costos de cambio:",o:["Rehenes","Apóstoles","Mercenarios","Terroristas"],w:"Rehenes."},
    {q:"Clientes satisfechos pero sin lealtad, buscadores de precio:",o:["Mercenarios","Rehenes","Apóstoles","Terroristas"],w:"Mercenarios: desafían la regla satisfacción/lealtad."},
    {q:"Clientes que vivieron una mala experiencia y transmiten su frustración:",o:["Terroristas","Rehenes","Mercenarios","Apóstoles"],w:"Terroristas."},
    {q:"Clientes cuya experiencia supera sus expectativas y lo cuentan a otros:",o:["Apóstoles","Mercenarios","Rehenes","Terroristas"],w:"Apóstoles."},
    {q:"“No hay producto sin servicio, ni servicio sin producto” proviene de…",o:["La Escuela Nórdica del Marketing de Servicios","Kahneman y Tversky","El Boston Consulting Group","Al Ries y Jack Trout"],w:"Gummesson, Lehtinen y Lovelock, años 80."},
    {q:"Modelo que mide brechas entre expectativas y percepciones:",o:["SERVQUAL (1985)","Servucción (1980)","Modelo Molecular (1982)","Customer Journey (2000)"],w:"SERVQUAL."},
    {q:"Modelo con enfoque interno-operativo que explica cómo se produce el servicio:",o:["Servucción","SERVQUAL","Customer Journey","Modelo Molecular"],w:"Servucción (1980)."},
    {q:"“Núcleo del servicio, elementos periféricos y secuencia temporal” corresponde al…",o:["Modelo Molecular","SERVQUAL","Servucción","Customer Journey"],w:"Modelo Molecular (1982)."},
    {q:"El modelo con enfoque externo-experiencial, desde la perspectiva del cliente, es…",o:["Customer Journey","Servucción","Modelo Molecular","SERVQUAL"],w:"Customer Journey (2000)."},
    {q:"¿Cuál es la escala del NPS?",o:["0 a 10","1 a 7","1 a 5","0 a 100"],w:"NPS: 0 a 10. CSAT: 1 a 7."},
    {q:"¿Qué mide el CSAT?",o:["Satisfacción","Recomendación","Esfuerzo","Lealtad"],w:"CSAT mide satisfacción; NPS mide recomendación."},
    {q:"Según la clase, ¿qué recordamos de una experiencia?",o:["Lo vivido en el instante más intenso y en el momento final","Todo el proceso en detalle","Solo el precio pagado","El primer contacto con la marca"],w:"Recordamos pocas cosas: el pico y el final."},
    {q:"Los puntos donde el cliente interactúa con el negocio se llaman…",o:["Touch points","Pain points","Drivers","Insights"],w:"Touch points."},
    {q:"La experiencia del cliente (CX) se mide principalmente con…",o:["NPS y CES","CSAT y PSAT","ROI","SERVQUAL"],w:"CX: NPS y CES. Satisfacción: CSAT y PSAT."},
    {q:"¿Cuál es un indicador fuerte de lealtad, con alta correlación con retención y LTV?",o:["La experiencia del cliente (CX)","La satisfacción puntual","El precio","Los tickets resueltos"],w:"La CX."},
    {q:"Limitación principal de medir solo la satisfacción:",o:["No predice el abandono","Es muy cara","Requiere a toda la organización","No se puede medir"],w:"No predice abandono y tiene efecto halo post-resolución."},
    {q:"Etapa en que el consumidor examina alternativas y establece un criterio de decisión:",o:["Evaluar (consideration)","Descubrir (awareness)","Adquirir (acquisition)","Lealtad (loyalty)"],w:"Evaluar."},
    {q:"Una ventaja del NPS es que…",o:["Es comparable entre empresas y sectores","Mide el costo de cada cliente","Reemplaza al Customer Journey","No requiere encuestas"],w:"Simple, comparable y medible en el tiempo."},
    {q:"En el circuito del crecimiento, ¿qué viene justo después de “Valor percibido”?",o:["Satisfacción","Rentabilidad","Lealtad","Precio"],w:"Valor percibido → Satisfacción → Comportamiento leal → Rentabilidad y crecimiento."},
    {q:"“La satisfacción es una ___; la experiencia del cliente es la ___.”",o:["fotografía / película","película / fotografía","encuesta / métrica","etapa / ciclo"],w:"Satisfacción = foto de un momento; CX = película de toda la relación."}
  ],
  pairs:[
    ["Apóstoles","Satisfechos, leales y recomiendan"],["Rehenes","Leales sin estar satisfechos"],
    ["Mercenarios","Satisfechos pero sin lealtad"],["Terroristas","Insatisfechos que difunden su frustración"],
    ["Servucción (1980)","Cómo se produce el servicio"],["Molecular (1982)","Mapea tangibles e intangibles"],
    ["SERVQUAL (1985)","Brechas expectativas vs. percepciones"],["Customer Journey (2000)","Cómo vive el cliente el servicio"],
    ["CSAT","Satisfacción, escala 1 a 7"],["NPS","Recomendación, escala 0 a 10"],
    ["Touch points","Puntos de contacto con el negocio"],["Pain points","Dolores del cliente en el recorrido"],
    ["Satisfacción","Una foto de un momento"],["Experiencia (CX)","La película de toda la relación"]
  ],
  order:[
    {t:"Etapas del Customer Journey",i:["Descubrir (awareness)","Evaluar (consideration)","Adquirir (acquisition)","Servicio (service)","Lealtad (loyalty)"]},
    {t:"Circuito del crecimiento",i:["Valor percibido","Satisfacción","Comportamiento leal del cliente","Rentabilidad y crecimiento"]},
    {t:"Modelos de servicio por año",i:["Servucción (1980)","Modelo Molecular (1982)","SERVQUAL (1985)","Customer Journey (2000)"]}
  ],
  sort:[
    {t:"Satisfacción vs. lealtad",b:["Apóstoles","Rehenes","Mercenarios","Terroristas"],i:[["Su experiencia sobrepasa expectativas y lo cuenta",0],["Recomienda la marca a su círculo",0],["No puede cambiarse por contratos o costos de cambio",1],["Tiene mala experiencia pero sigue comprando",1],["Buscador de precio y comprador impulsivo",2],["Siempre busca algo a cambio; no es leal a nadie",2],["Transmite su frustración a su círculo social",3],["Abandona la empresa a la primera oportunidad",3]]},
    {t:"¿Satisfacción o experiencia?",b:["Satisfacción","Experiencia (CX)"],i:[["Puntual, post-interacción",0],["Ciclo de vida completo",1],["Se mide con CSAT o PSAT",0],["Se mide con NPS y CES",1],["La gestiona soporte o atención al cliente",0],["Involucra a toda la organización",1],["Indicador débil de lealtad",0],["Alta correlación con retención y LTV",1],["No predice el abandono",0],["Requiere más infraestructura y alineación",1],["Una fotografía de un momento",0],["La película de toda la relación",1]]},
    {t:"Modelos de servicio",b:["Servucción","Molecular","SERVQUAL","Customer Journey"],i:[["Enfoque interno-operativo",0],["Cliente, personal de contacto, soporte físico",0],["Enfoque visual y estructural",1],["Núcleo del servicio y elementos periféricos",1],["Enfoque evaluativo de la calidad percibida",2],["Fiabilidad, capacidad de respuesta, empatía",2],["Enfoque externo-experiencial",3],["Puntos de contacto, emociones y percepciones",3]]}
  ]
});
/* ===================== ESTADO ===================== */
const KEY = "gondola-mkt-v1";
const LEVELS = [[0,"Practicante"],[150,"Asistente de marketing"],[400,"Analista"],[800,"Brand Manager"],[1400,"Gerente de Marketing"],[2200,"CMO"]];
function fresh(){ return {xp:0,best:{},known:{},streak:0,last:null,flash:0}; }
let S = fresh();
try{ const raw = localStorage.getItem(KEY); if(raw) S = Object.assign(fresh(), JSON.parse(raw)); }catch(e){}
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }

function levelOf(xp){ let i=0; for(let k=0;k<LEVELS.length;k++) if(xp>=LEVELS[k][0]) i=k; return i; }
function today(){ const d=new Date(); return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate(); }
function yesterday(){ const d=new Date(Date.now()-864e5); return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate(); }
function addXP(n){
  if(n<=0) return;
  const before = levelOf(S.xp);
  S.xp += n;
  const t = today();
  if(S.last !== t){ S.streak = (S.last === yesterday()) ? S.streak+1 : 1; S.last = t; }
  save(); toast("+"+n+" XP");
  const after = levelOf(S.xp);
  if(after > before){ toast("¡Subiste a "+LEVELS[after][1]+"!", true); confetti(); }
  renderBar();
}
function setBest(tid, k, v){ S.best[tid] = S.best[tid] || {}; if(v > (S.best[tid][k]||0)){ S.best[tid][k] = v; save(); } }
function mastery(t){
  const b = S.best[t.id] || {}, kn = (S.known[t.id]||[]).length;
  const parts = [b.quiz||0, b.pairs||0, Math.min(1, kn/t.cards.length)];
  if(t.order.length) parts.push(b.order||0);
  if(t.sort.length) parts.push(b.sort||0);
  return Math.round(100*parts.reduce((a,c)=>a+c,0)/parts.length);
}
function starsOf(f){ return f>=.9?3:f>=.7?2:f>=.5?1:0; }
function starHTML(n){ let s=""; for(let i=0;i<3;i++) s += i<n ? "★" : '<span class="off">★</span>'; return '<span class="stars" aria-label="'+n+' de 3 estrellas">'+s+"</span>"; }
/* ===================== UTILIDADES ===================== */
const $ = (s,r=document)=>r.querySelector(s);
const app = $("#app");
const esc = s => String(s).replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function topic(id){ return T.find(t=>t.id===id); }
function toast(msg, lv){ const d=document.createElement("div"); d.textContent=msg; if(lv) d.className="lv"; $("#toast").appendChild(d); setTimeout(()=>d.remove(),1700); }
function shakeEl(el){ el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); }
let cleanup = null, restart = null;
function view(html, c){ if(cleanup){ cleanup(); cleanup=null; } restart = null; app.innerHTML = html; if(c) app.style.setProperty("--c", c); else app.style.removeProperty("--c"); window.scrollTo(0,0); }

function renderBar(){
  const i = levelOf(S.xp), lo = LEVELS[i][0], hi = LEVELS[i+1] ? LEVELS[i+1][0] : lo;
  const pct = hi>lo ? Math.round(100*(S.xp-lo)/(hi-lo)) : 100;
  $("#lvl").innerHTML = '<span class="lvl-name">'+LEVELS[i][1]+'</span><span class="xpbar" title="'+S.xp+' XP"><b style="width:'+pct+'%"></b></span>'
    + '<span class="pill">'+S.xp+' XP</span>' + (S.streak ? '<span class="pill fire" title="Días seguidos estudiando">'+S.streak+(S.streak===1?" día":" días")+'</span>' : "");
}

/* ===================== CONFETI ===================== */
function confetti(){
  if(matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv = $("#confetti"), ctx = cv.getContext("2d");
  cv.width = innerWidth; cv.height = innerHeight;
  const cs = getComputedStyle(document.documentElement);
  const cols = ["--tag","--t-marca","--t-ciclo","--t-perfil","--t-viaje"].map(v=>cs.getPropertyValue(v).trim());
  const P = Array.from({length:120},()=>({x:Math.random()*cv.width,y:-20-Math.random()*cv.height*.3,vx:(Math.random()-.5)*4,vy:2+Math.random()*4,r:Math.random()*6.28,s:5+Math.random()*6,c:cols[Math.floor(Math.random()*cols.length)]}));
  let f=0; (function tick(){ ctx.clearRect(0,0,cv.width,cv.height);
    P.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; p.vy+=.06; p.r+=.12; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.r); ctx.fillStyle=p.c; ctx.fillRect(-p.s/2,-p.s/4,p.s,p.s/2); ctx.restore(); });
    if(++f<150) requestAnimationFrame(tick); else ctx.clearRect(0,0,cv.width,cv.height); })();
}

/* ===================== VISTAS ===================== */
const MODES = [
  {k:"tarjetas",ic:"⇄",n:"Tarjetas",d:"Da vuelta y repasa definiciones"},
  {k:"quiz",ic:"?",n:"Quiz",d:"10 preguntas con combos"},
  {k:"parejas",ic:"⋈",n:"Parejas",d:"Une concepto con definición"},
  {k:"ordena",ic:"1→",n:"Ordena",d:"Arma la secuencia correcta"},
  {k:"clasifica",ic:"▦",n:"Clasifica",d:"Lleva cada idea a su caja"}
];

function home(){
  const total = Math.round(T.reduce((a,t)=>a+mastery(t),0)/T.length);
  let lines = T.map(t=>'<div class="rl"><span>'+String(t.n).padStart(2,"0")+" "+esc(t.name)+'</span><span>'+mastery(t)+'%</span></div>').join("");
  let tags = T.map(t=>{
    const b=S.best[t.id]||{};
    return '<a class="tag" href="#'+t.id+'" style="--c:'+t.color+'"><span class="tag-cat">Pasillo '+t.n+'</span><span class="tag-name">'+esc(t.name)+'</span>'
      + starHTML(starsOf(b.quiz||0)) + '<span class="tag-price">'+mastery(t)+'<small>% dominado</small></span></a>';
  }).join("");
  view(`
  <section class="hero">
    <div>
      <p class="eyebrow">DIS8011 · Repaso para la prueba</p>
      <h1>Llena tu carro de <em>conceptos</em>.</h1>
      <p class="lead">Cada pasillo es un tema de tus apuntes. Lee el resumen, voltea tarjetas, responde quizzes y juega a ordenar y clasificar. Ganas XP, subes de cargo y tu boleta muestra cuánto dominas de cada tema.</p>
    </div>
    <aside class="receipt" aria-label="Tu progreso">
      <h3>BOLETA DE ESTUDIO</h3>
      <p class="c">${new Date().toLocaleDateString("es-CL",{day:"2-digit",month:"short",year:"numeric"})} · ${S.streak||0} ${S.streak===1?"día":"días"} de racha</p>
      ${lines}
      <div class="rdash"></div>
      <div class="rl"><span>Récord relámpago</span><span>${S.flash||0} pts</span></div>
      <div class="rl"><span>XP acumulada</span><span>${S.xp}</span></div>
      <div class="rdash"></div>
      <div class="rl rtotal"><span>DOMINIO TOTAL</span><span>${total}%</span></div>
    </aside>
  </section>
  <div class="sec-h"><h2>El estante</h2><span class="eyebrow">Toca una etiqueta para entrar al pasillo</span></div>
  <div class="shelf">${tags}</div>
  <div class="flash">
    <div class="grow"><h3>Desafío relámpago</h3><p>60 segundos, preguntas de los cinco temas mezcladas. Cada acierto suma un punto. ¿Superas tu récord de ${S.flash||0}?</p></div>
    <a class="btn tagc" href="#relampago">Empezar</a>
  </div>
  <div class="sec-h"><h2>Cómo se juega</h2></div>
  <div class="how">
    <div><b>Tarjetas</b><span>Lee el concepto, piensa la respuesta y voltea. Las que no sabías vuelven al final del mazo.</span></div>
    <div><b>Quiz</b><span>Responde seguido sin errores para armar combos y ganar más XP. Usa las teclas 1–4.</span></div>
    <div><b>Parejas, Ordena y Clasifica</b><span>Juegos cortos para fijar relaciones, secuencias y categorías.</span></div>
    <div><b>Dominio</b><span>Se calcula con tu mejor resultado en cada juego del pasillo. Apunta al 100%.</span></div>
  </div>
  <div class="foot"><span>Tu progreso se guarda en este navegador.</span><button id="reset" type="button">Reiniciar progreso</button></div>`);
  $("#reset").addEventListener("click", askReset);
}

function topicView(t){
  const b = S.best[t.id]||{}, kn=(S.known[t.id]||[]).length;
  const st = {tarjetas: kn+"/"+t.cards.length+" sabidas", quiz: b.quiz? "Mejor: "+Math.round(b.quiz*100)+"%" : "Sin jugar", parejas: b.pairs? "Mejor: "+Math.round(b.pairs*100)+"%" : "Sin jugar",
    ordena: b.order? "Mejor: "+Math.round(b.order*100)+"%" : "Sin jugar", clasifica: b.sort? "Mejor: "+Math.round(b.sort*100)+"%" : "Sin jugar"};
  const modes = MODES.filter(m=>!(m.k==="ordena"&&!t.order.length) && !(m.k==="clasifica"&&!t.sort.length))
    .map(m=>'<a class="mode" href="#'+t.id+'-'+m.k+'"><span class="ic">'+m.ic+'</span><b>'+m.n+'</b><span>'+m.d+'</span><span class="st">'+st[m.k]+'</span></a>').join("");
  view(`
  <a class="back" href="#">← Volver al estante</a>
  <header class="thead">
    <div class="grow"><p class="eyebrow">Pasillo ${t.n}</p><h1>${esc(t.name)}</h1><p>${esc(t.tagline)}</p></div>
    <div class="gauge"><b>${mastery(t)}%</b><span>dominado</span></div>
  </header>
  <div class="modes">${modes}</div>
  <div class="sec-h"><h2>Apuntes</h2><span class="eyebrow">Léelos antes de jugar</span></div>
  <div class="notes">${t.notes}</div>`, t.color);
}
/* ---------- Piezas compartidas por todos los juegos ---------- */

function gameShell(t, title, statId){
  return '<div class="game"><div class="gtop"><a class="back" href="#'+(t?t.id:"")+'">← Salir</a><span class="gt">'+esc(title)+'</span><button type="button" class="btn ghost sm" id="g-restart">Empezar de nuevo</button><span class="pill" id="'+(statId||"gstat")+'"></span></div><div class="prog"><b id="gprog" style="width:0%"></b></div><div id="stage"></div></div>';
}
function setProg(f){ const p=$("#gprog"); if(p) p.style.width=Math.round(f*100)+"%"; }
function endScreen(o){
  const s = starsOf(o.frac);
  $("#stage").innerHTML = '<div class="panel end"><div class="big">'+starHTML(s)+'</div><h2>'+esc(o.title)+'</h2><p>'+o.detail+'</p><p><b>+'+o.xp+' XP</b></p><div class="btns">'
    + (o.next? '<button class="btn c" id="e-next">'+esc(o.next)+'</button>' : "")
    + '<button class="btn '+(o.next?"ghost":"c")+'" id="e-again">Jugar otra vez</button><a class="btn ghost" href="#'+(o.back||"")+'">Volver</a></div></div>';
  setProg(1);
  $("#e-again").addEventListener("click", o.again);
  if(o.next) $("#e-next").addEventListener("click", o.onNext);
  addXP(o.xp);
  if(s===3) confetti();
}
const praise = f => f>=.9?"¡Excelente!":f>=.7?"¡Muy bien!":f>=.5?"Vas bien":"Sigue practicando";

/* Referencia para profundizar: la primera entrada de t.refs que calce con la pregunta o su respuesta correcta */
function refFor(t, q){
  const text = q.q+" "+q.o[0];
  const r = t.refs.find(r=>new RegExp(r[0],"i").test(text)) || ["", t.wiki];
  const keys = (r[2] ? [r[2]] : []).concat(r[0] ? r[0].split("|") : [], q.o[0]);
  return {term:r[1], keys};
}
function wikiURL(term){ return "https://es.wikipedia.org/w/index.php?search="+encodeURIComponent(term); }
function noteFor(t, keys){
  const tpl = document.createElement("template"); tpl.innerHTML = t.notes;
  const notes = [...tpl.content.querySelectorAll(".note")];
  for(const k of keys){ const n = notes.find(n=>n.textContent.toLowerCase().includes(k.toLowerCase())); if(n) return n; }
  return notes[0];
}
/* Enlaces "Ver en los apuntes" y "Profundizar"; bindRefs se llama después de insertar refsHTML en la página */
function refsHTML(r){
  return '<div class="refs"><button type="button" class="linkbtn" id="ref-note" aria-expanded="false">Ver en los apuntes</button>'
    + '<a href="'+wikiURL(r.term)+'" target="_blank" rel="noopener">Profundizar en Wikipedia: '+esc(r.term)+' ↗</a></div>';
}
function bindRefs(t, r){
  $("#ref-note").addEventListener("click",e=>{
    const box = $("#ref-notebox"), b = e.currentTarget;
    if(!box.firstChild) box.appendChild(noteFor(t, r.keys));
    box.hidden = !box.hidden; b.setAttribute("aria-expanded", !box.hidden);
    b.textContent = box.hidden ? "Ver en los apuntes" : "Ocultar apunte";
  });
}

/* ---------- Tarjetas ---------- */
function cardsGame(t){
  view(gameShell(t,"Tarjetas · "+t.name), t.color); restart = ()=>cardsGame(t);
  const known = new Set(S.known[t.id]||[]);
  let deck = shuffle(t.cards.map((_,i)=>i)), seen=0, gained=0, total=deck.length;
  function draw(){
    $("#gstat").textContent = "Quedan "+deck.length;
    setProg(1 - deck.length/total);
    if(!deck.length){
      S.known[t.id] = [...known]; save();
      $("#stage").innerHTML = '<div class="panel end"><div class="big">'+starHTML(3)+'</div><h2>¡Mazo completo!</h2><p>Repasaste las '+total+' tarjetas de este pasillo.</p><p><b>+'+gained+' XP</b></p><div class="btns"><button class="btn c" id="e-again">Barajar de nuevo</button><a class="btn ghost" href="#'+t.id+'">Volver</a></div></div>';
      $("#e-again").addEventListener("click",()=>cardsGame(t)); addXP(gained); return;
    }
    const i = deck[0], [f,b] = t.cards[i], r = refFor(t, {q:f, o:[b]});
    $("#stage").innerHTML = '<div class="card3d" id="cd" role="button" tabindex="0" aria-label="Voltear tarjeta"><div class="in"><div class="face front"><h3>'+esc(f)+'</h3><small>Toca o presiona espacio para voltear</small></div><div class="face back"><p>'+esc(b)+'</p><small>'+esc(f)+'</small></div></div></div>'
      + '<div class="cardbtns"><button class="btn nob" id="c-no">Otra vez</button><button class="btn okb" id="c-ok">Lo sabía</button></div>'
      + '<div class="cardrefs" id="c-refs" hidden>'+refsHTML(r)+'<div id="ref-notebox" class="notes inline" hidden></div></div>';
    bindRefs(t, r);
    const cd = $("#cd"); cd.addEventListener("click",flip);
    $("#c-ok").addEventListener("click",()=>{ deck.shift(); if(!known.has(i)){ known.add(i); gained+=3; } S.known[t.id]=[...known]; save(); draw(); });
    $("#c-no").addEventListener("click",()=>{ deck.push(deck.shift()); draw(); });
    cd.focus({preventScroll:true});
  }
  /* Las referencias aparecen recién al voltear, para no adelantar la respuesta */
  function flip(){ const cd=$("#cd"); if(!cd) return; cd.classList.toggle("flip"); $("#c-refs").hidden = false; }
  function key(e){ if(e.target.tagName==="BUTTON" || e.target.tagName==="A") return; if(e.key===" "){ e.preventDefault(); flip(); } if(e.key==="ArrowRight") $("#c-ok")?.click(); if(e.key==="ArrowLeft") $("#c-no")?.click(); }
  document.addEventListener("keydown",key); cleanup=()=>document.removeEventListener("keydown",key);
  draw();
}

/* ---------- Quiz ---------- */
function prepQ(q, tid){ const o = shuffle(q.o.map((x,i)=>({x,ok:i===0}))); return {q:q.q, o, w:q.w, tid, src:q}; }
function quizGame(t){
  view(gameShell(t,"Quiz · "+t.name), t.color); restart = ()=>quizGame(t);
  const qs = shuffle(t.quiz).slice(0,10).map(q=>prepQ(q,t.id));
  let i=0, right=0, combo=0, xp=0, locked=false;
  function draw(){
    locked=false; setProg(i/qs.length);
    $("#gstat").textContent = (i+1)+" / "+qs.length;
    const q = qs[i];
    $("#stage").innerHTML = '<div class="panel"><div class="combo">'+(combo>=2? "Combo ×"+combo : "&nbsp;")+'</div><p class="qtext">'+esc(q.q)+'</p><div class="opts">'
      + q.o.map((o,k)=>'<button class="opt" data-k="'+k+'"><kbd>'+(k+1)+'</kbd><span>'+esc(o.x)+'</span></button>').join("") + '</div><div id="after"></div></div>';
    app.querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>pick(+b.dataset.k)));
  }
  function pick(k){
    if(locked) return; locked=true;
    const q=qs[i], btns=app.querySelectorAll(".opt");
    btns.forEach((b,j)=>{ b.disabled=true; if(q.o[j].ok) b.classList.add("ok"); });
    const ok = q.o[k].ok;
    if(ok){ right++; combo++; const g = 10 + 2*Math.min(combo-1,5); xp+=g; } else { combo=0; btns[k].classList.add("no"); shakeEl(btns[k]); }
    const r = refFor(t, q.src);
    $("#after").innerHTML = '<div class="why"><b>'+(ok?"¡Correcto! ":"No era esa. ")+'</b>'+esc(q.w)+refsHTML(r)+'</div>'
      + '<div id="ref-notebox" class="notes inline" hidden></div><div class="grow-row"><span class="combo">'+right+' aciertos</span><button class="btn c" id="q-next">'+(i+1<qs.length?"Siguiente →":"Ver resultado")+'</button></div>';
    bindRefs(t, r);
    $("#q-next").addEventListener("click",next); $("#q-next").focus({preventScroll:true});
  }
  function next(){
    i++;
    if(i<qs.length) return draw();
    const frac = right/qs.length; setBest(t.id,"quiz",frac);
    endScreen({title:praise(frac), frac, detail: right+" de "+qs.length+" correctas.", xp, again:()=>quizGame(t), back:t.id});
  }
  function key(e){ if(/^[1-4]$/.test(e.key) && !locked){ const b=app.querySelectorAll(".opt")[+e.key-1]; if(b) b.click(); } }
  document.addEventListener("keydown",key); cleanup=()=>document.removeEventListener("keydown",key);
  draw();
}

/* ---------- Parejas ---------- */
function pairsGame(t){
  view(gameShell(t,"Parejas · "+t.name), t.color); restart = ()=>pairsGame(t);
  const set = shuffle(t.pairs).slice(0,5);
  const L = shuffle(set.map((p,i)=>({x:p[0],i}))), R = shuffle(set.map((p,i)=>({x:p[1],i})));
  let sel=null, done=0, errors=0, t0=Date.now();
  $("#stage").innerHTML = '<div class="panel"><p class="qtext" style="font-size:1.1rem;margin-bottom:14px">Toca un concepto y luego su definición.</p><div class="pairs"><div class="col">'
    + L.map(o=>'<button class="pc term" data-s="L" data-i="'+o.i+'">'+esc(o.x)+'</button>').join("") + '</div><div class="col">'
    + R.map(o=>'<button class="pc" data-s="R" data-i="'+o.i+'">'+esc(o.x)+'</button>').join("") + '</div></div></div>';
  const tick = setInterval(()=>{ const s=Math.floor((Date.now()-t0)/1000); $("#gstat").textContent = s+" s · "+errors+" errores"; },500);
  cleanup = ()=>clearInterval(tick);
  app.querySelectorAll(".pc").forEach(b=>b.addEventListener("click",()=>{
    if(b.classList.contains("done")) return;
    if(!sel || sel.dataset.s===b.dataset.s){ if(sel) sel.classList.remove("sel"); sel=b; b.classList.add("sel"); return; }
    if(sel.dataset.i===b.dataset.i){
      [sel,b].forEach(x=>{ x.classList.remove("sel"); x.classList.add("done"); x.disabled=true; });
      done++; setProg(done/set.length);
      if(done===set.length){
        clearInterval(tick);
        const secs = Math.floor((Date.now()-t0)/1000), frac = Math.max(0, 1-errors*.12);
        setBest(t.id,"pairs",frac);
        endScreen({title:praise(frac), frac, detail:"Uniste las 5 parejas en "+secs+" s con "+errors+(errors===1?" error.":" errores."), xp: Math.round(15+25*frac), again:()=>pairsGame(t), back:t.id});
      }
    } else { errors++; shakeEl(sel); shakeEl(b); sel.classList.remove("sel"); sel=null; }
    sel = (sel && !sel.classList.contains("done") && sel!==b) ? sel : null;
  }));
  $("#gstat").textContent = "0 s · 0 errores";
}

/* ---------- Ordena ---------- */
function orderGame(t, si=0){
  const set = t.order[si];
  view(gameShell(t,"Ordena · "+t.name), t.color); restart = ()=>orderGame(t,si);
  let pos=0, errors=0;
  const picker = t.order.length>1 ? '<div class="setpick" role="group" aria-label="Elegir secuencia">'+t.order.map((s,k)=>'<button aria-pressed="'+(k===si)+'" data-k="'+k+'">'+esc(s.t)+'</button>').join("")+'</div>' : "";
  $("#stage").innerHTML = picker + '<div class="panel"><p class="qtext" style="font-size:1.2rem">'+esc(set.t)+'</p><p class="eyebrow" style="margin-bottom:12px">Toca los elementos en el orden correcto</p><div class="slots">'
    + set.i.map(()=>'<div class="slot"></div>').join("") + '</div><div class="chipbank">'
    + shuffle(set.i.map((x,k)=>({x,k}))).map(o=>'<button class="chip" data-k="'+o.k+'">'+esc(o.x)+'</button>').join("") + '</div></div>';
  app.querySelectorAll(".setpick button").forEach(b=>b.addEventListener("click",()=>orderGame(t,+b.dataset.k)));
  const slots = app.querySelectorAll(".slot");
  $("#gstat").textContent = "0 errores";
  app.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{
    if(+c.dataset.k===pos){
      slots[pos].textContent = set.i[pos]; slots[pos].classList.add("f"); c.remove(); pos++; setProg(pos/set.i.length);
      if(pos===set.i.length){
        const frac = Math.max(0, 1-errors/set.i.length); setBest(t.id,"order",frac);
        const nx = si+1<t.order.length;
        setTimeout(()=>endScreen({title:praise(frac), frac, detail:"Secuencia completa con "+errors+(errors===1?" error.":" errores."), xp:Math.round(10+20*frac),
          again:()=>orderGame(t,si), back:t.id, next: nx? "Siguiente secuencia" : null, onNext:()=>orderGame(t,si+1)}), 500);
      }
    } else { errors++; shakeEl(c); $("#gstat").textContent = errors+(errors===1?" error":" errores"); }
  }));
}

/* ---------- Clasifica ---------- */
function sortGame(t, si=0){
  const set = t.sort[si];
  view(gameShell(t,"Clasifica · "+t.name), t.color); restart = ()=>sortGame(t,si);
  const items = shuffle(set.i);
  let i=0, right=0, busy=false;
  const picker = t.sort.length>1 ? '<div class="setpick" role="group" aria-label="Elegir juego">'+t.sort.map((s,k)=>'<button aria-pressed="'+(k===si)+'" data-k="'+k+'">'+esc(s.t)+'</button>').join("")+'</div>' : "";
  $("#stage").innerHTML = picker + '<p class="eyebrow" style="margin-bottom:10px">'+esc(set.t)+' · ¿a qué caja va?</p><div class="sortcard" id="sc"></div><div class="fb" id="fb" aria-live="polite"></div><div class="buckets">'
    + set.b.map((b,k)=>'<button class="bucket" data-k="'+k+'">'+esc(b)+'</button>').join("") + '</div>';
  app.querySelectorAll(".setpick button").forEach(b=>b.addEventListener("click",()=>sortGame(t,+b.dataset.k)));
  const bks = app.querySelectorAll(".bucket");
  function draw(){ busy=false; $("#sc").className="sortcard"; $("#sc").textContent = items[i][0]; $("#fb").textContent=""; $("#fb").className="fb"; bks.forEach(b=>b.classList.remove("hint")); $("#gstat").textContent=(i+1)+" / "+items.length; setProg(i/items.length); }
  bks.forEach(b=>b.addEventListener("click",()=>{
    if(busy) return; busy=true;
    const ok = +b.dataset.k === items[i][1];
    if(ok){ right++; $("#sc").classList.add("ok"); $("#fb").textContent="¡Bien!"; $("#fb").className="fb ok"; }
    else { $("#sc").classList.add("no"); shakeEl($("#sc")); bks[items[i][1]].classList.add("hint"); $("#fb").textContent="Va en: "+set.b[items[i][1]]; $("#fb").className="fb no"; }
    setTimeout(()=>{ i++; if(i<items.length) draw(); else {
      const frac = right/items.length; setBest(t.id,"sort",frac);
      const nx = si+1<t.sort.length;
      endScreen({title:praise(frac), frac, detail:right+" de "+items.length+" bien clasificadas.", xp:right*4, again:()=>sortGame(t,si), back:t.id,
        next: nx? "Siguiente juego" : null, onNext:()=>sortGame(t,si+1)});
    }}, ok?650:1500);
  }));
  draw();
}

/* ---------- Relámpago ---------- */
function flashGame(){
  view(gameShell(null,"Desafío relámpago"), "var(--accent)"); restart = flashGame;
  let pool = shuffle(T.flatMap(t=>t.quiz.map(q=>prepQ(q,t.id)))), i=0, score=0, end=Date.now()+60000, locked=false, over=false;
  const tick = setInterval(()=>{
    const left = Math.max(0, end-Date.now()); $("#gstat").innerHTML = '<span class="timer">'+Math.ceil(left/1000)+'</span>'; setProg(1-left/60000);
    if(!left) finish();
  },200);
  cleanup = ()=>clearInterval(tick);
  function draw(){
    locked=false; if(i>=pool.length){ pool=shuffle(pool); i=0; }
    const q=pool[i], t=topic(q.tid);
    $("#stage").innerHTML = '<div class="panel" style="--c:'+t.color+'"><div class="grow-row" style="margin:0 0 6px"><span class="topicchip">'+esc(t.name)+'</span><span class="combo">'+score+' pts</span></div><p class="qtext">'+esc(q.q)+'</p><div class="opts">'
      + q.o.map((o,k)=>'<button class="opt" data-k="'+k+'"><kbd>'+(k+1)+'</kbd><span>'+esc(o.x)+'</span></button>').join("") + '</div></div>';
    app.querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>pick(+b.dataset.k)));
  }
  function pick(k){
    if(locked||over) return; locked=true;
    const q=pool[i], btns=app.querySelectorAll(".opt");
    btns.forEach((b,j)=>{ b.disabled=true; if(q.o[j].ok) b.classList.add("ok"); });
    if(q.o[k].ok) score++; else btns[k].classList.add("no");
    setTimeout(()=>{ if(over) return; i++; draw(); }, q.o[k].ok?450:1100);
  }
  function finish(){
    if(over) return; over=true; clearInterval(tick);
    const rec = score > (S.flash||0); if(rec){ S.flash = score; save(); }
    const frac = Math.min(1, score/15);
    endScreen({title: rec? "¡Nuevo récord!" : "Se acabó el tiempo", frac, detail: score+" respuestas correctas en 60 segundos. Récord: "+S.flash+".", xp: score*5, again: flashGame, back:""});
    if(rec && starsOf(frac)<3) confetti();
  }
  function key(e){ if(/^[1-4]$/.test(e.key)){ const b=app.querySelectorAll(".opt")[+e.key-1]; if(b) b.click(); } }
  document.addEventListener("keydown",key);
  const c0 = cleanup; cleanup=()=>{ c0(); document.removeEventListener("keydown",key); };
  draw();
}

/* ===================== RUTAS ===================== */
function route(){
  const h = location.hash.slice(1);
  if(h==="relampago") return flashGame();
  const [id, mode] = h.split("-"), t = topic(id);
  if(!t) return home();
  if(mode==="tarjetas") return cardsGame(t);
  if(mode==="quiz") return quizGame(t);
  if(mode==="parejas") return pairsGame(t);
  if(mode==="ordena" && t.order.length) return orderGame(t);
  if(mode==="clasifica" && t.sort.length) return sortGame(t);
  topicView(t);
}
addEventListener("hashchange", route);
app.addEventListener("click", e=>{ if(e.target.closest("#g-restart") && restart) restart(); });

/* ===================== REINICIO DEL PROGRESO ===================== */
const modal = $("#modal");
function askReset(){ modal.hidden = false; $("#modal-no").focus(); }
function closeReset(){ modal.hidden = true; }
$("#reset-all").addEventListener("click", askReset);
$("#modal-no").addEventListener("click", closeReset);
modal.addEventListener("click", e=>{ if(e.target === modal) closeReset(); });
document.addEventListener("keydown", e=>{ if(e.key === "Escape" && !modal.hidden) closeReset(); });
$("#modal-yes").addEventListener("click", ()=>{
  S = fresh(); save(); closeReset(); renderBar(); toast("Progreso reiniciado");
  if(location.hash) location.hash = ""; else route();
});

renderBar(); route();
