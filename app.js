/**
 * Nelson Notario — Portafolio Profesional
 * Interactive 3D Canvas Engine, High-Impact Product Previews, 3D Tilt & Modal Handlers
 */

const projects = [
  {
    id: 'scoring',
    name: 'Validación Digital de Suscripciones (Scoring)',
    cat: ['calidad', 'automatizacion'],
    label: 'Calidad · Automatización',
    summary: 'Digitalización del control comercial para validar la comprensión contractual de clientes de planes de ahorro.',
    problem: 'Dar continuidad al control comercial ante limitaciones operativas del call center tradicional, asegurando que el cliente comprenda las pautas de adjudicación, licitación y variación de cuotas.',
    solution: 'Encuesta web estructurada paso a paso con validaciones en tiempo real, detección de dudas y derivación automática de alertas para recontacto preventivo de supervisión.',
    role: 'Identificación de la necesidad operativa, redacción de preguntas de control y desarrollo frontend con asistencia de herramientas de IA (Codex / Claude). En uso operativo.',
    result: 'Digitalización del 100% de las validaciones, acelerando los tiempos de verificación y reduciendo la tasa de reclamos por desinformación.',
    statusBadge: 'En uso operativo',
    repo: 'https://github.com/nelsoncalidad15-ops/encuestas-scoring',
    demo: 'scoring',
    demoUrl: 'demos/scoring.html'
  },
  {
    id: 'tablero',
    name: 'Tablero de Control de Calidad y Scoring',
    cat: ['calidad', 'automatizacion'],
    label: 'Calidad · Datos · Gestión',
    summary: 'Dashboard analítico para consulta y seguimiento de indicadores de calidad, comprensión y scoring en ventas y posventa.',
    problem: 'Dispersión de información de encuestas y necesidad de la gerencia de visualizar en tiempo real los resultados por sucursal (Jujuy y Salta) y por asesor.',
    solution: 'Panel interactivo con filtros por sede y período, visualización de tasas de aprobación, puntos críticos de capacitación y métricas de recontacto.',
    role: 'Diseño metodológico de indicadores, estructuración de reglas de negocio y desarrollo asistido por IA.',
    result: 'Visibilidad centralizada para la toma de decisiones gerenciales y retroalimentación directa a los equipos comerciales.',
    statusBadge: 'Implementado',
    repo: 'https://github.com/nelsoncalidad15-ops/tablero-control-end',
    demo: 'tablero',
    demoUrl: 'demos/tablero.html'
  },
  {
    id: 'legajos',
    name: 'Audit Legajos Pro · Control Documental',
    cat: ['calidad', 'automatizacion'],
    label: 'Calidad · Auditoría · Normas',
    summary: 'Herramienta de auditoría digital para revisión normativa de legajos comerciales según estándares PCGC Volkswagen e ISO 9001.',
    problem: 'La auditoría física de legajos comerciales y 0KM presentaba demoras y riesgos de desvíos en requisitos críticos (boletos físicos, mails comparados, hojas de ruta).',
    solution: 'Checklist digital parametrizado por roles (Ventas, Administración, Gestoría), cálculo de índice de cumplimiento y bloqueo preventivo ante hallazgos críticos.',
    role: 'Mapeo de requerimientos de marca y desarrollo ágil asistido por IA (Google AI Studio / Gemini).',
    result: 'Estandarización del control documental previo a facturación y generación ágil de reportes de auditoría interna.',
    statusBadge: 'En evaluación',
    repo: 'https://github.com/nelsoncalidad15-ops/Auditoria-Legajos',
    demo: 'legajos',
    demoUrl: 'demos/legajos.html'
  },
  {
    id: 'insumos',
    name: 'Gestión Operativa de Insumos de Taller',
    cat: ['ingenieria', 'automatizacion'],
    label: 'Operaciones · Automatización',
    summary: 'Sistema para solicitudes internas, autorizaciones y trazabilidad de materiales y repuestos auxiliares en taller.',
    problem: 'Falta de registro unificado en el consumo de insumos entre Taller Mecánico, Chapa y Pintura, y Posventa, provocando pérdidas y quiebres de inventario.',
    solution: 'Aplicación web interna con flujo de pedidos por área, bandeja de autorización para supervisores y actualización de stock en tiempo real.',
    role: 'Relevamiento del circuito operativo, formulación de reglas de autorización y desarrollo asistido por IA.',
    result: 'Trazabilidad integral por área y responsable, eliminando solicitudes informales y optimizando el reaprovisionamiento.',
    statusBadge: 'Funcional',
    repo: 'https://github.com/nelsoncalidad15-ops/operacion',
    demo: 'insumos',
    demoUrl: 'demos/insumos.html'
  },
  {
    id: 'fideliza',
    name: 'Autosol Fideliza · Gestión de Clientes',
    cat: ['calidad', 'automatizacion'],
    label: 'Calidad · Posventa · Automatización',
    summary: 'Agenda de recontactos y retención de clientes para posventa oficial, servicios de mantenimiento y renovación de unidades.',
    problem: 'Pérdida de contacto con clientes tras la entrega del vehículo, afectando la recurrencia a talleres oficiales (servicios de 10k y 20k km) y la renovación.',
    solution: 'Agenda digital inteligente para asesores con alertas programadas (48hs post-entrega, 1 año, 24 meses), categorización de estados y seguimiento multicanal.',
    role: 'Definición de etapas de retención del cliente, especificación funcional y construcción asistida por IA generativa.',
    result: 'Sistematización de la cartera de posventa y aumento del retorno preventivo a talleres oficiales.',
    statusBadge: 'En desarrollo',
    repo: 'https://github.com/nelsoncalidad15-ops/Fideliza',
    demo: 'fideliza',
    demoUrl: 'demos/fideliza.html'
  },
  {
    id: 'avance-pvt',
    name: 'Avance PVT · Dashboard de Posventa',
    cat: ['ingenieria', 'calidad'],
    label: 'Ingeniería · Calidad · Datos',
    summary: 'Dashboard operativo para monitoreo de productividad de talleres, avance semanal de servicios y cumplimiento de metas presupuestadas.',
    problem: 'Dificultad para comparar en tiempo real el ritmo de órdenes de trabajo cerradas versus el objetivo presupuestado (PPT) en los talleres de Jujuy y Salta.',
    solution: 'Dashboard de control con cálculo de productividad diaria, evolución por semana y ratio porcentual de cumplimiento de metas de absorción.',
    role: 'Definición de KPIs operativos de taller y ensamble del panel analítico con asistencia de IA.',
    result: 'Monitoreo oportuno de desvíos en la capacidad del taller y balanceo dinámico de turnos.',
    statusBadge: 'Implementado',
    repo: 'https://github.com/nelsoncalidad15-ops/avance-pvt',
    demo: 'avance-pvt',
    demoUrl: 'demos/avance-pvt.html'
  },
  {
    id: 'tesis',
    name: 'Tesis · Sistema de Gestión Ambiental (ISO 14001)',
    cat: ['ingenieria', 'calidad'],
    label: 'Ingeniería Industrial · Sustentabilidad',
    summary: 'Propuesta metodológica para la implementación de un Sistema de Gestión Ambiental conforme a ISO 14001:2015 en Autosol Jujuy.',
    problem: 'Los procesos de taller y posventa automotriz generan aspectos ambientales críticos (residuos peligrosos, lubricantes usados, efluentes y consumo de recursos) que requieren control sistemático.',
    solution: 'Diagnóstico integral de operaciones, matriz de identificación y evaluación de aspectos e impactos ambientales, definición de indicadores de ecoeficiencia y formulación de manual de procedimientos.',
    role: 'Autor de la tesis de grado de Ingeniería Industrial (Universidad Nacional de Jujuy), aplicando el estudio a las operaciones reales de Autosol Jujuy.',
    result: 'Proyecto académico en desarrollo avanzado (etapa de redacción final de tesis). Base técnica para futura implementación corporativa.',
    statusBadge: 'Tesis en curso',
    repo: null,
    demo: 'tesis',
    demoUrl: null
  },
  {
    id: 'panaderia',
    name: 'Planificación de Producción y Layout',
    cat: ['ingenieria'],
    label: 'Ingeniería Industrial · Operaciones',
    summary: 'Estudio integral de balance de línea, cálculo de capacidad, distribución en planta y gestión de compras para Panadería San Pantaleón.',
    problem: 'Cuellos de botella en amasado y fermentación, manipulación excesiva de materias primas y dimensionamiento inadecuado del lote de compra.',
    solution: 'Plan maestro de producción, modelo de lote económico (EOQ), balanceo de puestos de trabajo y propuesta de redistribución física en planta (layout relacional).',
    role: 'Desarrollo de modelos cuantitativos, análisis de tiempos y métodos, y diseño de planta como trabajo académico de Ingeniería Industrial.',
    result: 'Reducción teórica del 22% en trayectos internos y optimización del costo global de almacenamiento de materias primas.',
    statusBadge: 'Proyecto académico',
    repo: null,
    demo: 'panaderia',
    demoUrl: null
  },
  {
    id: 'vino',
    name: 'Automatización de Procesos Industriales',
    cat: ['ingenieria', 'automatizacion'],
    label: 'Ingeniería Industrial · Automatización',
    summary: 'Diseño de lazo de control cerrado para nivel y temperatura en tanques de fermentación y maceración enológica.',
    problem: 'La falta de control preciso sobre la curva de temperatura durante la fermentación degrada las propiedades aromáticas y alcohólicas del mosto.',
    solution: 'Ingeniería conceptual de automatización: selección de sensores RTD Pt100, transmisores de presión diferencial, actuadores neumáticos y diagramas P&ID con lazo de control PID.',
    role: 'Especificación de instrumentación, arquitectura de lazo de control y diagramación técnica como proyecto de cátedra de Ingeniería Industrial.',
    result: 'Calificación sobresaliente en la cátedra de Automatización y Control Industrial.',
    statusBadge: 'Proyecto académico',
    repo: null,
    demo: 'vino',
    demoUrl: null
  }
];

