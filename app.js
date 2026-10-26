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
   DEFERRED 3D ENGINEERING KINETIC LATTICE (PURE MONOCHROME)
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

  // Engineering Geometry: Hexagonal Geodesic Prism with Central Hub
  const rawNodes = [
    // Outer Upper Ring
    [-1.2, -0.7, -0.7], [0, -0.7, -1.4], [1.2, -0.7, -0.7],
    [1.2, -0.7, 0.7],   [0, -0.7, 1.4],  [-1.2, -0.7, 0.7],
    // Outer Lower Ring
    [-1.2, 0.7, -0.7],  [0, 0.7, -1.4],  [1.2, 0.7, -0.7],
    [1.2, 0.7, 0.7],    [0, 0.7, 1.4],   [-1.2, 0.7, 0.7],
    // Central Nucleus Nodes
    [0, -1.5, 0],       [0, 1.5, 0],
    [-0.5, 0, -0.5],    [0.5, 0, -0.5],  [0.5, 0, 0.5], [-0.5, 0, 0.5]
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

  let rotX = 0.35;
  let rotY = 0.45;
  let targetRotX = 0.35;
  let targetRotY = 0.45;
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

  // Defer initialization slightly after initial paint
  setTimeout(() => {
    resize();
    window.addEventListener('resize', resize);
  }, 100);

  // Mouse & Touch Controls
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  container.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const dx = e.clientX - prevMouseX;
      const dy = e.clientY - prevMouseY;
      targetRotY += dx * 0.006;
      targetRotX += dy * 0.006;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    } else {
      const rect = container.getBoundingClientRect();
      const normX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const normY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      targetRotY = 0.45 + normX * 0.35;
      targetRotX = 0.35 - normY * 0.25;
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
      targetRotY += dx * 0.008;
      targetRotX += dy * 0.008;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  // Pause when not visible
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

    // Continuous smooth rotation
    rotX += (targetRotX - rotX) * 0.04;
    rotY += (targetRotY - rotY) * 0.04;
    targetRotY += 0.0018; // Slow constant spin

    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

    const cx = width / 2;
    const cy = height / 2;
    const scale = Math.min(width, height) * 0.28;
    const fov = 4.0;

    // Transform and project nodes
    const proj = rawNodes.map(p => {
      // Rotate Y
      const x1 = p[0] * cosY - p[2] * sinY;
      const z1 = p[0] * sinY + p[2] * cosY;
      // Rotate X
      const y1 = p[1] * cosX - z1 * sinX;
      const z2 = p[1] * sinX + z1 * cosX;

      const factor = fov / (fov + z2 * 0.45);
      return {
        x: cx + x1 * scale * factor,
        y: cy + y1 * scale * factor,
        z: z2,
        factor: factor
      };
    });

    // 1. Draw Subtle Background Concentric Ring
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, scale * 1.35, 0, Math.PI * 2);
    ctx.strokeStyle = '#EDEDEB';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 6]);
    ctx.stroke();
    ctx.restore();

    // 2. Draw Fine Monochrome Edges
    edges.forEach(([i, j]) => {
      const p1 = proj[i];
      const p2 = proj[j];
      const avgZ = (p1.z + p2.z) / 2;
      const alpha = Math.max(0.12, Math.min(0.75, 0.45 + avgZ * 0.2));

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(23, 23, 23, ${alpha})`;
      ctx.lineWidth = 1.1;
      ctx.stroke();
    });

    // 3. Draw Engineering Structural Nodes
    proj.forEach((p, idx) => {
      const radius = Math.max(2.5, 4.0 * p.factor);
      const alpha = Math.max(0.2, Math.min(1.0, 0.55 + p.z * 0.25));

      // Outer point
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = idx >= 12 ? '#171717' : `rgba(36, 36, 36, ${alpha})`;
      ctx.fill();

      // Inner white center for hub nodes
      if (idx >= 12) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
      }
    });

    animId = requestAnimationFrame(loop);
  }

  // Start loop after page stabilizes
  setTimeout(() => {
    loop();
  }, 200);
})();
