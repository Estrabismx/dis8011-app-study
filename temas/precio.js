/* Pasillo 10 · Precio */
T.push({
  id:"precio", n:10, name:"Precio", color:"var(--t-precio)",
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
    <p>El <b>ingreso total</b> es precio × cantidad: <span class="formula">Y = P × Q</span></p>
  </div>
  <div class="note wide"><h3>Demanda elástica e inelástica</h3>
    <p>Se baja el precio de P1 a P2 y la cantidad sube de Q1 a Q2. Se comparan los ingresos Y1 = P1 × Q1 e Y2 = P2 × Q2:</p>
    <div class="mx">
      <div></div><div class="ax">Demanda elástica</div><div class="ax">Demanda inelástica</div>
      <div class="ax y">Resultado</div><div class="q"><b>Y1 &lt; Y2</b><span>Bajar el precio aumenta los ingresos totales (o viceversa).</span></div><div class="q"><b>Y1 &gt; Y2</b><span>Bajar el precio disminuye los ingresos totales (o viceversa).</span></div>
      <div class="ax y">Curva</div><div class="q"><span>Poco inclinada: un pequeño cambio de precio mueve mucho la cantidad.</span></div><div class="q"><span>Muy inclinada: un gran cambio de precio mueve poco la cantidad.</span></div>
    </div>
    <div class="figs">
      ${fig("precio",12,"Demanda elástica: el área de ingreso Y2 es mayor que Y1")}
      ${fig("precio",13,"Demanda inelástica: el área de ingreso Y1 es mayor que Y2")}
    </div>
  </div>
  <div class="note wide"><h3>Tipos de elasticidad</h3>
    <dl class="kv">
      <dt>Perfectamente inelástica</dt><dd>Elasticidad = 0. Curva vertical: la cantidad no cambia aunque cambie el precio.</dd>
      <dt>Inelástica</dt><dd>Elasticidad &lt; 1. La cantidad cambia proporcionalmente menos que el precio.</dd>
      <dt>Unitaria</dt><dd>Elasticidad = 1. La cantidad cambia en la misma proporción que el precio.</dd>
      <dt>Elástica</dt><dd>Elasticidad &gt; 1. La cantidad cambia proporcionalmente más que el precio.</dd>
      <dt>Perfectamente elástica</dt><dd>Elasticidad = ∞. Curva horizontal: a ese precio se vende cualquier cantidad.</dd>
    </dl>
    ${fig("precio",14,"Los cinco tipos de elasticidad con su curva de demanda")}
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
    ${fig("precio",21,"Con el mismo precio P0, la demanda se desplaza de A a B (curva Demanda′)")}
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
    ["Ingreso total","Y = P × Q (precio por cantidad)."],
    ["Demanda elástica","Bajar el precio aumenta los ingresos totales: Y1 < Y2. Elasticidad mayor que 1."],
    ["Demanda inelástica","Bajar el precio disminuye los ingresos totales: Y1 > Y2. Elasticidad menor que 1."],
    ["Demanda perfectamente inelástica","Elasticidad = 0: curva vertical, la cantidad no cambia con el precio."],
    ["Demanda de elasticidad unitaria","Elasticidad = 1: la cantidad cambia en la misma proporción que el precio."],
    ["Demanda perfectamente elástica","Elasticidad = ∞: curva horizontal en un precio dado."],
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
    {q:"Si al bajar el precio los ingresos totales aumentan, la demanda es…",o:["Elástica","Inelástica","Perfectamente inelástica","Unitaria"],w:"Elástica: Y1 < Y2."},
    {q:"Si al bajar el precio los ingresos totales disminuyen, la demanda es…",o:["Inelástica","Elástica","Perfectamente elástica","Unitaria"],w:"Inelástica: Y1 > Y2."},
    {q:"Una curva de demanda vertical corresponde a elasticidad…",o:["Igual a 0 (perfectamente inelástica)","Igual a 1","Mayor que 1","Infinita"],w:"Vertical: la cantidad no cambia con el precio."},
    {q:"Una curva de demanda horizontal corresponde a elasticidad…",o:["Infinita (perfectamente elástica)","Igual a 0","Igual a 1","Menor que 1"],w:"Horizontal: elasticidad = ∞."},
    {q:"¿Cómo se calcula el ingreso total?",o:["Precio × cantidad","Precio − costo","Cantidad ÷ precio","Utilidad + costo"],w:"Y = P × Q."},
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
    ["Elasticidad = 0","Curva vertical"],["Elasticidad = ∞","Curva horizontal"],["Elasticidad = 1","Cambio proporcional"],
    ["Elasticidad","Efecto del precio en unidades e ingresos"],["Desc. por cantidad","Rebaja por comprar más volumen"],
    ["Desc. acumulativo","Puntos o kilómetros en un período"],["Desc. comercial","Según la posición en la cadena"],
    ["Desc. pronto pago","2% si pagas antes de 10 días"],["Desc. estacional","Hotel en temporada baja"],
    ["Descreme","Precio alto al lanzar"],["Masiva","Precio bajo para el mercado masivo"],
    ["Un precio","Mismo precio para todos"],["Precio flexible","Varía por negociación: autos, pasajes"],
    ["Precio líder","Rebajar lo más demandado para atraer"],["Precio impar","$9.990 sugiere precio menor"],
    ["Inst. del vendedor","El comprador paga el transporte"],["Inst. del comprador","El vendedor absorbe el flete"]
  ],
  order:[
    {t:"Elasticidad: de la menos a la más elástica",i:["Perfectamente inelástica","Inelástica","Unitaria","Elástica","Perfectamente elástica"]}
  ],
  sort:[
    {t:"¿Demanda elástica o inelástica?",b:["Elástica","Inelástica"],i:[["Y1 < Y2",0],["Bajar el precio sube los ingresos",0],["Elasticidad mayor que 1",0],["Curva poco inclinada",0],["Y1 > Y2",1],["Bajar el precio baja los ingresos",1],["Elasticidad menor que 1",1],["Curva muy inclinada",1]]},
    {t:"Tipos de descuento",b:["Cantidad","Acumulativo","Comercial","Pronto pago","Estacional"],i:[["Lleva 3 y paga menos por unidad",0],["Rebaja por comprar mayor volumen o monto",0],["Puntos canjeables en el supermercado",1],["Kilómetros de aerolínea",1],["Precio menor al distribuidor mayorista",2],["Rebaja según la posición en la cadena de distribución",2],["2% si pagas antes de 10 días",3],["1% si pagas entre 10 y 20 días",3],["Hotel más barato en temporada baja",4],["Pasajes rebajados en meses de baja demanda",4]]},
    {t:"¿Descreme o masiva?",b:["Descreme","Masiva"],i:[["Precio alto en el rango esperado",0],["Competencia mínima al inicio",0],["Segmento que responde a los atributos",0],["Hay rango de corrección a la baja",0],["Precio inicial bajo",1],["Demanda muy elástica",1],["Economías de escala en la producción",1],["Se espera fuerte competencia pronto",1]]},
    {t:"Estrategias de precio",b:["Un precio","Precio flexible","Precio líder","Precio impar"],i:[["El mismo precio para todos los compradores",0],["Sin diferencias entre clientes que compran lo mismo",0],["Negociar el precio de una propiedad",1],["Pasajes que cambian según el momento de compra",1],["Rebajar el azúcar bajo costo para atraer clientes",2],["Producto rebajado que atrae a comprar otros",2],["$19.990 en vez de $20.000",3],["Las tiendas de prestigio lo evitan",3]]},
    {t:"¿Basada o no basada en el precio?",b:["Basada en el precio","No basada en el precio"],i:[["Precios lo más bajos posibles como estrategia central",0],["Bajar el precio para defender participación",0],["Responder a una rebaja de la competencia",0],["Mantener precios estables",1],["Diferenciar por calidad de servicio",1],["Desplazar la curva de demanda con publicidad",1]]}
  ]
});
