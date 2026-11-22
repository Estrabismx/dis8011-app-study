/* Pasillo 11 · Plaza / Distribución */
T.push({
  id:"distribucion", n:11, name:"Distribución (plaza)", color:"var(--t-distribucion)",
  tagline:"Canales de distribución, intermediarios y sus funciones, cobertura intensiva, selectiva y exclusiva, franquicias, push y pull.",
  wiki:"Canal de distribución", refs:[
    ["canal|aserradero|traslado|propiedad","Canal de distribución","Canal de distribución"],
    ["intermediario|comerciante|agente|corredor|mayorista|minorista","Intermediario","Intermediarios"],
    ["eliminar|funciones|especialista|agente de compras|surtido","Intermediario","Funciones de los intermediarios"],
    ["directa|indirecta|detallistas|niveles","Canal de distribución","Tipo de canal"],
    ["intensiva|selectiva|exclusiva|cobertura","Distribución comercial","Estrategias de cobertura"],
    ["franquicia|royalt|canon|know-how|Subway","Franquicia","Franquicia"],
    ["push|pull|presión|aspiración","Estrategia push-pull","Push y pull"],
    ["mall|locatario|omnicanal|arriendo|e-commerce|Cornershop|dron","Omnicanalidad","Malls y locatarios"],
    ["criterios|perecedero|dispersión|tamaño y recursos","Canal de distribución","Criterios para elegir"],
    ["Paris|reclamo|Oster","Logística","El rol de la distribución"],
    ["rol|plaza|acceso","Distribución comercial","El rol de la distribución"]
  ],
  notes:`
  <div class="note"><h3>El rol de la distribución</h3>
    <p>El rol de la <b>plaza</b> en el mix comercial es <b>facilitar la adquisición y el acceso</b> de productos o servicios por parte del mercado objetivo.</p>
    <p>En la dinámica industria ↔ mercado, la distribución gestiona el flujo de <b>bienes y servicios</b>.</p>
    <p>Ejemplo de clase: un reclamo en LinkedIn por una licuadora comprada en Paris.cl en el Cyber que llegó 3 semanas tarde y sin una pieza (“¡Nunca más Paris.cl!”). Una mala logística daña la marca.</p>
  </div>
  <div class="note"><h3>Canal de distribución</h3>
    <p>Conjunto de personas y/o empresas que participan en el <b>traslado de la propiedad</b> de un producto desde el productor hasta el consumidor final o usuario empresarial.</p>
    <p>Incluye al productor, los intermediarios (mayoristas, minoristas o agentes) y el consumidor, <b>sin que el producto sea modificado</b> sustancialmente.</p>
    ${fig("distribucion",4,"Ejemplo: aserradero → corredor → fabricante de muebles (canal 1) → mueblería → consumidor (canal 2)")}
  </div>
  <div class="note"><h3>Intermediarios</h3>
    <p><b>Intermediario:</b> empresa que presta servicios relacionados con la compra o venta de un producto en su paso del productor al consumidor.</p>
    <dl class="kv">
      <dt>Intermediario comerciante</dt><dd>Adquiere la <b>propiedad</b> del bien que ayuda a vender (mayoristas, minoristas).</dd>
      <dt>Agente intermediario</dt><dd><b>No</b> adquiere la propiedad, pero participa activamente en la venta. Ej.: corredores de propiedades, agencias de viajes.</dd>
    </dl>
    ${fig("distribucion",5,"Empresa → agente → mayorista → minorista → consumidor")}
  </div>
  <div class="note"><h3>Se pueden eliminar los intermediarios, pero no sus funciones</h3>
    <p>Bajar costos tienta a eliminar distribuidores, pero alguien tendrá que hacer sus funciones: el productor o el consumidor final. Imagina un mundo sin supermercados, almacenes ni bombas de bencina.</p>
  </div>
  <div class="note wide"><h3>Funciones de los intermediarios del canal</h3>
    <dl class="kv">
      <dt>Para el productor: especialista en ventas</dt><dd>Entrega información de mercado, interpreta las necesidades de los consumidores, promociona, almacena, negocia con los consumidores, ofrece financiamiento, adquiere los productos y comparte los riesgos.</dd>
      <dt>Para el comprador: agente de compras</dt><dd>Anticipa las necesidades de compra, subdivide grandes cantidades, almacena, transporta, crea surtido y variedad, financia, asegura la disponibilidad, garantiza los productos y comparte los riesgos.</dd>
    </dl>
    ${fig("distribucion",8,"Funciones del intermediario para el productor y para el comprador")}
  </div>
  <div class="note wide"><h3>Tipo de canal</h3>
    <dl class="kv">
      <dt>Distribución directa</dt><dd>Solo productor y consumidor, sin intermediarios.</dd>
      <dt>Distribución indirecta</dt><dd>Hay al menos un intermediario.</dd>
    </dl>
    <p><b>Canales para bienes de consumo</b> (de productor a consumidor final):</p>
    <ol>
      <li>Directo: productor → consumidor.</li>
      <li>Productor → detallistas → consumidor.</li>
      <li>Productor → mayoristas → detallistas → consumidor.</li>
      <li>Productor → agentes → detallistas → consumidor.</li>
      <li>Productor → agentes → mayoristas → detallistas → consumidor.</li>
    </ol>
    ${fig("distribucion",10,"Cinco canales para bienes de consumo; el directo destacado en rojo")}
  </div>
  <div class="note wide"><h3>Estrategias de cobertura del mercado</h3>
    <dl class="kv">
      <dt>Intensiva</dt><dd>Máxima cobertura con el mayor número razonable de puntos de venta. <b>Riesgos:</b> altos costos de distribución, menor control sobre intermediarios y dificultad para mantener una imagen consistente.</dd>
      <dt>Selectiva</dt><dd>Número limitado de intermediarios elegidos por tamaño, calidad de servicio y capacidad técnica. Menores costos, más cooperación y más control sobre el posicionamiento.</dd>
      <dt>Exclusiva</dt><dd>Forma extrema de la selectiva: un solo distribuidor con derecho exclusivo, que suele comprometerse a no vender a la competencia. La usan empresas que compiten por liderazgo en diferenciación.</dd>
    </dl>
    <div class="figs">
      ${fig("distribucion",13,"De mayor cobertura (intensiva) a mayor control (exclusiva)")}
      ${fig("distribucion",14,"Comparación de estrategias: vendedores, canal, diferenciación, precio, frecuencia, contratos y exclusividad")}
    </div>
    <div class="mx">
      <div></div><div class="ax">Exclusiva</div><div class="ax">Intensiva</div>
      <div class="ax y">Intermediarios</div><div class="q"><b>1</b><span>canal corto</span></div><div class="q"><b>Muchos</b><span>canal largo</span></div>
      <div class="ax y">Precio y diferenciación</div><div class="q"><b>Altos</b><span>frecuencia de compra muy baja</span></div><div class="q"><b>Bajos</b><span>frecuencia de compra alta</span></div>
      <div class="ax y">Exclusividad de marca</div><div class="q"><b>Una marca</b><span>exigencias de contrato altas</span></div><div class="q"><b>Muchas marcas</b><span>exigencias de contrato bajas</span></div>
    </div>
    <p>La <b>selectiva</b> queda al medio: pocos vendedores, canal medio, diferenciación y precio medios, marcas preferentes (pocas), exigencias de contrato altas.</p>
  </div>
  <div class="note"><h3>Franquicia</h3>
    <p>Sistema contractual en que el <b>franquiciador</b> otorga al <b>franquiciado</b> el derecho de operar bajo su marca y modelo de negocio, en condiciones establecidas. Ej.: Subway, KFC, McDonald's, Dunkin', Domino's.</p>
    <dl class="kv">
      <dt>Marca</dt><dd>derecho de uso de la identidad comercial</dd>
      <dt>Know-how</dt><dd>transferencia de conocimientos y procedimientos</dd>
      <dt>Capacitación y asistencia</dt><dd>apoyo para implementar y operar</dd>
      <dt>Contraprestación</dt><dd>canon de entrada (fee) y/o regalías periódicas (royalties)</dd>
    </dl>
  </div>
  <div class="note wide"><h3>Push y pull: generar demanda con los intermediarios</h3>
    <dl class="kv">
      <dt>Push (presión)</dt><dd>La comunicación y promoción se dirigen a los <b>intermediarios</b> (venta personal, promoción comercial) para que incorporen, almacenen, exhiban y promuevan la marca; ellos a su vez la empujan al consumidor.</dd>
      <dt>Pull (aspiración)</dt><dd>La comunicación se dirige al <b>consumidor final</b> (publicidad, promoción de ventas); la demanda “tira” del canal y obliga a los intermediarios a ofrecer el producto.</dd>
    </dl>
    ${fig("distribucion",16,"Push: productor → intermediarios → consumidores. Pull: la demanda fluye del consumidor hacia el productor")}
  </div>
  <div class="note wide"><h3>Malls y locatarios: tres tensiones en Chile</h3>
    <dl class="kv">
      <dt>1. Rentabilidad</dt><dd>Ventas de locatarios −1,3% mientras los ingresos por arriendo suben +5,5%: los costos del canal pueden crecer aunque las ventas bajen. (The Clinic, 2026)</dd>
      <dt>2. Omnicanalidad</dt><dd>Mall + logística: los centros comerciales suman despacho y apoyo al e-commerce. (Diario Financiero, 2025)</dd>
      <dt>3. Contratos</dt><dd>Tienda ↔ online: la venta digital tensiona arriendos y obligaciones comerciales. (La Tercera, 2026)</dd>
    </dl>
    <p>Los canales se reconfiguran por el comercio electrónico, la integración física-digital y los nuevos hábitos de compra: delivery (Cornershop), compras desde el celular, tiendas físicas digitalizadas y despacho con drones.</p>
    ${fig("distribucion",18,"Rentabilidad, omnicanalidad y contratos")}
  </div>
  <div class="note"><h3>Criterios para elegir una red de distribución</h3>
    <dl class="kv">
      <dt>Mercado</dt><dd>Mercados grandes o dispersos favorecen intermediarios; compras pequeñas y demanda estacional favorecen canales largos.</dd>
      <dt>Producto</dt><dd>Sus condiciones físicas y técnicas influyen; los perecederos requieren canales cortos.</dd>
      <dt>Empresa</dt><dd>Tamaño y recursos financieros. Las grandes pueden distribuir directo o con intermediarios; las pequeñas dependen más de intermediarios.</dd>
    </dl>
  </div>`,
  cards:[
    ["Rol de la plaza","Facilitar la adquisición y el acceso de productos o servicios por parte del mercado objetivo."],
    ["Canal de distribución","Personas y/o empresas que participan en el traslado de la propiedad de un producto del productor al consumidor o usuario, sin modificarlo sustancialmente."],
    ["Intermediario","Empresa que presta servicios relacionados con la compra o venta de un producto en su paso del productor al consumidor."],
    ["Intermediario comerciante","Adquiere la propiedad del bien que ayuda a vender."],
    ["Agente intermediario","No adquiere la propiedad, pero participa en la venta (corredores de propiedades, agencias de viajes)."],
    ["¿Se pueden eliminar los intermediarios?","Sí, pero no sus funciones: alguien (productor o consumidor) tendrá que hacerlas."],
    ["Funciones del intermediario para el productor","Información de mercado, interpretar necesidades, promocionar, almacenar, negociar, financiar, adquirir y compartir riesgos."],
    ["Funciones del intermediario para el comprador","Anticipar necesidades, subdividir, almacenar, transportar, crear surtido, financiar, asegurar disponibilidad, garantizar y compartir riesgos."],
    ["Distribución directa vs. indirecta","Directa: sin intermediarios. Indirecta: al menos un intermediario."],
    ["Distribución intensiva","Máxima cobertura con muchos puntos de venta. Riesgos: costos altos, menos control, imagen inconsistente."],
    ["Distribución selectiva","Pocos intermediarios elegidos: menores costos, más cooperación y más control."],
    ["Distribución exclusiva","Un solo distribuidor con derecho exclusivo; típica de empresas que compiten por diferenciación."],
    ["Franquicia","El franquiciador cede al franquiciado el derecho a operar con su marca y modelo de negocio."],
    ["Elementos de una franquicia","Marca, know-how, capacitación y asistencia, y contraprestación (fee y royalties)."],
    ["Estrategia push","Comunicación y promoción dirigidas a los intermediarios para que empujen el producto."],
    ["Estrategia pull","Comunicación dirigida al consumidor final para que su demanda tire del canal."],
    ["Tensiones de malls en Chile","Rentabilidad (arriendos suben aunque las ventas bajan), omnicanalidad (mall + logística) y contratos (tienda vs. online)."],
    ["Criterios para elegir la red","Características del mercado, del producto y de la empresa."],
    ["Productos perecederos","Requieren canales preferentemente cortos."]
  ],
  quiz:[
    {q:"¿Cuál es el rol de la plaza en el mix comercial?",o:["Facilitar la adquisición y el acceso al producto","Fijar el precio","Comunicar los beneficios","Diseñar el producto"],w:"La distribución facilita la adquisición y el acceso."},
    {q:"En un canal de distribución, el producto…",o:["No se modifica sustancialmente","Se transforma en cada etapa","Cambia de marca","Se fabrica de nuevo"],w:"Se traslada la propiedad sin modificar sustancialmente el producto."},
    {q:"Un corredor de propiedades que no compra la casa pero ayuda a venderla es un…",o:["Agente intermediario","Intermediario comerciante","Mayorista","Franquiciado"],w:"El agente no adquiere la propiedad del bien."},
    {q:"Un supermercado que compra productos para revenderlos es un…",o:["Intermediario comerciante","Agente intermediario","Productor","Corredor"],w:"El comerciante adquiere la propiedad."},
    {q:"“Se pueden eliminar los intermediarios, pero no…”",o:["…sus funciones","…sus costos","…sus marcas","…sus contratos"],w:"Alguien tendrá que hacer sus funciones."},
    {q:"Crear surtido y variedad es una función del intermediario para…",o:["El comprador","El productor","El gobierno","La competencia"],w:"Como agente de compras, crea surtido para el comprador."},
    {q:"Entregar información de mercado e interpretar necesidades es una función para…",o:["El productor","El comprador","El franquiciado","El minorista"],w:"Como especialista en ventas, sirve al productor."},
    {q:"Un canal sin intermediarios es distribución…",o:["Directa","Indirecta","Selectiva","Intensiva"],w:"Directa: productor y consumidor."},
    {q:"Buscar la máxima cobertura con el mayor número de puntos de venta es distribución…",o:["Intensiva","Selectiva","Exclusiva","Directa"],w:"Intensiva."},
    {q:"Un riesgo de la distribución intensiva es…",o:["Dificultad para mantener una imagen consistente","Cobertura muy limitada","Depender de un solo distribuidor","Precios muy altos"],w:"Costos altos, menos control e imagen inconsistente."},
    {q:"La forma extrema de la distribución selectiva es la…",o:["Exclusiva","Intensiva","Directa","Franquicia"],w:"Un solo distribuidor con derecho exclusivo."},
    {q:"En la distribución exclusiva, la frecuencia de compra en el punto de venta es…",o:["Muy baja","Alta","Media","Indiferente"],w:"Exclusiva: muy baja · selectiva: media · intensiva: alta."},
    {q:"En la distribución intensiva, el canal suele ser…",o:["Largo","Corto","Medio","Directo"],w:"Exclusiva: corto · selectiva: medio · intensiva: largo."},
    {q:"El pago periódico que hace el franquiciado al franquiciador se llama…",o:["Royalty (regalía)","Fee de entrada","Margen","Comisión de agente"],w:"Fee = canon de entrada; royalties = pagos periódicos."},
    {q:"Dirigir la promoción a los intermediarios para que exhiban y promuevan el producto es una estrategia…",o:["Push","Pull","Intensiva","Directa"],w:"Push = empujar a través del canal."},
    {q:"Una gran campaña de TV para que los consumidores pidan el producto en las tiendas es una estrategia…",o:["Pull","Push","Selectiva","Exclusiva"],w:"Pull: la demanda del consumidor tira del canal."},
    {q:"Según los datos de malls en Chile, mientras las ventas de locatarios bajaron 1,3%, los ingresos por arriendo…",o:["Subieron 5,5%","Bajaron 5,5%","Se mantuvieron","Subieron 1,3%"],w:"Los costos del canal pueden crecer aunque las ventas retrocedan."},
    {q:"Los productos perecederos requieren canales…",o:["Preferentemente cortos","Largos","Exclusivos","Con muchos agentes"],w:"Lo perecible necesita llegar rápido."}
  ],
  pairs:[
    ["Agente intermediario","No adquiere la propiedad"],["Intermediario comerciante","Adquiere la propiedad"],["Distribución directa","Sin intermediarios"],
    ["Distribución intensiva","Máxima cobertura"],["Distribución selectiva","Pocos intermediarios elegidos"],["Distribución exclusiva","Un solo distribuidor"],
    ["Push","Promoción a los intermediarios"],["Pull","Promoción al consumidor final"],["Royalty","Pago periódico al franquiciador"],
    ["Know-how","Transferencia de conocimientos"],["Omnicanalidad","Mall + logística"],["Franquiciador","Cede su marca y modelo"]
  ],
  order:[
    {t:"Canal largo de bienes de consumo",i:["Productor","Agentes","Mayoristas","Detallistas","Consumidor final"]},
    {t:"Estrategias de cobertura: de mayor cobertura a mayor control",i:["Intensiva","Selectiva","Exclusiva"]},
    {t:"Ejemplo de canal de los muebles",i:["Aserradero","Corredor o dealer","Fabricante de muebles","Mueblería","Consumidor"]}
  ],
  sort:[
    {t:"Estrategias de cobertura",b:["Intensiva","Selectiva","Exclusiva"],i:[["Muchos intermediarios",0],["Canal largo",0],["Muchas marcas en el punto de venta",0],["Bebidas en todos los almacenes",0],["Pocos intermediarios elegidos",1],["Marcas preferentes",1],["Un solo distribuidor",2],["Una marca en el punto de venta",2],["Precio alto y diferenciación alta",2]]},
    {t:"Funciones del intermediario",b:["Para el productor","Para el comprador"],i:[["Entrega información de mercado",0],["Interpreta necesidades",0],["Promociona los productos",0],["Negocia con los consumidores",0],["Anticipa necesidades de compra",1],["Subdivide grandes cantidades",1],["Crea surtido y variedad",1],["Garantiza los productos",1]]},
    {t:"¿Push o pull?",b:["Push","Pull"],i:[["Incentivos a los vendedores de la tienda",0],["Promoción comercial a mayoristas",0],["Descuento por exhibir el producto",0],["Publicidad en TV para el consumidor",1],["Cupones para el consumidor final",1],["Campaña en redes sociales",1]]}
  ]
});
