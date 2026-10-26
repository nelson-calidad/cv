(function() {
  const questionsList = [
    { id: 'q_licitacion', label: 'Proceso de Licitación y Sorteo' },
    { id: 'q_cuota', label: 'Variabilidad de Cuota 0KM' },
    { id: 'q_saldo', label: 'Integración de Saldo (Alícuota)' },
    { id: 'q_debito', label: 'Condiciones de Débito Automático' }
  ];

  const advisorsList = [
    { name: 'Asesor Carlos M.', branch: 'Jujuy' },
    { name: 'Asesora Andrea R.', branch: 'Jujuy' },
    { name: 'Asesor Marcos V.', branch: 'Salta' },
    { name: 'Asesora Sofía T.', branch: 'Salta' },
    { name: 'Asesor Martín B.', branch: 'Jujuy' },
    { name: 'Asesora Luciana P.', branch: 'Salta' }
  ];

  // Generate 320 deterministic records
  const records = [];
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
  
  for (let i = 0; i < 320; i++) {
    const adv = advisorsList[i % advisorsList.length];
    const qtr = quarters[i % 4];
    
    // Simulate question comprehension with realistic variance
    // Carlos M (index 0) has slightly higher licitacion issues
    // Marcos V (index 2) has higher cuota variance issues
    const seed = (i * 17 + 31) % 100;
    const okLicitacion = seed > (i % 6 === 0 ? 28 : 12);
    const okCuota = ((seed + 23) % 100) > (i % 6 === 2 ? 30 : 15);
    const okSaldo = ((seed + 47) % 100) > 14;
    const okDebito = ((seed + 71) % 100) > 8;

    const allOk = okLicitacion && okCuota && okSaldo && okDebito;
    const isRecontact = !allOk && (((i * 7 + 13) % 10) < 6); // ~60% of cases with doubts request recontact
    const isPassed = allOk || (!isRecontact && (okLicitacion && okCuota));

    records.push({
      id: 1000 + i,
      branch: adv.branch,
      advisor: adv.name,
      quarter: qtr,
      answers: {
        q_licitacion: okLicitacion,
        q_cuota: okCuota,
        q_saldo: okSaldo,
        q_debito: okDebito
      },
      allOk,
      isRecontact,
      isPassed
    });
  }

  const branchSelect = document.getElementById('branch-select');
  const periodSelect = document.getElementById('period-select');
  const resetBtn = document.getElementById('reset-filters');

  function calculate() {
    const selectedBranch = branchSelect.value;
    const selectedPeriod = periodSelect.value;

    const filtered = records.filter(r => {
      const matchBranch = selectedBranch === 'all' || r.branch === selectedBranch;
      const matchPeriod = selectedPeriod === 'all' || r.quarter === selectedPeriod;
      return matchBranch && matchPeriod;
    });

    const total = filtered.length;
    if (total === 0) return;

    const passedCount = filtered.filter(r => r.isPassed).length;
    const recontactCount = filtered.filter(r => r.isRecontact).length;
    const fullComprehensionCount = filtered.filter(r => r.allOk).length;

    const pctPassed = Math.round((passedCount / total) * 100);
    const pctRecontact = Math.round((recontactCount / total) * 100);
    const pctComprehension = Math.round((fullComprehensionCount / total) * 100);

    // 1. Render KPIs
    document.getElementById('kpis-container').innerHTML = `
      <div class="kpi brand">
        <small>Encuestas Procesadas</small>
        <strong>${total}</strong>
        <p>Validaciones en el período seleccionado</p>
      </div>
      <div class="kpi success">
        <small>Validación Positiva</small>
        <strong>${pctPassed}%</strong>
        <p>${passedCount} suscripciones conformes</p>
      </div>
      <div class="kpi alert">
        <small>Derivados a Recontacto</small>
        <strong>${recontactCount}</strong>
        <p>${pctRecontact}% requirió llamado de Calidad</p>
      </div>
      <div class="kpi">
        <small>Comprensión Plena</small>
        <strong>${pctComprehension}%</strong>
        <p>100% de respuestas afirmativas</p>
      </div>
    `;

    // 2. Questions Bar Chart
    document.getElementById('questions-chart').innerHTML = questionsList.map(q => {
      const count = filtered.filter(r => r.answers[q.id]).length;
      const pct = Math.round((count / total) * 100);
      return `
        <div class="bar-row">
          <span>${q.label}</span>
          <div class="track">
            <div class="fill" style="width: ${pct}%;"></div>
          </div>
          <strong>${pct}%</strong>
        </div>
      `;
    }).join('');

    // 3. Status Chart
    const pendingReview = total - passedCount - recontactCount;
    const statusData = [
      { label: 'Aprobación directa', count: passedCount, pct: pctPassed, class: '' },
      { label: 'Recontacto de Calidad', count: recontactCount, pct: pctRecontact, class: 'warning' },
      { label: 'En proceso / revisión', count: Math.max(0, pendingReview), pct: Math.round((Math.max(0, pendingReview) / total) * 100), class: 'danger' }
    ];

    document.getElementById('status-chart').innerHTML = statusData.map(s => `
      <div class="bar-row">
        <span>${s.label}</span>
        <div class="track">
          <div class="fill ${s.class}" style="width: ${s.pct}%;"></div>
        </div>
        <strong>${s.count}</strong>
      </div>
    `).join('');

    // 4. Focus Points (Prioridades de Capacitación)
    const doubtCounts = questionsList.map(q => {
      const doubts = filtered.filter(r => !r.answers[q.id]).length;
      const doubtPct = Math.round((doubts / total) * 100);
      return { label: q.label, doubts, doubtPct };
    }).sort((a, b) => b.doubts - a.doubts);

    document.getElementById('focus-points').innerHTML = doubtCounts.map((item, idx) => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 14px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-sm); margin-bottom: 10px;">
        <span style="font-size: 13.5px; font-weight: 600; color: var(--ink);">
          <span style="color: var(--primary); font-weight: 800; margin-right: 6px;">#${idx + 1}</span> ${item.label}
        </span>
        <span class="tag ${item.doubtPct > 15 ? 'alert' : 'warn'}">
          ${item.doubts} casos (${item.doubtPct}%)
        </span>
      </div>
    `).join('');

    // 5. Branches Volume
    const jujuyCount = filtered.filter(r => r.branch === 'Jujuy').length;
    const saltaCount = filtered.filter(r => r.branch === 'Salta').length;
    const jujuyPct = total ? Math.round((jujuyCount / total) * 100) : 0;
    const saltaPct = total ? Math.round((saltaCount / total) * 100) : 0;

    document.getElementById('branches-chart').innerHTML = `
      <div class="bar-row">
        <span>Sede Jujuy</span>
        <div class="track">
          <div class="fill" style="width: ${jujuyPct}%;"></div>
        </div>
        <strong>${jujuyCount}</strong>
      </div>
      <div class="bar-row">
        <span>Sede Salta</span>
        <div class="track">
          <div class="fill" style="width: ${saltaPct}%;"></div>
        </div>
        <strong>${saltaCount}</strong>
      </div>
    `;

    // 6. Advisors Breakdown
    const activeAdvisors = selectedBranch === 'all' 
      ? advisorsList 
      : advisorsList.filter(a => a.branch === selectedBranch);

    document.getElementById('advisors-tbody').innerHTML = activeAdvisors.map(adv => {
      const advRecords = filtered.filter(r => r.advisor === adv.name);
      const advTotal = advRecords.length;
      if (advTotal === 0) return '';

      const advPassed = advRecords.filter(r => r.isPassed).length;
      const advRecontact = advRecords.filter(r => r.isRecontact).length;
      const advAllOk = advRecords.filter(r => r.allOk).length;

      const passedPct = Math.round((advPassed / advTotal) * 100);
      const recontactPct = Math.round((advRecontact / advTotal) * 100);
      const allOkPct = Math.round((advAllOk / advTotal) * 100);

      const tagClass = passedPct >= 85 ? 'success' : passedPct >= 75 ? 'warn' : 'alert';

      return `
        <tr>
          <td><strong>${adv.name}</strong></td>
          <td>${adv.branch}</td>
          <td>${advTotal}</td>
          <td>${allOkPct}%</td>
          <td>${advRecontact} (${recontactPct}%)</td>
          <td><span class="tag ${tagClass}">${passedPct}% efectividad</span></td>
        </tr>
      `;
    }).join('');
  }

  branchSelect.onchange = calculate;
  periodSelect.onchange = calculate;
  resetBtn.onclick = () => {
    branchSelect.value = 'all';
    periodSelect.value = 'all';
    calculate();
  };

  calculate();
})();
