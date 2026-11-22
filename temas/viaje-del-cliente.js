/* Pasillo 13 · Viaje del cliente */
T.push({
  id:"viaje", n:13, name:"Viaje del cliente", color:"var(--t-viaje)",
  tagline:"Customer Journey, satisfacción vs. lealtad, modelos de servicio, CX, CSAT y NPS.",
  wiki:"Customer journey", refs:[
    ["touchpoint|pre-compra|postcompra|en la compra|packaging|up-selling","Punto de contacto","Touchpoints"],["H2H|H2M|M2M|A2A|chatbot|agente|\\bIA\\b","Agente inteligente","ya no es solo humano"],["restaurante|pain point|dolor|hito","Mapa de experiencia del cliente","mapa de experiencia"],["detractor|pasivo|promotor|nota","Net Promoter Score","Net Promoter Score"],
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
    <p>Los apóstoles abren nuevas relaciones y posibilidades de creación de valor: construyen rentabilidad futura. La meta es mover a los clientes desde terroristas y mercenarios hacia apóstoles.</p>
    ${fig("viaje",3,"Matriz satisfacción–lealtad: rehenes, apóstoles, terroristas y mercenarios")}
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
    ${fig("viaje",8,"Descubrir, evaluar, adquirir, servicio y lealtad: la experiencia del cliente")}
  </div>
  <div class="note wide"><h3>Touchpoints: puntos de contacto que generan experiencia</h3>
    <dl class="kv">
      <dt>Pre-compra</dt><dd>Comerciales, relaciones públicas, website, redes sociales, emailing, muestras, cupones, incentivos, promociones, descuentos.</dd>
      <dt>En la compra</dt><dd>Packaging, atmósfera del punto de venta, atención directa, personal de ventas, navegabilidad de la web o marketplace.</dd>
      <dt>Postcompra</dt><dd>Envío y entrega, servicio postventa, newsletters, programas de fidelización, comunidad, actualizaciones, cross-selling, up-selling.</dd>
    </dl>
    <p>Los touchpoints también pueden generar malas experiencias: una persona agobiada por llamadas (pre-compra), una fila larga en la caja (en la compra) o una caja “frágil” que llega aplastada (postcompra).</p>
    ${fig("viaje",11,"Touchpoints pre-compra, en la compra y postcompra sobre las etapas del viaje")}
  </div>
  <div class="note wide"><h3>El viaje del cliente ya no es solo humano</h3>
    <p>Un artículo de prensa visto en clase plantea que la irrupción de <b>agentes autónomos de IA</b> obliga a repensar qué es un punto de contacto y quién recorre el viaje:</p>
    <dl class="kv">
      <dt>H2H · humano–humano</dt><dd>Una persona en cada lado. Ej.: el vendedor en la tienda.</dd>
      <dt>H2M · humano–máquina</dt><dd>La persona interactúa con una IA, un agente o un bot de la empresa. Ej.: tótem de autoservicio o chatbot.</dd>
      <dt>M2M / A2A · máquina–máquina</dt><dd>La IA del cliente negocia con la IA de la empresa. Ej.: tu asistente de compras negocia con el sistema de la tienda sin intervención humana.</dd>
    </dl>
    ${fig("viaje",12,"Artículo “El viaje del cliente ya no es solo humano”")}
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
  <div class="note wide"><h3>Ejemplo: mapa de experiencia de un restaurante</h3>
    <p>Se grafica cada hito del viaje y se marca si la experiencia fue positiva o un <b>“dolor” (pain point)</b>:</p>
    <dl class="kv">
      <dt>Entrada al local</dt><dd>✓ Buena primera impresión.</dd>
      <dt>Elegir mesa</dt><dd>✗ Difícil encontrar una mesa disponible.</dd>
      <dt>Atención de camareros</dt><dd>✗ Correcta, pero impersonal o lenta (el punto más bajo).</dd>
      <dt>Ver la carta</dt><dd>~ Poco clara y con pocas opciones (neutro).</dd>
      <dt>Elegir platos</dt><dd>✓ Buena variedad.</dd>
      <dt>Comer</dt><dd>✓ Excelente calidad de la comida.</dd>
      <dt>Pedir postre</dt><dd>✗ Demora en la entrega.</dd>
      <dt>Comer postre</dt><dd>✓ Muy buen postre.</dd>
      <dt>Pagar</dt><dd>✗ Proceso de pago lento y poco fluido.</dd>
    </dl>
    <p>Ojo: la experiencia <b>termina con un dolor</b> (el pago). Como recordamos sobre todo el momento más intenso y el final, ese cierre pesa mucho en la valoración.</p>
    ${fig("viaje",20,"Línea de experiencias positivas y pain points en 9 hitos")}
  </div>
  <div class="note"><h3>Net Promoter Score</h3>
    <p>Medida universal usada por miles de empresas: indica la probabilidad de que los clientes recomienden una empresa o producto. Se obtiene con una encuesta simple: “¿En qué medida recomendarías nuestra compañía a un amigo?” (0 a 10) más el motivo. Los motivos son los <b>drivers</b> de satisfacción que explican el NPS.</p>
    <p><b>Ventajas:</b> es muy simple; es comparable entre empresas y sectores; se puede medir en el tiempo.</p>
    <dl class="kv">
      <dt>Detractores</dt><dd>Notas 0 a 6.</dd>
      <dt>Pasivos</dt><dd>Notas 7 y 8.</dd>
      <dt>Promotores</dt><dd>Notas 9 y 10.</dd>
    </dl>
    <span class="formula">NPS = % promotores − % detractores</span>
    <div class="figs">
      ${fig("viaje",21,"Escala de 0 a 10: detractores, pasivos y promotores")}
      ${fig("viaje",23,"Promotores − detractores = NPS")}
    </div>
  </div>`,
  cards:[
    ["Touchpoints pre-compra","Comerciales, RR.PP., website, redes sociales, emailing, muestras, cupones, promociones."],
    ["Touchpoints en la compra","Packaging, atmósfera del punto de venta, atención, personal de ventas, navegabilidad web."],
    ["Touchpoints postcompra","Envío y entrega, postventa, newsletters, fidelización, comunidad, cross-selling, up-selling."],
    ["H2H, H2M y M2M","Humano–humano (vendedor), humano–máquina (chatbot o tótem) y máquina–máquina (la IA del cliente negocia con la de la empresa)."],
    ["Pain point","Un “dolor”: hito del viaje donde la experiencia es negativa (ej.: pago lento en un restaurante)."],
    ["Escala del NPS","Detractores 0–6, pasivos 7–8, promotores 9–10. NPS = % promotores − % detractores."],
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
    {q:"En el NPS, un cliente que pone nota 8 es…",o:["Pasivo","Promotor","Detractor","Apóstol"],w:"Detractores 0–6, pasivos 7–8, promotores 9–10."},
    {q:"En el NPS, un cliente que pone nota 6 es…",o:["Detractor","Pasivo","Promotor","Mercenario"],w:"Detractores: de 0 a 6."},
    {q:"¿Cómo se calcula el NPS?",o:["% promotores − % detractores","% promotores + % pasivos","Promedio de las notas","% detractores − % promotores"],w:"NPS = % promotores − % detractores."},
    {q:"El empaque y la atmósfera del punto de venta son touchpoints…",o:["En la compra","Pre-compra","Postcompra","De lealtad"],w:"Packaging, atmósfera y atención son touchpoints en la compra."},
    {q:"El servicio postventa y el cross-selling son touchpoints…",o:["Postcompra","Pre-compra","En la compra","De descubrimiento"],w:"Ocurren después de comprar."},
    {q:"Tu asistente de IA negocia directamente con el sistema de una tienda. ¿Qué configuración es?",o:["M2M / A2A (máquina–máquina)","H2H","H2M","B2C"],w:"La IA del cliente con la IA de la empresa."},
    {q:"Un cliente conversa con el chatbot de un banco. ¿Qué configuración es?",o:["H2M (humano–máquina)","H2H","M2M","A2A"],w:"Persona del lado del cliente, IA o bot del lado de la empresa."},
    {q:"En el ejemplo del restaurante, ¿con qué hito termina la experiencia?",o:["Un dolor: el pago lento","Un muy buen postre","Una buena primera impresión","La excelente comida"],w:"Termina con un pain point, y el momento final pesa mucho en el recuerdo."},
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
    ["Detractor","Nota de 0 a 6"],["Pasivo","Nota 7 u 8"],["Promotor","Nota 9 o 10"],["H2M","Persona con chatbot o tótem"],["M2M","IA del cliente con IA de la empresa"],
    ["Apóstoles","Satisfechos, leales y recomiendan"],["Rehenes","Leales sin estar satisfechos"],
    ["Mercenarios","Satisfechos pero sin lealtad"],["Terroristas","Insatisfechos que difunden su frustración"],
    ["Servucción (1980)","Cómo se produce el servicio"],["Molecular (1982)","Mapea tangibles e intangibles"],
    ["SERVQUAL (1985)","Brechas expectativas vs. percepciones"],["Customer Journey (2000)","Cómo vive el cliente el servicio"],
    ["CSAT","Satisfacción, escala 1 a 7"],["NPS","Recomendación, escala 0 a 10"],
    ["Touch points","Puntos de contacto con el negocio"],["Pain points","Dolores del cliente en el recorrido"],
    ["Satisfacción","Una foto de un momento"],["Experiencia (CX)","La película de toda la relación"]
  ],
  order:[
    {t:"Mapa de experiencia del restaurante",i:["Entrada al local","Elegir mesa","Atención de camareros","Ver la carta","Elegir platos","Comer","Pedir postre","Comer postre","Pagar"]},
    {t:"Etapas del Customer Journey",i:["Descubrir (awareness)","Evaluar (consideration)","Adquirir (acquisition)","Servicio (service)","Lealtad (loyalty)"]},
    {t:"Circuito del crecimiento",i:["Valor percibido","Satisfacción","Comportamiento leal del cliente","Rentabilidad y crecimiento"]},
    {t:"Modelos de servicio por año",i:["Servucción (1980)","Modelo Molecular (1982)","SERVQUAL (1985)","Customer Journey (2000)"]}
  ],
  sort:[
    {t:"Touchpoints",b:["Pre-compra","En la compra","Postcompra"],i:[["Comerciales",0],["Muestras y cupones",0],["Redes sociales",0],["Packaging",1],["Atmósfera del punto de venta",1],["Personal de ventas",1],["Envío y entrega",2],["Servicio postventa",2],["Programa de fidelización",2],["Up-selling",2]]},
    {t:"NPS: ¿qué tipo de cliente es?",b:["Detractor","Pasivo","Promotor"],i:[["Nota 0",0],["Nota 3",0],["Nota 6",0],["Nota 7",1],["Nota 8",1],["Nota 9",2],["Nota 10",2]]},
    {t:"Restaurante: ¿experiencia positiva o dolor?",b:["Positiva","Dolor (pain point)"],i:[["Entrada al local",0],["Elegir platos",0],["Comer",0],["Comer postre",0],["Elegir mesa",1],["Atención de camareros",1],["Pedir postre",1],["Pagar",1]]},
    {t:"Satisfacción vs. lealtad",b:["Apóstoles","Rehenes","Mercenarios","Terroristas"],i:[["Su experiencia sobrepasa expectativas y lo cuenta",0],["Recomienda la marca a su círculo",0],["No puede cambiarse por contratos o costos de cambio",1],["Tiene mala experiencia pero sigue comprando",1],["Buscador de precio y comprador impulsivo",2],["Siempre busca algo a cambio; no es leal a nadie",2],["Transmite su frustración a su círculo social",3],["Abandona la empresa a la primera oportunidad",3]]},
    {t:"¿Satisfacción o experiencia?",b:["Satisfacción","Experiencia (CX)"],i:[["Puntual, post-interacción",0],["Ciclo de vida completo",1],["Se mide con CSAT o PSAT",0],["Se mide con NPS y CES",1],["La gestiona soporte o atención al cliente",0],["Involucra a toda la organización",1],["Indicador débil de lealtad",0],["Alta correlación con retención y LTV",1],["No predice el abandono",0],["Requiere más infraestructura y alineación",1],["Una fotografía de un momento",0],["La película de toda la relación",1]]},
    {t:"Modelos de servicio",b:["Servucción","Molecular","SERVQUAL","Customer Journey"],i:[["Enfoque interno-operativo",0],["Cliente, personal de contacto, soporte físico",0],["Enfoque visual y estructural",1],["Núcleo del servicio y elementos periféricos",1],["Enfoque evaluativo de la calidad percibida",2],["Fiabilidad, capacidad de respuesta, empatía",2],["Enfoque externo-experiencial",3],["Puntos de contacto, emociones y percepciones",3]]}
  ]
});
