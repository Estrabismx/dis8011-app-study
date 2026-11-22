/* Pasillo 6 · Producto (partes 1 y 2) */
T.push({
  id:"producto", n:6, name:"Producto", color:"var(--t-producto)",
  tagline:"Qué es un producto, niveles, diferenciación, productos vs. servicios, clasificación B2C y B2B, y jerarquía de productos.",
  wiki:"Producto (marketing)", refs:[
    ["satisfactor|atributos tangibles|lugar, una persona","Producto (marketing)","¿Qué es un producto?"],
    ["básico|real|aumentado|niveles","Producto (marketing)","Niveles de producto"],
    ["commodit|indiferencia|diferenciación","Diferenciación de producto","Diferenciación y valor"],
    ["Pine|Gilmore|experiencia|transformaci|Starbucks|Nespresso","Economía de la experiencia","Evolución del valor"],
    ["sensaciones|emociones|pensamientos","Experiencia del cliente","¿Qué son las experiencias?"],
    ["nórdica|Gummesson|inseparab|perecibl|heterogen|tangible","Marketing de servicios","Productos y servicios"],
    ["conveniencia|selección|especialidad|no buscados","Bienes de consumo","Bienes de consumo"],
    ["materias primas|materiales|partes|instalaciones|equipamiento|accesorio|insumos","Bienes industriales","Bienes de negocios"],
    ["venta directa|estandarizad|negociado|fuerza de ventas","Mercadotecnia industrial","Estrategias comerciales diferenciadas"],
    ["familia|clase|línea|tipo de producto|artículo|jerarquía","Mezcla de productos","Jerarquía de productos"],
    ["ancho|extensión|profundidad|consistencia|amplitud|mezcla","Mezcla de productos","Mezcla de productos"]
  ],
  notes:`
  <div class="note"><h3>¿Qué es un producto?</h3>
    <p>Un grupo de <b>atributos tangibles e intangibles</b>: envase, color, precio, calidad y marca, más los servicios (y eventualmente otros productos) y la reputación del vendedor.</p>
    <p>Puede ser un bien tangible, un servicio, un lugar, una persona o una idea.</p>
    <span class="formula">En simple: un producto es un satisfactor</span>
  </div>
  <div class="note"><h3>Niveles de producto</h3>
    <dl class="kv">
      <dt>Producto básico</dt><dd>¿Qué está adquiriendo realmente el comprador? Los beneficios básicos que satisfacen la necesidad.</dd>
      <dt>Producto real</dt><dd>El beneficio hecho producto: marca, variables, nivel de calidad, diseño y empaque.</dd>
      <dt>Producto aumentado</dt><dd>Servicios y beneficios adicionales: entrega y crédito, servicio posventa, instalación, garantía.</dd>
    </dl>
    ${fig("producto",4,"Tres círculos concéntricos: básico, real y aumentado (ejemplo: una lavadora)")}
  </div>
  <div class="note"><h3>Diferenciación y valor</h3>
    <p>A mayor diferenciación, mayor precio posible. La escalera va de la <b>indiferencia</b> (precio base) a la <b>diferenciación</b> (precio mayor):</p>
    <div class="flow"><span>Commodities</span><i>→</i><span>Productos</span><i>→</i><span>Servicios</span><i>→</i><span>Experiencias</span><i>→</i><span>¿?</span></div>
    ${fig("producto",3,"Escalera de diferenciación vs. precio")}
    <p>Ejemplos de diferenciación: pan multigrano con masa madre, sal de mar en doypack, huevos de gallinas libres. Y a veces <b>basta con hacer lo básico, bien hecho</b> (lápiz Bic, fósforos Copihue).</p>
  </div>
  <div class="note"><h3>Evolución del valor</h3>
    <p>Basado en Pine & Gilmore (1998), con el ejemplo del café:</p>
    <dl class="kv">
      <dt>1900s · Materias primas</dt><dd>Extraer (granos de café).</dd>
      <dt>1920s · Productos</dt><dd>Fabricar (Nescafé).</dd>
      <dt>1950s · Servicios</dt><dd>Servir (cafetería).</dd>
      <dt>1980s · Experiencias</dt><dd>Poner en escena (Starbucks).</dd>
      <dt>2010s · Transformaciones</dt><dd>Acompañar y guiar (Nespresso).</dd>
    </dl>
    ${fig("producto",9,"Evolución del valor con el ejemplo del café")}
  </div>
  <div class="note wide"><h3>Productos y servicios</h3>
    <dl class="kv">
      <dt>Naturaleza</dt><dd><b>Producto:</b> tangible, se puede ver, tocar y almacenar. <b>Servicio:</b> intangible, son experiencias o resultados.</dd>
      <dt>Producción y consumo</dt><dd><b>Producto:</b> separados, se produce antes. <b>Servicio:</b> simultáneos.</dd>
      <dt>Estandarización</dt><dd><b>Producto:</b> más fácil mantener calidad constante. <b>Servicio:</b> variable según quién, cuándo y cómo (heterogeneidad).</dd>
      <dt>Almacenamiento</dt><dd><b>Producto:</b> se guarda en inventario. <b>Servicio:</b> no se almacena (perecible).</dd>
      <dt>Propiedad</dt><dd><b>Producto:</b> se adquiere un objeto. <b>Servicio:</b> se usa temporalmente, sin transferir propiedad.</dd>
      <dt>Participación del cliente</dt><dd><b>Producto:</b> limitada. <b>Servicio:</b> alta, el cliente coproduce.</dd>
      <dt>Evaluación previa</dt><dd><b>Producto:</b> antes de comprar (auto, celular). <b>Servicio:</b> durante o después (atención médica, hotel).</dd>
    </dl>
    <blockquote>No hay producto sin servicio, ni servicio sin producto.<cite>Escuela Nórdica del Marketing de Servicios (Gummesson, Lehtinen y Lovelock), años 80</cite></blockquote>
    <p>Principio de <b>inseparabilidad funcional</b>: todo producto incorpora servicio (garantía, atención, entrega, soporte) y todo servicio se apoya en algo físico o técnico.</p>
    <blockquote>El cliente que se va por precio volverá por servicio. El que se va por servicio no volverá por ningún precio.</blockquote>
  </div>
  <div class="note"><h3>¿Qué son las experiencias?</h3>
    <p>No son datos empíricos: son un <b>fenómeno subjetivo</b> con 3 ingredientes:</p>
    <div class="flow"><span>Sensaciones</span><i>+</i><span>Emociones</span><i>+</i><span>Pensamientos</span></div>
    <p>Todo lo que percibo (calor, placer, tensión), lo que siento (amor, temor, ira) y lo que pienso en ese momento.</p>
  </div>
  <div class="note"><h3>Clasificación de productos</h3>
    <p>Según su <b>uso final</b>:</p>
    <dl class="kv">
      <dt>De consumo (B2C)</dt><dd>Para hogares, con fines no comerciales.</dd>
      <dt>De negocios (B2B)</dt><dd>Para producir otros productos o prestar servicios.</dd>
    </dl>
    <p>Un mismo producto puede estar en ambas según su uso; lo relevante es que va a un mercado distinto y requiere estrategias distintas.</p>
  </div>
  <div class="note wide"><h3>Bienes de consumo</h3>
    <p>Se clasifican según el <b>comportamiento de compra</b> (tiempo y esfuerzo), no según el tipo de producto.</p>
    <dl class="kv">
      <dt>De conveniencia</dt><dd>Se conocen antes de comprar y se compran con mínimo esfuerzo. Precio bajo, marcas menos importantes, necesitan amplia distribución. Ej.: compras de supermercado.</dd>
      <dt>De selección</dt><dd>Se comparan calidad, precio y estilo; el cliente hace un esfuerzo de búsqueda. Requieren menos detallistas. Ej.: electrodomésticos, ropa, un auto pequeño.</dd>
      <dt>De especialidad</dt><dd>Fuerte preferencia de marca; se dedica tiempo y esfuerzo especial y se renuncia a sustitutos. Pocos puntos de venta. Ej.: Louis Vuitton, relojes de lujo, autos deportivos.</dd>
      <dt>No buscados</dt><dd>No se conocen o no se piensa en comprarlos. Exigen mucha publicidad y venta personal. Ej.: servicios funerarios, seguros de vida, detectores de humo, productos nuevos.</dd>
    </dl>
  </div>
  <div class="note wide"><h3>Bienes de negocios o industriales</h3>
    <dl class="kv">
      <dt>Materias primas</dt><dd>Forman parte completa del producto: bienes en estado natural (minerales, arena, productos forestales y del mar) y productos agrícolas (algodón, frutas, leche sin procesar).</dd>
      <dt>Materiales y partes</dt><dd><b>Materiales:</b> ya procesados, se convierten en parte del producto (láminas de acero, hilo, harina, cemento). <b>Partes:</b> se ensamblan sin cambiar su forma.</dd>
      <dt>Instalaciones y equipamiento</dt><dd><b>Instalaciones:</b> edificios, galpones, fábricas. <b>Equipamiento:</b> compras mayores de larga vida útil que conforman la cadena productiva.</dd>
      <dt>Equipo accesorio, insumos y servicios</dt><dd><b>Accesorio:</b> equipamiento menor (herramientas, montacargas, computadores). <b>Insumos y servicios:</b> corta vida y uso intensivo (lubricantes, lápices, tóner, limpieza, seguridad). Son los “bienes de conveniencia” del mercado de negocios.</dd>
    </dl>
  </div>
  <div class="note wide"><h3>Estrategias comerciales diferenciadas (B2B)</h3>
    <dl class="kv">
      <dt>Materias primas</dt><dd><b>Producto:</b> muy estandarizado, baja diferenciación. <b>Precio:</b> lo fija el mercado; se compite por precio. <b>Plaza:</b> venta directa; transporte y logística críticos. <b>Promoción:</b> escasa publicidad y baja fidelidad de marca.</dd>
      <dt>Materiales y partes</dt><dd><b>Producto:</b> estandarizado; en partes la marca puede importar (Intel). <b>Precio:</b> relevante, junto al servicio del proveedor. <b>Plaza:</b> directa o vía grandes distribuidores. <b>Promoción:</b> venta personal.</dd>
      <dt>Instalaciones y equipamiento</dt><dd><b>Producto:</b> complejo y adaptado al cliente; posventa importante. <b>Precio:</b> negociado. <b>Plaza:</b> venta directa. <b>Promoción:</b> fuerza de ventas especializada y negociación prolongada.</dd>
      <dt>Accesorios, insumos y servicios</dt><dd><b>Producto:</b> calidad, técnica y servicio diferencian. <b>Precio:</b> relevante junto a calidad y servicio. <b>Plaza:</b> intermediarios especializados. <b>Promoción:</b> fuerza de ventas y contacto personal.</dd>
    </dl>
    ${fig("producto",26,"Estrategias del mix según el tipo de bien de negocios")}
  </div>
  <div class="note"><h3>Mezcla de productos</h3>
    <dl class="kv">
      <dt>Mezcla</dt><dd>Todos los productos que vende una compañía.</dd>
      <dt>Línea</dt><dd>Productos muy relacionados: funcionan similar, mismos clientes, mismas tiendas o rango de precios.</dd>
      <dt>Tipo</dt><dd>Artículos de una línea que comparten alguna forma del producto.</dd>
      <dt>Artículo</dt><dd>Unidad distintiva por tamaño, precio, apariencia… (unidad de inventario).</dd>
    </dl>
    <p><b>Estructura:</b> ancho (n.º de líneas), extensión (total de artículos por línea), profundidad (versiones de cada producto) y consistencia (relación entre líneas).</p>
  </div>
  <div class="note wide"><h3>Jerarquía de productos</h3>
    <div class="flow"><span>Familia de necesidades</span><i>→</i><span>Familia de producto</span><i>→</i><span>Clase</span><i>→</i><span>Línea</span><i>→</i><span>Tipo</span><i>→</i><span>Artículo</span></div>
    <p><b>Ejemplo higiene bucal:</b> Salud (necesidad) → Higiene (familia) → Higiene bucal (clase) → cepillos, pastas, enjuagues, seda dental (líneas) → cepillo sensible, normal o eléctrico (tipos) → colores, formatos y tamaños (artículos). Mientras más se baja, más específico.</p>
    <div class="figs">
      ${fig("producto",31,"Pirámide de la jerarquía de productos")}
      ${fig("producto",34,"Ejemplo de jerarquía con productos de higiene bucal")}
    </div>
  </div>`,
  cards:[
    ["Producto","Grupo de atributos tangibles e intangibles (envase, color, precio, calidad, marca, servicios y reputación del vendedor). En simple: un satisfactor."],
    ["¿Qué puede ser un producto?","Un bien tangible, un servicio, un lugar, una persona o una idea."],
    ["Producto básico","Lo que el comprador adquiere realmente: el beneficio básico que satisface la necesidad."],
    ["Producto real","El beneficio convertido en producto: marca, variables, calidad, diseño y empaque."],
    ["Producto aumentado","Servicios y beneficios adicionales: entrega, crédito, posventa, instalación, garantía."],
    ["Escalera de diferenciación","Commodities → productos → servicios → experiencias → ¿? A más diferenciación, mayor precio."],
    ["Evolución del valor (Pine & Gilmore)","Materias primas (extraer) → productos (fabricar) → servicios (servir) → experiencias (poner en escena) → transformaciones (guiar)."],
    ["Ingredientes de una experiencia","Sensaciones, emociones y pensamientos: es un fenómeno subjetivo."],
    ["Escuela Nórdica de servicios","“No hay producto sin servicio, ni servicio sin producto” (Gummesson, Lehtinen y Lovelock)."],
    ["Servicio vs. producto","El servicio es intangible, simultáneo, heterogéneo, perecible, sin transferencia de propiedad y coproducido por el cliente."],
    ["Bienes de conveniencia","Se compran con mínimo esfuerzo, precio bajo, marca poco relevante y amplia distribución."],
    ["Bienes de selección","Se comparan calidad, precio y estilo antes de comprar."],
    ["Bienes de especialidad","Fuerte preferencia de marca; se renuncia a sustitutos y se hace un esfuerzo especial."],
    ["Bienes no buscados","No se conocen o no se piensa comprarlos (seguros de vida, servicios funerarios). Requieren mucha promoción."],
    ["Bienes de negocios","Materias primas, materiales y partes, instalaciones y equipamiento, y equipo accesorio, insumos y servicios."],
    ["Materias primas","Bienes en estado natural o agrícolas que forman parte completa del producto."],
    ["Materiales vs. partes","Materiales: ya procesados (acero, harina). Partes: se ensamblan sin cambiar su forma."],
    ["Insumos y servicios (B2B)","Corta vida y uso intensivo (lubricantes, tóner, limpieza): los bienes de conveniencia del mercado de negocios."],
    ["Estrategia para materias primas","Estandarizadas, precio de mercado, venta directa con logística crítica, escasa publicidad."],
    ["Estrategia para instalaciones y equipamiento","Productos complejos adaptados, precio negociado, venta directa y fuerza de ventas especializada."],
    ["Jerarquía de productos","Familia de necesidades → familia de producto → clase → línea → tipo → artículo."],
    ["Estructura de la mezcla","Ancho (líneas), extensión (artículos por línea), profundidad (versiones) y consistencia (relación entre líneas)."]
  ],
  quiz:[
    {q:"En simple, ¿qué es un producto?",o:["Un satisfactor","Un bien físico","Una marca","Un envase"],w:"Puede ser bien, servicio, lugar, persona o idea: algo que satisface."},
    {q:"La garantía, la instalación y el servicio posventa forman parte del producto…",o:["Aumentado","Básico","Real","Genérico"],w:"El producto aumentado suma servicios y beneficios adicionales."},
    {q:"La marca, el diseño y el empaque pertenecen al producto…",o:["Real","Básico","Aumentado","Potencial"],w:"El producto real convierte el beneficio en un producto concreto."},
    {q:"En la escalera de diferenciación, ¿qué está sobre los servicios?",o:["Experiencias","Commodities","Productos","Materias primas"],w:"Commodities → productos → servicios → experiencias."},
    {q:"Según Pine & Gilmore, Starbucks representa la etapa de…",o:["Experiencias","Servicios","Productos","Transformaciones"],w:"Experiencias: poner en escena (1980s)."},
    {q:"¿Cuáles son los 3 ingredientes de una experiencia?",o:["Sensaciones, emociones y pensamientos","Precio, plaza y promoción","Producto, servicio y marca","Atención, interés y deseo"],w:"Es un fenómeno subjetivo con esos tres ingredientes."},
    {q:"“No hay producto sin servicio, ni servicio sin producto” proviene de…",o:["La Escuela Nórdica de servicios","Kotler & Keller","Pine & Gilmore","Al Ries & Jack Trout"],w:"Gummesson, Lehtinen y Lovelock, años 80."},
    {q:"Que un servicio no se pueda guardar en inventario significa que es…",o:["Perecible","Tangible","Heterogéneo","Estandarizado"],w:"Los servicios no se almacenan: son perecibles."},
    {q:"Que la calidad de un servicio dependa de quién, cuándo y cómo se presta se llama…",o:["Heterogeneidad","Perecibilidad","Tangibilidad","Inseparabilidad"],w:"Heterogeneidad (variabilidad)."},
    {q:"Comprar pan y leche en el supermercado, sin comparar marcas, es un bien de…",o:["Conveniencia","Selección","Especialidad","No buscado"],w:"Mínimo esfuerzo, precio bajo y marca poco relevante."},
    {q:"Comparar refrigeradores en varias tiendas por calidad, precio y estilo es un bien de…",o:["Selección","Conveniencia","Especialidad","No buscado"],w:"En los bienes de selección se comparan opciones."},
    {q:"Un seguro de vida o un servicio funerario son bienes…",o:["No buscados","De conveniencia","De selección","De especialidad"],w:"No se conocen o no se piensa en comprarlos."},
    {q:"Un reloj de lujo por el que el cliente renuncia a cualquier sustituto es un bien de…",o:["Especialidad","Selección","Conveniencia","No buscado"],w:"Fuerte preferencia de marca y esfuerzo especial."},
    {q:"La subdivisión de bienes de consumo se basa en…",o:["El comportamiento de compra (tiempo y esfuerzo)","El tipo de producto","El precio","El canal de venta"],w:"Se basa en cómo compra el consumidor, no en el tipo de producto."},
    {q:"La harina y las láminas de acero son…",o:["Materiales","Materias primas","Insumos","Equipamiento"],w:"Ya recibieron procesamiento: son materiales."},
    {q:"Lubricantes, tóner y servicios de limpieza son, en B2B…",o:["Insumos y servicios","Materiales y partes","Instalaciones","Materias primas"],w:"Son los bienes de conveniencia del mercado de negocios."},
    {q:"En B2B, ¿qué bien suele tener precio negociado y fuerza de ventas especializada?",o:["Instalaciones y equipamiento","Materias primas","Insumos","Materiales"],w:"Productos complejos, adaptados al cliente, con negociación prolongada."},
    {q:"En las materias primas, el precio lo determina principalmente…",o:["La oferta y la demanda del mercado","La marca","La negociación individual","La publicidad"],w:"Son estandarizadas: se compite por precio."},
    {q:"En la jerarquía de productos, “higiene bucal” es una…",o:["Clase de producto","Familia de necesidades","Línea de producto","Artículo"],w:"Salud → Higiene → Higiene bucal (clase) → Cepillos (línea)…"}
  ],
  pairs:[
    ["Producto básico","Beneficio que satisface la necesidad"],["Producto real","Marca, diseño y empaque"],["Producto aumentado","Garantía, instalación y posventa"],
    ["Conveniencia","Mínimo esfuerzo de compra"],["Selección","Se comparan calidad, precio y estilo"],["Especialidad","Fuerte preferencia de marca"],["No buscados","No se piensa en comprarlos"],
    ["Materias primas","Bienes en estado natural o agrícolas"],["Materiales","Ya procesados: acero, harina"],["Insumos","Corta vida y uso intensivo"],
    ["Perecible","El servicio no se almacena"],["Starbucks","Etapa de experiencias"]
  ],
  order:[
    {t:"Escalera de diferenciación: de la indiferencia a la diferenciación",i:["Commodities","Productos","Servicios","Experiencias"]},
    {t:"Evolución del valor (Pine & Gilmore)",i:["Materias primas","Productos","Servicios","Experiencias","Transformaciones"]},
    {t:"Niveles de producto: del centro hacia afuera",i:["Producto básico","Producto real","Producto aumentado"]},
    {t:"Jerarquía de productos",i:["Familia de necesidades","Familia de producto","Clase de producto","Línea de producto","Tipo de producto","Artículo"]}
  ],
  sort:[
    {t:"Bienes de consumo",b:["Conveniencia","Selección","Especialidad","No buscados"],i:[["Pan y leche",0],["Fósforos",0],["Detergente del supermercado",0],["Hervidor eléctrico",1],["Ropa comparada en varias tiendas",1],["Auto pequeño",1],["Cartera Louis Vuitton",2],["Reloj de lujo",2],["Auto deportivo",2],["Seguro de vida",3],["Servicio funerario",3],["Detector de humo",3]]},
    {t:"Bienes de negocios",b:["Materias primas","Materiales y partes","Instalaciones y equipamiento","Accesorios e insumos"],i:[["Minerales",0],["Algodón",0],["Leche sin procesar",0],["Cemento",1],["Láminas de acero",1],["Procesador Intel",1],["Fábrica",2],["Avión comercial",2],["Línea de montaje",2],["Herramientas manuales",3],["Tóner",3],["Servicio de limpieza",3]]},
    {t:"¿Producto o servicio?",b:["Producto","Servicio"],i:[["Se puede almacenar",0],["Se produce antes de consumirse",0],["Se evalúa antes de comprar",0],["Se adquiere la propiedad",0],["Se produce y consume a la vez",1],["Es perecible",1],["El cliente lo coproduce",1],["Calidad variable (heterogénea)",1]]}
  ]
});
