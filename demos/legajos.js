(function() {
  const initialLegajos = [
    { id: 1, name: 'Páez, María Mercedes', status: 'en-proceso', statusLabel: 'En Proceso', model: 'Taos Highline', dni: '28.450.***', time: 'Hace 12 min' },
    { id: 2, name: 'Gutiérrez, Roberto Carlos', status: 'conforme', statusLabel: 'Conforme', model: 'Amarok V6', dni: '33.120.***', time: 'Ayer 18:20' },
    { id: 3, name: 'Álvarez, Juan Ignacio', status: 'conforme', statusLabel: 'Conforme', model: 'Polo Track', dni: '35.890.***', time: 'Ayer 16:45' },
    { id: 4, name: 'Morales, Lucía Soledad', status: 'observado', statusLabel: 'Observado', model: 'Nivus 170', dni: '29.740.***', time: 'Ayer 14:10' },
    { id: 5, name: 'Fernández, Esteban David', status: 'conforme', statusLabel: 'Conforme', model: 'T-Cross Sense', dni: '37.330.***', time: '23/10' },
    { id: 6, name: 'Mendoza, Carlos Alberto', status: 'conforme', statusLabel: 'Conforme', model: 'T-Cross Sense', dni: '31.205.***', time: '23/10' },
    { id: 7, name: 'Salas, Valeria Romina', status: 'conforme', statusLabel: 'Conforme', model: 'Taos Comfortline', dni: '34.901.***', time: '22/10' },
    { id: 8, name: 'Ortiz, Gonzalo Martín', status: 'en-proceso', statusLabel: 'En Proceso', model: 'Amarok Highline', dni: '30.155.***', time: '22/10' },
    { id: 9, name: 'Villalba, Sofía Inés', status: 'conforme', statusLabel: 'Conforme', model: 'Polo Track', dni: '38.412.***', time: '21/10' },
    { id: 10, name: 'Correa, Fabricio René', status: 'conforme', statusLabel: 'Conforme', model: 'Nivus Trendline', dni: '32.880.***', time: '21/10' },
    { id: 11, name: 'Ramos, Claudia Beatriz', status: 'conforme', statusLabel: 'Conforme', model: 'Taos Highline', dni: '27.915.***', time: '20/10' },
    { id: 12, name: 'Ibarra, Marcos Daniel', status: 'conforme', statusLabel: 'Conforme', model: 'Amarok Trendline', dni: '36.540.***', time: '20/10' },
    { id: 13, name: 'Herrera, Patricia Silvia', status: 'conforme', statusLabel: 'Conforme', model: 'T-Cross Sense', dni: '33.805.***', time: '19/10' }
  ];

  let legajos = [...initialLegajos];
  const targetGoal = 16;

  const listContainer = document.getElementById('legajos-list');
  const countLabel = document.getElementById('list-count-label');
  const progressText = document.getElementById('progress-text');
  const progressBar = document.getElementById('progress-bar');
  const totalAuditados = document.getElementById('total-auditados-label');

  const modalNew = document.getElementById('modal-new');
  const btnAdd = document.getElementById('btn-add-legajo');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const formNew = document.getElementById('form-new-legajo');

  const modalPdf = document.getElementById('modal-pdf');
  const btnPdf = document.getElementById('btn-pdf-preview');
  const btnClosePdf = document.getElementById('btn-close-pdf');

  function render() {
    listContainer.innerHTML = '';
    legajos.forEach(item => {
      const row = document.createElement('div');
      row.className = 'legajo-row';

      let pillClass = 'status-in-progress';
      if (item.status === 'conforme') pillClass = 'status-conform';
      if (item.status === 'observado') pillClass = 'status-observed';

      row.innerHTML = `
        <div class="legajo-info">
          <span class="legajo-name">${item.name}</span>
          <span class="pill-status ${pillClass}">${item.statusLabel}</span>
          <div class="legajo-meta">
            <span><strong>Modelo:</strong> ${item.model}</span>
            <span><strong>DNI:</strong> ${item.dni}</span>
            <span>${item.time}</span>
          </div>
        </div>
        <div class="legajo-actions">
          <button type="button" class="legajo-btn" data-id="${item.id}">
            ${item.status === 'conforme' ? 'Ver checklist' : 'Auditar legajo'}
          </button>
        </div>
      `;

      row.querySelector('.legajo-btn').addEventListener('click', () => {
        if (item.status !== 'conforme') {
          item.status = 'conforme';
          item.statusLabel = 'Conforme';
          render();
        } else {
          alert(`Legajo de ${item.name} auditado bajo protocolo Volkswagen PCGC. Todos los requisitos documentales e informativos se encuentran aprobados.`);
        }
      });

      listContainer.appendChild(row);
    });

    const currentCount = legajos.length;
    countLabel.textContent = `${currentCount} cargado(s)`;
    progressText.textContent = `${currentCount} / ${targetGoal} legajos`;
    const pct = Math.min(100, Math.round((currentCount / targetGoal) * 100));
    progressBar.style.width = `${pct}%`;
    if (totalAuditados) {
      totalAuditados.textContent = 41 + (currentCount - initialLegajos.length);
    }
  }

  // Modals
  if (btnAdd && modalNew) {
    btnAdd.addEventListener('click', () => { modalNew.style.display = 'flex'; });
    btnCloseModal.addEventListener('click', () => { modalNew.style.display = 'none'; });
  }

  if (btnPdf && modalPdf) {
    btnPdf.addEventListener('click', () => { modalPdf.style.display = 'flex'; });
    btnClosePdf.addEventListener('click', () => { modalPdf.style.display = 'none'; });
  }

  if (formNew) {
    formNew.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('new-name').value.trim();
      const model = document.getElementById('new-model').value;
      const dni = document.getElementById('new-dni').value.trim();

      if (!name) return;

      legajos.unshift({
        id: Date.now(),
        name: name,
        status: 'en-proceso',
        statusLabel: 'En Proceso',
        model: model,
        dni: dni || '35.000.***',
        time: 'Recién cargado'
      });

      modalNew.style.display = 'none';
      formNew.reset();
      render();
    });
  }

  const btnPreguntas = document.getElementById('btn-preguntas');
  if (btnPreguntas) {
    btnPreguntas.addEventListener('click', () => {
      alert('Preguntas de auditoría documental Volkswagen PCGC:\n\n1. Copia de DNI y constancia de CUIL certificada.\n2. Solicitud de adhesión firmada con fecha coincidente.\n3. Hoja de información útil con firma y aclaración del suscriptor.\n4. Validación de scoring previsional registrada en sistema.');
    });
  }

  render();
})();
