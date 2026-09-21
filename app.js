// --- CREDENCIALES DE ACCESO FIJAS ---
const CREDENCIALES_PERMITIDAS = {
    usuario: "AnaRo",
    clave: "Anatilde"
};

// URL de tu API en SheetDB
const URL_SHEETDB = "https://sheetdb.io/api/v1/93df8h7sv2a4c";

let inventario = [];
let ventas = [];
let gastos = [];
let sesionActiva = localStorage.getItem('sesionActiva') === 'true';

const pantallaLogin = document.getElementById('pantalla-login');
const appPrincipal = document.getElementById('app-principal');
const formLogin = document.getElementById('form-login');
const loginError = document.getElementById('login-error');

if (sesionActiva) {
    pantallaLogin.classList.add('hidden');
    appPrincipal.classList.remove('hidden');
    cargarDatosDesdeNube();
}

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('login-usuario').value.trim();
    const pass = document.getElementById('login-clave').value.trim();

    if (user === CREDENCIALES_PERMITIDAS.usuario && pass === CREDENCIALES_PERMITIDAS.clave) {
        localStorage.setItem('sesionActiva', 'true');
        pantallaLogin.classList.add('hidden');
        appPrincipal.classList.remove('hidden');
        cargarDatosDesdeNube();
    } else {
        loginError.classList.remove('hidden');
    }
});

function cerrarSesion() {
    localStorage.removeItem('sesionActiva');
    location.reload();
}

document.getElementById('fecha-hoy').textContent = new Date().toLocaleDateString();

const formProducto = document.getElementById('form-producto');
const formVentaProducto = document.getElementById('form-venta-producto');
const formVentaServicio = document.getElementById('form-venta-servicio');
const formGasto = document.getElementById('form-gasto');
const tablaInventario = document.getElementById('tabla-inventario');
const tablaHistorial = document.getElementById('tabla-historial');
const panelInventario = document.getElementById('panel-inventario');
const btnToggleInventario = document.getElementById('btn-toggle-inventario');