// High-Contrast High-Tech Product Window Previews
function getProductWindowPreview(p) {
  let contentSvg = '';

  if (p.id === 'scoring') {
    contentSvg = `
      <svg width="260" height="120" viewBox="0 0 260 120" fill="none">
        <rect x="10" y="8" width="240" height="104" rx="8" fill="#141E26" stroke="rgba(255,255,255,0.1)"/>
        <rect x="22" y="20" width="85" height="14" rx="4" fill="rgba(0,180,216,0.15)"/>
        <text x="28" y="31" font-family="monospace" font-size="9" font-weight="700" fill="#00B4D8">PASO 2/4 · PLAN</text>
        <circle cx="230" cy="26" r="8" fill="#10B981"/>
        <text x="227" y="30" font-family="sans-serif" font-size="11" font-weight="900" fill="#0A0F13">✓</text>
        <text x="22" y="52" font-family="sans-serif" font-size="11" font-weight="700" fill="#FFFFFF">¿Comprende la licitación y cuota?</text>
        <rect x="22" y="64" width="100" height="26" rx="13" fill="#1D5060" stroke="#00B4D8"/>
        <text x="36" y="81" font-family="sans-serif" font-size="10.5" font-weight="750" fill="#FFFFFF">✓ SÍ, COMPRENDIDO</text>
        <rect x="130" y="64" width="75" height="26" rx="13" fill="#1C2730" stroke="rgba(255,255,255,0.15)"/>
        <text x="146" y="81" font-family="sans-serif" font-size="10.5" fill="#94A3B8">NO / DUDAS</text>
        <rect x="22" y="98" width="216" height="5" rx="2.5" fill="#1E293B"/>
        <rect x="22" y="98" width="162" height="5" rx="2.5" fill="linear-gradient(90deg, #1D5060, #00B4D8)"/>
      </svg>
    `;
  } else if (p.id === 'tablero') {
    contentSvg = `
      <svg width="260" height="120" viewBox="0 0 260 120" fill="none">
        <rect x="10" y="8" width="70" height="104" rx="8" fill="#141E26" stroke="rgba(255,255,255,0.1)"/>
        <text x="18" y="24" font-family="monospace" font-size="8" fill="#94A3B8">VALIDACIONES</text>
        <text x="18" y="48" font-family="sans-serif" font-size="24" font-weight="850" fill="#FFFFFF">320</text>
        <text x="18" y="68" font-family="sans-serif" font-size="9" font-weight="700" fill="#10B981">94% EFECTIVIDAD</text>
        <rect x="18" y="82" width="54" height="4" rx="2" fill="#10B981"/>

        <rect x="88" y="8" width="162" height="104" rx="8" fill="#141E26" stroke="rgba(255,255,255,0.1)"/>
        <text x="98" y="24" font-family="monospace" font-size="8" fill="#00B4D8">MÉTRICAS POR SUCURSAL</text>
        
        <text x="98" y="44" font-family="sans-serif" font-size="9.5" fill="#CBD5E1">Sede Jujuy</text>
        <rect x="98" y="50" width="140" height="7" rx="3.5" fill="#1E293B"/>
        <rect x="98" y="50" width="128" height="7" rx="3.5" fill="#00B4D8"/>

        <text x="98" y="74" font-family="sans-serif" font-size="9.5" fill="#CBD5E1">Sede Salta</text>
        <rect x="98" y="80" width="140" height="7" rx="3.5" fill="#1E293B"/>
        <rect x="98" y="80" width="112" height="7" rx="3.5" fill="#10B981"/>

        <circle cx="230" cy="22" r="4" fill="#10B981"/>
      </svg>
    `;
  } else if (p.id === 'legajos') {
    contentSvg = `
      <svg width="260" height="120" viewBox="0 0 260 120" fill="none">
        <rect x="12" y="8" width="236" height="104" rx="8" fill="#141E26" stroke="rgba(255,255,255,0.1)"/>
        <rect x="24" y="20" width="130" height="18" rx="4" fill="rgba(16,185,129,0.15)"/>
        <text x="32" y="33" font-family="monospace" font-size="9" font-weight="750" fill="#10B981">✓ PCGC VW · CONFORME</text>
        
        <circle cx="220" cy="30" r="14" fill="#10B981"/>
        <text x="214" y="34" font-family="sans-serif" font-size="11" font-weight="850" fill="#0A0F13">100%</text>

        <rect x="24" y="48" width="12" height="12" rx="3" fill="#10B981"/>
        <text x="27" y="58" font-family="sans-serif" font-size="9" font-weight="900" fill="#0A0F13">✓</text>
        <text x="42" y="58" font-family="sans-serif" font-size="10" fill="#E2E8F0">Boleto físico firmado (6.1.1.1)</text>

        <rect x="24" y="68" width="12" height="12" rx="3" fill="#10B981"/>
        <text x="27" y="78" font-family="sans-serif" font-size="9" font-weight="900" fill="#0A0F13">✓</text>
        <text x="42" y="78" font-family="sans-serif" font-size="10" fill="#E2E8F0">Verificación Mail CEM/SIAC (6.1.3.1)</text>

        <rect x="24" y="88" width="12" height="12" rx="3" fill="#10B981"/>
        <text x="27" y="98" font-family="sans-serif" font-size="9" font-weight="900" fill="#0A0F13">✓</text>
        <text x="42" y="98" font-family="sans-serif" font-size="10" fill="#E2E8F0">Hoja de ruta 0KM con alistamiento</text>
      </svg>
    `;
  } else if (p.id === 'insumos') {
    contentSvg = `
      <svg width="260" height="120" viewBox="0 0 260 120" fill="none">
        <rect x="12" y="8" width="236" height="104" rx="8" fill="#141E26" stroke="rgba(255,255,255,0.1)"/>
        <rect x="24" y="20" width="80" height="18" rx="4" fill="#1E293B"/>
        <text x="30" y="33" font-family="monospace" font-size="9" font-weight="700" fill="#00B4D8">STOCK PAÑOL</text>
        
        <rect x="140" y="20" width="96" height="18" rx="9" fill="rgba(245,158,11,0.15)"/>
        <text x="148" y="32" font-family="sans-serif" font-size="9" font-weight="750" fill="#F59E0B">● 1 PENDIENTE</text>

        <text x="24" y="56" font-family="sans-serif" font-size="10" fill="#CBD5E1">Kits cubre asientos taller (120 un.)</text>
        <rect x="24" y="62" width="212" height="6" rx="3" fill="#1E293B"/>
        <rect x="24" y="62" width="165" height="6" rx="3" fill="#10B981"/>

        <text x="24" y="86" font-family="sans-serif" font-size="10" fill="#CBD5E1">Desengrasante dieléctrico (35 un.)</text>
        <rect x="24" y="92" width="212" height="6" rx="3" fill="#1E293B"/>
        <rect x="24" y="92" width="98" height="6" rx="3" fill="#F59E0B"/>
      </svg>
    `;
  } else if (p.id === 'fideliza') {
    contentSvg = `
      <svg width="260" height="120" viewBox="0 0 260 120" fill="none">
        <rect x="12" y="8" width="236" height="104" rx="8" fill="#141E26" stroke="rgba(255,255,255,0.1)"/>
        <circle cx="34" cy="30" r="12" fill="#1D5060"/>
        <text x="27" y="34" font-family="sans-serif" font-size="10" font-weight="800" fill="#FFFFFF">EG</text>
        <text x="54" y="26" font-family="sans-serif" font-size="11" font-weight="750" fill="#FFFFFF">Elena Gómez</text>
        <text x="54" y="38" font-family="sans-serif" font-size="9.5" fill="#94A3B8">VW Nivus · Jujuy</text>
        
        <rect x="156" y="20" width="80" height="18" rx="9" fill="rgba(0,180,216,0.15)"/>
        <text x="164" y="32" font-family="sans-serif" font-size="9" font-weight="750" fill="#00B4D8">WHATSAPP</text>

        <rect x="24" y="54" width="212" height="46" rx="6" fill="#1A242C" stroke="rgba(255,255,255,0.06)"/>
        <text x="34" y="70" font-family="monospace" font-size="8.5" fill="#F59E0B">ALERTA PROGRAMADA · 48HS POST-ENTREGA</text>
        <text x="34" y="88" font-family="sans-serif" font-size="10" fill="#E2E8F0">Encuesta satisfacción de retiro completada</text>
      </svg>
    `;
  } else if (p.id === 'avance-pvt') {
    contentSvg = `
      <svg width="260" height="120" viewBox="0 0 260 120" fill="none">
        <rect x="12" y="8" width="236" height="104" rx="8" fill="#141E26" stroke="rgba(255,255,255,0.1)"/>
        <text x="24" y="24" font-family="monospace" font-size="8.5" fill="#00B4D8">SERVICIOS DE POSVENTA VS PPT</text>
        <text x="190" y="24" font-family="sans-serif" font-size="9" font-weight="800" fill="#10B981">104% META</text>
        
        <rect x="24" y="40" width="28" height="58" rx="3" fill="#1E293B"/>
        <rect x="24" y="55" width="28" height="43" rx="3" fill="#00B4D8"/>
        
        <rect x="68" y="40" width="28" height="58" rx="3" fill="#1E293B"/>
        <rect x="68" y="42" width="28" height="56" rx="3" fill="#00B4D8"/>
        
        <rect x="112" y="40" width="28" height="58" rx="3" fill="#1E293B"/>
        <rect x="112" y="46" width="28" height="52" rx="3" fill="#00B4D8"/>

        <rect x="156" y="40" width="28" height="58" rx="3" fill="#1E293B"/>
        <rect x="156" y="44" width="28" height="54" rx="3" fill="#10B981"/>

        <rect x="200" y="40" width="28" height="58" rx="3" fill="#1E293B"/>
        <rect x="200" y="60" width="28" height="38" rx="3" fill="#10B981"/>

        <line x1="20" y1="50" x2="236" y2="50" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="3 3"/>
      </svg>
    `;
  } else if (p.id === 'tesis') {
    contentSvg = `
      <svg width="260" height="120" viewBox="0 0 260 120" fill="none">
        <rect x="12" y="8" width="236" height="104" rx="8" fill="#141E26" stroke="rgba(255,255,255,0.1)"/>
        <circle cx="48" cy="60" r="28" fill="rgba(16,185,129,0.12)" stroke="#10B981" stroke-width="1.5"/>
        <text x="36" y="56" font-family="sans-serif" font-size="10" font-weight="850" fill="#10B981">ISO</text>
        <text x="31" y="68" font-family="sans-serif" font-size="9" font-weight="700" fill="#FFFFFF">14001</text>
        
        <text x="92" y="32" font-family="monospace" font-size="8.5" fill="#00B4D8">MATRIZ AMBIENTAL · AUTOSOL</text>
        <text x="92" y="52" font-family="sans-serif" font-size="11" font-weight="700" fill="#FFFFFF">Gestión de Residuos Peligrosos</text>
        <text x="92" y="68" font-family="sans-serif" font-size="9.5" fill="#94A3B8">Aceites, baterías, efluentes de lavado</text>
        
        <rect x="92" y="80" width="144" height="20" rx="10" fill="#10B981"/>
        <text x="106" y="93" font-family="sans-serif" font-size="9" font-weight="800" fill="#0A0F13">EN DESARROLLO · TESIS UNJu</text>
      </svg>
    `;
  } else if (p.id === 'panaderia') {
    contentSvg = `
      <svg width="260" height="120" viewBox="0 0 260 120" fill="none">
        <rect x="12" y="8" width="236" height="104" rx="8" fill="#141E26" stroke="rgba(255,255,255,0.1)"/>
        <text x="24" y="24" font-family="monospace" font-size="8.5" fill="#00B4D8">INGENIERÍA DE MÉTODOS Y LAYOUT</text>
        
        <rect x="24" y="36" width="60" height="32" rx="4" fill="#1E293B" stroke="#00B4D8"/>
        <text x="31" y="55" font-family="sans-serif" font-size="9" font-weight="750" fill="#FFFFFF">AMASADO</text>
        
        <path d="M88 52 L112 52" stroke="#00B4D8" stroke-width="2" marker-end="url(#arrow)"/>

        <rect x="116" y="36" width="60" height="32" rx="4" fill="#1E293B" stroke="#10B981"/>
        <text x="121" y="55" font-family="sans-serif" font-size="9" font-weight="750" fill="#FFFFFF">HORNEADO</text>
        
        <rect x="24" y="80" width="212" height="20" rx="4" fill="rgba(16,185,129,0.15)"/>
        <text x="32" y="93" font-family="sans-serif" font-size="9" font-weight="700" fill="#10B981">OPTIMIZACIÓN: -22% TRASLADOS EN PLANTA</text>
      </svg>
    `;
  } else if (p.id === 'vino') {
    contentSvg = `
      <svg width="260" height="120" viewBox="0 0 260 120" fill="none">
        <rect x="12" y="8" width="236" height="104" rx="8" fill="#141E26" stroke="rgba(255,255,255,0.1)"/>
        <rect x="24" y="22" width="46" height="76" rx="8" fill="#1E293B" stroke="#00B4D8"/>
        <line x1="24" y1="65" x2="70" y2="65" stroke="#10B981" stroke-width="1.5" stroke-dasharray="2 2"/>
        <circle cx="47" cy="45" r="4" fill="#FF5F56"/>
        
        <text x="82" y="32" font-family="monospace" font-size="8.5" fill="#00B4D8">AUTOMATIZACIÓN INDUSTRIAL</text>
        <text x="82" y="50" font-family="sans-serif" font-size="11" font-weight="700" fill="#FFFFFF">Lazo Cerrado PID Térmico</text>
        <text x="82" y="66" font-family="sans-serif" font-size="9.5" fill="#94A3B8">Sensor Pt100 + Válvula de flujo</text>

        <rect x="82" y="78" width="144" height="20" rx="10" fill="rgba(0,180,216,0.15)"/>
        <text x="96" y="91" font-family="sans-serif" font-size="9" font-weight="750" fill="#00B4D8">CONTROL PRECISO FERMENTACIÓN</text>
      </svg>
    `;
  }

  return `
    <div class="product-window" aria-hidden="true">
      <div class="window-header">
        <div class="window-dots">
          <span class="d-red"></span>
          <span class="d-yellow"></span>
          <span class="d-green"></span>
        </div>
        <div class="window-title">${p.name.split('·')[0].trim()}</div>
        <div class="window-badge">${p.statusBadge}</div>
      </div>
      <div class="window-content">
        ${contentSvg}
      </div>
    </div>
  `;
}

