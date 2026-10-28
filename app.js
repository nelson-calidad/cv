/**
 * Nelson Notario — Portafolio Profesional
 * Minimalismo Editorial Monocromático & Gestión de Casos de Estudio
 */

const projects = [
  {
    id: 'tesis',
    name: 'Tesis de Ingeniería Industrial — Sistema de Gestión Ambiental ISO 14001',
    cat: ['ingenieria', 'calidad'],
    label: 'Ingeniería Industrial · Sustentabilidad · UNJu',
    summary: 'Propuesta metodológica para la estructuración integral de un Sistema de Gestión Ambiental en operaciones automotrices oficiales de Autosol Jujuy.',
    problem: 'Los procesos de posventa y taller automotriz (lavadero, mecánica, lubricación, chapa y pintura) generan aspectos ambientales críticos: aceites usados, baterías en desuso, efluentes con hidrocarburos y consumo intensivo de recursos hídricos y eléctricos que requieren sistematización bajo estándares internacionales.',
    solution: 'Relevamiento de campo del 100% de operaciones, matriz de identificación y evaluación de aspectos e impactos ambientales, definición de indicadores de ecoeficiencia y formulación de manual de procedimientos y gestión de residuos peligrosos.',
    role: 'Autor de la tesis de grado en Ingeniería Industrial (Facultad de Ingeniería - Universidad Nacional de Jujuy), aplicando el estudio a las operaciones reales de Autosol Jujuy.',
    result: 'Propuesta metodológica en desarrollo (etapa de tesis de grado), orientada a sentar una base técnica sólida para una futura certificación institucional bajo norma ISO 14001:2015 (no implementado ni certificado actualmente).',
    statusBadge: 'Tesis de grado en etapa final',
    demoUrl: null
  },
  {
    id: 'tablero',
    name: 'Tablero de Calidad / Centro de Control Operativo',
    cat: ['calidad', 'automatizacion'],
    label: 'Gestión de Calidad · Control Operativo · Soluciones con IA',
    summary: 'Panel gerencial interactivo para seguimiento y consolidación de indicadores clave de desempeño en las sedes de Jujuy y Salta.',
    problem: 'Dispersión de registros operativos y necesidad de la dirección de contar con una visión unificada en tiempo real del cumplimiento de auditorías PCGC Volkswagen, satisfacción de clientes (NPS), horas de taller y programas de capacitación.',
    solution: 'Desarrollo de un Centro de Control Operativo con Sala de Situación interactiva, filtros por sede (Jujuy, Salta, Consolidado) y trimestre, y desglose analítico de metas versus desvíos reales.',
    role: 'Definición de reglas de negocio, formulación de KPIs y estructuración de la interfaz frontend asistida por herramientas de inteligencia artificial generativa.',
    result: 'Centralización de datos operativos, facilitando la toma de decisiones gerenciales y la preparación de evidencias para auditorías de marca.',
    statusBadge: 'Implementado · Operativo',
    demoUrl: 'demos/tablero.html'
  },
  {
    id: 'scoring',
    name: 'Automatización del Scoring Comercial',
    cat: ['calidad', 'automatizacion'],
    label: 'Gestión de Calidad · Automatización · Soluciones con IA',
    summary: 'Digitalización del proceso de validación contractual de suscriptores previa al primer débito bancario en planes de ahorro.',
    problem: 'Limitaciones operativas del call center manual tradicional para contactar oportunamente al 100% de los suscriptores antes de su primer pago, generando riesgos de desinformación sobre esquemas 70/30, licitaciones y cuotas móviles.',
    solution: 'Encuesta digital interactiva con preguntas directas de control, cálculo de score de comprensión y derivación automática de alertas para recontacto preventivo de supervisión ante dudas detectadas.',
    role: 'Relevamiento de puntos críticos según protocolo PCGC Volkswagen, diseño metodológico de preguntas y desarrollo ágil asistido por IA (Codex / Claude).',
    result: 'Digitalización del 100% de las validaciones, reduciendo drásticamente la tasa de reclamos iniciales y garantizando transparencia comercial.',
    statusBadge: 'En uso operativo',
    demoUrl: 'demos/scoring.html'
  },
  {
    id: 'legajos',
    name: 'AUDITORES V2.1 · Seguimiento y Control Documental',
    cat: ['calidad', 'automatizacion'],
    label: 'Gestión de Calidad · Auditoría Normativa · IA',
    summary: 'Herramienta de auditoría digital para revisión estandarizada de legajos comerciales según normas PCGC Volkswagen e ISO 9001.',
    problem: 'La auditoría física tradicional de legajos generaba cuellos de botella en la entrega de unidades 0KM y riesgos de desvíos en requisitos críticos (boletos físicos, comprobantes SIAC, certificados y firmas).',
    solution: 'Panel de auditoría con muestreo de lote por sucursal, barra de avance de objetivos en tiempo real, checklist digital parametrizado y generación de resúmenes de dictamen.',
    role: 'Mapeo de ítems de control PCGC Volkswagen y desarrollo frontend asistido con herramientas de inteligencia artificial.',
    result: 'Estandarización del control previo a facturación, reduciendo los tiempos de muestreo y asegurando trazabilidad documental.',
    statusBadge: 'Funcional · En uso',
    demoUrl: 'demos/legajos.html'
  },
  {
    id: 'insumos',
    name: 'Gestión Operativa de Insumos de Taller',
    cat: ['ingenieria', 'automatizacion'],
    label: 'Ingeniería de Procesos · Operaciones · IA',
    summary: 'Sistema para solicitudes internas, autorizaciones y trazabilidad de materiales y repuestos auxiliares en pañol de taller.',
    problem: 'Falta de registro unificado en el consumo de insumos entre Taller Mecánico, Chapa y Pintura, y Posventa, provocando quiebres imprevistos de inventario y pedidos informales.',
    solution: 'Plataforma web interna con catálogo categorizado de insumos, flujo de aprobación de pedidos por supervisor y control de stocks críticos.',
    role: 'Mapeo del circuito operativo de taller, diseño de matriz de autorización y construcción asistida por IA.',
    result: 'Trazabilidad por área y responsable, eliminando solicitudes informales y optimizando el reaprovisionamiento de pañol.',
    statusBadge: 'Funcional',
    demoUrl: 'demos/insumos.html'
  },
  {
    id: 'fideliza',
    name: 'Autosol Fideliza · Gestión y Retención de Clientes',
    cat: ['calidad', 'automatizacion'],
    label: 'Gestión de Calidad · Posventa · Automatización',
    summary: 'Agenda inteligente de recontactos y retención de clientes para servicios de posventa oficial y renovación de unidades.',
    problem: 'Pérdida de continuidad en el contacto con clientes tras la entrega del vehículo, impactando negativamente en la concurrencia a servicios oficiales obligatorios de 10.000 y 20.000 km.',
    solution: 'Agenda digital con alertas preventivas temporizadas (48hs post-entrega, 6 meses, 12 meses), categorización de estados y registro de observaciones de satisfacción.',
    role: 'Definición de etapas del ciclo de vida del cliente, especificación de reglas de alerta y desarrollo asistido por IA.',
    result: 'Sistematización de la cartera de posventa y aumento del retorno preventivo a talleres oficiales.',
    statusBadge: 'En desarrollo',
    demoUrl: 'demos/fideliza.html'
  },
  {
    id: 'avance-pvt',
    name: 'Avance PVT · Productividad de Posventa',
    cat: ['ingenieria', 'calidad'],
    label: 'Ingeniería Industrial · Calidad · Datos',
    summary: 'Dashboard operativo para monitoreo de productividad de talleres, avance semanal de órdenes de reparación y absorción presupuestada.',
    problem: 'Dificultad para comparar en tiempo real el ritmo de órdenes de trabajo cerradas versus el objetivo presupuestado (PPT) en los talleres de Jujuy y Salta.',
    solution: 'Dashboard analítico con cálculo de productividad diaria, evolución por semana y ratio porcentual de cumplimiento de metas de absorción de taller.',
    role: 'Definición de KPIs operativos de taller y ensamble del panel analítico con asistencia de herramientas de IA.',
    result: 'Detección oportuna de cuellos de botella en la capacidad de carga del taller y balanceo dinámico de turnos.',
    statusBadge: 'Implementado',
    demoUrl: 'demos/avance-pvt.html'
  },
  {
    id: 'panaderia',
    name: 'Planificación de Producción, Layout y Métodos',
    cat: ['ingenieria'],
    label: 'Ingeniería Industrial · Operaciones · Métodos',
    summary: 'Estudio de balance de línea, cálculo de capacidad, distribución en planta y gestión de compras para planta de panificación industrial.',
    problem: 'Cuellos de botella en etapas de amasado y fermentación, manipulación excesiva de materias primas y sobredimensionamiento en compras.',
    solution: 'Plan maestro de producción, modelo de lote económico (EOQ), balanceo de puestos y propuesta de redistribución física en planta (layout relacional de Muther).',
    role: 'Modelado cuantitativo, toma de tiempos de ciclo y diseño de distribución en planta como proyecto académico de Ingeniería Industrial.',
    result: 'Reducción teórica calculada del 22% en traslados internos de materias primas y optimización en inventarios de harina y levadura.',
    statusBadge: 'Proyecto académico UNJu',
    demoUrl: null
  },
  {
    id: 'vino',
    name: 'Automatización de Procesos Industriales Enológicos',
    cat: ['ingenieria', 'automatizacion'],
    label: 'Ingeniería Industrial · Control Automático',
    summary: 'Diseño de lazo de control cerrado para nivel y temperatura en tanques de fermentación y maceración enológica.',
    problem: 'La falta de control preciso sobre la curva de temperatura durante la fermentación degrada las propiedades organolépticas del mosto vitivinícola.',
    solution: 'Ingeniería conceptual: selección de sensores RTD Pt100, transmisores de presión diferencial, electroválvulas neumáticas y lazo de control PID en diagramas P&ID bajo normas ISA.',
    role: 'Especificación de instrumentación, arquitectura del lazo de realimentación y diagramación técnica como proyecto de cátedra de Control Automático.',
    result: 'Aprobación con calificación sobresaliente en la cátedra de Automatización y Control Industrial.',
    statusBadge: 'Proyecto académico UNJu',
    demoUrl: null
  }
];

