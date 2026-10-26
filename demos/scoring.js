(function() {
  const root = document.getElementById('survey-content');
  const stepLabel = document.getElementById('step-label');
  const stepPct = document.getElementById('step-pct');
  const progressFill = document.getElementById('progress-fill');

  let currentStep = 0;
  const answers = {
    q1: 'Sí',
    q2: 'Sí',
    q3: 'Sí',
    q4: 'Sí',
    q5: 'Sí',
    cuota_ejemplo: '$240.000',
    origen: 'Salón de ventas',
    q7: 'Sí',
    q8: 'No',
    recontacto: 'No',
    obs: ''
  };

  const steps = [
    {
      title: 'Condiciones de Adjudicación',
      desc: 'Verificación de la comprensión sobre los métodos de entrega del vehículo.',
      fields: [
        {
          id: 'q1',
          title: '1. ¿Le informaron claramente que la adjudicación del vehículo se realiza exclusivamente por sorteo o licitación mensual?',
          help: 'El sistema valida que no existan promesas de entrega inmediata fuera de reglamento.',
          type: 'choice'
        },
        {
          id: 'q2',
          title: '2. ¿Comprende que ningún asesor u operador puede comprometer fechas de entrega sin previa adjudicación y cumplimiento de requisitos?',
          help: 'Requisito de transparencia comercial y auditoría de marca.',
          type: 'choice'
        },
        {
          id: 'q3',
          title: '3. ¿Tiene conocimiento del tipo de plan suscripto (ej. 70/30 u 80/20) y la integración de saldo requerida al adjudicar?',
          help: 'Asegura que el cliente conoce la parte a abonar al momento del retiro.',
          type: 'choice'
        }
      ]
    },
    {
      title: 'Composición de Cuotas y Débito',
      desc: 'Validación del esquema financiero y medios de pago informados.',
      fields: [
        {
          id: 'q4',
          title: '4. ¿Comprende que el valor de las cuotas mensuales se actualiza en función del precio del modelo 0KM de referencia?',
          help: 'Verifica la comprensión de que no se trata de una cuota fija en pesos.',
          type: 'choice'
        },
        {
          id: 'q5',
          title: '5. ¿Le explicaron la modalidad de cobro mediante débito automático y las fechas de vencimiento?',
          help: 'Evita moras operativas en los primeros períodos.',
          type: 'choice'
        },
        {
          id: 'cuota_ejemplo',
          title: '6. Valor estimado de primera cuota informado por el asesor:',
          help: 'Dato de prueba para contrastar con la escala de cuota pura formal.',
          type: 'text'
        }
      ]
    },
    {
      title: 'Canal Comercial y Asesoramiento',
      desc: 'Relevamiento del canal de contacto y documentación entregada.',
      fields: [
        {
          id: 'origen',
          title: '7. ¿A través de qué canal oficial formalizó su suscripción?',
          help: 'Trazabilidad del origen comercial.',
          type: 'select',
          options: ['Salón de ventas oficial', 'Redes sociales institucionales', 'WhatsApp de atención oficial', 'Referido de cliente']
        },
        {
          id: 'q7',
          title: '8. ¿El asesor le hizo entrega de la copia del contrato y la hoja de información útil firmada?',
          help: 'Requisito documental según estándar de concesionario.',
          type: 'choice'
        },
        {
          id: 'q8',
          title: '9. ¿Quedó alguna condición comercial que no le haya quedado suficientemente clara?',
          help: 'En caso afirmativo, se derivará automáticamente para recontacto.',
          type: 'choice'
        }
      ]
    },
    {
      title: 'Cierre y Conformidad',
      desc: 'Revisión final de satisfacción y necesidad de recontacto.',
      fields: [
        {
          id: 'recontacto',
          title: '10. ¿Desea que un supervisor de Calidad lo contacte antes de emitir la suscripción definitiva?',
          help: 'Permite al cliente solicitar aclaraciones sin compromiso.',
          type: 'choice'
        },
        {
          id: 'obs',
          title: '11. Observaciones o aclaraciones adicionales (opcional):',
          help: 'Espacio para comentarios del cliente.',
          type: 'textarea'
        }
      ]
    }
  ];

  function render() {
    const totalSteps = steps.length;
    const pct = Math.round(((currentStep + 1) / totalSteps) * 100);
    
    stepLabel.textContent = `PASO ${currentStep + 1} DE ${totalSteps} · ${steps[currentStep].title.toUpperCase()}`;
    stepPct.textContent = `${pct}% COMPLETADO`;
    progressFill.style.width = `${pct}%`;

    const s = steps[currentStep];

    let fieldsHtml = s.fields.map(f => {
      if (f.type === 'choice') {
        const val = answers[f.id] || '';
        return `
          <div class="question-block">
            <div class="question-title">${f.title}</div>
            <div class="question-help">${f.help}</div>
            <div class="choice-group">
              <button type="button" class="choice-btn ${val === 'Sí' ? 'selected' : ''}" data-field="${f.id}" data-val="Sí">Sí, comprendido</button>
              <button type="button" class="choice-btn ${val === 'No' ? 'selected' : ''}" data-field="${f.id}" data-val="No">No / Tengo dudas</button>
            </div>
          </div>
        `;
      }
      if (f.type === 'select') {
        const current = answers[f.id] || f.options[0];
        return `
          <div class="question-block">
            <div class="question-title">${f.title}</div>
            <div class="question-help">${f.help}</div>
            <select class="field" style="width: 100%; max-width: 400px;" data-field="${f.id}">
              ${f.options.map(opt => `<option value="${opt}" ${opt === current ? 'selected' : ''}>${opt}</option>`).join('')}
            </select>
          </div>
        `;
      }
      if (f.type === 'text') {
        return `
          <div class="question-block">
            <div class="question-title">${f.title}</div>
            <div class="question-help">${f.help}</div>
            <input type="text" style="width: 100%; max-width: 320px;" data-field="${f.id}" value="${answers[f.id] || ''}" placeholder="Ej. $240.000" />
          </div>
        `;
      }
      if (f.type === 'textarea') {
        return `
          <div class="question-block">
            <div class="question-title">${f.title}</div>
            <div class="question-help">${f.help}</div>
            <textarea rows="3" style="width: 100%;" data-field="${f.id}" placeholder="Comentario simulado para demostración...">${answers[f.id] || ''}</textarea>
          </div>
        `;
      }
    }).join('');

    root.innerHTML = `
      <div class="client-card">
        <div><b>Cliente Ficticio:</b> Juan M. Morales (ID: #SIM-7489)</div>
        <div><b>Modelo Asignado:</b> VW Polo Track 1.0 (70/30)</div>
        <div><b>Sucursal:</b> San Salvador de Jujuy</div>
      </div>

      <h2 class="step-title">${s.title}</h2>
      <p class="step-desc">${s.desc}</p>

      <form id="step-form">
        ${fieldsHtml}

        <div class="nav-buttons">
          <button type="button" class="button secondary" id="prev-btn" ${currentStep === 0 ? 'disabled' : ''}>
            ← Paso anterior
          </button>
          <button type="button" class="button" id="next-btn">
            ${currentStep === totalSteps - 1 ? 'Finalizar validación ✓' : 'Siguiente paso →'}
          </button>
        </div>
      </form>
    `;

    // Attach events
    root.querySelectorAll('.choice-btn').forEach(btn => {
      btn.onclick = () => {
        answers[btn.dataset.field] = btn.dataset.val;
        render();
      };
    });

    root.querySelectorAll('input, select, textarea').forEach(el => {
      el.onchange = () => {
        answers[el.dataset.field] = el.value;
      };
    });

    document.getElementById('prev-btn').onclick = () => {
      if (currentStep > 0) {
        currentStep--;
        render();
      }
    };

    document.getElementById('next-btn').onclick = () => {
      // capture inputs
      root.querySelectorAll('input, select, textarea').forEach(el => {
        answers[el.dataset.field] = el.value;
      });

      if (currentStep < totalSteps - 1) {
        currentStep++;
        render();
      } else {
        renderCompletion();
      }
    };
  }

  function renderCompletion() {
    stepLabel.textContent = 'PROCESAMIENTO DE VALIDACIÓN FINALIZADO';
    stepPct.textContent = '100% COMPLETADO';
    progressFill.style.width = '100%';

    // Scoring calculation logic
    const requiresRecontact = (answers.q1 === 'No' || answers.q2 === 'No' || answers.q4 === 'No' || answers.q8 === 'Sí' || answers.recontacto === 'Sí');
    const statusText = requiresRecontact ? 'Derivación para Recontacto de Calidad' : 'Validación Positiva · Aprobado';
    const statusClass = requiresRecontact ? 'warn' : 'success';
    const icon = requiresRecontact ? '⚠' : '✓';

    root.innerHTML = `
      <div class="final-score-box">
        <div class="score-badge" style="${requiresRecontact ? 'background: var(--warning-bg); color: var(--warning); border-color: var(--warning);' : ''}">
          ${icon}
        </div>
        <h2>${statusText}</h2>
        <p class="muted" style="max-width: 600px; margin: 0 auto;">
          ${requiresRecontact 
            ? 'El sistema detectó que existen condiciones comerciales que requieren llamada de aclaración o el cliente solicitó recontacto expreso. Esta alerta se refleja automáticamente en el Tablero de Indicadores.' 
            : 'El cliente confirmó la correcta comprensión de todos los puntos críticos: licitación, variabilidad de cuota y documentación contractual.'}
        </p>

        <div class="score-summary-grid">
          <div class="score-item">
            <span>Comprensión de Licitación</span>
            <strong>${answers.q1 === 'Sí' && answers.q2 === 'Sí' ? 'Óptima (100%)' : 'Observada (Dudas)'}</strong>
          </div>
          <div class="score-item">
            <span>Régimen de Cuota</span>
            <strong>${answers.q4 === 'Sí' ? 'Comprendido' : 'Requiere refuerzo'}</strong>
          </div>
          <div class="score-item">
            <span>Acción Sugerida</span>
            <strong>${requiresRecontact ? 'Llamado en 24hs' : 'Alta de legajo'}</strong>
          </div>
        </div>

        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 28px;">
          <button class="button" id="restart-btn">Reiniciar demostración</button>
          <a class="button secondary" href="tablero.html">Ver cómo impacta en el Tablero ↗</a>
        </div>
      </div>
    `;

    document.getElementById('restart-btn').onclick = () => {
      currentStep = 0;
      answers.q1 = 'Sí';
      answers.q2 = 'Sí';
      answers.q3 = 'Sí';
      answers.q4 = 'Sí';
      answers.q5 = 'Sí';
      answers.q8 = 'No';
      answers.recontacto = 'No';
      render();
    };
  }

  render();
})();
