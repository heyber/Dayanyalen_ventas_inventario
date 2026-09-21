// --- CREDENCIALES DE ACCESO FIJAS ---
const CREDENCIALES_PERMITIDAS = {
    usuario: "AnaR",
    clave: "MailyR"
};

// URL de tu API en SheetDB
const URL_SHEETDB = "https://sheetdb.io/api/v1/93df8h7sv2a4c";

let inventario = [];
let ventas = [];
let gastos = [];
let carrito = []; // Carrito híbrido (inventario + libre)
let sesionActiva = localStorage.getItem('sesionActiva') === 'true';

// Variables para Paginación de Inventario y Consecutivo de Facturas
let paginaActualInventario = 1;
const itemsPorPaginaInventario = 8;
let contadorFacturas = parseInt(localStorage.getItem('contadorFacturas') || '0');

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
    notif.className = `fixed bottom-5 right-5 z-50 px-4 py-3 rounded-xl shadow-xl text-white text-xs font-bold transition-all duration-300 ${tipo === 'error' ? 'bg-red-600' : 'bg-emerald-600'}`;
    notif.textContent = mensaje;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.opacity = '0';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

function togglePanelInventario() {
    panelInventario.classList.toggle('hidden');
    if (!panelInventario.classList.contains('hidden')) {
        btnToggleInventario.textContent = "✖ Cerrar Inventario";
        btnToggleInventario.className = "text-xs bg-rose-100 hover:bg-rose-200 text-rose-700 px-3.5 py-2 rounded-xl transition font-bold border border-rose-200";
    } else {
        btnToggleInventario.textContent = "⚙️ Gestionar Inventario";
        btnToggleInventario.className = "text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2 rounded-xl transition font-bold border border-slate-200";
    }
}

function limpiarFiltros() {
    document.getElementById('filtro-tipo').value = 'todos';
    document.getElementById('filtro-fecha-desde').value = '';
    document.getElementById('filtro-fecha-hasta').value = '';
    renderizarTodo();
}

// --- GESTIÓN DEL CARRITO HÍBRIDO ---

function agregarInventarioAlCarrito() {
    const textoBusqueda = document.getElementById('input-buscador-prod').value.trim();
    const productoId = parseInt(document.getElementById('venta-producto-id').value);
    const cantidad = parseInt(document.getElementById('venta-cantidad').value);

    const producto = inventario.find(p => p.id === productoId || p.nombre === textoBusqueda);
    if (!producto) return mostrarNotificacion('Selecciona un producto válido del buscador.', 'error');

    if (producto.stock < cantidad) return mostrarNotificacion(`Stock insuficiente! Disponible: ${producto.stock}`, 'error');

    const itemExistente = carrito.find(item => item.idInventario === producto.id);
    if (itemExistente) {
        if (producto.stock < (itemExistente.cantidad + cantidad)) {
            return mostrarNotificacion(`Stock insuficiente para agregar más.`, 'error');
        }
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({
            id: Date.now() + Math.random(),
            idInventario: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            costo: producto.costo,
            cantidad: cantidad,
            esInventario: true
        });
    }

    document.getElementById('input-buscador-prod').value = '';
    document.getElementById('venta-producto-id').value = '';
    document.getElementById('venta-cantidad').value = 1;
    renderizarCarrito();
}

function agregarLibreAlCarrito() {
    const descripcion = document.getElementById('libre-descripcion').value.trim();
    const precio = parseFloat(document.getElementById('libre-precio').value);

    if (!descripcion) return mostrarNotificacion('Ingresa la descripción del ítem o servicio.', 'error');
    if (!precio || precio <= 0) return mostrarNotificacion('Ingresa un precio válido.', 'error');

    carrito.push({
        id: Date.now() + Math.random(),
        idInventario: null,
        nombre: descripcion,
        precio: precio,
        costo: 0,
        cantidad: 1,
        esInventario: false
    });

    document.getElementById('libre-descripcion').value = '';
    document.getElementById('libre-precio').value = '';
    renderizarCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    renderizarCarrito();
}