// Modal Elements
const dialog = document.getElementById('projectDialog');
const detail = document.getElementById('detail');
const closeDialog = document.getElementById('closeDialog');

function openProject(id) {
  const p = projects.find(x => x.id === id);
  if (!p || !dialog || !detail) return;

  detail.innerHTML = `
    <div class="modal-case-body">
      <div class="modal-tag-row">
        <span class="pill-category">${p.label}</span>
        <span class="badge-status-clean">${p.statusBadge}</span>
      </div>

      <h2 id="dialogTitle" class="modal-case-title">${p.name}</h2>
      <p class="modal-case-summary">${p.summary}</p>

      <div class="modal-grid-two">
        <div class="modal-box-card">
          <h4>Problema Operativo / Necesidad</h4>
          <p>${p.problem}</p>
        </div>
        <div class="modal-box-card">
          <h4>Solución Diseñada / Propuesta</h4>
          <p>${p.solution}</p>
        </div>
      </div>

      <div class="modal-box-card full-width">
        <h4>Participación Profesional y Metodología</h4>
        <p>${p.role}</p>
      </div>

      <div class="modal-box-card full-width">
        <h4>Resultados y Estado Actual</h4>
        <p>${p.result}</p>
      </div>

      <div class="modal-actions-bar">
        ${p.demoUrl ? `
          <a class="btn primary" href="${p.demoUrl}" target="_blank" rel="noopener noreferrer">
            Abrir demostración interactiva ↗
          </a>
        ` : ''}

        <button type="button" class="btn secondary" id="btn-modal-close-foot">
          Cerrar caso
        </button>
      </div>

      <div class="modal-disclaimer">
        <strong>Nota de confidencialidad y rigor profesional:</strong> Las herramientas y demostraciones se presentan exclusivamente con datos simulados y ficticios. No se exponen repositorios corporativos internos ni registros con datos de clientes reales.
      </div>
    </div>
  `;

  dialog.showModal();

  document.getElementById('btn-modal-close-foot')?.addEventListener('click', () => dialog.close());
}