// Notificación flotante elegante
function mostrarNotificacion(mensaje, tipo = 'exito') {
    const notifAntigua = document.getElementById('notif-flotante');
    if (notifAntigua) notifAntigua.remove();

    const notif = document.createElement('div');
    notif.id = 'notif-flotante';
    notif.className = `fixed bottom-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg text-white text-sm font-medium transition-all duration-300 ${tipo === 'error' ? 'bg-red-600' : 'bg-emerald-600'}`;
    notif.textContent = mensaje;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.opacity = '0';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

function cambiarModoPOS(modo) {
    const btnProd = document.getElementById('tab-prod-btn');
    const btnServ = document.getElementById('tab-serv-btn');
    const btnGasto = document.getElementById('tab-gasto-btn');
    
    formVentaProducto.classList.add('hidden');
    formVentaServicio.classList.add('hidden');
    formGasto.classList.add('hidden');

    btnProd.className = "px-3 py-2 text-xs md:text-sm font-bold rounded-lg bg-gray-200 text-gray-700 transition";
    btnServ.className = "px-3 py-2 text-xs md:text-sm font-bold rounded-lg bg-gray-200 text-gray-700 transition";
    btnGasto.className = "px-3 py-2 text-xs md:text-sm font-bold rounded-lg bg-gray-200 text-gray-700 transition";

    if (modo === 'producto') {
        formVentaProducto.classList.remove('hidden');
        btnProd.className = "px-3 py-2 text-xs md:text-sm font-bold rounded-lg bg-blue-600 text-white transition";
    } else if (modo === 'servicio') {
        formVentaServicio.classList.remove('hidden');
        btnServ.className = "px-3 py-2 text-xs md:text-sm font-bold rounded-lg bg-blue-600 text-white transition";
    } else if (modo === 'gasto') {
        formGasto.classList.remove('hidden');
        btnGasto.className = "px-3 py-2 text-xs md:text-sm font-bold rounded-lg bg-amber-600 text-white transition";
    }
}

function toggleVentaLibre() {
    const esLibre = document.getElementById('check-venta-libre').checked;
    const seccionBusqueda = document.getElementById('seccion-busqueda-inventario');
    const seccionLibre = document.getElementById('seccion-venta-libre-prod');
    const contenedorCantidad = document.getElementById('contenedor-cantidad-prod');

    if (esLibre) {
        seccionBusqueda.classList.add('hidden');
        seccionLibre.classList.remove('hidden');
        contenedorCantidad.classList.add('hidden');
        document.getElementById('input-buscador-prod').removeAttribute('required');
        document.getElementById('libre-prod-nombre').setAttribute('required', 'true');
        document.getElementById('libre-prod-precio').setAttribute('required', 'true');
    } else {
        seccionBusqueda.classList.remove('hidden');
        seccionLibre.classList.add('hidden');
        contenedorCantidad.classList.remove('hidden');
        document.getElementById('input-buscador-prod').setAttribute('required', 'true');
        document.getElementById('libre-prod-nombre').removeAttribute('required');
        document.getElementById('libre-prod-precio').removeAttribute('required');
    }
}

function manejarCambioServicio() {
    const selectServicio = document.getElementById('servicio-tipo');
    const tipoSeleccionado = selectServicio.value;
    
    const seccionFijo = document.getElementById('seccion-servicio-fijo');
    const seccionLibre = document.getElementById('seccion-servicio-libre');

    if (tipoSeleccionado === 'fijo') {
        seccionFijo.classList.remove('hidden');
        seccionLibre.classList.add('hidden');
    } else if (tipoSeleccionado === 'libre') {
        seccionFijo.classList.add('hidden');
        seccionLibre.classList.remove('hidden');
    } else {
        seccionFijo.classList.add('hidden');
        seccionLibre.classList.add('hidden');
    }
}

function togglePanelInventario() {
    panelInventario.classList.toggle('hidden');
    if (!panelInventario.classList.contains('hidden')) {
        btnToggleInventario.textContent = "✖ Cerrar Inventario";
        btnToggleInventario.className = "text-xs bg-red-100 hover:bg-red-200 text-red-700 px-3 py-2 rounded-lg transition font-medium border";
    } else {
        btnToggleInventario.textContent = "⚙️ Inventario";
        btnToggleInventario.className = "text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition font-medium border";
    }
}

function limpiarFiltros() {
    document.getElementById('filtro-tipo').value = 'todos';
    document.getElementById('filtro-fecha-desde').value = '';
    document.getElementById('filtro-fecha-hasta').value = '';
    renderizarTodo();
}

// --- SINCRONIZACIÓN NUBE (SHEETDB) TOTAL ---

async function cargarDatosDesdeNube() {
    try {
        let resInv = await fetch(`${URL_SHEETDB}?sheet=inventario`);
        inventario = await resInv.json();
        inventario = inventario.map(item => ({ ...item, id: Number(item.id), costo: Number(item.costo), precio: Number(item.precio), stock: Number(item.stock) }));

        let resVentas = await fetch(`${URL_SHEETDB}?sheet=ventas`);
        ventas = await resVentas.json();
        ventas = ventas.map(item => ({ ...item, id: Number(item.id), totalVenta: Number(item.totalVenta), ganancia: Number(item.ganancia) }));

        let resGastos = await fetch(`${URL_SHEETDB}?sheet=gastos`);
        gastos = await resGastos.json();
        gastos = gastos.map(item => ({ 
            ...item, 
            id: Number(item.id), 
            monto: Number(item.monto || item.valor || item.Monto || item.Valor || 0) 
        }));

        renderizarTodo();
    } catch (error) {
        console.error("Error al cargar datos de la nube:", error);
    }
}

async function guardarEnNube(pestana, objetoDatos) {
    try {
        await fetch(`${URL_SHEETDB}?sheet=${pestana}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: [objetoDatos] })
        });
    } catch (error) {
        console.error("Error al guardar en la nube:", error);
    }
}

async function actualizarStockEnNube(idProducto, nuevoStock) {
    try {
        await fetch(`${URL_SHEETDB}/id/${idProducto}?sheet=inventario`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: { stock: nuevoStock } })
        });
    } catch (error) {
        console.error("Error al actualizar stock en la nube:", error);
    }
}

// --- ACCIONES ---

formProducto.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('prod-nombre').value.trim();
    const marca = document.getElementById('prod-marca').value.trim();
    const color = document.getElementById('prod-color').value.trim();
    const costo = parseFloat(document.getElementById('prod-costo').value);
    const precio = parseFloat(document.getElementById('prod-precio').value);
    const stock = parseInt(document.getElementById('prod-stock').value);

    let nombreCompleto = nombre;
    let detallesExtra = [];
    if (marca) detallesExtra.push(`Marca: ${marca}`);
    if (color) detallesExtra.push(`Color: ${color}`);
    if (detallesExtra.length > 0) nombreCompleto += ` (${detallesExtra.join(' - ')})`;

    const nuevoProducto = { id: Date.now(), nombre: nombreCompleto, costo, precio, stock };
    inventario.push(nuevoProducto);

    await guardarEnNube('inventario', nuevoProducto);
    renderizarTodo();
    formProducto.reset();
    mostrarNotificacion('¡Producto agregado con éxito!');
});

formVentaProducto.addEventListener('submit', async (e) => {
    e.preventDefault();
    const esLibre = document.getElementById('check-venta-libre').checked;

    if (esLibre) {
        const nombreLibre = document.getElementById('libre-prod-nombre').value.trim();
        const precioTotalLibre = parseFloat(document.getElementById('libre-prod-precio').value);

        if (!precioTotalLibre || precioTotalLibre <= 0) return mostrarNotificacion('Ingresa un precio válido.', 'error');

        const nuevaVenta = {
            id: Date.now(),
            fecha: new Date().toISOString(),
            tipo: 'venta_producto',
            concepto: `[Venta Libre] ${nombreLibre}`,
            totalVenta: precioTotalLibre,
            ganancia: precioTotalLibre
        };

        ventas.push(nuevaVenta);
        await guardarEnNube('ventas', nuevaVenta);

        formVentaProducto.reset();
        document.getElementById('check-venta-libre').checked = false;
        toggleVentaLibre();
        renderizarTodo();
        mostrarNotificacion('¡Venta registrada con éxito!');

    } else {
        const textoBusqueda = document.getElementById('input-buscador-prod').value.trim();
        const productoId = parseInt(document.getElementById('venta-producto-id').value);
        const cantidad = parseInt(document.getElementById('venta-cantidad').value);

        const producto = inventario.find(p => p.id === productoId || p.nombre === textoBusqueda);
        if (!producto) return mostrarNotificacion('Selecciona un producto válido.', 'error');

        if (producto.stock < cantidad) return mostrarNotificacion(`Stock insuficiente! Disponible: ${producto.stock}`, 'error');

        producto.stock -= cantidad;
        const totalVenta = producto.precio * cantidad;
        const costoTotal = producto.costo * cantidad;
        const ganancia = totalVenta - costoTotal;

        const nuevaVenta = {
            id: Date.now(),
            fecha: new Date().toISOString(),
            tipo: 'venta_producto',
            concepto: `${producto.nombre} (x${cantidad})`,
            totalVenta,
            ganancia
        };

        ventas.push(nuevaVenta);
        await guardarEnNube('ventas', nuevaVenta);
        await actualizarStockEnNube(producto.id, producto.stock);

        formVentaProducto.reset();
        document.getElementById('venta-cantidad').value = 1;
        renderizarTodo();
        mostrarNotificacion('¡Venta registrada con éxito!');
    }
});

formVentaServicio.addEventListener('submit', async (e) => {
    e.preventDefault();
    const selectServicio = document.getElementById('servicio-tipo');
    const optionSelected = selectServicio.options[selectServicio.selectedIndex];
    const tipo = selectServicio.value;
    const nombreServicio = optionSelected.getAttribute('data-nombre');

    let totalVenta = 0;
    let ganancia = 0;

    if (tipo === 'fijo') {
        const precioUnit = parseFloat(optionSelected.getAttribute('data-precio'));
        const costoUnit = parseFloat(optionSelected.getAttribute('data-costo'));
        const detalleCantidad = parseInt(document.getElementById('servicio-cantidad').value);

        totalVenta = precioUnit * detalleCantidad;
        ganancia = (precioUnit - costoUnit) * detalleCantidad;
    } else if (tipo === 'libre') {
        totalVenta = parseFloat(document.getElementById('servicio-precio-total').value);
        ganancia = totalVenta; 
    }

    if (!totalVenta || totalVenta <= 0) return mostrarNotificacion('Ingresa un valor válido.', 'error');

    const nuevoServicio = {
        id: Date.now(),
        fecha: new Date().toISOString(),
        tipo: 'venta_servicio',
        concepto: nombreServicio,
        totalVenta,
        ganancia
    };

    ventas.push(nuevoServicio);
    await guardarEnNube('ventas', nuevoServicio);

    formVentaServicio.reset();
    document.getElementById('seccion-servicio-libre').classList.add('hidden');
    document.getElementById('seccion-servicio-fijo').classList.remove('hidden');
    renderizarTodo();
    mostrarNotificacion('¡Servicio registrado con éxito!');
});

formGasto.addEventListener('submit', async (e) => {
    e.preventDefault();
    const descripcion = document.getElementById('gasto-descripcion').value.trim();
    const monto = parseFloat(document.getElementById('gasto-monto').value);

    if (!monto || monto <= 0) return mostrarNotificacion('Ingresa un monto válido.', 'error');

    const nuevoGasto = {
        id: Date.now(),
        fecha: new Date().toISOString(),
        descripcion: descripcion,
        monto: monto
    };

    gastos.push(nuevoGasto);
    await guardarEnNube('gastos', nuevoGasto);

    formGasto.reset();
    renderizarTodo();
    mostrarNotificacion('¡Gasto registrado en la nube correctamente!');
});

// --- OBTENER MOVIMIENTOS FILTRADOS ---
function obtenerMovimientosFiltrados() {
    let movimientos = [
        ...ventas.map(v => ({ ...v, esGasto: false })),
        ...gastos.map(g => ({ 
            id: g.id,
            fecha: g.fecha,
            esGasto: true, 
            totalVenta: Number(g.monto || g.valor || 0), 
            concepto: `Egreso/Pago: ${g.descripcion || 'Sin descripción'}`, 
            tipo: 'gasto' 
        }))
    ];

    movimientos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    const filtroTipo = document.getElementById('filtro-tipo').value;
    const fechaDesde = document.getElementById('filtro-fecha-desde').value;
    const fechaHasta = document.getElementById('filtro-fecha-hasta').value;

    return movimientos.filter(m => {
        const fechaMovStr = new Date(m.fecha).toISOString().split('T')[0];
        if (fechaDesde && fechaMovStr < fechaDesde) return false;
        if (fechaHasta && fechaMovStr > fechaHasta) return false;
        if (filtroTipo === 'ingresos' && m.esGasto) return false;
        if (filtroTipo === 'egresos' && !m.esGasto) return false;
        return true;
    });
}

// --- DESCARGAR PDF ---
function exportarPDFFiltrado() {
    const movimientosFiltrados = obtenerMovimientosFiltrados();

    if (movimientosFiltrados.length === 0) {
        return mostrarNotificacion('No hay movimientos en el filtro seleccionado.', 'error');
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Papelería & Variedades - Reporte Financiero", 14, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Generado el: ${new Date().toLocaleString()}`, 14, 28);

    let y = 38;
    doc.setFillColor(37, 99, 235); // Azul moderno
    doc.rect(14, y, 182, 8, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.text("Fecha y Hora", 16, y + 6);
    doc.text("Tipo", 65, y + 6);
    doc.text("Concepto", 95, y + 6);
    doc.text("Valor", 165, y + 6);

    y += 12;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);

    movimientosFiltrados.forEach(m => {
        if (y > 270) {
            doc.addPage();
            y = 20;
        }

        let fechaObj = new Date(m.fecha);
        let fechaFormateada = fechaObj.toLocaleDateString() + ' ' + fechaObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        let tipoTexto = m.esGasto ? 'Egreso/Pago' : (m.tipo === 'venta_producto' ? 'Producto' : 'Servicio');
        let signo = m.esGasto ? '-' : '+';
        let valorFormateado = `${signo}$${(m.totalVenta || 0).toLocaleString()}`;

        doc.text(fechaFormateada, 16, y);
        doc.text(tipoTexto, 65, y);
        doc.text(m.concepto.substring(0, 35), 95, y);
        doc.text(valorFormateado, 165, y);

        y += 8;
    });

    doc.save(`Reporte_Papeleria_${new Date().toISOString().split('T')[0]}.pdf`);
}

// --- RENDERIZAR INTERFAZ ---

function renderizarTodo() {
    tablaInventario.innerHTML = '';
    const datalistSugeridos = document.getElementById('lista-productos-sugeridos');
    datalistSugeridos.innerHTML = '';

    let totalStockItems = 0;
    let stockBajoCount = 0;

    inventario.forEach(p => {
        totalStockItems += p.stock;
        if (p.stock <= 3) stockBajoCount++;

        tablaInventario.innerHTML += `
            <tr class="border-b">
                <td class="p-2 font-medium text-gray-800">${p.nombre}</td>
                <td class="p-2 ${p.stock <= 3 ? 'text-red-500 font-bold' : 'text-gray-700'}">${p.stock}</td>
                <td class="p-2 text-gray-700">$${p.precio.toLocaleString()}</td>
            </tr>
        `;

        if (p.stock > 0) {
            datalistSugeridos.innerHTML += `<option value="${p.nombre}" data-id="${p.id}">Stock: ${p.stock} | Precio: $${p.precio.toLocaleString()}</option>`;
        }
    });

    const inputBuscador = document.getElementById('input-buscador-prod');
    inputBuscador.oninput = function() {
        const val = this.value;
        const match = inventario.find(p => p.nombre === val);
        if (match) {
            document.getElementById('venta-producto-id').value = match.id;
        } else {
            document.getElementById('venta-producto-id').value = '';
        }
    };

    document.getElementById('stat-total-items').textContent = totalStockItems;
    document.getElementById('stat-stock-bajo').textContent = stockBajoCount;

    let movimientosFiltrados = obtenerMovimientosFiltrados();
    let movimientosTotales = [
        ...ventas.map(v => ({ ...v, esGasto: false })),
        ...gastos.map(g => ({ ...g, esGasto: true, totalVenta: Number(g.monto || g.valor || 0) }))
    ];
    document.getElementById('stat-total-mov').textContent = movimientosTotales.length;

    tablaHistorial.innerHTML = '';
    if (movimientosFiltrados.length === 0) {
        tablaHistorial.innerHTML = `<tr><td colspan="4" class="p-4 text-center text-gray-400">No hay movimientos que coincidan con el filtro.</td></tr>`;
    } else {
        movimientosFiltrados.forEach(m => {
            const fechaObj = new Date(m.fecha);
            const fechaFormateada = fechaObj.toLocaleDateString() + ' ' + fechaObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            let badgeTipo = '';
            let colorTexto = '';

            if (m.tipo === 'venta_producto') {
                badgeTipo = '<span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">Producto</span>';
                colorTexto = 'text-blue-900 font-semibold';
            } else if (m.tipo === 'venta_servicio') {
                badgeTipo = '<span class="bg-sky-100 text-sky-700 px-2 py-0.5 rounded font-bold">Servicio</span>';
                colorTexto = 'text-sky-900 font-semibold';
            } else {
                badgeTipo = '<span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">Pago/Gasto</span>';
                colorTexto = 'text-amber-800 font-semibold';
            }

            tablaHistorial.innerHTML += `
                <tr class="border-b">
                    <td class="p-2 text-gray-600">${fechaFormateada}</td>
                    <td class="p-2">${badgeTipo}</td>
                    <td class="p-2 text-gray-800">${m.concepto}</td>
                    <td class="p-2 ${colorTexto}">${m.esGasto ? '-' : '+'}${(m.totalVenta || 0).toLocaleString()}</td>
                </tr>
            `;
        });
    }

    const ahora = new Date();
    const hoyStr = ahora.toLocaleDateString();
    const hace7Dias = new Date();
    hace7Dias.setDate(ahora.getDate() - 7);

    const mesActual = ahora.getMonth();
    const anioActual = ahora.getFullYear();

    let ventasHoy = 0, gastosHoy = 0;
    let ventasSemana = 0, gastosSemana = 0;
    let ventasMes = 0, gastosMes = 0;

    ventas.forEach(v => {
        const f = new Date(v.fecha);
        if (f.toLocaleDateString() === hoyStr) ventasHoy += v.totalVenta;
        if (f >= hace7Dias) ventasSemana += v.totalVenta;
        if (f.getMonth() === mesActual && f.getFullYear() === anioActual) ventasMes += v.totalVenta;
    });

    gastos.forEach(g => {
        const f = new Date(g.fecha);
        const valorGasto = Number(g.monto || g.valor || 0);
        if (f.toLocaleDateString() === hoyStr) gastosHoy += valorGasto;
        if (f >= hace7Dias) gastosSemana += valorGasto;
        if (f.getMonth() === mesActual && f.getFullYear() === anioActual) gastosMes += valorGasto;
    });

    document.getElementById('caja-ventas-hoy').textContent = `$${ventasHoy.toLocaleString()}`;
    document.getElementById('caja-gastos-hoy').textContent = `$${gastosHoy.toLocaleString()}`;
    document.getElementById('caja-neto-hoy').textContent = `$${(ventasHoy - gastosHoy).toLocaleString()}`;

    document.getElementById('caja-ventas-semana').textContent = `$${ventasSemana.toLocaleString()}`;
    document.getElementById('caja-gastos-semana').textContent = `$${gastosSemana.toLocaleString()}`;
    document.getElementById('caja-neto-semana').textContent = `$${(ventasSemana - gastosSemana).toLocaleString()}`;

    document.getElementById('caja-ventas-mes').textContent = `$${ventasMes.toLocaleString()}`;
    document.getElementById('caja-gastos-mes').textContent = `$${gastosMes.toLocaleString()}`;
    document.getElementById('caja-neto-mes').textContent = `$${(ventasMes - gastosMes).toLocaleString()}`;

    // Mini Gráfica de Barras
    const contenedorBarras = document.getElementById('mini-grafica-barras');
    contenedorBarras.innerHTML = '';

    let diasGrafica = [];
    let maxValor = 100;

    for (let i = 4; i >= 0; i--) {
        let d = new Date();
        d.setDate(ahora.getDate() - i);
        let dStr = d.toLocaleDateString();
        let nombreDia = d.toLocaleDateString('es-ES', { weekday: 'short' });

        let totalDia = ventas.filter(v => new Date(v.fecha).toLocaleDateString() === dStr).reduce((acc, v) => acc + v.totalVenta, 0);
        diasGrafica.push({ dia: nombreDia, total: totalDia });
        if (totalDia > maxValor) maxValor = totalDia;
    }

    diasGrafica.forEach(item => {
        let alturaPorcentaje = Math.max(Math.round((item.total / maxValor) * 100), 10);
        contenedorBarras.innerHTML += `
            <div class="flex-1 flex flex-col items-center h-full justify-end group">
                <div class="text-[10px] text-gray-500 mb-0.5 opacity-0 group-hover:opacity-100 transition">$${item.total}</div>
                <div class="w-full bg-blue-600 hover:bg-blue-700 rounded-t transition-all duration-300" style="height: ${alturaPorcentaje}%"></div>
                <span class="text-[10px] text-gray-600 mt-1 capitalize">${item.dia}</span>
            </div>
        `;
    });
}