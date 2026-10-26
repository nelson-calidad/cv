(function() {
  const catalog = [
    { id: 'guantes', name: 'Guantes de nitrilo para taller (Pares)', maxStock: 150, currentStock: 75 },
    { id: 'kits_cubreasiento', name: 'Kits cubre asientos y volante descartable', maxStock: 200, currentStock: 120 },
    { id: 'panos', name: 'Paños de microfibra para posventa (Unidades)', maxStock: 160, currentStock: 90 },
    { id: 'desengrasante', name: 'Desengrasante dieléctrico en aerosol (Unid)', maxStock: 60, currentStock: 35 },
    { id: 'limpiaparabrisas', name: 'Líquido limpiaparabrisas concentrado (Bidones)', maxStock: 80, currentStock: 45 }
  ];

  let requests = [
    { id: 1041, area: 'Taller Mecánico', item: 'Kits cubre asientos y volante descartable', qty: 15, user: 'Operario Taller 01', date: 'Hoy, 08:30', status: 'Pendiente' },
    { id: 1040, area: 'Chapa y Pintura', item: 'Desengrasante dieléctrico en aerosol (Unid)', qty: 6, user: 'Pintor Oficial', date: 'Ayer, 16:45', status: 'Aprobada' },
    { id: 1039, area: 'Recepción Posventa', item: 'Paños de microfibra para posventa (Unidades)', qty: 10, user: 'Asesor de Servicio', date: 'Ayer, 11:15', status: 'Aprobada' }
  ];

  let movements = [
    { id: 'MOV-302', type: 'Salida autorizada', item: 'Desengrasante dieléctrico en aerosol (Unid)', qty: 6, area: 'Chapa y Pintura', time: 'Ayer 17:00' },
    { id: 'MOV-301', type: 'Salida autorizada', item: 'Paños de microfibra para posventa (Unidades)', qty: 10, area: 'Recepción Posventa', time: 'Ayer 11:30' }
  ];

  let activeTab = 'solicitud';
  let nextReqId = 1042;

  function renderMetrics() {
    const pendingCount = requests.filter(r => r.status === 'Pendiente').length;
    const approvedCount = requests.filter(r => r.status === 'Aprobada').length;
    const totalItemsStock = catalog.reduce((acc, it) => acc + it.currentStock, 0);

    document.getElementById('insumos-metrics').innerHTML = `
      <div class="kpi">
        <small>Total en Inventario</small>
        <strong>${totalItemsStock}</strong>
        <p>Unidades registradas en pañol</p>
      </div>
      <div class="kpi alert">
        <small>Pendientes de Aprobación</small>
        <strong>${pendingCount}</strong>
        <p>Requerimientos para supervisión</p>
      </div>
      <div class="kpi success">
        <small>Solicitudes Aprobadas</small>
        <strong>${approvedCount}</strong>
        <p>Entregas efectivizadas</p>
      </div>
      <div class="kpi">
        <small>Trazabilidad</small>
        <strong>${movements.length}</strong>
        <p>Movimientos en registro de auditoría</p>
      </div>
    `;

    const badge = document.getElementById('badge-pending');
    if (badge) {
      badge.textContent = pendingCount;
      badge.style.display = pendingCount > 0 ? 'inline-block' : 'none';
    }
  }

  function renderView() {
    const view = document.getElementById('insumos-view');

    // Update active tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === activeTab);
    });

    if (activeTab === 'solicitud') {
      view.innerHTML = `
        <div class="panel">
          <span class="eyebrow">FORMULARIO DE PEDIDO INTERNO</span>
          <h2 class="section-title">Generar Solicitud de Insumos</h2>
          <p class="muted" style="font-size: 13.5px; margin-bottom: 20px;">
            El operador selecciona el área y la cantidad requerida. La solicitud queda en estado pendiente hasta la autorización del responsable.
          </p>

          <form id="new-req-form">
            <div class="form-grid-2">
              <label class="field">
                Área Solicitante
                <select name="area" required>
                  <option value="Taller Mecánico">Taller Mecánico</option>
                  <option value="Chapa y Pintura">Chapa y Pintura</option>
                  <option value="Recepción Posventa">Recepción Posventa</option>
                  <option value="Administración y Ventas">Administración y Ventas</option>
                </select>
              </label>

              <label class="field">
                Insumo Solicitado
                <select name="item" id="req-item-select" required>
                  ${catalog.map(c => `<option value="${c.name}">${c.name} (Disp: ${c.currentStock})</option>`).join('')}
                </select>
              </label>

              <label class="field">
                Cantidad Requerida
                <input type="number" name="qty" id="req-qty" min="1" max="100" value="5" required />
              </label>

              <label class="field">
                Operador / Solicitante
                <input type="text" name="user" value="Operario Nelson N. (Demostración)" disabled />
              </label>
            </div>

            <div style="margin-top: 24px; display: flex; gap: 12px; align-items: center;">
              <button type="submit" class="button">
                Enviar solicitud a autorización →
              </button>
              <span id="form-msg" class="muted" style="font-size: 12.5px;"></span>
            </div>
          </form>
        </div>
      `;

      document.getElementById('new-req-form').onsubmit = (e) => {
        e.preventDefault();
        const f = new FormData(e.target);
        const itemName = f.get('item');
        const qty = parseInt(f.get('qty'), 10);
        const area = f.get('area');

        const catItem = catalog.find(c => c.name === itemName);
        if (!catItem || qty > catItem.currentStock) {
          alert('La cantidad supera el stock físico disponible en el pañol.');
          return;
        }

        requests.unshift({
          id: nextReqId++,
          area,
          item: itemName,
          qty,
          user: 'Operario Nelson N.',
          date: 'Recién',
          status: 'Pendiente'
        });

        renderMetrics();
        activeTab = 'autorizaciones';
        renderView();
      };
    } else if (activeTab === 'autorizaciones') {
      view.innerHTML = `
        <div class="panel">
          <span class="eyebrow">CONTROL Y SUPERVISIÓN</span>
          <h2 class="section-title">Bandeja de Autorizaciones de Materiales</h2>
          <p class="muted" style="font-size: 13.5px; margin-bottom: 18px;">
            El supervisor valida la justificación del pedido. Al aprobar, el stock se descuenta automáticamente en tiempo real.
          </p>

          <div style="overflow-x: auto;">
            <table class="mini-table">
              <thead>
                <tr>
                  <th>N° Solicitud</th>
                  <th>Fecha/Hora</th>
                  <th>Área</th>
                  <th>Insumo</th>
                  <th>Cantidad</th>
                  <th>Estado</th>
                  <th style="text-align: right;">Acción de Control</th>
                </tr>
              </thead>
              <tbody>
                ${requests.map(r => {
                  const tagClass = r.status === 'Aprobada' ? 'success' : r.status === 'Rechazada' ? 'alert' : 'warn';
                  return `
                    <tr>
                      <td><strong>#${r.id}</strong></td>
                      <td>${r.date}</td>
                      <td>${r.area}</td>
                      <td>${r.item}</td>
                      <td><strong>${r.qty}</strong></td>
                      <td><span class="tag ${tagClass}">${r.status}</span></td>
                      <td style="text-align: right;">
                        ${r.status === 'Pendiente' ? `
                          <button class="button" style="padding: 6px 12px; font-size: 12px;" data-approve="${r.id}">Aprobar</button>
                          <button class="button secondary" style="padding: 6px 12px; font-size: 12px; margin-left: 6px;" data-reject="${r.id}">Rechazar</button>
                        ` : `
                          <span class="muted" style="font-size: 12px;">Completado</span>
                        `}
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

      // Event handlers for actions
      view.querySelectorAll('[data-approve]').forEach(btn => {
        btn.onclick = () => {
          const reqId = parseInt(btn.dataset.approve, 10);
          const req = requests.find(r => r.id === reqId);
          if (!req) return;

          const catItem = catalog.find(c => c.name === req.item);
          if (catItem.currentStock < req.qty) {
            alert('Error: Stock insuficiente para autorizar esta entrega.');
            return;
          }

          catItem.currentStock -= req.qty;
          req.status = 'Aprobada';
          movements.unshift({
            id: `MOV-${300 + movements.length + 1}`,
            type: 'Salida autorizada',
            item: req.item,
            qty: req.qty,
            area: req.area,
            time: 'Recién'
          });

          renderMetrics();
          renderView();
        };
      });

      view.querySelectorAll('[data-reject]').forEach(btn => {
        btn.onclick = () => {
          const reqId = parseInt(btn.dataset.reject, 10);
          const req = requests.find(r => r.id === reqId);
          if (!req) return;

          req.status = 'Rechazada';
          renderMetrics();
          renderView();
        };
      });
    } else if (activeTab === 'stock') {
      view.innerHTML = `
        <div class="panel">
          <span class="eyebrow">AUDITORÍA Y TRAZABILIDAD</span>
          <h2 class="section-title">Niveles de Stock y Registro de Movimientos</h2>

          <h3 style="font-size: 15px; margin-top: 18px; margin-bottom: 12px;">Existencias Físicas en Pañol</h3>
          <div class="inventory-status-grid">
            ${catalog.map(c => {
              const pct = Math.round((c.currentStock / c.maxStock) * 100);
              const isLow = pct < 35;
              return `
                <div class="stock-card">
                  <div class="stock-header">
                    <span>${c.name}</span>
                    <strong style="color: ${isLow ? 'var(--danger)' : 'var(--ink)'};">${c.currentStock} un.</strong>
                  </div>
                  <div class="track">
                    <div class="fill ${isLow ? 'danger' : ''}" style="width: ${pct}%;"></div>
                  </div>
                  <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--muted); margin-top: 6px;">
                    <span>Capacidad: ${c.maxStock} un.</span>
                    <span>${pct}% disponible</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <h3 style="font-size: 15px; margin-top: 32px; margin-bottom: 12px;">Libro de Movimientos Auditados</h3>
          <div style="overflow-x: auto;">
            <table class="mini-table">
              <thead>
                <tr>
                  <th>N° Movimiento</th>
                  <th>Tipo</th>
                  <th>Insumo</th>
                  <th>Cantidad</th>
                  <th>Destino / Área</th>
                  <th>Momento</th>
                </tr>
              </thead>
              <tbody>
                ${movements.map(m => `
                  <tr>
                    <td><strong>${m.id}</strong></td>
                    <td><span class="tag success">${m.type}</span></td>
                    <td>${m.item}</td>
                    <td><strong>${m.qty}</strong></td>
                    <td>${m.area}</td>
                    <td>${m.time}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }
  }

  // Bind tab changes
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
      activeTab = btn.dataset.tab;
      renderView();
    };
  });

  renderMetrics();
  renderView();
})();