const grid = document.getElementById('projects');
const dialog = document.getElementById('projectDialog');
const detail = document.getElementById('detail');
const closeDialog = document.getElementById('closeDialog');

function renderProjects(filter = 'todos') {
  const filtered = projects.filter(p => filter === 'todos' || p.cat.includes(filter));
  
  grid.innerHTML = filtered.map(p => `
    <article class="project" role="button" tabindex="0" data-id="${p.id}" aria-label="Abrir detalles de ${p.name}">
      ${getProductWindowPreview(p)}
      
      <div class="project-tags">
        ${p.cat.map(c => `<span class="tag-pill">${c === 'ingenieria' ? 'Ingeniería Industrial' : c === 'calidad' ? 'Gestión de Calidad' : 'Automatización con IA'}</span>`).join('')}
      </div>

      <h3>${p.name}</h3>
      <p class="project-summary">${p.summary}</p>

      <div class="project-bottom">
        <span class="muted" style="font-size: 12.5px; font-weight: 500;">${p.demo ? '● Demo interactiva disponible' : '● Caso de ingeniería'}</span>
        <span class="action-link">
          Ver caso y demo <span>↗</span>
        </span>
      </div>
    </article>
  `).join('');

  // Attach card click handlers & 3D tilt
  grid.querySelectorAll('.project').forEach(card => {
    const id = card.dataset.id;
    card.addEventListener('click', () => openProject(id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProject(id);
      }
    });

    // Subtle 3D tilt effect on mousemove
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / rect.height) * 8;
      const rotateY = (x / rect.width) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

// Bind Category Filters
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

function openProject(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;

  detail.innerHTML = `
    <div class="dialog-body">
      <div class="eyebrow-pill" style="margin-bottom: 8px;">
        <span class="pulse-dot"></span>
        <span>${p.label.toUpperCase()}</span>
      </div>
      <h2 id="dialogTitle">${p.name}</h2>
      <p class="section-lead">${p.summary}</p>

      <div class="dialog-grid-2x2">
        <div class="dialog-card">
          <h3>Problema Operativo / Necesidad</h3>
          <p>${p.problem}</p>
        </div>
        <div class="dialog-card">
          <h3>Solución Implementada / Propuesta</h3>
          <p>${p.solution}</p>
        </div>
      </div>

      <div class="dialog-participation">
        <h3>Mi Participación y Herramientas Empleadas</h3>
        <p>${p.role}</p>
      </div>

      <div class="dialog-card" style="margin-bottom: 24px;">
        <h3>Estado y Resultados</h3>
        <p>${p.result}</p>
      </div>

      <!-- IN-MODAL INTERACTIVE DEMO CONTAINER -->
      ${p.demo ? `
        <div class="inline-demo" id="inmodal-demo-box"></div>
      ` : ''}

      <div class="dialog-actions">
        ${p.demoUrl ? `
          <a class="btn primary" href="${p.demoUrl}" target="_blank" rel="noopener noreferrer">
            Abrir demo ampliada en pantalla completa ↗
          </a>
        ` : ''}

        ${p.repo ? `
          <a class="btn secondary" href="${p.repo}" target="_blank" rel="noopener noreferrer">
            Ver código en GitHub ↗
          </a>
        ` : ''}

        <button type="button" class="btn secondary" id="btn-dialog-close-bottom">
          Cerrar ventana
        </button>
      </div>

      <div class="muted" style="font-size: 12px; margin-top: 20px; border-top: 1px solid var(--border-light); padding-top: 14px;">
        <strong>Aviso de Confidencialidad y Seguridad:</strong> Los proyectos desarrollados en el marco corporativo se presentan mediante demostraciones aisladas y datos estrictamente ficticios. No se incluye código con acceso a APIs de empresa, Google Sheets ni registros de clientes reales.
      </div>
    </div>
  `;

  dialog.showModal();

  if (p.demo) {
    renderInModalDemo(p.demo);
  }

  document.getElementById('btn-dialog-close-bottom')?.addEventListener('click', () => dialog.close());

  history.replaceState(null, '', '#proyecto-' + p.id);
}

closeDialog.onclick = () => dialog.close();
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => {
  history.replaceState(null, '', '#proyectos');
});