function renderizarCarrito() {
    const tbody = document.getElementById('tabla-carrito');
    tbody.innerHTML = '';

    if (carrito.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-400 font-medium">El carrito está vacío. Agrega productos o servicios arriba.</td></tr>`;
        document.getElementById('carrito-total-suma').textContent = '$0';
        return;
    }

    let totalGeneral = 0;
    carrito.forEach(item => {
        let subtotal = item.precio * item.cantidad;
        totalGeneral += subtotal;

        tbody.innerHTML += `
            <tr class="border-b border-slate-50 hover:bg-slate-50/50">
                <td class="p-2.5 font-bold text-slate-800">${item.nombre}</td>
                <td class="p-2.5 text-slate-600 font-semibold">${item.cantidad}</td>
                <td class="p-2.5 text-slate-600">$${item.precio.toLocaleString()}</td>
                <td class="p-2.5 font-black text-blue-900">$${subtotal.toLocaleString()}</td>
                <td class="p-2.5 text-center">
                    <button onclick="eliminarDelCarrito(${item.id})" class="text-red-500 hover:text-red-700 font-black">✕</button>
                </td>
            </tr>
        `;
    });

    document.getElementById('carrito-total-suma').textContent = `$${totalGeneral.toLocaleString()}`;
}

// --- PROCESAR VENTA ---

async function procesarVentaCarrito(generarPDF = false) {
    if (carrito.length === 0) return mostrarNotificacion('El carrito está vacío.', 'error');

    let totalVenta = 0;
    let costoTotal = 0;
    let conceptosArray = [];

    carrito.forEach(item => {
        totalVenta += item.precio * item.cantidad;
        costoTotal += item.costo * item.cantidad;
        conceptosArray.push(`${item.nombre} (x${item.cantidad})`);
    });

    let ganancia = totalVenta - costoTotal;
    let conceptoFinal = conceptosArray.join(', ');
    let clienteNombre = document.getElementById('factura-cliente').value.trim() || 'Consumidor Final';
    let clienteNit = document.getElementById('factura-nit-cliente').value.trim() || 'N/A';

    let numeroFacturaTexto = "N/A (Sin Factura)";
    if (generarPDF) {
        contadorFacturas++;
        localStorage.setItem('contadorFacturas', contadorFacturas);
        numeroFacturaTexto = String(contadorFacturas).padStart(6, '0');
    }

    const nuevaVenta = {
        id: Date.now(),
        fecha: new Date().toISOString(),
        tipo: 'venta_multilinea',
        concepto: conceptoFinal,
        totalVenta,
        ganancia,
        cliente: clienteNombre,
        nitCliente: clienteNit,
        nroFactura: numeroFacturaTexto,
        items: [...carrito]
    };

    ventas.push(nuevaVenta);
    await guardarEnNube('ventas', nuevaVenta);

    for (let item of carrito) {
        if (item.esInventario && item.idInventario) {
            let prodInventario = inventario.find(p => p.id === item.idInventario);
            if (prodInventario) {
                prodInventario.stock -= item.cantidad;
                await actualizarStockEnNube(prodInventario.id, prodInventario.stock);
            }
        }
    }

    if (generarPDF) {
        generarFacturaPDF(nuevaVenta);
        mostrarNotificacion(`¡Venta cobrada! Factura Nro. ${numeroFacturaTexto} generada.`);
    } else {
        mostrarNotificacion('¡Venta cobrada con éxito (Sin factura)!');
    }

    carrito = [];
    document.getElementById('factura-cliente').value = '';
    document.getElementById('factura-nit-cliente').value = '';
    renderizarCarrito();
    renderizarTodo();
}

