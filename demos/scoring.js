(function() {
  const choices = document.querySelectorAll('.btn-choice');
  const finishBtn = document.getElementById('btn-finish');
  const container = document.getElementById('survey-content');

  const answers = {
    q1: 'si',
    q2: 'si',
    q3: 'si',
    q4: 'si'
  };

  // Set default visual selection
  choices.forEach(btn => {
    const q = btn.getAttribute('data-q');
    const val = btn.getAttribute('data-val');
    if (answers[q] === val) {
      btn.classList.add(val === 'si' ? 'selected-yes' : 'selected-no');
    }

    btn.addEventListener('click', () => {
      const parentRow = btn.parentElement;
      parentRow.querySelectorAll('.btn-choice').forEach(b => {
        b.classList.remove('selected-yes', 'selected-no');
      });
      answers[q] = val;
      btn.classList.add(val === 'si' ? 'selected-yes' : 'selected-no');
    });
  });

  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      const allYes = answers.q1 === 'si' && answers.q2 === 'si' && answers.q3 === 'si' && answers.q4 === 'si';
      const score = Object.values(answers).filter(v => v === 'si').length * 25;

      container.innerHTML = `
        <div class="result-box">
          <div style="display:inline-block; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; margin-bottom: 16px; ${allYes ? 'background: #DEF7EC; color: #03543F;' : 'background: #FEF08A; color: #713F12;'}">
            ${allYes ? 'SCORE 100/100 · VALIDADO' : 'SCORE ' + score + '/100 · REVISIÓN REQUERIDA'}
          </div>
          <h2>${allYes ? 'Validación de Suscripción Exitosa' : 'Se registraron desvíos informativos'}</h2>
          <p>
            ${allYes 
              ? 'El suscriptor comprende los términos clave del plan de ahorro comercializado (esquema 70/30, licitaciones con alícuotas complementarias y ajuste móvil del valor 0KM). Sin observaciones.' 
              : 'Se detectó que el cliente presenta dudas o falta de información en uno o más puntos contractuales. Se genera alerta automática para recontacto de calidad preventivo antes del débito.'}
          </p>

          <div style="text-align: left; background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 12px; padding: 18px 24px; max-width: 520px; margin: 0 auto 24px; font-size: 13px; color: #374151;">
            <div style="font-weight: 700; margin-bottom: 8px; color: #111827;">Resumen de control de auditoría:</div>
            <div style="display:flex; justify-content:space-between; padding: 6px 0; border-bottom: 1px dashed #E5E7EB;">
              <span>1. Conocimiento de plan 70/30:</span>
              <strong style="color: ${answers.q1 === 'si' ? '#059669' : '#DC2626'}">${answers.q1 === 'si' ? 'Informado' : 'No informado'}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; padding: 6px 0; border-bottom: 1px dashed #E5E7EB;">
              <span>2. Licitación y alícuota complementaria:</span>
              <strong style="color: ${answers.q2 === 'si' ? '#059669' : '#DC2626'}">${answers.q2 === 'si' ? 'Comprendido' : 'Desvío'}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; padding: 6px 0; border-bottom: 1px dashed #E5E7EB;">
              <span>3. Adjudicación asegurada (Cuota 3 / 8):</span>
              <strong style="color: ${answers.q3 === 'si' ? '#059669' : '#DC2626'}">${answers.q3 === 'si' ? 'Conforme' : 'Desvío'}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; padding: 6px 0;">
              <span>4. Cuota móvil según valor oficial:</span>
              <strong style="color: ${answers.q4 === 'si' ? '#059669' : '#DC2626'}">${answers.q4 === 'si' ? 'Asumido' : 'Falta info'}</strong>
            </div>
          </div>

          <button type="button" class="btn-submit" id="btn-restart" style="background:#111827;">Reiniciar verificación</button>
        </div>
      `;

      document.getElementById('btn-restart').addEventListener('click', () => {
        window.location.reload();
      });
    });
  }
})();