// In-Modal Live Interactive Mini-Demos
function renderInModalDemo(type) {
  const container = document.getElementById('inmodal-demo-box');
  if (!container) return;

  if (type === 'scoring') {
    let step = 0;
    const questions = [
      '¿Le informaron que la adjudicación del plan es exclusivamente por sorteo o licitación?',
      '¿Comprende que el importe de la cuota se actualiza según el valor del vehículo 0KM?',
      '¿El asesor comercial le entregó documentación de respaldo firmada?'
    ];
    let userAnswers = {};

    function update() {
      if (step < questions.length) {
        container.innerHTML = `
          <div class="inline-demo-header">
            <div>
              <span class="eyebrow-pill" style="margin-bottom: 0;">DEMO AISLADA EN VIVO</span>
              <h4 style="margin: 4px 0 0; font-size: 16px;">Simulador de Validación de Suscripción</h4>
            </div>
            <span class="tag-pill">Paso ${step + 1} de ${questions.length}</span>
          </div>

          <p style="font-size: 14.5px; font-weight: 600; color: var(--text-dark); margin-bottom: 14px;">
            ${questions[step]}
          </p>

          <div style="display: flex; gap: 10px; margin-bottom: 18px;">
            <button type="button" class="btn ${userAnswers[step] === 'Sí' ? 'primary' : 'secondary'}" id="inmodal-yes">
              ✓ Sí, comprendido
            </button>
            <button type="button" class="btn ${userAnswers[step] === 'No' ? 'primary' : 'secondary'}" id="inmodal-no">
              ✕ No / Tengo dudas
            </button>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="muted" style="font-size: 12px;">Simulación local · Sin conexión a bases reales</span>
            <button type="button" class="btn primary" id="inmodal-next" ${!userAnswers[step] ? 'disabled' : ''}>
              ${step === questions.length - 1 ? 'Evaluar Scoring →' : 'Siguiente pregunta →'}
            </button>
          </div>
        `;

        document.getElementById('inmodal-yes').onclick = () => { userAnswers[step] = 'Sí'; update(); };
        document.getElementById('inmodal-no').onclick = () => { userAnswers[step] = 'No'; update(); };
        document.getElementById('inmodal-next').onclick = () => { step++; update(); };
      } else {
        const hasDoubts = Object.values(userAnswers).includes('No');
        container.innerHTML = `
          <div class="inline-demo-header">
            <div>
              <span class="eyebrow-pill" style="margin-bottom: 0;">RESULTADO DE LA SIMULACIÓN</span>
              <h4 style="margin: 4px 0 0; font-size: 16px;">${hasDoubts ? 'Derivado para Recontacto de Calidad' : 'Validación Positiva · Aprobado'}</h4>
            </div>
            <span class="tag-pill" style="color: ${hasDoubts ? '#F59E0B' : '#10B981'};">${hasDoubts ? 'Requiere Llamado' : 'Conforme'}</span>
          </div>

          <p style="font-size: 13.5px; margin-bottom: 16px;">
            ${hasDoubts 
              ? 'El sistema detectó que existen conceptos contractuales observados y generaría un ticket automático en el Tablero de Calidad.' 
              : 'Se validó la correcta comprensión de las 3 condiciones clave. El suscriptor queda listo para emisión.'}
          </p>

          <div style="display: flex; gap: 12px; align-items: center;">
            <button type="button" class="btn secondary" id="inmodal-restart">Volver a probar simulación</button>
            <a class="action-link" href="demos/scoring.html" target="_blank">Abrir versión de 4 pasos completa ↗</a>
          </div>
        `;

        document.getElementById('inmodal-restart').onclick = () => {
          step = 0;
          userAnswers = {};
          update();
        };
      }
    }
    update();
  } else if (type === 'tablero') {
    const data = {
      Jujuy: { total: 184, ok: 92, recontact: 15 },
      Salta: { total: 136, ok: 88, recontact: 16 }
    };

    function update(branch = 'Jujuy') {
      const d = data[branch];
      container.innerHTML = `
        <div class="inline-demo-header">
          <div>
            <span class="eyebrow-pill" style="margin-bottom: 0;">DEMO AISLADA EN VIVO</span>
            <h4 style="margin: 4px 0 0; font-size: 16px;">Recálculo de Indicadores por Sucursal</h4>
          </div>
          <div style="display: flex; gap: 6px;">
            <button type="button" class="btn ${branch === 'Jujuy' ? 'primary' : 'secondary'}" style="padding: 6px 14px; font-size: 12px;" id="inmodal-branch-jujuy">Sede Jujuy</button>
            <button type="button" class="btn ${branch === 'Salta' ? 'primary' : 'secondary'}" style="padding: 6px 14px; font-size: 12px;" id="inmodal-branch-salta">Sede Salta</button>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 18px 0;">
          <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: 10px; padding: 14px;">
            <small style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block;">Validaciones</small>
            <strong style="font-size: 24px; color: var(--text-dark); font-family: var(--font-display);">${d.total}</strong>
          </div>
          <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: 10px; padding: 14px;">
            <small style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block;">Comprensión</small>
            <strong style="font-size: 24px; color: var(--brand-petroleum); font-family: var(--font-display);">${d.ok}%</strong>
          </div>
          <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: 10px; padding: 14px;">
            <small style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block;">Recontactos</small>
            <strong style="font-size: 24px; color: #F59E0B; font-family: var(--font-display);">${d.recontact}</strong>
          </div>
        </div>
      `;

      document.getElementById('inmodal-branch-jujuy').onclick = () => update('Jujuy');
      document.getElementById('inmodal-branch-salta').onclick = () => update('Salta');
    }
    update();
  } else if (type === 'legajos') {
    let checks = { b1: true, b2: true, b3: false };

    function update() {
      const compliant = Object.values(checks).filter(Boolean).length;
      const pct = Math.round((compliant / 3) * 100);

      container.innerHTML = `
        <div class="inline-demo-header">
          <div>
            <span class="eyebrow-pill" style="margin-bottom: 0;">DEMO AISLADA EN VIVO</span>
            <h4 style="margin: 4px 0 0; font-size: 16px;">Checklist Digital de Legajo 0KM</h4>
          </div>
          <span class="tag-pill" style="color: ${pct === 100 ? '#10B981' : '#F59E0B'};">${pct}% Cumplimiento</span>
        </div>

        <div style="display: grid; gap: 8px; margin: 16px 0;">
          <label style="display: flex; align-items: center; gap: 10px; background: #FFFFFF; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: 8px; cursor: pointer;">
            <input type="checkbox" id="chk-b1" ${checks.b1 ? 'checked' : ''}>
            <span style="font-size: 13.5px;">Boleto físico firmado (6.1.1.1)</span>
          </label>
          <label style="display: flex; align-items: center; gap: 10px; background: #FFFFFF; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: 8px; cursor: pointer;">
            <input type="checkbox" id="chk-b2" ${checks.b2 ? 'checked' : ''}>
            <span style="font-size: 13.5px;">Verificación Mail en CEM y SIAC (6.1.3.1)</span>
          </label>
          <label style="display: flex; align-items: center; gap: 10px; background: #FFFFFF; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: 8px; cursor: pointer;">
            <input type="checkbox" id="chk-b3" ${checks.b3 ? 'checked' : ''}>
            <span style="font-size: 13.5px;">Hoja con información útil firmada (7.1.1.1)</span>
          </label>
        </div>

        <div style="font-size: 13px; color: ${pct === 100 ? '#10B981' : '#F59E0B'}; font-weight: 700;">
          Dictamen: ${pct === 100 ? '✓ Expediente apto para entrega' : '⚠ Observado: Requiere subsanación antes de entrega'}
        </div>
      `;

      document.getElementById('chk-b1').onchange = (e) => { checks.b1 = e.target.checked; update(); };
      document.getElementById('chk-b2').onchange = (e) => { checks.b2 = e.target.checked; update(); };
      document.getElementById('chk-b3').onchange = (e) => { checks.b3 = e.target.checked; update(); };
    }
    update();
  } else if (type === 'insumos') {
    let stock = 24;
    container.innerHTML = `
      <div class="inline-demo-header">
        <div>
          <span class="eyebrow-pill" style="margin-bottom: 0;">DEMO AISLADA EN VIVO</span>
          <h4 style="margin: 4px 0 0; font-size: 16px;">Control Rápido de Stock en Pañol</h4>
        </div>
        <span class="tag-pill" id="inmodal-stock-tag" style="color: #10B981;">${stock} un. disponibles</span>
      </div>

      <p style="font-size: 13px; margin-bottom: 12px;">Artículo: <strong>Kits descartables de protección de taller</strong></p>

      <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 12px;">
        <input type="number" id="inmodal-qty" value="4" min="1" max="24" style="width: 80px; padding: 8px;" />
        <button type="button" class="btn primary" style="padding: 9px 16px; font-size: 12.5px;" id="inmodal-btn-order">
          Registrar salida ficticia
        </button>
      </div>

      <div id="inmodal-stock-feedback" class="muted" style="font-size: 12px;">
        Al ingresar una salida, el stock se descuenta en la memoria local.
      </div>
    `;

    document.getElementById('inmodal-btn-order').onclick = () => {
      const q = parseInt(document.getElementById('inmodal-qty').value, 10);
      if (isNaN(q) || q < 1 || q > stock) {
        document.getElementById('inmodal-stock-feedback').textContent = 'Cantidad no disponible en existencias.';
        return;
      }
      stock -= q;
      document.getElementById('inmodal-stock-tag').textContent = `${stock} un. disponibles`;
      document.getElementById('inmodal-stock-feedback').innerHTML = `<span style="color: #10B981; font-weight: 700;">✓ Salida de ${q} unidades autorizada y registrada.</span>`;
    };
  } else if (type === 'avance-pvt' || type === 'fideliza') {
    container.innerHTML = `
      <div class="inline-demo-header">
        <div>
          <span class="eyebrow-pill" style="margin-bottom: 0;">DEMOSTRACIÓN INTERACTIVA</span>
          <h4 style="margin: 4px 0 0; font-size: 16px;">Módulo Completo Disponible</h4>
        </div>
        <span class="tag-pill">Simulación Lista</span>
      </div>
      <p style="font-size: 13.5px; margin-bottom: 16px;">
        Este desarrollo cuenta con una interfaz ampliada con filtros interactivos, tablas de recontacto y recálculo de métricas.
      </p>
      <a class="btn primary" href="demos/${type}.html" target="_blank">
        Abrir demostración interactiva de ${type === 'avance-pvt' ? 'Avance PVT' : 'Fideliza'} ↗
      </a>
    `;
  } else if (type === 'tesis') {
    container.innerHTML = `
      <div class="inline-demo-header">
        <div>
          <span class="eyebrow-pill" style="margin-bottom: 0;">ESTRUCTURA DE TESIS · ISO 14001:2015</span>
          <h4 style="margin: 4px 0 0; font-size: 16px;">Matriz Metodológica de Implementación</h4>
        </div>
        <span class="tag-pill">En curso</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 16px 0;">
        <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: 8px; padding: 12px;">
          <strong style="font-size: 13px; color: var(--brand-petroleum); display: block; margin-bottom: 4px;">01. Diagnóstico Inicial</strong>
          <p style="font-size: 12px; color: var(--text-muted); margin: 0;">Relevamiento de fuentes de generación de residuos peligrosos (aceites, filtros, baterías) y consumo hídrico/eléctrico en talleres.</p>
        </div>
        <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: 8px; padding: 12px;">
          <strong style="font-size: 13px; color: var(--brand-petroleum); display: block; margin-bottom: 4px;">02. Matriz de Significancia</strong>
          <p style="font-size: 12px; color: var(--text-muted); margin: 0;">Evaluación probabilística de severidad, frecuencia y cumplimiento legal para priorizar aspectos e impactos ambientales.</p>
        </div>
        <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: 8px; padding: 12px;">
          <strong style="font-size: 13px; color: var(--brand-petroleum); display: block; margin-bottom: 4px;">03. Plan de Adecuación</strong>
          <p style="font-size: 12px; color: var(--text-muted); margin: 0;">Procedimientos normalizados para disposición transitoria, manifiestos de transporte y contingencias ante derrames.</p>
        </div>
        <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: 8px; padding: 12px;">
          <strong style="font-size: 13px; color: var(--brand-petroleum); display: block; margin-bottom: 4px;">04. Tablero de Ecoeficiencia</strong>
          <p style="font-size: 12px; color: var(--text-muted); margin: 0;">Indicadores de seguimiento: kg de residuos por unidad intervenida y ratio de eficiencia energética en planta.</p>
        </div>
      </div>
    `;
  } else if (type === 'panaderia' || type === 'vino') {
    container.innerHTML = `
      <div class="inline-demo-header">
        <div>
          <span class="eyebrow-pill" style="margin-bottom: 0;">PROYECTO ACADÉMICO DE INGENIERÍA INDUSTRIAL</span>
          <h4 style="margin: 4px 0 0; font-size: 16px;">Modelado Cuantitativo y Automatización</h4>
        </div>
        <span class="tag-pill">UNJu</span>
      </div>
      <p style="font-size: 13.5px; margin-bottom: 12px;">
        ${type === 'panaderia' 
          ? 'Optimización del tamaño de lote (EOQ) y balanceo de layout: reducción teórica del 22% en traslados internos de materias primas y bandejas de horneado.'
          : 'Lazo cerrado PID con sensores Pt100 y transmisores de presión diferencial para control térmico y de nivel en cubas enológicas.'}
      </p>
    `;
  }
}

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu');
const navLinks = document.getElementById('links');

