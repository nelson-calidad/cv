(function() {
  const dataset = {
    Jujuy: {
      1: { s1: 68, s2: 141, s3: 112, s4: 140, s5: 66, dias: 22, objetivo: 480 },
      2: { s1: 72, s2: 125, s3: 130, s4: 115, s5: 48, dias: 20, objetivo: 450 },
      3: { s1: 85, s2: 138, s3: 142, s4: 135, s5: 55, dias: 22, objetivo: 510 },
      4: { s1: 80, s2: 132, s3: 128, s4: 130, s5: 52, dias: 21, objetivo: 490 }
    },
    Salta: {
      1: { s1: 85, s2: 162, s3: 155, s4: 158, s5: 80, dias: 22, objetivo: 600 },
      2: { s1: 90, s2: 148, s3: 152, s4: 140, s5: 65, dias: 20, objetivo: 560 },
      3: { s1: 95, s2: 170, s3: 168, s4: 165, s5: 78, dias: 22, objetivo: 630 },
      4: { s1: 92, s2: 160, s3: 156, s4: 155, s5: 70, dias: 21, objetivo: 610 }
    }
  };

  const branchSel = document.getElementById('pvt-branch');
  const monthSel = document.getElementById('pvt-month');

  function calculate() {
    const b = branchSel.value;
    const m = monthSel.value;
    const d = dataset[b][m];

    const totalServicios = d.s1 + d.s2 + d.s3 + d.s4 + d.s5;
    const serviciosDiarios = (totalServicios / d.dias).toFixed(1);
    const objetivoDiario = (d.objetivo / d.dias).toFixed(1);
    const cumplimiento = Math.round((totalServicios / d.objetivo) * 100);

    document.getElementById('pvt-kpis').innerHTML = `
      <div class="kpi brand">
        <small>Servicios Realizados</small>
        <strong>${totalServicios}</strong>
        <p>Órdenes facturadas y cerradas</p>
      </div>
      <div class="kpi success">
        <small>Objetivo Mensual (PPT)</small>
        <strong>${d.objetivo}</strong>
        <p>Capacidad presupuestada</p>
      </div>
      <div class="kpi">
        <small>Promedio Diario</small>
        <strong>${serviciosDiarios} / día</strong>
        <p>Meta diaria: ${objetivoDiario} u.</p>
      </div>
      <div class="kpi ${cumplimiento >= 100 ? 'success' : 'alert'}">
        <small>Nivel de Cumplimiento</small>
        <strong>${cumplimiento}%</strong>
        <p>${cumplimiento >= 100 ? 'Objetivo alcanzado' : 'Desvío en seguimiento'}</p>
      </div>
    `;

    document.getElementById('pvt-weeks').innerHTML = [
      ['Semana 1', d.s1],
      ['Semana 2', d.s2],
      ['Semana 3', d.s3],
      ['Semana 4', d.s4],
      ['Semana 5', d.s5]
    ].map(w => `
      <div class="week-box">
        <small>${w[0]}</small>
        <strong>${w[1]}</strong>
        <div class="muted" style="font-size: 11px; margin-top: 4px;">servicios</div>
      </div>
    `).join('');

    document.getElementById('pvt-progress-bar').innerHTML = `
      <div style="margin: 18px 0;">
        <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; margin-bottom: 8px;">
          <span>Avance acumulado: ${totalServicios} de ${d.objetivo}</span>
          <span style="color: var(--primary);">${cumplimiento}%</span>
        </div>
        <div class="track" style="height: 14px;">
          <div class="fill" style="width: ${Math.min(cumplimiento, 100)}%;"></div>
        </div>
      </div>
      <p class="muted" style="font-size: 12.5px;">
        ${cumplimiento >= 100 
          ? 'El taller superó el umbral de absorción presupuestado para este período.' 
          : 'Se requieren ' + (d.objetivo - totalServicios) + ' intervenciones adicionales para equilibrar la absorción fija.'}
      </p>
    `;

    document.getElementById('pvt-ratio-box').innerHTML = `
      <div style="padding: 16px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-sm); margin-top: 14px;">
        <div style="font-size: 12px; color: var(--muted); text-transform: uppercase; font-weight: 700;">Días Laborables en Mes</div>
        <strong style="font-size: 24px; color: var(--ink); display: block; margin: 4px 0 12px;">${d.dias} jornadas operativas</strong>
        <p style="font-size: 13px; margin: 0; color: var(--text);">
          Productividad efectiva lograda: <strong>${serviciosDiarios} servicios/día</strong> frente a la referencia teórica de <strong>${objetivoDiario} servicios/día</strong>.
        </p>
      </div>
    `;
  }

  branchSel.onchange = calculate;
  monthSel.onchange = calculate;

  calculate();
})();