// --- GENERADOR DE FACTURA PROFESIONAL EN PDF (CONSECUTIVO ORDENADO) ---
// --- GENERADOR DE FACTURA PROFESIONAL EN PDF (CON LOGO Y CONSECUTIVO ORDENADO) ---
// --- GENERADOR DE FACTURA PROFESIONAL EN PDF (CON LOGO LOCAL Y CONSECUTIVO ORDENADO) ---
function generarFacturaPDF(venta) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Creamos un elemento de imagen en memoria para leer el archivo de la carpeta local
    const img = new Image();
    img.src = "favicon.jpg"; // ⚠️ CAMBIA "logo.jpg" por el nombre exacto de tu imagen en la carpeta (ej. logo.png)

    try {
        // Intenta dibujar el logo local en la factura (X: 14, Y: 12, Ancho: 18, Alto: 18)
        doc.addImage(img, "JPEG", 14, 12, 18, 18);
    } catch (e) {
        console.log("No se pudo cargar el logo local, continuando sin imagen.");
    }

    // 💡 DATOS DE TU LOCAL
    const nombreLocal = "Dayanyalen";
    const nitLocal = "NIT: 900.123.456-1";
    const telLocal = "Tel: 300 123 4567";
    const direccionLocal = "Calle Principal # 10-20, Local 1";

    // Textos del Encabezado
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.text(nombreLocal, 36, 17);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.text(nitLocal, 36, 22);
    doc.text(telLocal, 36, 26);
    doc.text(direccionLocal, 36, 30);

    // Cuadro de Factura a la Derecha
    doc.setDrawColor(37, 99, 235);
    doc.roundedRect(130, 12, 70, 24, 2, 2);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("FACTURA DE VENTA", 135, 19);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`No. ${venta.nroFactura}`, 135, 26);
    doc.text(`Fecha: ${new Date(venta.fecha).toLocaleString()}`, 135, 32);

    // Datos del Cliente
    doc.setFillColor(240, 243, 250);
    doc.roundedRect(14, 40, 186, 18, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.text("DATOS DEL CLIENTE:", 17, 47);
    doc.setFont("helvetica", "normal");
    doc.text(`Cliente: ${venta.cliente}`, 17, 54);
    doc.text(`Cédula/NIT: ${venta.nitCliente}`, 120, 54);

    // Tabla de Productos / Ítems
    let y = 65;
    doc.setFillColor(37, 99, 235);
    doc.rect(14, y, 186, 8, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.text("Descripción del Ítem / Servicio", 16, y + 6);
    doc.text("Cant.", 115, y + 6);
    doc.text("V. Unitario", 135, y + 6);
    doc.text("Total", 170, y + 6);

    y += 12;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);

    if (venta.items && venta.items.length > 0) {
        venta.items.forEach(item => {
            if (y > 250) { doc.addPage(); y = 20; }
            let subtotal = item.precio * item.cantidad;
            doc.text(item.nombre.substring(0, 45), 16, y);
            doc.text(String(item.cantidad), 118, y);
            doc.text(`$${item.precio.toLocaleString()}`, 135, y);
            doc.text(`$${subtotal.toLocaleString()}`, 170, y);
            y += 8;
        });
    }

    // Total a Pagar
    y += 5;
    doc.setDrawColor(200, 200, 200);
    doc.line(130, y, 200, y);
    y += 8;
    doc.setFont("helvetica", "bold");
    doc.text("TOTAL A PAGAR:", 130, y);
    doc.text(`$${venta.totalVenta.toLocaleString()}`, 170, y);

    // Firmas
    y += 25;
    if (y > 250) { doc.addPage(); y = 40; }
    doc.line(25, y, 90, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("Firma Autorizada / Sello", 42, y + 5);

    // Pie de página
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("¡Gracias por su compra! Conserve esta factura.", 105, 285, { align: "center" });

    doc.save(`Factura_${venta.nroFactura}.pdf`);
}

// --- SINCRONIZACIÓN NUBE (SHEETDB) ---

async function cargarDatosDesdeNube() {
    try {
        let resInv = await fetch(`${URL_SHEETDB}?sheet=inventario`);
        inventario = await resInv.json();
        inventario = inventario.map(item => ({ ...item, id: Number(item.id), costo: Number(item.costo), precio: Number(item.precio), stock: Number(item.stock) }));

        let resVentas = await fetch(`${URL_SHEETDB}?sheet=ventas`);
        ventas = await resVentas.json();
        ventas = ventas.map(item => ({ ...item, id: Number(item.id), totalVenta: Number(item.totalVenta), ganancia: Number(item.ganancia || 0) }));

        let resGastos = await fetch(`${URL_SHEETDB}?sheet=gastos`);
        gastos = await resGastos.json();
        gastos = gastos.map(item => ({ 
            ...item, 
            id: Number(item.id), 
            monto: Number(item.monto || item.valor || 0) 
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

// --- REABASTECIMIENTO DE STOCK ---

async function reabastecerStock(idProducto) {
    const producto = inventario.find(p => p.id === idProducto);
    if (!producto) return;

    const cantidadStr = prompt(`📦 Reabastecer: "${producto.nombre}"\nStock actual: ${producto.stock}\n\nIngresa la cantidad que te llegó del nuevo pedido:`, "10");
    if (cantidadStr === null) return;

    const cantidadAdicional = parseInt(cantidadStr);
    if (isNaN(cantidadAdicional) || cantidadAdicional <= 0) {
        return mostrarNotificacion('Ingresa una cantidad válida.', 'error');
    }

    producto.stock += cantidadAdicional;
    await actualizarStockEnNube(producto.id, producto.stock);
    renderizarTodo();
    mostrarNotificacion(`¡Stock actualizado! Nuevo total: ${producto.stock}`);
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
        ...ventas.map(v => ({ ...v, esGasto: false, gananciaReal: Number(v.ganancia || 0) })),
        ...gastos.map(g => ({ 
            id: g.id,
            fecha: g.fecha,
            esGasto: true, 
            totalVenta: Number(g.monto || g.valor || 0), 
            gananciaReal: -Number(g.monto || g.valor || 0),
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

// --- DESCARGAR PDF REPORTE ---
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
    doc.setFillColor(37, 99, 235);
    doc.rect(14, y, 182, 8, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.text("Fecha y Hora", 16, y + 6);
    doc.text("Tipo", 60, y + 6);
    doc.text("Concepto", 90, y + 6);
    doc.text("Valor", 145, y + 6);
    doc.text("Ganancia", 175, y + 6);

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
        let tipoTexto = m.esGasto ? 'Egreso/Pago' : 'Venta';
        let signo = m.esGasto ? '-' : '+';
        let valorFormateado = `${signo}$${(m.totalVenta || 0).toLocaleString()}`;
        let gananciaFormateada = m.esGasto ? '-' : `$${(m.gananciaReal || 0).toLocaleString()}`;

        doc.text(fechaFormateada, 16, y);
        doc.text(tipoTexto, 60, y);
        doc.text(m.concepto.substring(0, 25), 90, y);
        doc.text(valorFormateado, 145, y);
        doc.text(gananciaFormateada, 175, y);

        y += 8;
    });

    doc.save(`Reporte_Papeleria_${new Date().toISOString().split('T')[0]}.pdf`);
}

// --- LOGICA DE BUSCADOR, FILTRO Y PAGINACIÓN DE INVENTARIO ---

function filtrarInventarioBase() {
    const textoBusq = document.getElementById('busqueda-inventario-tabla').value.toLowerCase().trim();
    const soloStockBajo = document.getElementById('filtro-solo-stock-bajo').checked;

    return inventario.filter(p => {
        const coincideTexto = p.nombre.toLowerCase().includes(textoBusq);
        const cumpleStock = soloStockBajo ? (p.stock <= 10) : true;
        return coincideTexto && cumpleStock;
    });
}

function filtrarYCambiarPaginaInventario() {
    paginaActualInventario = 1;
    renderizarInventarioPaginado();
}

function cambiarPaginaInventario(direccion) {
    const listaFiltrada = filtrarInventarioBase();
    const totalPaginas = Math.ceil(listaFiltrada.length / itemsPorPaginaInventario) || 1;

    paginaActualInventario += direccion;
    if (paginaActualInventario < 1) paginaActualInventario = 1;
    if (paginaActualInventario > totalPaginas) paginaActualInventario = totalPaginas;

    renderizarInventarioPaginado();
}

function limpiarFiltrosInventario() {
    document.getElementById('busqueda-inventario-tabla').value = '';
    document.getElementById('filtro-solo-stock-bajo').checked = false;
    paginaActualInventario = 1;
    renderizarInventarioPaginado();
}

function renderizarInventarioPaginado() {
    tablaInventario.innerHTML = '';
    const listaFiltrada = filtrarInventarioBase();
    
    document.getElementById('badge-total-productos').textContent = `${inventario.length} ítems`;

    if (listaFiltrada.length === 0) {
        tablaInventario.innerHTML = `<tr><td colspan="4" class="p-4 text-center text-slate-400 font-medium">No se encontraron productos.</td></tr>`;
        document.getElementById('texto-paginacion-inventario').textContent = `Pág. 0 de 0`;
        document.getElementById('btn-pag-anterior').disabled = true;
        document.getElementById('btn-pag-siguiente').disabled = true;
        return;
    }

    const totalPaginas = Math.ceil(listaFiltrada.length / itemsPorPaginaInventario);
    if (paginaActualInventario > totalPaginas) paginaActualInventario = totalPaginas;

    const inicio = (paginaActualInventario - 1) * itemsPorPaginaInventario;
    const fin = inicio + itemsPorPaginaInventario;
    const productosPagina = listaFiltrada.slice(inicio, fin);

    productosPagina.forEach(p => {
        tablaInventario.innerHTML += `
            <tr class="border-b border-slate-50 hover:bg-slate-50/60 transition">
                <td class="p-2 font-bold text-slate-800">${p.nombre}</td>
                <td class="p-2 text-center font-bold ${p.stock <= 10 ? 'text-red-600 bg-red-50 rounded' : 'text-slate-700'}">${p.stock}</td>
                <td class="p-2 text-right font-semibold text-slate-700">$${p.precio.toLocaleString()}</td>
                <td class="p-2 text-center">
                    <button onclick="reabastecerStock(${p.id})" title="Sumar stock recibido" class="bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 py-1 rounded-lg font-bold text-xs transition">➕</button>
                </td>
            </tr>
        `;
    });

    document.getElementById('texto-paginacion-inventario').textContent = `Pág. ${paginaActualInventario} de ${totalPaginas}`;
    document.getElementById('btn-pag-anterior').disabled = paginaActualInventario === 1;
    document.getElementById('btn-pag-siguiente').disabled = paginaActualInventario === totalPaginas;
}

// --- ASISTENTE VIRTUAL / BURBUJA FLOTANTE ---

function toggleVentanaBot() {
    const ventana = document.getElementById('ventana-bot-chat');
    ventana.classList.toggle('hidden');
    setTimeout(() => {
        ventana.classList.toggle('scale-95');
        ventana.classList.toggle('opacity-0');
    }, 10);
    actualizarAlertasBot();
}

function filtrarStockBajoAutomatico() {
    document.getElementById('filtro-solo-stock-bajo').checked = true;
    document.getElementById('busqueda-inventario-tabla').value = '';
    paginaActualInventario = 1;
    renderizarInventarioPaginado();
    toggleVentanaBot();
    mostrarNotificacion('Inventario filtrado con productos críticos.');
}

function actualizarAlertasBot() {
    const contenedorAlertas = document.getElementById('bot-alertas-stock-container');
    const badgeBot = document.getElementById('badge-contador-bot');
    const productosCriticos = inventario.filter(p => p.stock <= 10);

    contenedorAlertas.innerHTML = '';

    if (productosCriticos.length === 0) {
        badgeBot.classList.add('hidden');
        contenedorAlertas.innerHTML = `
            <div class="bg-emerald-50 text-emerald-800 p-2.5 rounded-xl border border-emerald-100 flex items-center space-x-2">
                <span class="text-base">✅</span>
                <div>
                    <p class="font-bold">¡Todo en orden!</p>
                    <p class="text-[11px] text-emerald-700">No hay productos agotados ni con stock crítico en este momento.</p>
                </div>
            </div>
        `;
    } else {
        badgeBot.textContent = productosCriticos.length;
        badgeBot.classList.remove('hidden');

        let listaHtml = `<div class="space-y-1.5"><p class="font-bold text-slate-800 text-[11px]">⚠️ Productos que necesitan reposición:</p>`;
        productosCriticos.forEach(p => {
            listaHtml += `
                <div class="bg-red-50 border border-red-100 p-2 rounded-xl flex justify-between items-center text-red-900">
                    <span class="font-bold truncate max-w-[170px]" title="${p.nombre}">${p.nombre}</span>
                    <span class="bg-red-200 text-red-800 text-[10px] font-black px-2 py-0.5 rounded-full">Stock: ${p.stock}</span>
                </div>
            `;
        });
        listaHtml += `</div>`;
        contenedorAlertas.innerHTML = listaHtml;
    }
}

// --- RENDERIZAR INTERFAZ GENERAL ---

function renderizarTodo() {
    const datalistSugeridos = document.getElementById('lista-productos-sugeridos');
    datalistSugeridos.innerHTML = '';

    let totalStockItems = 0;
    let stockBajoCount = 0;

    inventario.forEach(p => {
        totalStockItems += p.stock;
        if (p.stock <= 10) stockBajoCount++;

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

    renderizarInventarioPaginado();
    actualizarAlertasBot();

    let movimientosFiltrados = obtenerMovimientosFiltrados();
    let movimientosTotales = [
        ...ventas.map(v => ({ ...v, esGasto: false })),
        ...gastos.map(g => ({ ...g, esGasto: true, totalVenta: Number(g.monto || 0) }))
    ];
    document.getElementById('stat-total-mov').textContent = movimientosTotales.length;

    tablaHistorial.innerHTML = '';
    if (movimientosFiltrados.length === 0) {
        tablaHistorial.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-400 font-medium">No hay movimientos que coincidan con el filtro.</td></tr>`;
    } else {
        movimientosFiltrados.forEach(m => {
            const fechaObj = new Date(m.fecha);
            const fechaFormateada = fechaObj.toLocaleDateString() + ' ' + fechaObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            let badgeTipo = '';
            let colorTexto = '';
            let textoGanancia = '-';

            if (!m.esGasto) {
                badgeTipo = '<span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-lg font-bold">Venta</span>';
                colorTexto = 'text-blue-900 font-bold';
                textoGanancia = `<span class="text-emerald-700 font-black">+$${(m.ganancia || 0).toLocaleString()}</span>`;
            } else {
                badgeTipo = '<span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-lg font-bold">Pago/Gasto</span>';
                colorTexto = 'text-amber-800 font-bold';
                textoGanancia = '<span class="text-slate-400">N/A</span>';
            }

            tablaHistorial.innerHTML += `
                <tr class="border-b border-slate-50 hover:bg-slate-50/60 transition">
                    <td class="p-2.5 text-slate-600 font-medium">${fechaFormateada}</td>
                    <td class="p-2.5">${badgeTipo}</td>
                    <td class="p-2.5 text-slate-800 font-semibold">${m.concepto}</td>
                    <td class="p-2.5 ${colorTexto}">${m.esGasto ? '-' : '+'}${(m.totalVenta || 0).toLocaleString()}</td>
                    <td class="p-2.5">${textoGanancia}</td>
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

    let ventasHoy = 0, gananciaHoy = 0, gastosHoy = 0;
    let ventasSemana = 0, gananciaSemana = 0, gastosSemana = 0;
    let ventasMes = 0, gananciaMes = 0, gastosMes = 0;

    ventas.forEach(v => {
        const f = new Date(v.fecha);
        const valVenta = Number(v.totalVenta || 0);
        const valGanancia = Number(v.ganancia || 0);

        if (f.toLocaleDateString() === hoyStr) {
            ventasHoy += valVenta;
            gananciaHoy += valGanancia;
        }
        if (f >= hace7Dias) {
            ventasSemana += valVenta;
            gananciaSemana += valGanancia;
        }
        if (f.getMonth() === mesActual && f.getFullYear() === anioActual) {
            ventasMes += valVenta;
            gananciaMes += valGanancia;
        }
    });

    gastos.forEach(g => {
        const f = new Date(g.fecha);
        const valorGasto = Number(g.monto || g.valor || 0);

        if (f.toLocaleDateString() === hoyStr) gastosHoy += valorGasto;
        if (f >= hace7Dias) gastosSemana += valorGasto;
        if (f.getMonth() === mesActual && f.getFullYear() === anioActual) gastosMes += valorGasto;
    });

    let netoHoy = gananciaHoy - gastosHoy;
    let netoSemana = gananciaSemana - gastosSemana;
    let netoMes = gananciaMes - gastosMes;

    document.getElementById('caja-ventas-hoy').textContent = `$${ventasHoy.toLocaleString()}`;
    document.getElementById('caja-gastos-hoy').textContent = `$${gastosHoy.toLocaleString()}`;
    document.getElementById('caja-neto-hoy').textContent = `$${netoHoy.toLocaleString()}`;

    document.getElementById('caja-ventas-semana').textContent = `$${ventasSemana.toLocaleString()}`;
    document.getElementById('caja-gastos-semana').textContent = `$${gastosSemana.toLocaleString()}`;
    document.getElementById('caja-neto-semana').textContent = `$${netoSemana.toLocaleString()}`;

    document.getElementById('caja-ventas-mes').textContent = `$${ventasMes.toLocaleString()}`;
    document.getElementById('caja-gastos-mes').textContent = `$${gastosMes.toLocaleString()}`;
    document.getElementById('caja-neto-mes').textContent = `$${netoMes.toLocaleString()}`;

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
                <div class="text-[10px] text-slate-500 font-bold mb-0.5 opacity-0 group-hover:opacity-100 transition">$${item.total}</div>
                <div class="w-full bg-blue-600 hover:bg-blue-700 rounded-t transition-all duration-300 shadow-sm" style="height: ${alturaPorcentaje}%"></div>
                <span class="text-[10px] text-slate-600 font-bold mt-1 capitalize">${item.dia}</span>
            </div>
        `;
    });
}
