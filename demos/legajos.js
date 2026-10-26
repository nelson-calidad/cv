(function() {
  const auditItems = [
    {
      id: 1,
      requisito: 'Boleto físico de compraventa firmado',
      norma: '6.1.1.1 / Preventa y Contratos',
      rol: 'Ventas y Administración',
      status: 'ok' // 'ok', 'fail', 'na'
    },
    {
      id: 2,
      requisito: 'Verificación de correo electrónico y datos fiscales',
      norma: '6.1.3.1 / CEM, SIAC, Boleto y Dominio',
      rol: 'Ventas',
      status: 'ok'
    },
    {
      id: 3,
      requisito: 'Hoja con información útil de la operación firmada por el cliente',
      norma: '7.1.1.1 / Explicación de plazos y documentación',
      rol: 'Ventas',
      status: 'ok'
    },
    {
      id: 4,
      requisito: 'Hoja de ruta de la unidad 0KM con firmas de control',
      norma: 'Control de Alistamiento y Logística',
      rol: 'Administración y Taller',
      status: 'ok'
    },
    {
      id: 5,
      requisito: 'Copia legible de DNI y constancia de CUIL / Situación impositiva',
      norma: 'Conformidad Legal y Facturación',
      rol: 'Administración',
      status: 'ok'
    },
    {
      id: 6,
      requisito: 'Comprobante de pago o constancia de liquidación de patentamiento',
      norma: 'Gestoría y Gestiones de Entrega',
      rol: 'Gestoría',
      status: 'ok'
    }
  ];

  function render() {
    const tbody = document.getElementById('checklist-tbody');
    tbody.innerHTML = auditItems.map(item => `
      <tr>
        <td><strong>#${item.id}</strong></td>
        <td>
          <div style="font-weight: 600; color: var(--ink);">${item.requisito}</div>
        </td>
        <td><span class="muted" style="font-size: 12px;">${item.norma}</span></td>
        <td><span class="tag" style="font-size: 11px;">${item.rol}</span></td>
        <td style="text-align: right;">
          <div class="status-btn-group">
            <button type="button" class="status-btn ${item.status === 'ok' ? 'selected-ok' : ''}" data-id="${item.id}" data-status="ok">✓ Conforme</button>
            <button type="button" class="status-btn ${item.status === 'fail' ? 'selected-fail' : ''}" data-id="${item.id}" data-status="fail">✕ No Conf.</button>
            <button type="button" class="status-btn ${item.status === 'na' ? 'selected-na' : ''}" data-id="${item.id}" data-status="na">N/A</button>
          </div>
        </td>
      </tr>
    `).join('');

    // Attach click events
    tbody.querySelectorAll('.status-btn').forEach(btn => {
      btn.onclick = () => {
        const id = parseInt(btn.dataset.id, 10);
        const st = btn.dataset.status;
        const target = auditItems.find(x => x.id === id);
        if (target) {
          target.status = st;
          updateScore();
          render();
        }
      };
    });

    updateScore();
  }

  function updateScore() {
    const applicable = auditItems.filter(x => x.status !== 'na');
    const compliant = auditItems.filter(x => x.status === 'ok');
    const nonCompliant = auditItems.filter(x => x.status === 'fail');

    const pct = applicable.length > 0 ? Math.round((compliant.length / applicable.length) * 100) : 100;

    const scoreCircle = document.getElementById('score-circle');
    const scorePct = document.getElementById('score-pct');
    const scoreVerdict = document.getElementById('score-verdict');
    const scoreDetail = document.getElementById('score-detail');

    scorePct.textContent = `${pct}%`;

    if (nonCompliant.length === 0) {
      scoreCircle.style.borderColor = 'var(--success)';
      scoreVerdict.className = 'tag success';
      scoreVerdict.textContent = 'Conforme para Entrega';
      scoreDetail.textContent = `${compliant.length} de ${applicable.length} requisitos conformes. Expediente apto.`;
    } else if (pct >= 80) {
      scoreCircle.style.borderColor = 'var(--warning)';
      scoreVerdict.className = 'tag warn';
      scoreVerdict.textContent = 'Observado con Hallazgos Menores';
      scoreDetail.textContent = `${nonCompliant.length} requisito(s) no conforme(s). Requiere subsanación rápida.`;
    } else {
      scoreCircle.style.borderColor = 'var(--danger)';
      scoreVerdict.className = 'tag alert';
      scoreVerdict.textContent = 'No Conforme · Entrega Bloqueada';
      scoreDetail.textContent = `${nonCompliant.length} hallazgo(s) crítico(s). Requiere plan de acción inmediato.`;
    }
  }

  document.getElementById('btn-reset-all').onclick = () => {
    auditItems.forEach(i => i.status = 'ok');
    render();
  };

  document.getElementById('btn-simulate-findings').onclick = () => {
    auditItems[1].status = 'fail'; // Mail no verificado
    auditItems[2].status = 'fail'; // Falta firma hoja info útil
    render();
  };

  render();
})();