menuBtn?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

// Current Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize Render
renderProjects();

// Hash deep-linking
if (location.hash.startsWith('#proyecto-')) {
  const targetId = location.hash.replace('#proyecto-', '');
  setTimeout(() => openProject(targetId), 150);
}

/* ==========================================================================
   INTERACTIVE 3D PROCESS ENGINE CANVAS (High Impact Geometric Wireframe)
   ========================================================================== */
(function init3DHeroCanvas() {
  const canvas = document.getElementById('canvas3d');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let animId;

  function resize() {
    width = canvas.parentElement.clientWidth;
    height = canvas.parentElement.clientHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  resize();
  window.addEventListener('resize', resize);

  // 3D Geometry: Icosahedron Vertices
  const phi = (1 + Math.sqrt(5)) / 2;
  const rawVertices = [
    [-1,  phi,  0], [ 1,  phi,  0], [-1, -phi,  0], [ 1, -phi,  0],
    [ 0, -1,  phi], [ 0,  1,  phi], [ 0, -1, -phi], [ 0,  1, -phi],
    [ phi,  0, -1], [ phi,  0,  1], [-phi,  0, -1], [-phi,  0,  1]
  ];

  // Edges connecting vertices
  const edges = [];
  for (let i = 0; i < rawVertices.length; i++) {
    for (let j = i + 1; j < rawVertices.length; j++) {
      const d2 = Math.pow(rawVertices[i][0] - rawVertices[j][0], 2) +
                 Math.pow(rawVertices[i][1] - rawVertices[j][1], 2) +
                 Math.pow(rawVertices[i][2] - rawVertices[j][2], 2);
      // Icosahedron edge length is 2.0 (distance squared is 4)
      if (Math.abs(d2 - 4) < 0.1) {
        edges.push([i, j]);
      }
    }
  }

  // Floating Orbital Particles
  const particles = Array.from({ length: 36 }, (_, idx) => {
    const angle = (idx / 36) * Math.PI * 2;
    const r = 2.4 + (idx % 3) * 0.35;
    return {
      angle,
      r,
      speed: 0.008 + (idx % 5) * 0.003,
      tilt: 0.45 + (idx % 4) * 0.15,
      size: 1.5 + (idx % 3) * 0.8
    };
  });

  // Rotation State
  let rotX = 0.35;
  let rotY = 0.45;
  let targetRotX = 0.35;
  let targetRotY = 0.45;
  let isDragging = false;
  let lastMouseX = 0;
  let lastMouseY = 0;

  const stageBox = document.getElementById('stage3d');

  stageBox?.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const isOver = (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom);

    if (isDragging) {
      const deltaX = e.clientX - lastMouseX;
      const deltaY = e.clientY - lastMouseY;
      targetRotY += deltaX * 0.008;
      targetRotX += deltaY * 0.008;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    } else if (isOver) {
      const normX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const normY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      targetRotY = 0.45 + normX * 0.6;
      targetRotX = 0.35 - normY * 0.5;
    }
  });

  function render3D() {
    ctx.clearRect(0, 0, width, height);

    // Smooth inertia
    rotX += (targetRotX - rotX) * 0.06;
    rotY += (targetRotY - rotY) * 0.06;
    targetRotY += 0.004; // subtle continuous rotation

    const cx = width / 2;
    const cy = height / 2;
    const scale = Math.min(width, height) * 0.34;
    const fov = 4.2;

    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

    // Project Vertices
    const projected = rawVertices.map(v => {
      // Rotate Y
      let x1 = v[0] * cosY - v[2] * sinY;
      let z1 = v[0] * sinY + v[2] * cosY;
      // Rotate X
      let y1 = v[1] * cosX - z1 * sinX;
      let z2 = v[1] * sinX + z1 * cosX;

      const factor = fov / (fov + z2 * 0.45);
      return {
        x: cx + x1 * scale * factor,
        y: cy + y1 * scale * factor,
        z: z2,
        factor
      };
    });

    // 1. Draw Outer Concentric Gyroscope Rings
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotY * 0.5);
    ctx.beginPath();
    ctx.ellipse(0, 0, scale * 1.55, scale * 0.55, rotX * 0.8, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0, 180, 216, 0.18)';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([4, 6]);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(0, 0, scale * 1.75, scale * 0.65, -rotX * 0.6, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(29, 80, 96, 0.25)';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 8]);
    ctx.stroke();
    ctx.restore();

    // 2. Draw Edges with Depth Shading
    ctx.lineWidth = 1.6;
    edges.forEach(([i, j]) => {
      const p1 = projected[i];
      const p2 = projected[j];
      const avgZ = (p1.z + p2.z) / 2;
      const alpha = Math.max(0.12, Math.min(0.85, 0.55 + avgZ * 0.25));

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(0, 180, 216, ${alpha})`;
      ctx.stroke();
    });

    // 3. Draw Nodes (Tech Vertices)
    projected.forEach(p => {
      const radius = Math.max(2.5, 4.5 * p.factor);
      const alpha = Math.max(0.3, Math.min(1, 0.6 + p.z * 0.25));

      // Node glow
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 2.5);
      grad.addColorStop(0, `rgba(0, 180, 216, ${alpha})`);
      grad.addColorStop(1, 'rgba(0, 180, 216, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Core dot
      ctx.fillStyle = p.z > 0 ? '#FFFFFF' : '#00B4D8';
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius * 0.7, 0, Math.PI * 2);
      ctx.fill();
    });

    // 4. Draw Orbital Process Particles
    particles.forEach(pt => {
      pt.angle += pt.speed;
      const px = Math.cos(pt.angle) * pt.r;
      const pz = Math.sin(pt.angle) * pt.r;
      const py = Math.sin(pt.angle * 2) * pt.tilt;

      // Rotate with scene
      let x1 = px * cosY - pz * sinY;
      let z1 = px * sinY + pz * cosY;
      let y1 = py * cosX - z1 * sinX;
      let z2 = py * sinX + z1 * cosX;

      const factor = fov / (fov + z2 * 0.4);
      const sx = cx + x1 * scale * factor;
      const sy = cy + y1 * scale * factor;

      if (z2 > -fov) {
        const pAlpha = Math.max(0.15, Math.min(0.9, 0.5 + z2 * 0.25));
        ctx.fillStyle = pt.r > 2.8 ? `rgba(16, 185, 129, ${pAlpha})` : `rgba(0, 180, 216, ${pAlpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, pt.size * factor, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    animId = requestAnimationFrame(render3D);
  }

  render3D();
})();