if (closeDialog && dialog) {
  closeDialog.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
}

// Bind Buttons on Index Page
document.querySelectorAll('.btn-open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id');
    if (id) openProject(id);
  });
});

// Render Archive Page Grid (if #projects exists)
const archiveGrid = document.getElementById('projects');
if (archiveGrid) {
  function renderArchive(filter = 'todos') {
    const filtered = projects.filter(p => filter === 'todos' || p.cat.includes(filter));

    archiveGrid.innerHTML = filtered.map(p => `
      <article class="archive-card" data-id="${p.id}">
        <div class="case-header-row">
          <span class="pill-category">${p.label.split('·')[0].trim()}</span>
          <span class="badge-status-clean">${p.statusBadge}</span>
        </div>

        <h3 class="archive-card-title">${p.name}</h3>
        <p class="archive-card-desc">${p.summary}</p>

        <div class="archive-card-actions">
          <button type="button" class="btn secondary btn-card-details" data-id="${p.id}">
            Ver caso técnico
          </button>
          ${p.demoUrl ? `
            <a href="${p.demoUrl}" class="btn primary btn-card-demo">
              Demo ↗
            </a>
          ` : ''}
        </div>
      </article>
    `).join('');

    archiveGrid.querySelectorAll('.btn-card-details').forEach(btn => {
      btn.addEventListener('click', () => openProject(btn.getAttribute('data-id')));
    });
  }

  // Bind Archive Filter Buttons
  document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderArchive(btn.getAttribute('data-filter'));
    });
  });

  renderArchive('todos');
}

