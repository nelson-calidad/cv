(function() {
  const areaCards = document.querySelectorAll('.area-card');
  const areaTitle = document.getElementById('area-title');
  const areaDesc = document.getElementById('area-desc');
  const tableTitle = document.getElementById('table-title');
  const tableBody = document.getElementById('table-body');

  const kpiPcgc = document.getElementById('kpi-pcgc');
  const kpiNps = document.getElementById('kpi-nps');
  const kpiScoring = document.getElementById('kpi-scoring');
  const kpiLegajos = document.getElementById('kpi-legajos');

  const filterBranch = document.getElementById('filter-branch');
  const filterQuarter = document.getElementById('filter-quarter');
  const btnScrollSituation = document.getElementById('btn-scroll-situation');

  let currentArea = 'calidad';

  const dataByArea = {
    calidad: {
      title: 'Sala de Situación · Calidad',
      desc: 'Monitoreo continuo de auditorías PCGC Volkswagen, satisfacción de clientes y control documental.',
      tableHeading: 'Detalle de Indicadores de Calidad y Auditoría',
      kpis: {
        consolidado: { k1: '96.4%', k2: '91.8%', k3: '94.2%', k4: '41 / 48' },
        jujuy: { k1: '97.1%', k2: '92.5%', k3: '95.0%', k4: '28 / 32' },
        salta: { k1: '95.6%', k2: '90.9%', k3: '93.1%', k4: '13 / 16' }
      },
      rows: [
        { proc: 'Auditoría PCGC Volkswagen (Planes de Ahorro)', resp: 'Nelson Notario', sample: '48 casos', val: 96, state: 'Conforme' },
        { proc: 'Encuestas de Scoring Comercial', resp: 'Equipo Calidad', sample: '120 llamadas', val: 94, state: 'Conforme' },
        { proc: 'Resolución de Reclamos en 1er Contacto', resp: 'Atención al Cliente', sample: '38 tickets', val: 91, state: 'Monitoreo' },
        { proc: 'Trazabilidad Documental y Legajos', resp: 'Auditoría Interna', sample: '41 legajos', val: 95, state: 'Conforme' }
      ]
    },
    postventa: {
      title: 'Sala de Situación · Postventa',
      desc: 'Control de productividad de taller, entregas a término (PPT) y satisfacción de servicio técnico.',
      tableHeading: 'Indicadores Operativos de Postventa y Taller',
      kpis: {
        consolidado: { k1: '92.3%', k2: '89.4%', k3: '4.2 h', k4: '184 O.R.' },
        jujuy: { k1: '93.5%', k2: '90.2%', k3: '3.8 h', k4: '106 O.R.' },
        salta: { k1: '90.8%', k2: '88.3%', k3: '4.7 h', k4: '78 O.R.' }
      },
      rows: [
        { proc: 'Promesa de Entrega a Término (PPT)', resp: 'Jefe de Taller', sample: '184 O.R.', val: 92, state: 'Conforme' },
        { proc: 'Disponibilidad de Repuestos en Mostrador', resp: 'Logística Repuestos', sample: '410 solicitudes', val: 88, state: 'Monitoreo' },
        { proc: 'Control de Calidad Final de Entrega 0KM', resp: 'PDI y Lavado', sample: '62 unidades', val: 98, state: 'Excelente' },
        { proc: 'Tasa de Re-trabajos de Taller', resp: 'Técnicos Certificados', sample: '184 unidades', val: 97, state: 'Bajo control' }
      ]
    },
    rrhh: {
      title: 'Sala de Situación · RRHH',
      desc: 'Seguimiento de capacitaciones oficiales Volkswagen Academy, clima laboral y dotación.',
      tableHeading: 'Indicadores de Talento y Certificaciones Oficiales',
      kpis: {
        consolidado: { k1: '98.0%', k2: '94.5%', k3: '100%', k4: '82 pers.' },
        jujuy: { k1: '98.5%', k2: '95.0%', k3: '100%', k4: '48 pers.' },
        salta: { k1: '97.2%', k2: '93.8%', k3: '100%', k4: '34 pers.' }
      },
      rows: [
        { proc: 'Capacitación VW Academy (Obligatorias)', resp: 'Coordinador RRHH', sample: '52 asesores/téc.', val: 98, state: 'Excelente' },
        { proc: 'Evaluación de Desempeño Semestral', resp: 'Gerencia General', sample: '82 colaboradores', val: 94, state: 'Conforme' },
        { proc: 'Cumplimiento Normativo SySO y EPP', resp: 'Seguridad e Higiene', sample: '2 sucursales', val: 99, state: 'Excelente' }
      ]
    },
    ambiente: {
      title: 'Sala de Situación · Gestión Ambiental (ISO 14001)',
      desc: 'Gestión de residuos peligrosos de taller, eficiencia en consumo eléctrico y huella operativa.',
      tableHeading: 'Indicadores Ambientales y Tesis Universitaria',
      kpis: {
        consolidado: { k1: '100%', k2: '88.0%', k3: '-12%', k4: '6.4 t/año' },
        jujuy: { k1: '100%', k2: '89.5%', k3: '-14%', k4: '3.8 t/año' },
        salta: { k1: '100%', k2: '86.2%', k3: '-9%', k4: '2.6 t/año' }
      },
      rows: [
        { proc: 'Disposición Certificada de Aceites Usados', resp: 'Operador Habilitado', sample: '1.200 lts', val: 100, state: 'Excelente' },
        { proc: 'Separación y Reciclaje de Filtros y Baterías', resp: 'Responsable Ambiental', sample: '140 unidades', val: 95, state: 'Conforme' },
        { proc: 'Eficiencia de Agua en Lavadero Taller', resp: 'Nelson Notario (Tesis)', sample: 'Medición mensual', val: 88, state: 'En optimización' }
      ]
    }
  };

  function updateDashboard() {
    const area = dataByArea[currentArea];
    const branch = filterBranch.value;

    areaTitle.textContent = area.title;
    areaDesc.textContent = area.desc;
    tableTitle.textContent = area.tableHeading;

    const kpiData = area.kpis[branch] || area.kpis.consolidado;
    kpiPcgc.textContent = kpiData.k1;
    kpiNps.textContent = kpiData.k2;
    kpiScoring.textContent = kpiData.k3;
    kpiLegajos.textContent = kpiData.k4;

    tableBody.innerHTML = '';
    area.rows.forEach(r => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${r.proc}</strong></td>
        <td>${r.resp}</td>
        <td>${r.sample}</td>
        <td><strong>${r.val}%</strong></td>
        <td>
          <div class="progress-bar-small">
            <div class="bar" style="width: ${r.val}%;"></div>
          </div>
        </td>
        <td><span class="kpi-badge badge-ok">${r.state}</span></td>
      `;
      tableBody.appendChild(tr);
    });
  }

  areaCards.forEach(card => {
    card.addEventListener('click', () => {
      areaCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      currentArea = card.getAttribute('data-area');
      updateDashboard();
      
      const target = document.getElementById('sala-situacion');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  if (filterBranch) filterBranch.addEventListener('change', updateDashboard);
  if (filterQuarter) filterQuarter.addEventListener('change', updateDashboard);

  if (btnScrollSituation) {
    btnScrollSituation.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('sala-situacion').scrollIntoView({ behavior: 'smooth' });
    });
  }

  updateDashboard();
})();
