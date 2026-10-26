/**
 * Nelson Notario — Portafolio Profesional
 * Frontend Logic, Project Catalog, Rich Interactive Previews & Modal Handlers
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

// Bespoke clean vector previews for each project
function getProjectPreview(p) {
  let graphic = '';

  if (p.id === 'scoring') {
    graphic = `
      <svg width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="8" width="200" height="74" rx="8" fill="#FFFFFF" stroke="#CDDBE0" stroke-width="1.5"/>
        <rect x="24" y="20" width="70" height="6" rx="3" fill="#1D5060"/>
        <rect x="24" y="32" width="120" height="4" rx="2" fill="#D5E2E6"/>
        <rect x="24" y="40" width="90" height="4" rx="2" fill="#D5E2E6"/>
        <rect x="24" y="54" width="75" height="18" rx="4" fill="#EDF4F6" stroke="#BCD2D8"/>
        <text x="36" y="67" font-family="sans-serif" font-size="9" font-weight="700" fill="#1D5060">✓ Comprendido</text>
        <rect x="106" y="54" width="60" height="18" rx="4" fill="#FFFFFF" stroke="#D5E2E6"/>
        <text x="120" y="67" font-family="sans-serif" font-size="9" fill="#64767E">Dudas</text>
        <circle cx="188" cy="45" r="14" fill="#EDF7F2" stroke="#1E7E5A" stroke-width="1.5"/>
        <text x="183" y="49" font-family="sans-serif" font-size="12" font-weight="800" fill="#1E7E5A">✓</text>
      </svg>
    `;
  } else if (p.id === 'tablero') {
    graphic = `
      <svg width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="8" width="56" height="74" rx="6" fill="#FFFFFF" stroke="#CDDBE0" stroke-width="1.2"/>
        <text x="18" y="24" font-family="sans-serif" font-size="8" font-weight="700" fill="#64767E">SCORING</text>
        <text x="18" y="44" font-family="sans-serif" font-size="18" font-weight="800" fill="#1D5060">94%</text>
        <rect x="18" y="52" width="40" height="3" rx="1.5" fill="#1E7E5A"/>
        
        <rect x="74" y="8" width="136" height="74" rx="6" fill="#FFFFFF" stroke="#CDDBE0" stroke-width="1.2"/>
        <rect x="86" y="22" width="45" height="4" rx="2" fill="#64767E"/>
        <rect x="86" y="36" width="90" height="7" rx="3.5" fill="#E8EFF2"/>
        <rect x="86" y="36" width="76" height="7" rx="3.5" fill="#1D5060"/>
        <rect x="86" y="50" width="90" height="7" rx="3.5" fill="#E8EFF2"/>
        <rect x="86" y="50" width="64" height="7" rx="3.5" fill="#1D5060"/>
        <rect x="86" y="64" width="90" height="7" rx="3.5" fill="#E8EFF2"/>
        <rect x="86" y="64" width="82" height="7" rx="3.5" fill="#1E7E5A"/>
      </svg>
    `;
  } else if (p.id === 'legajos') {
    graphic = `
      <svg width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="6" width="170" height="78" rx="6" fill="#FFFFFF" stroke="#CDDBE0" stroke-width="1.5"/>
        <rect x="40" y="18" width="80" height="5" rx="2.5" fill="#1D5060"/>
        <rect x="40" y="32" width="14" height="14" rx="3" fill="#EDF7F2" stroke="#1E7E5A"/>
        <text x="44" y="43" font-family="sans-serif" font-size="10" font-weight="700" fill="#1E7E5A">✓</text>
        <rect x="62" y="36" width="70" height="4" rx="2" fill="#64767E"/>
        <rect x="40" y="52" width="14" height="14" rx="3" fill="#EDF7F2" stroke="#1E7E5A"/>
        <text x="44" y="63" font-family="sans-serif" font-size="10" font-weight="700" fill="#1E7E5A">✓</text>
        <rect x="62" y="56" width="85" height="4" rx="2" fill="#64767E"/>
        <rect x="145" y="24" width="40" height="42" rx="4" fill="#F6F8F9" stroke="#BCD2D8"/>
        <text x="150" y="42" font-family="sans-serif" font-size="8" font-weight="700" fill="#1D5060">AUDIT</text>
        <text x="150" y="56" font-family="sans-serif" font-size="11" font-weight="800" fill="#1E7E5A">100%</text>
      </svg>
    `;
  } else if (p.id === 'insumos') {
    graphic = `
      <svg width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="10" width="190" height="70" rx="6" fill="#FFFFFF" stroke="#CDDBE0" stroke-width="1.5"/>
        <rect x="28" y="22" width="40" height="20" rx="3" fill="#EDF4F6" stroke="#BCD2D8"/>
        <text x="34" y="35" font-family="sans-serif" font-size="9" font-weight="700" fill="#1D5060">PAÑOL</text>
        <rect x="76" y="24" width="60" height="4" rx="2" fill="#192B33"/>
        <rect x="76" y="32" width="45" height="3" rx="1.5" fill="#64767E"/>
        <rect x="28" y="52" width="164" height="6" rx="3" fill="#E8EFF2"/>
        <rect x="28" y="52" width="118" height="6" rx="3" fill="#1D5060"/>
        <circle cx="178" cy="28" r="9" fill="#EDF7F2" stroke="#1E7E5A"/>
        <text x="174" y="32" font-family="sans-serif" font-size="10" font-weight="700" fill="#1E7E5A">✓</text>
      </svg>
    `;
  } else if (p.id === 'fideliza') {
    graphic = `
      <svg width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="8" width="190" height="74" rx="6" fill="#FFFFFF" stroke="#CDDBE0" stroke-width="1.5"/>
        <circle cx="36" cy="30" r="12" fill="#EDF4F6" stroke="#1D5060"/>
        <text x="32" y="34" font-family="sans-serif" font-size="10" font-weight="700" fill="#1D5060">EG</text>
        <rect x="56" y="24" width="65" height="5" rx="2.5" fill="#192B33"/>
        <rect x="56" y="33" width="45" height="3" rx="1.5" fill="#64767E"/>
        <rect x="135" y="22" width="58" height="16" rx="8" fill="#FFF8E6" stroke="#9A6700"/>
        <text x="144" y="33" font-family="sans-serif" font-size="8" font-weight="700" fill="#9A6700">48hs Entrega</text>
        <line x1="28" y1="52" x2="192" y2="52" stroke="#E5ECEF"/>
        <rect x="28" y="60" width="80" height="12" rx="3" fill="#EDF7F2"/>
        <text x="34" y="69" font-family="sans-serif" font-size="8" font-weight="700" fill="#1E7E5A">Service 10.000 km</text>
      </svg>
    `;
  } else if (p.id === 'avance-pvt') {
    graphic = `
      <svg width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="8" width="190" height="74" rx="6" fill="#FFFFFF" stroke="#CDDBE0" stroke-width="1.5"/>
        <rect x="28" y="55" width="22" height="18" rx="2" fill="#BCD2D8"/>
        <rect x="58" y="38" width="22" height="35" rx="2" fill="#8BB1BC"/>
        <rect x="88" y="44" width="22" height="29" rx="2" fill="#8BB1BC"/>
        <rect x="118" y="32" width="22" height="41" rx="2" fill="#1D5060"/>
        <rect x="148" y="48" width="22" height="25" rx="2" fill="#BCD2D8"/>
        <line x1="24" y1="28" x2="185" y2="28" stroke="#1E7E5A" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="140" y="23" font-family="sans-serif" font-size="8" font-weight="700" fill="#1E7E5A">Meta PPT</text>
      </svg>
    `;
  } else if (p.id === 'tesis') {
    graphic = `
      <svg width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="8" width="190" height="74" rx="6" fill="#FFFFFF" stroke="#CDDBE0" stroke-width="1.5"/>
        <circle cx="48" cy="45" r="22" fill="#EDF7F2" stroke="#1E7E5A" stroke-width="1.5"/>
        <path d="M48 32 C56 32 60 40 60 48 C52 48 48 40 48 32 Z" fill="#1E7E5A"/>
        <path d="M48 48 C44 48 40 44 40 40" stroke="#1E7E5A" stroke-width="1.5"/>
        <text x="82" y="32" font-family="sans-serif" font-size="11" font-weight="800" fill="#1D5060">ISO 14001:2015</text>
        <text x="82" y="46" font-family="sans-serif" font-size="9" fill="#64767E">Aspectos e Impactos</text>
        <rect x="82" y="55" width="105" height="14" rx="3" fill="#EDF4F6"/>
        <text x="88" y="65" font-family="sans-serif" font-size="8" font-weight="700" fill="#1D5060">Autosol Jujuy · Tesis</text>
      </svg>
    `;
  } else if (p.id === 'panaderia') {
    graphic = `
      <svg width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="8" width="190" height="74" rx="6" fill="#FFFFFF" stroke="#CDDBE0" stroke-width="1.5"/>
        <rect x="28" y="20" width="42" height="24" rx="3" fill="#EDF4F6" stroke="#BCD2D8"/>
        <text x="32" y="34" font-family="sans-serif" font-size="8" font-weight="700" fill="#1D5060">AMASADO</text>
        <path d="M72 32 L88 32" stroke="#1D5060" stroke-width="1.5" marker-end="url(#arrow)"/>
        <rect x="90" y="20" width="46" height="24" rx="3" fill="#EDF4F6" stroke="#BCD2D8"/>
        <text x="94" y="34" font-family="sans-serif" font-size="8" font-weight="700" fill="#1D5060">HORNEADO</text>
        <rect x="28" y="54" width="164" height="16" rx="3" fill="#F6F8F9" stroke="#E5ECEF"/>
        <text x="36" y="65" font-family="sans-serif" font-size="8" font-weight="600" fill="#64767E">Layout relacional y modelo EOQ</text>
      </svg>
    `;
  } else if (p.id === 'vino') {
    graphic = `
      <svg width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="8" width="190" height="74" rx="6" fill="#FFFFFF" stroke="#CDDBE0" stroke-width="1.5"/>
        <rect x="36" y="18" width="38" height="52" rx="6" fill="#EDF4F6" stroke="#1D5060" stroke-width="1.5"/>
        <line x1="36" y1="46" x2="74" y2="46" stroke="#1D5060" stroke-width="1" stroke-dasharray="2 2"/>
        <circle cx="55" cy="32" r="3" fill="#B42318"/>
        <rect x="92" y="24" width="98" height="18" rx="4" fill="#EDF7F2" stroke="#1E7E5A"/>
        <text x="98" y="36" font-family="sans-serif" font-size="9" font-weight="700" fill="#1E7E5A">Lazo Cerrado PID</text>
        <rect x="92" y="50" width="98" height="18" rx="4" fill="#FFFFFF" stroke="#CDDBE0"/>
        <text x="98" y="62" font-family="sans-serif" font-size="8" font-weight="600" fill="#64767E">Pt100 + Control Flujo</text>
      </svg>
    `;
  }

  return `
    <div class="preview" aria-hidden="true">
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
        <span class="preview-badge">${p.label.split('·')[0].trim()}</span>
        <span class="badge-status">
          <span class="dot-status ${p.statusBadge.includes('operativo') || p.statusBadge.includes('Implementado') ? 'success' : 'warning'}"></span>
          ${p.statusBadge}
        </span>
      </div>
      <div class="preview-graphic">
        ${graphic}
      </div>
      <div class="preview-note">Representación técnica de arquitectura</div>
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
      ${getProjectPreview(p)}
      
      <div class="project-tags">
        ${p.cat.map(c => `<span class="tag-pill">${c === 'ingenieria' ? 'Ingeniería Industrial' : c === 'calidad' ? 'Gestión de Calidad' : 'Automatización con IA'}</span>`).join('')}
      </div>

      <h3>${p.name}</h3>
      <p class="project-summary">${p.summary}</p>

      <div class="project-bottom">
        <span class="muted" style="font-size: 12.5px;">${p.demo ? 'Caso con demo interactiva' : 'Ficha técnica de ingeniería'}</span>
        <span class="action-link">
          Explorar caso <span class="btn-arrow" aria-hidden="true">↗</span>
        </span>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.project').forEach(card => {
    const id = card.dataset.id;
    card.addEventListener('click', () => openProject(id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProject(id);
      }
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
      <span class="eyebrow">${p.label.toUpperCase()}</span>
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
        <div class="inline-demo" id="inmodal-demo-box">
          <!-- Rendered via renderInModalDemo -->
        </div>
      ` : ''}

      <div class="dialog-actions">
        ${p.demoUrl ? `
          <a class="btn primary" href="${p.demoUrl}" target="_blank" rel="noopener noreferrer">
            Abrir demo ampliada en pantalla completa <span class="btn-arrow">↗</span>
          </a>
        ` : ''}

        ${p.repo ? `
          <a class="btn outline" href="${p.repo}" target="_blank" rel="noopener noreferrer">
            Ver código en GitHub ↗
          </a>
        ` : ''}

        <button type="button" class="btn light" id="btn-dialog-close-bottom">
          Cerrar ventana
        </button>
      </div>

      <div class="disclaimer-box">
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
              <span class="eyebrow">DEMO AISLADA EN VIVO</span>
              <h4 style="margin: 0; font-size: 16px;">Simulador de Validación de Suscripción</h4>
            </div>
            <span class="tag">Paso ${step + 1} de ${questions.length}</span>
          </div>

          <p style="font-size: 14.5px; font-weight: 600; color: var(--ink); margin-bottom: 14px;">
            ${questions[step]}
          </p>

          <div style="display: flex; gap: 10px; margin-bottom: 18px;">
            <button type="button" class="btn ${userAnswers[step] === 'Sí' ? 'primary' : 'light'}" id="inmodal-yes">
              Sí, comprendido
            </button>
            <button type="button" class="btn ${userAnswers[step] === 'No' ? 'primary' : 'light'}" id="inmodal-no">
              No / Tengo dudas
            </button>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="muted" style="font-size: 12px;">Simulación local · Sin conexión a bases reales</span>
            <button type="button" class="btn primary" id="inmodal-next" ${!userAnswers[step] ? 'disabled' : ''}>
              ${step === questions.length - 1 ? 'Evaluar Scoring →' : 'Siguiente pregunta →'}
            </button>
          </div>
        `;

        document.getElementById('inmodal-yes').onclick = () => {
          userAnswers[step] = 'Sí';
          update();
        };
        document.getElementById('inmodal-no').onclick = () => {
          userAnswers[step] = 'No';
          update();
        };
        document.getElementById('inmodal-next').onclick = () => {
          step++;
          update();
        };
      } else {
        const hasDoubts = Object.values(userAnswers).includes('No');
        container.innerHTML = `
          <div class="inline-demo-header">
            <div>
              <span class="eyebrow">RESULTADO DE LA SIMULACIÓN</span>
              <h4 style="margin: 0; font-size: 16px;">${hasDoubts ? 'Derivado para Recontacto de Calidad' : 'Validación Positiva · Aprobado'}</h4>
            </div>
            <span class="tag ${hasDoubts ? 'warn' : 'success'}">${hasDoubts ? 'Requiere Llamado' : 'Conforme'}</span>
          </div>

          <p style="font-size: 13.5px; margin-bottom: 16px;">
            ${hasDoubts 
              ? 'El sistema detectó que existen conceptos contractuales observados y generaría un ticket automático en el Tablero de Calidad.' 
              : 'Se validó la correcta comprensión de las 3 condiciones clave. El suscriptor queda listo para emisión.'}
          </p>

          <div style="display: flex; gap: 12px; align-items: center;">
            <button type="button" class="btn light" id="inmodal-restart">Volver a probar simulación</button>
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
            <span class="eyebrow">DEMO AISLADA EN VIVO</span>
            <h4 style="margin: 0; font-size: 16px;">Recálculo de Indicadores por Sucursal</h4>
          </div>
          <div style="display: flex; gap: 6px;">
            <button type="button" class="btn ${branch === 'Jujuy' ? 'primary' : 'light'}" style="padding: 6px 12px; font-size: 12px;" id="inmodal-branch-jujuy">Sede Jujuy</button>
            <button type="button" class="btn ${branch === 'Salta' ? 'primary' : 'light'}" style="padding: 6px 12px; font-size: 12px;" id="inmodal-branch-salta">Sede Salta</button>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 18px 0;">
          <div style="background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 14px;">
            <small style="font-size: 11px; color: var(--muted); text-transform: uppercase; font-weight: 700; display: block;">Validaciones</small>
            <strong style="font-size: 24px; color: var(--ink); font-family: 'Manrope';">${d.total}</strong>
          </div>
          <div style="background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 14px;">
            <small style="font-size: 11px; color: var(--muted); text-transform: uppercase; font-weight: 700; display: block;">Comprensión</small>
            <strong style="font-size: 24px; color: var(--primary); font-family: 'Manrope';">${d.ok}%</strong>
          </div>
          <div style="background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 14px;">
            <small style="font-size: 11px; color: var(--muted); text-transform: uppercase; font-weight: 700; display: block;">Recontactos</small>
            <strong style="font-size: 24px; color: #9A6700; font-family: 'Manrope';">${d.recontact}</strong>
          </div>
        </div>

        <div style="margin-top: 10px;">
          <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; margin-bottom: 4px;">
            <span>Efectividad de Scoring Comercial</span>
            <span>${d.ok}%</span>
          </div>
          <div class="track" style="height: 10px; background: #E8EFF2; border-radius: 5px; overflow: hidden;">
            <div style="width: ${d.ok}%; height: 100%; background: var(--primary); border-radius: 5px; transition: width 0.3s ease;"></div>
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
            <span class="eyebrow">DEMO AISLADA EN VIVO</span>
            <h4 style="margin: 0; font-size: 16px;">Simulador de Checklist de Legajo 0KM</h4>
          </div>
          <span class="tag ${pct === 100 ? 'success' : 'warn'}">${pct}% de Cumplimiento</span>
        </div>

        <div style="display: grid; gap: 10px; margin: 16px 0;">
          <label style="display: flex; align-items: center; gap: 10px; background: var(--paper); padding: 10px 14px; border: 1px solid var(--line); border-radius: var(--radius-sm); cursor: pointer;">
            <input type="checkbox" id="chk-b1" ${checks.b1 ? 'checked' : ''}>
            <span style="font-size: 13.5px;">Boleto físico de compraventa firmado (6.1.1.1)</span>
          </label>
          <label style="display: flex; align-items: center; gap: 10px; background: var(--paper); padding: 10px 14px; border: 1px solid var(--line); border-radius: var(--radius-sm); cursor: pointer;">
            <input type="checkbox" id="chk-b2" ${checks.b2 ? 'checked' : ''}>
            <span style="font-size: 13.5px;">Verificación de e-mail en sistemas CEM y SIAC (6.1.3.1)</span>
          </label>
          <label style="display: flex; align-items: center; gap: 10px; background: var(--paper); padding: 10px 14px; border: 1px solid var(--line); border-radius: var(--radius-sm); cursor: pointer;">
            <input type="checkbox" id="chk-b3" ${checks.b3 ? 'checked' : ''}>
            <span style="font-size: 13.5px;">Hoja con información útil firmada por el cliente (7.1.1.1)</span>
          </label>
        </div>

        <div style="font-size: 13px; color: ${pct === 100 ? 'var(--success)' : '#9A6700'}; font-weight: 700;">
          Dictamen: ${pct === 100 ? '✓ Expediente conforme para entrega' : '⚠ Observado: Requiere regularización documental antes de liberar entrega'}
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
          <span class="eyebrow">DEMO AISLADA EN VIVO</span>
          <h4 style="margin: 0; font-size: 16px;">Control Rápido de Stock en Pañol</h4>
        </div>
        <span class="tag success" id="inmodal-stock-tag">${stock} un. disponibles</span>
      </div>

      <p style="font-size: 13px; margin-bottom: 12px;">Artículo simulado: <strong>Kits descartables de protección de taller</strong></p>

      <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 12px;">
        <input type="number" id="inmodal-qty" value="4" min="1" max="24" style="width: 80px; padding: 8px;" />
        <button type="button" class="btn primary" style="padding: 9px 14px; font-size: 12.5px;" id="inmodal-btn-order">
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
      document.getElementById('inmodal-stock-feedback').innerHTML = `<span style="color: var(--success); font-weight: 700;">✓ Salida de ${q} unidades autorizada y registrada.</span>`;
    };
  } else if (type === 'avance-pvt' || type === 'fideliza') {
    container.innerHTML = `
      <div class="inline-demo-header">
        <div>
          <span class="eyebrow">DEMOSTRACIÓN INTERACTIVA</span>
          <h4 style="margin: 0; font-size: 16px;">Módulo Completo Disponible</h4>
        </div>
        <span class="tag">Simulación Lista</span>
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
          <span class="eyebrow">ESTRUCTURA DE TESIS · ISO 14001:2015</span>
          <h4 style="margin: 0; font-size: 16px;">Matriz Metodológica de Implementación</h4>
        </div>
        <span class="tag">En curso</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 16px 0;">
        <div style="background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 12px;">
          <strong style="font-size: 13px; color: var(--primary); display: block; margin-bottom: 4px;">01. Diagnóstico Inicial</strong>
          <p style="font-size: 12px; color: var(--muted); margin: 0;">Relevamiento de fuentes de generación de residuos peligrosos (aceites, filtros, baterías) y consumo hídrico/eléctrico en talleres.</p>
        </div>
        <div style="background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 12px;">
          <strong style="font-size: 13px; color: var(--primary); display: block; margin-bottom: 4px;">02. Matriz de Significancia</strong>
          <p style="font-size: 12px; color: var(--muted); margin: 0;">Evaluación probabilística de severidad, frecuencia y cumplimiento legal para priorizar aspectos e impactos ambientales.</p>
        </div>
        <div style="background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 12px;">
          <strong style="font-size: 13px; color: var(--primary); display: block; margin-bottom: 4px;">03. Plan de Adecuación</strong>
          <p style="font-size: 12px; color: var(--muted); margin: 0;">Procedimientos normalizados para disposición transitoria, manifiestos de transporte y contingencias ante derrames.</p>
        </div>
        <div style="background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 12px;">
          <strong style="font-size: 13px; color: var(--primary); display: block; margin-bottom: 4px;">04. Tablero de Ecoeficiencia</strong>
          <p style="font-size: 12px; color: var(--muted); margin: 0;">Indicadores de seguimiento: kg de residuos por unidad intervenida y ratio de eficiencia energética en planta.</p>
        </div>
      </div>
    `;
  } else if (type === 'panaderia') {
    container.innerHTML = `
      <div class="inline-demo-header">
        <div>
          <span class="eyebrow">INGENIERÍA INDUSTRIAL · OPERACIONES</span>
          <h4 style="margin: 0; font-size: 16px;">Balance de Capacidad y Modelo EOQ</h4>
        </div>
        <span class="tag">Académico</span>
      </div>
      <p style="font-size: 13px; margin-bottom: 12px;">
        Modelado de capacidad instalada para Panadería San Pantaleón: la optimización del tamaño de lote (EOQ) y la redistribución del área de horneado eliminó cruces innecesarios de bandejas en un 22%.
      </p>
    `;
  } else if (type === 'vino') {
    container.innerHTML = `
      <div class="inline-demo-header">
        <div>
          <span class="eyebrow">AUTOMATIZACIÓN INDUSTRIAL</span>
          <h4 style="margin: 0; font-size: 16px;">Lazo Cerrado de Fermentación Enológica</h4>
        </div>
        <span class="tag">Académico</span>
      </div>
      <p style="font-size: 13px; margin-bottom: 12px;">
        Arquitectura de control PID simulada: monitoreo continuo de temperatura de fermentación con sensores Pt100 y modulación de camisa de refrigeración con glicol mediante válvulas proporcionales.
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