// Mobile Menu Navigation
const menuBtn = document.getElementById('menu');
const linksNav = document.getElementById('links');

if (menuBtn && linksNav) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !expanded);
    linksNav.classList.toggle('nav-open');
  });

  linksNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuBtn.setAttribute('aria-expanded', 'false');
      linksNav.classList.remove('nav-open');
    });
  });
}


/* ==========================================================================
   COMPOUND SCROLL REVEAL MOTION & SUBTLE ENTRANCE
   ========================================================================== */
(function initScrollReveal() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const revealTargets = document.querySelectorAll(
    '.case-card-monumental, .timeline-editorial-item, .academic-editorial-col, .archive-editorial-divider, .method-flow-strip'
  );

  revealTargets.forEach(el => el.classList.add('reveal-init'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in-view'));
  }
})();

/* ==========================================================================
   HYBRID 3D KINETIC ENGINE (Engineering Lattice + Compound Translucent Ribbon)
   Combina la geometría estructural de ingeniería con cintas orbitales traslúcidas
   ========================================================================== */
(function init3D() {
  const canvas = document.getElementById('hero3dCanvas');
  const container = document.getElementById('hero3dContainer');
  if (!canvas || !container) return;

  // Check reduced motion preference
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let animId = null;
  let isVisible = true;
  let time = 0;

  // 1. Engineering Geometry: Hexagonal Geodesic Prism with Central Nucleus
  const rawNodes = [
    // Outer Upper Ring
    [-1.2, -0.65, -0.7], [0, -0.65, -1.35], [1.2, -0.65, -0.7],
    [1.2, -0.65, 0.7],   [0, -0.65, 1.35],  [-1.2, -0.65, 0.7],
    // Outer Lower Ring
    [-1.2, 0.65, -0.7],  [0, 0.65, -1.35],  [1.2, 0.65, -0.7],
    [1.2, 0.65, 0.7],    [0, 0.65, 1.35],   [-1.2, 0.65, 0.7],
    // Central Apex Hubs
    [0, -1.45, 0],       [0, 1.45, 0],
    // Core Nucleus
    [-0.45, 0, -0.45],   [0.45, 0, -0.45],  [0.45, 0, 0.45], [-0.45, 0, 0.45]
  ];

  const edges = [
    // Upper Ring
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
    // Lower Ring
    [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 6],
    // Vertical Pillars
    [0, 6], [1, 7], [2, 8], [3, 9], [4, 10], [5, 11],
    // Diagonal Cross-bracing
    [0, 7], [1, 8], [2, 9], [3, 10], [4, 11], [5, 6],
    // Top Apex Connections
    [12, 0], [12, 1], [12, 2], [12, 3], [12, 4], [12, 5],
    // Bottom Apex Connections
    [13, 6], [13, 7], [13, 8], [13, 9], [13, 10], [13, 11],
    // Core Internal Network
    [14, 15], [15, 16], [16, 17], [17, 14],
    [14, 0], [15, 2], [16, 3], [17, 5],
    [14, 6], [15, 8], [16, 9], [17, 11]
  ];

  // 2. Compound Translucent Orbital Ribbon Geometry
  const ribbonSegments = 40;
  const ribbonWidth = 0.22;
  const ribbonPoints = [];
  for (let i = 0; i <= ribbonSegments; i++) {
    const t = (i / ribbonSegments) * Math.PI * 2;
    const cx = Math.sin(t) * 1.45;
    const cy = Math.cos(t * 2) * 0.65;
    const cz = Math.cos(t) * 1.45;

    // Tangent vector
    const tx = Math.cos(t) * 1.45;
    const ty = -Math.sin(t * 2) * 1.3;
    const tz = -Math.sin(t) * 1.45;

    // Normal approximation
    const nx = -Math.sin(t);
    const ny = 0;
    const nz = -Math.cos(t);

    // Binormal = cross(T, N)
    const bx = ty * nz - tz * ny;
    const by = tz * nx - tx * nz;
    const bz = tx * ny - ty * nx;
    const bLen = Math.hypot(bx, by, bz) || 1;
    const ux = (bx / bLen) * ribbonWidth;
    const uy = (by / bLen) * ribbonWidth;
    const uz = (bz / bLen) * ribbonWidth;

    ribbonPoints.push({
      top: [cx + ux, cy + uy, cz + uz],
      bot: [cx - ux, cy - uy, cz - uz]
    });
  }

  let rotX = 0.32;
  let rotY = 0.42;
  let targetRotX = 0.32;
  let targetRotY = 0.42;
  let isDragging = false;
  let prevMouseX = 0;
  let prevMouseY = 0;

  function resize() {
    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  setTimeout(() => {
    resize();
    window.addEventListener('resize', resize);
  }, 100);

  // Mouse & Touch Controls with silky lerp
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const dx = e.clientX - prevMouseX;
      const dy = e.clientY - prevMouseY;
      targetRotY += dx * 0.005;
      targetRotX += dy * 0.005;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    } else {
      const rect = container.getBoundingClientRect();
      const normX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const normY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      if (Math.abs(normX) < 2.5 && Math.abs(normY) < 2.5) {
        targetRotY = 0.42 + normX * 0.32;
        targetRotX = 0.32 - normY * 0.22;
      }
    }
  });

  // Touch Support
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => { isDragging = false; });

  container.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
      const dx = e.touches[0].clientX - prevMouseX;
      const dy = e.touches[0].clientY - prevMouseY;
      targetRotY += dx * 0.007;
      targetRotX += dy * 0.007;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  // Pause when off-screen for maximum efficiency
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible && !animId) loop();
    });
    observer.observe(container);
  }

  function loop() {
    if (!isVisible) {
      animId = null;
      return;
    }

    ctx.clearRect(0, 0, width, height);

    time += 0.018;
    const levitateY = Math.sin(time) * 4.5;

    // Silky lerp rotation & slow continuous spin
    rotX += (targetRotX - rotX) * 0.045;
    rotY += (targetRotY - rotY) * 0.045;
    targetRotY += 0.0016;

    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

    const cx = width / 2;
    const cy = height / 2 + levitateY;
    const scale = Math.min(width, height) * 0.27;
    const fov = 4.2;

    // Helper for 3D projection
    function project(p) {
      const x1 = p[0] * cosY - p[2] * sinY;
      const z1 = p[0] * sinY + p[2] * cosY;
      const y1 = p[1] * cosX - z1 * sinX;
      const z2 = p[1] * sinX + z1 * cosX;
      const factor = fov / (fov + z2 * 0.42);
      return {
        x: cx + x1 * scale * factor,
        y: cy + y1 * scale * factor,
        z: z2,
        factor: factor
      };
    }

    // 1. Project Engineering Nodes
    const projNodes = rawNodes.map(p => project(p));

    // 2. Project Ribbon Points
    const projRibbon = ribbonPoints.map(pt => ({
      top: project(pt.top),
      bot: project(pt.bot)
    }));

    // 3. Precision Engineering Blueprint Background Ring
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, scale * 1.38, 0, Math.PI * 2);
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.stroke();

    // 4 cardinal tick marks
    const rRing = scale * 1.38;
    for (let a = 0; a < 4; a++) {
      const ang = a * (Math.PI / 2);
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(ang) * (rRing - 5), cy + Math.sin(ang) * (rRing - 5));
      ctx.lineTo(cx + Math.cos(ang) * (rRing + 5), cy + Math.sin(ang) * (rRing + 5));
      ctx.strokeStyle = '#C7C7C7';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([]);
      ctx.stroke();
    }
    ctx.restore();

    // 4. Assemble Render Elements with Painter's Algorithm Depth Sorting
    const elements = [];

    // Ribbon Quads
    for (let i = 0; i < ribbonSegments; i++) {
      const curr = projRibbon[i];
      const next = projRibbon[i + 1];
      const avgZ = (curr.top.z + curr.bot.z + next.top.z + next.bot.z) / 4;

      // Normal vector approximation for dynamic lighting
      const vx = next.top.x - curr.bot.x;
      const vy = next.top.y - curr.bot.y;
      const wx = next.bot.x - curr.top.x;
      const wy = next.bot.y - curr.top.y;
      const cross = vx * wy - vy * wx;
      const shade = Math.min(1.0, Math.max(0.18, 0.45 + (cross / 4000)));

      elements.push({
        type: 'ribbon',
        z: avgZ,
        curr: curr,
        next: next,
        shade: shade
      });
    }

    // Strut Edges
    edges.forEach(([i, j]) => {
      const p1 = projNodes[i];
      const p2 = projNodes[j];
      elements.push({
        type: 'edge',
        z: (p1.z + p2.z) / 2,
        p1: p1,
        p2: p2
      });
    });

    // Nodes
    projNodes.forEach((p, idx) => {
      elements.push({
        type: 'node',
        z: p.z,
        p: p,
        idx: idx
      });
    });

    // Sort back-to-front
    elements.sort((a, b) => a.z - b.z);

    // 5. Render Sorted Elements
    elements.forEach(item => {
      if (item.type === 'ribbon') {
        const { curr, next, shade } = item;
        // Translucent Compound Stone/Graphite Facet
        ctx.beginPath();
        ctx.moveTo(curr.top.x, curr.top.y);
        ctx.lineTo(next.top.x, next.top.y);
        ctx.lineTo(next.bot.x, next.bot.y);
        ctx.lineTo(curr.bot.x, curr.bot.y);
        ctx.closePath();

        const baseVal = Math.round(180 + shade * 65);
        const alpha = Math.max(0.18, Math.min(0.48, 0.32 + item.z * 0.12));
        ctx.fillStyle = `rgba(${baseVal}, ${baseVal}, ${baseVal}, ${alpha})`;
        ctx.fill();

        // Edge line along ribbon trajectory
        ctx.strokeStyle = `rgba(160, 160, 160, ${alpha * 0.8})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      } else if (item.type === 'edge') {
        const { p1, p2, z } = item;
        const alpha = Math.max(0.14, Math.min(0.72, 0.42 + z * 0.2));
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(23, 23, 23, ${alpha})`;
        ctx.lineWidth = 1.05;
        ctx.stroke();
      } else if (item.type === 'node') {
        const { p, idx } = item;
        const radius = Math.max(2.2, 3.8 * p.factor);
        const alpha = Math.max(0.25, Math.min(1.0, 0.6 + p.z * 0.25));

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = idx >= 12 ? '#171717' : `rgba(34, 34, 34, ${alpha})`;
        ctx.fill();

        // High-contrast white nucleus for hub nodes
        if (idx >= 12) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        }
      }
    });

    animId = requestAnimationFrame(loop);
  }

  setTimeout(() => {
    loop();
  }, 180);
})();
