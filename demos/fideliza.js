(function() {
  const clients = [
    {
      id: 'CLI-501',
      name: 'Elena Gómez',
      vehicle: 'VW Nivus Highline 2024',
      reason: 'Seguimiento satisfacción 48hs post-entrega',
      state: 'Pendiente',
      channel: 'Llamada telefónica',
      phone: '+54 388 4XX-XX12'
    },
    {
      id: 'CLI-502',
      name: 'Gonzalo Fernández',
      vehicle: 'VW Amarok V6 2023',
      reason: 'Primer Service 10.000 km / 1 año',
      state: 'Pendiente',
      channel: 'WhatsApp oficial',
      phone: '+54 388 4XX-XX89'
    },
    {
      id: 'CLI-503',
      name: 'Mariana Quiroga',
      vehicle: 'VW Polo Track 2023',
      reason: 'Renovación de unidad (24 meses de plan)',
      state: 'Contactado',
      channel: 'WhatsApp oficial',
      phone: '+54 387 5XX-XX44'
    },
    {
      id: 'CLI-504',
      name: 'Roberto Vaca',
      vehicle: 'VW Taos Comfortline 2024',
      reason: 'Segundo Service 20.000 km / 2 años',
      state: 'Interesado',
      channel: 'Llamada telefónica',
      phone: '+54 388 4XX-XX77'
    }
  ];

  function renderKPIs() {
    const total = clients.length;
    const pending = clients.filter(c => c.state === 'Pendiente').length;
    const contacted = clients.filter(c => c.state === 'Contactado' || c.state === 'Interesado').length;

    document.getElementById('fideliza-kpis').innerHTML = `
      <div class="kpi">
        <small>Agenda de Hoy</small>
        <strong>${total}</strong>
        <p>Clientes asignados para recontacto</p>
      </div>
      <div class="kpi alert">
        <small>Llamados Pendientes</small>
        <strong>${pending}</strong>
        <p>Contactos a realizar en la jornada</p>
      </div>
      <div class="kpi success">
        <small>Contactados con Éxito</small>
        <strong>${contacted}</strong>
        <p>Gestiones realizadas</p>
      </div>
      <div class="kpi">
        <small>Canal Preferente</small>
        <strong>WhatsApp / Tel</strong>
        <p>Integración multicanal</p>
      </div>
    `;
  }

  function renderList() {
    const filter = document.getElementById('filter-state').value;
    const filtered = clients.filter(c => filter === 'all' || c.state === filter);

    const container = document.getElementById('clients-container');
    if (filtered.length === 0) {
      container.innerHTML = `<p class="muted" style="padding: 20px; text-align: center;">No hay contactos con el estado seleccionado.</p>`;
      return;
    }

    container.innerHTML = filtered.map(c => {
      const tagClass = c.state === 'Pendiente' ? 'warn' : c.state === 'Interesado' ? 'success' : '';
      return `
        <div class="client-row">
          <div class="client-info">
            <h3>${c.name} <small class="muted" style="font-weight: normal;">(${c.id})</small></h3>
            <span><strong>Vehículo:</strong> ${c.vehicle} · <strong>Motivo:</strong> ${c.reason}</span>
            <div style="font-size: 12px; color: var(--primary); margin-top: 4px;">
              Canal: ${c.channel} (${c.phone})
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px;">
            <span class="tag ${tagClass}">${c.state}</span>
            ${c.state === 'Pendiente' ? `
              <button class="button" style="padding: 7px 12px; font-size: 12px;" data-contact="${c.id}">Registrar Contactado</button>
            ` : c.state === 'Contactado' ? `
              <button class="button secondary" style="padding: 7px 12px; font-size: 12px;" data-interest="${c.id}">Marcar Interesado</button>
            ` : `
              <span class="muted" style="font-size: 12px;">Turno coordinado</span>
            `}
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('[data-contact]').forEach(b => {
      b.onclick = () => {
        const item = clients.find(x => x.id === b.dataset.contact);
        if (item) {
          item.state = 'Contactado';
          renderKPIs();
          renderList();
        }
      };
    });

    container.querySelectorAll('[data-interest]').forEach(b => {
      b.onclick = () => {
        const item = clients.find(x => x.id === b.dataset.interest);
        if (item) {
          item.state = 'Interesado';
          renderKPIs();
          renderList();
        }
      };
    });
  }

  document.getElementById('filter-state').onchange = renderList;

  renderKPIs();
  renderList();
})();
