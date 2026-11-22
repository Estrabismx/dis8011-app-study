/* Pasillo 5 · Perfil del consumidor */
T.push({
  id:"perfil", n:5, name:"Perfil del consumidor", color:"var(--t-perfil)",
  tagline:"Buyer persona, sesgos cognitivos, roles y riesgos de compra, y Data Mining.",
  wiki:"Comportamiento del consumidor", refs:[
    ["fuerzas|cultura|grupos de referencia|situacional|poscompra|reconocimiento de la necesidad","Comportamiento del consumidor","Factores que influyen"],["complejidad|impulso|implicación|rutina|laborioso","Comportamiento del consumidor","Grados de complejidad"],["alegrías|frustraciones|trabajos del cliente|lienzo","Lienzo de propuesta de valor","Plantillas para construir"],
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
  <div class="note wide"><h3>Plantillas para construir el perfil</h3>
    <dl class="kv">
      <dt>Perfil del cliente</dt><dd>Un círculo en tres partes: <b>alegrías</b> (resultados positivos, beneficios o aspiraciones), <b>trabajos del cliente</b> (tareas que quiere realizar o lo que necesita lograr) y <b>frustraciones</b> (dificultades, problemas o riesgos que enfrenta).</dd>
      <dt>Ficha de buyer persona</dt><dd>Foto, nombre, edad, localidad, nivel de estudios, sector, redes sociales, personalidad, hobbies y habilidades, metas y objetivos, pain points, puesto y método de trabajo, herramientas que usa y “¿qué le podemos aportar nosotros como empresa?”.</dd>
    </dl>
    ${fig("perfil",3,"Lienzo de perfil del cliente (alegrías, trabajos, frustraciones) y ficha de buyer persona")}
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
  <div class="note wide"><h3>Factores que influyen en el proceso de decisión de compra</h3>
    <div class="flow"><span>Reconocimiento de la necesidad</span><i>→</i><span>Identificación de alternativas</span><i>→</i><span>Evaluación de alternativas</span><i>→</i><span>Decisión de compra</span><i>→</i><span>Comportamiento poscompra</span></div>
    <p>Sobre ese proceso actúan cuatro grupos de fuerzas:</p>
    <dl class="kv">
      <dt>Fuerzas sociales y de grupo</dt><dd>Cultura, nivel social, grupos de referencia, familia y hogar.</dd>
      <dt>Fuerzas psicológicas</dt><dd>Motivación, percepción, aprendizaje, personalidad y actitud.</dd>
      <dt>Información</dt><dd>Fuentes comerciales y fuentes sociales.</dd>
      <dt>Factores situacionales</dt><dd>Cuándo, dónde, por qué y en qué condiciones compran los consumidores.</dd>
    </dl>
    ${fig("perfil",6,"El proceso de decisión de compra y las fuerzas que lo influyen")}
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
  <div class="note"><h3>Grados de complejidad de la decisión de compra</h3>
    <div class="mx">
      <div></div><div class="ax">Baja complejidad</div><div class="ax">Alta complejidad</div>
      <div class="ax y">Proceso</div><div class="q"><b>Inercia, hábito, rutina</b></div><div class="q"><b>Laborioso</b></div>
      <div class="ax y">Tipo de compra</div><div class="q"><span>Repetida, frecuente, de impulso, de baja implicación</span></div><div class="q"><span>Primera compra, esporádica, razonada, de alta implicación</span></div>
      <div class="ax y">Precio</div><div class="q"><span>Producto de bajo precio</span></div><div class="q"><span>Producto de precio alto</span></div>
    </div>
    <p><b>¿Por qué compramos cosas que no usamos?</b> En clase se vio el meme “Joven monta un gimnasio en su casa y tampoco va”: muchas compras responden a emociones e intenciones más que a un uso real.</p>
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
    ${fig("perfil",15,"Ciclo CRISP-DM: comprensión del negocio, de los datos, preparación, modelado, evaluación y despliegue")}
    <p>Herramientas: R, Python, SPSS, RapidMiner.</p>
    <p><b>Ejemplo Churn (abandono):</b></p>
    <div class="flow"><span>Consumo + reclamos + antigüedad</span><i>→</i><span>Data Mining</span><i>→</i><span>Clientes con mayor probabilidad de abandono</span><i>→</i><span>Insight</span><i>→</i><span>Campaña de retención personalizada</span><i>→</i><span>Menos churn</span></div>
  </div>`,
  cards:[
    ["Lienzo de perfil del cliente","Alegrías (beneficios y aspiraciones), trabajos del cliente (lo que quiere lograr) y frustraciones (problemas y riesgos)."],
    ["Etapas del proceso de decisión de compra","Reconocimiento de la necesidad → identificación de alternativas → evaluación → decisión de compra → comportamiento poscompra."],
    ["Fuerzas sociales y de grupo","Cultura, nivel social, grupos de referencia, familia y hogar."],
    ["Fuerzas psicológicas","Motivación, percepción, aprendizaje, personalidad y actitud."],
    ["Factores situacionales","Cuándo, dónde, por qué y en qué condiciones compran los consumidores."],
    ["Compra de baja complejidad","Inercia, hábito o rutina: compra repetida, frecuente, de impulso, de baja implicación y bajo precio."],
    ["Compra de alta complejidad","Proceso laborioso: primera compra, esporádica, razonada, de alta implicación y precio alto."],
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
    {q:"La cultura, el nivel social y los grupos de referencia son…",o:["Fuerzas sociales y de grupo","Fuerzas psicológicas","Factores situacionales","Fuentes de información"],w:"Fuerzas sociales y de grupo: cultura, nivel social, grupos de referencia, familia y hogar."},
    {q:"La motivación, la percepción y el aprendizaje son…",o:["Fuerzas psicológicas","Fuerzas sociales","Factores situacionales","Fuentes comerciales"],w:"Fuerzas psicológicas: motivación, percepción, aprendizaje, personalidad y actitud."},
    {q:"“Dónde y cuándo compran los consumidores” son factores…",o:["Situacionales","Psicológicos","Sociales","Culturales"],w:"Factores situacionales: cuándo, dónde, por qué y en qué condiciones."},
    {q:"¿Cuál es la última etapa del proceso de decisión de compra?",o:["Comportamiento poscompra","Decisión de compra","Evaluación de alternativas","Reconocimiento de la necesidad"],w:"Necesidad → alternativas → evaluación → decisión → poscompra."},
    {q:"Una compra de impulso es de complejidad…",o:["Baja","Alta","Media","Laboriosa"],w:"Baja complejidad: inercia, hábito, rutina."},
    {q:"Comprar por primera vez un producto caro y de alta implicación es un proceso…",o:["Laborioso (alta complejidad)","De inercia","De rutina","De impulso"],w:"Alta complejidad: primera compra, razonada, de precio alto."},
    {q:"En el lienzo de perfil del cliente, los problemas y riesgos que enfrenta son sus…",o:["Frustraciones","Alegrías","Trabajos","Metas"],w:"Alegrías, trabajos del cliente y frustraciones."},
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
    ["Fuerzas psicológicas","Motivación, percepción, actitud"],["Fuerzas sociales","Cultura y grupos de referencia"],["Baja complejidad","Compra por hábito o impulso"],["Alta complejidad","Primera compra razonada"],
    ["Anclaje","$100.000 tachado hace ver barato $60.000"],["Disponibilidad","Noticias de robos → contratar seguro"],
    ["Representatividad","Envase verde → “debe ser saludable”"],["Aversión a la pérdida","“Tus puntos vencen mañana”"],
    ["Efecto marco","“90% libre de grasa”"],["Efecto halo","Marca innovadora → asumo calidad"],
    ["Iniciador","Detecta la necesidad"],["Influenciador","Opina y aconseja"],
    ["Decisor","Toma la decisión final"],["Comprador","Realiza la compra"],["Consumidor","Usa y evalúa el producto"],
    ["Clustering","Agrupa clientes similares"],["Árboles de decisión","Clasifican y predicen"],
    ["Reglas de asociación","Detectan productos relacionados"],["Regresión logística","Estima probabilidades"]
  ],
  order:[
    {t:"Proceso de decisión de compra",i:["Reconocimiento de la necesidad","Identificación de alternativas","Evaluación de alternativas","Decisión de compra","Comportamiento poscompra"]},
    {t:"Proceso de Data Mining",i:["Problema de marketing","Obtención y preparación de datos","Aplicación de técnicas de análisis","Evaluación de resultados","Insights","Decisiones de marketing"]},
    {t:"De los datos a la decisión",i:["Datos","Patrones","Insights","Decisiones"]},
    {t:"Ejemplo Churn: de los datos a la acción",i:["Datos de consumo + reclamos + antigüedad","Data Mining","Detecta clientes con mayor probabilidad de abandono","Insight","Campaña de retención personalizada","Resultado: reducir el churn"]}
  ],
  sort:[
    {t:"Factores del proceso de decisión",b:["Sociales y de grupo","Psicológicos","Información","Situacionales"],i:[["Cultura",0],["Familia y hogar",0],["Grupos de referencia",0],["Motivación",1],["Percepción",1],["Actitud",1],["Fuentes comerciales",2],["Fuentes sociales",2],["Cuándo compran",3],["Dónde compran",3]]},
    {t:"Complejidad de la compra",b:["Baja complejidad","Alta complejidad"],i:[["Compra repetida",0],["Compra de impulso",0],["Producto de bajo precio",0],["Compra frecuente",0],["Primera compra",1],["Compra razonada",1],["Producto de precio alto",1],["Compra esporádica",1]]},
    {t:"Sesgos cognitivos",b:["Anclaje","Disponibilidad","Representatividad","Aversión a la pérdida","Efecto marco","Efecto halo"],i:[["“Antes $100.000, ahora $60.000”",0],["Ver primero el plan más caro hace que el resto parezca barato",0],["Tras noticias de robos, contratar un seguro",1],["Después de un reportaje sobre intoxicaciones, comprar un filtro de agua",1],["Envase verde y artesanal → “es ecológico”",2],["Etiqueta con hojas y madera → “es natural”",2],["“Tus puntos vencen mañana”",3],["“Última oportunidad: no pierdas tu descuento”",3],["“90% libre de grasa”",4],["“95% de éxito” en vez de “5% de fallas”",4],["Marca innovadora → “sus productos son de calidad”",5],["Un famoso querido → confío en lo que promociona",5]]},
    {t:"Roles de compra (una familia compra un auto)",b:["Iniciador","Influenciador","Decisor","Comprador","Consumidor"],i:[["El hijo dice que necesitan un auto más grande",0],["Un amigo mecánico recomienda un modelo",1],["Una reseña en YouTube sobre el modelo",1],["La madre elige el modelo y las condiciones",2],["El padre va a la automotora y paga",3],["Toda la familia usa el auto a diario",4],["Quien lo maneja y opina si cumplió lo esperado",4]]},
    {t:"Riesgos percibidos",b:["Monetario","Funcional","Físico","Social","Psicológico"],i:[["Podría perder dinero con este producto",0],["¿Y si en una semana baja de precio?",0],["Puede que no haga lo que debería",1],["¿Y si la batería no dura lo prometido?",1],["Parece peligroso, podría hacerme daño",2],["¿Este scooter será seguro en la calle?",2],["¿Qué pensarán mis amigos si compro esto?",3],["¿Me veré ridículo con esta ropa?",3],["¿Me sentiré culpable o irresponsable?",4],["¿Me arrepentiré de darme este gusto caro?",4]]},
    {t:"Métodos para construir perfiles",b:["Cualitativas","Cuantitativas","Datos digitales","Análisis avanzado"],i:[["Comprenden motivaciones y percepciones",0],["Entrevistas en profundidad sobre experiencias",0],["Miden comportamientos con datos estadísticos",1],["Encuesta a 500 personas con escala numérica",1],["Analizan navegación, clics e interacciones",2],["Historial de compras en la tienda online",2],["Data Mining para descubrir patrones",3],["Descubrir grupos de consumidores en grandes bases",3]]}
  ]
});
