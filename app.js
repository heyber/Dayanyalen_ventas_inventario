var _0xb5g9ef = (378118 ^ 378126) + (327508 ^ 327516);
const CREDENCIALES_PERMITIDAS = {
  "usuario": "AnaR",
  "clave": "MailyR"
};
_0xb5g9ef = 589899 ^ 589901;
const URL_SHEETDB = "https://sheetdb.io/api/v1/93df8h7sv2a4c";
let inventario = [];
let _0xc9be1c;
let ventas = [];
_0xc9be1c = 264584 ^ 264591;
let gastos = [];
var _0x9337eb = (721011 ^ 721015) + (124265 ^ 124265);
let carrito = [];
_0x9337eb = '\u0068\u0063\u006E\u0070\u0068\u0064';
let sesionActiva = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0065\u0073\u0069\u006F\u006E\u0041\u0063\u0074\u0069\u0076\u0061") === 'true';
let paginaActualInventario = 395255 ^ 395254;
const itemsPorPaginaInventario = 616699 ^ 616691;
let contadorFacturas = parseInt(localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0063\u006F\u006E\u0074\u0061\u0064\u006F\u0072\u0046\u0061\u0063\u0074\u0075\u0072\u0061\u0073") || "\u0030");
var _0xb4g = (439865 ^ 439867) + (773436 ^ 773437);
const pantallaLogin = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0061\u006E\u0074\u0061\u006C\u006C\u0061\u002D\u006C\u006F\u0067\u0069\u006E");
_0xb4g = 754199 ^ 754207;
const appPrincipal = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0061\u0070\u0070\u002D\u0070\u0072\u0069\u006E\u0063\u0069\u0070\u0061\u006C");
let _0x07b;
const formLogin = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('form-login');
_0x07b = "enbjbk";
var _0xb5c9ff = (131136 ^ 131143) + (817222 ^ 817216);
const loginError = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('login-error');
_0xb5c9ff = (700823 ^ 700830) + (137856 ^ 137861);
if (sesionActiva) {
  pantallaLogin['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0068\u0069\u0064\u0064\u0065\u006E");
  appPrincipal['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0068\u0069\u0064\u0064\u0065\u006E");
  cargarDatosDesdeNube();
}
formLogin['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0073\u0075\u0062\u006D\u0069\u0074", e => {
  e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
  const user = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u006C\u006F\u0067\u0069\u006E\u002D\u0075\u0073\u0075\u0061\u0072\u0069\u006F")['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();
  const pass = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('login-clave')['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();
  if (user === CREDENCIALES_PERMITIDAS['\u0075\u0073\u0075\u0061\u0072\u0069\u006F'] && pass === CREDENCIALES_PERMITIDAS['\u0063\u006C\u0061\u0076\u0065']) {
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0065\u0073\u0069\u006F\u006E\u0041\u0063\u0074\u0069\u0076\u0061", 'true');
    pantallaLogin['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']('hidden');
    appPrincipal['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']('hidden');
    cargarDatosDesdeNube();
  } else {
    loginError['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0068\u0069\u0064\u0064\u0065\u006E");
  }
});
function cerrarSesion() {
  localStorage['\u0072\u0065\u006D\u006F\u0076\u0065\u0049\u0074\u0065\u006D']("\u0073\u0065\u0073\u0069\u006F\u006E\u0041\u0063\u0074\u0069\u0076\u0061");
  location['\u0072\u0065\u006C\u006F\u0061\u0064']();
}
document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0066\u0065\u0063\u0068\u0061\u002D\u0068\u006F\u0079")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = new Date()['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0044\u0061\u0074\u0065\u0053\u0074\u0072\u0069\u006E\u0067']();
const formProducto = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('form-producto');
const formGasto = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('form-gasto');
let _0xcbd;
const tablaInventario = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('tabla-inventario');
_0xcbd = (198658 ^ 198658) + (533776 ^ 533785);
const tablaHistorial = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0061\u0062\u006C\u0061\u002D\u0068\u0069\u0073\u0074\u006F\u0072\u0069\u0061\u006C");
const panelInventario = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0061\u006E\u0065\u006C\u002D\u0069\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F");
var _0x9951a = (443855 ^ 443846) + (737989 ^ 737989);
const btnToggleInventario = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('btn-toggle-inventario');
_0x9951a = 400924 ^ 400921;
function mostrarNotificacion(mensaje, tipo = "\u0065\u0078\u0069\u0074\u006F") {
  let _0x96767e;
  const _0xd71bb = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('notif-flotante');
  _0x96767e = '\u0070\u0064\u006D\u0062\u0065\u0062';
  if (_0xd71bb) _0xd71bb['\u0072\u0065\u006D\u006F\u0076\u0065']();
  const _0xg5a5c = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']('div');
  _0xg5a5c['\u0069\u0064'] = "\u006E\u006F\u0074\u0069\u0066\u002D\u0066\u006C\u006F\u0074\u0061\u006E\u0074\u0065";
  _0xg5a5c['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = `fixed bottom-5 right-5 z-50 px-4 py-3 rounded-xl shadow-xl text-white text-xs font-bold transition-all duration-300 ${tipo === 'error' ? "\u0062\u0067\u002D\u0072\u0065\u0064\u002D\u0036\u0030\u0030" : 'bg-emerald-600'}`;
  _0xg5a5c['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = mensaje;
  document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xg5a5c);
  setTimeout(() => {
    _0xg5a5c['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079'] = "\u0030";
    setTimeout(() => _0xg5a5c['\u0072\u0065\u006D\u006F\u0076\u0065'](), 250682 ^ 250390);
  }, 675481 ^ 673057);
}
function togglePanelInventario() {
  panelInventario['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u0068\u0069\u0064\u0064\u0065\u006E");
  if (!panelInventario['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0073']("\u0068\u0069\u0064\u0064\u0065\u006E")) {
    btnToggleInventario['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = "\u2716\u0020\u0043\u0065\u0072\u0072\u0061\u0072\u0020\u0049\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F";
    btnToggleInventario['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "text-xs bg-rose-100 hover:bg-rose-200 text-rose-700 px-3.5 py-2 rounded-xl transition font-bold border border-rose-200";
  } else {
    btnToggleInventario['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = "\u2699\uFE0F\u0020\u0047\u0065\u0073\u0074\u0069\u006F\u006E\u0061\u0072\u0020\u0049\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F";
    btnToggleInventario['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2 rounded-xl transition font-bold border border-slate-200";
  }
}
function limpiarFiltros() {
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('filtro-tipo')['\u0076\u0061\u006C\u0075\u0065'] = 'todos';
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('filtro-fecha-desde')['\u0076\u0061\u006C\u0075\u0065'] = '';
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0066\u0069\u006C\u0074\u0072\u006F\u002D\u0066\u0065\u0063\u0068\u0061\u002D\u0068\u0061\u0073\u0074\u0061")['\u0076\u0061\u006C\u0075\u0065'] = '';
  renderizarTodo();
}
function agregarInventarioAlCarrito() {
  const _0x74385b = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('input-buscador-prod')['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();
  const _0x8550a = parseInt(document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('venta-producto-id')['\u0076\u0061\u006C\u0075\u0065']);
  var _0xa2761g = (181341 ^ 181342) + (237057 ^ 237060);
  const _0x0agaea = parseInt(document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('venta-cantidad')['\u0076\u0061\u006C\u0075\u0065']);
  _0xa2761g = (821457 ^ 821459) + (184560 ^ 184568);
  let _0x2382c;
  const _0x5519d = inventario['\u0066\u0069\u006E\u0064'](p => p['\u0069\u0064'] === _0x8550a || p['\u006E\u006F\u006D\u0062\u0072\u0065'] === _0x74385b);
  _0x2382c = (126028 ^ 126024) + (780737 ^ 780738);
  if (!_0x5519d) return mostrarNotificacion('Selecciona un producto válido del buscador.', 'error');
  if (_0x5519d['\u0073\u0074\u006F\u0063\u006B'] < _0x0agaea) return mostrarNotificacion(`Stock insuficiente! Disponible: ${_0x5519d['\u0073\u0074\u006F\u0063\u006B']}`, "\u0065\u0072\u0072\u006F\u0072");
  const _0xc9f4b = carrito['\u0066\u0069\u006E\u0064'](item => item['\u0069\u0064\u0049\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F'] === _0x5519d['\u0069\u0064']);
  if (_0xc9f4b) {
    if (_0x5519d['\u0073\u0074\u006F\u0063\u006B'] < _0xc9f4b['\u0063\u0061\u006E\u0074\u0069\u0064\u0061\u0064'] + _0x0agaea) {
      return mostrarNotificacion(`Stock insuficiente para agregar más.`, 'error');
    }
    _0xc9f4b['\u0063\u0061\u006E\u0074\u0069\u0064\u0061\u0064'] += _0x0agaea;
  } else {
    carrito['\u0070\u0075\u0073\u0068']({
      "id": Date['\u006E\u006F\u0077']() + Math['\u0072\u0061\u006E\u0064\u006F\u006D'](),
      '\u0069\u0064\u0049\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F': _0x5519d['\u0069\u0064'],
      "nombre": _0x5519d['\u006E\u006F\u006D\u0062\u0072\u0065'],
      "precio": _0x5519d['\u0070\u0072\u0065\u0063\u0069\u006F'],
      '\u0063\u006F\u0073\u0074\u006F': _0x5519d['\u0063\u006F\u0073\u0074\u006F'],
      '\u0063\u0061\u006E\u0074\u0069\u0064\u0061\u0064': _0x0agaea,
      '\u0065\u0073\u0049\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F': !![]
    });
  }
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('input-buscador-prod')['\u0076\u0061\u006C\u0075\u0065'] = '';
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0076\u0065\u006E\u0074\u0061\u002D\u0070\u0072\u006F\u0064\u0075\u0063\u0074\u006F\u002D\u0069\u0064")['\u0076\u0061\u006C\u0075\u0065'] = '';
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('venta-cantidad')['\u0076\u0061\u006C\u0075\u0065'] = 748649 ^ 748648;
  renderizarCarrito();
}
function agregarLibreAlCarrito() {
  const _0xe216ff = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u006C\u0069\u0062\u0072\u0065\u002D\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0063\u0069\u006F\u006E")['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();
  const _0x4g33d = parseFloat(document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('libre-precio')['\u0076\u0061\u006C\u0075\u0065']);
  if (!_0xe216ff) return mostrarNotificacion('Ingresa la descripción del ítem o servicio.', 'error');
  if (!_0x4g33d || _0x4g33d <= (981479 ^ 981479)) return mostrarNotificacion("\u0049\u006E\u0067\u0072\u0065\u0073\u0061\u0020\u0075\u006E\u0020\u0070\u0072\u0065\u0063\u0069\u006F\u0020\u0076\u00E1\u006C\u0069\u0064\u006F\u002E", "\u0065\u0072\u0072\u006F\u0072");
  carrito['\u0070\u0075\u0073\u0068']({
    "id": Date['\u006E\u006F\u0077']() + Math['\u0072\u0061\u006E\u0064\u006F\u006D'](),
    "idInventario": null,
    '\u006E\u006F\u006D\u0062\u0072\u0065': _0xe216ff,
    "precio": _0x4g33d,
    '\u0063\u006F\u0073\u0074\u006F': 0,
    '\u0063\u0061\u006E\u0074\u0069\u0064\u0061\u0064': 1,
    '\u0065\u0073\u0049\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F': false
  });
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u006C\u0069\u0062\u0072\u0065\u002D\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0063\u0069\u006F\u006E")['\u0076\u0061\u006C\u0075\u0065'] = '';
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('libre-precio')['\u0076\u0061\u006C\u0075\u0065'] = '';
  renderizarCarrito();
}
function eliminarDelCarrito(id) {
  carrito = carrito['\u0066\u0069\u006C\u0074\u0065\u0072'](item => item['\u0069\u0064'] !== id);
  renderizarCarrito();
}
function renderizarCarrito() {
  const _0xdeg8e = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0061\u0062\u006C\u0061\u002D\u0063\u0061\u0072\u0072\u0069\u0074\u006F");
  _0xdeg8e['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = '';
  if (carrito['\u006C\u0065\u006E\u0067\u0074\u0068'] === (295381 ^ 295381)) {
    _0xdeg8e['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `<tr><td colspan="5" class="p-4 text-center text-slate-400 font-medium">El carrito está vacío. Agrega productos o servicios arriba.</td></tr>`;
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('carrito-total-suma')['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = '$0';
    return;
  }
  let _0xdg5d;
  let _0xccdd = 489526 ^ 489526;
  _0xdg5d = 452203 ^ 452207;
  carrito['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](item => {
    var _0xb16f = (820135 ^ 820131) + (616409 ^ 616411);
    let _0xa1gee = item['\u0070\u0072\u0065\u0063\u0069\u006F'] * item['\u0063\u0061\u006E\u0074\u0069\u0064\u0061\u0064'];
    _0xb16f = (988627 ^ 988634) + (677719 ^ 677717);
    _0xccdd += _0xa1gee;
    _0xdeg8e['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] += `
            <tr class="border-b border-slate-50 hover:bg-slate-50/50">
                <td class="p-2.5 font-bold text-slate-800">${item['\u006E\u006F\u006D\u0062\u0072\u0065']}</td>
                <td class="p-2.5 text-slate-600 font-semibold">${item['\u0063\u0061\u006E\u0074\u0069\u0064\u0061\u0064']}</td>
                <td class="p-2.5 text-slate-600">$${item['\u0070\u0072\u0065\u0063\u0069\u006F']['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}</td>
                <td class="p-2.5 font-black text-blue-900">$${_0xa1gee['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}</td>
                <td class="p-2.5 text-center">
                    <button onclick="eliminarDelCarrito(${item['\u0069\u0064']})" class="text-red-500 hover:text-red-700 font-black">✕</button>
                </td>
            </tr>
        `;
  });
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u0061\u0072\u0072\u0069\u0074\u006F\u002D\u0074\u006F\u0074\u0061\u006C\u002D\u0073\u0075\u006D\u0061")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `$${_0xccdd['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`;
}
async function procesarVentaCarrito(generarPDF = false) {
  if (carrito['\u006C\u0065\u006E\u0067\u0074\u0068'] === (218715 ^ 218715)) return mostrarNotificacion('El carrito está vacío.', 'error');
  let _0xbd_0xac5;
  let _0xbacd = 372010 ^ 372010;
  _0xbd_0xac5 = (162462 ^ 162457) + (731951 ^ 731947);
  let _0x184c = 495492 ^ 495492;
  var _0x78f = (950409 ^ 950411) + (738023 ^ 738019);
  let _0xe02a = [];
  _0x78f = '\u0069\u0063\u0070\u006E\u006A\u0068';
  carrito['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](item => {
    _0xbacd += item['\u0070\u0072\u0065\u0063\u0069\u006F'] * item['\u0063\u0061\u006E\u0074\u0069\u0064\u0061\u0064'];
    _0x184c += item['\u0063\u006F\u0073\u0074\u006F'] * item['\u0063\u0061\u006E\u0074\u0069\u0064\u0061\u0064'];
    _0xe02a['\u0070\u0075\u0073\u0068'](`${item['\u006E\u006F\u006D\u0062\u0072\u0065']} (x${item['\u0063\u0061\u006E\u0074\u0069\u0064\u0061\u0064']})`);
  });
  let _0xe6714c = _0xbacd - _0x184c;
  let _0xb2c;
  let _0x76639a = _0xe02a['\u006A\u006F\u0069\u006E'](', ');
  _0xb2c = 335002 ^ 334995;
  var _0xa9gc = (608398 ^ 608398) + (492251 ^ 492250);
  let _0x9ceccf = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0066\u0061\u0063\u0074\u0075\u0072\u0061\u002D\u0063\u006C\u0069\u0065\u006E\u0074\u0065")['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']() || 'Consumidor Final';
  _0xa9gc = '\u0067\u0061\u0067\u006D\u0069\u006F';
  let _0xae8ebc = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('factura-nit-cliente')['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']() || 'N/A';
  var _0xgb7e6a = (860357 ^ 860354) + (548774 ^ 548768);
  let _0x89e = "N/A (Sin Factura)";
  _0xgb7e6a = (868267 ^ 868264) + (641736 ^ 641728);
  if (generarPDF) {
    contadorFacturas++;
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0063\u006F\u006E\u0074\u0061\u0064\u006F\u0072\u0046\u0061\u0063\u0074\u0075\u0072\u0061\u0073", contadorFacturas);
    _0x89e = String(contadorFacturas)['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](119082 ^ 119084, "\u0030");
  }
  const _0xef1c8b = {
    '\u0069\u0064': Date['\u006E\u006F\u0077'](),
    '\u0066\u0065\u0063\u0068\u0061': new Date()['\u0074\u006F\u0049\u0053\u004F\u0053\u0074\u0072\u0069\u006E\u0067'](),
    '\u0074\u0069\u0070\u006F': 'venta_multilinea',
    '\u0063\u006F\u006E\u0063\u0065\u0070\u0074\u006F': _0x76639a,
    "totalVenta": _0xbacd,
    '\u0067\u0061\u006E\u0061\u006E\u0063\u0069\u0061': _0xe6714c,
    '\u0063\u006C\u0069\u0065\u006E\u0074\u0065': _0x9ceccf,
    "nitCliente": _0xae8ebc,
    '\u006E\u0072\u006F\u0046\u0061\u0063\u0074\u0075\u0072\u0061': _0x89e,
    '\u0069\u0074\u0065\u006D\u0073': [...carrito]
  };
  ventas['\u0070\u0075\u0073\u0068'](_0xef1c8b);
  await guardarEnNube("\u0076\u0065\u006E\u0074\u0061\u0073", _0xef1c8b);
  for (let _0x73d of carrito) {
    if (_0x73d['\u0065\u0073\u0049\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F'] && _0x73d['\u0069\u0064\u0049\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F']) {
      let _0x4_0x2d5 = inventario['\u0066\u0069\u006E\u0064'](p => p['\u0069\u0064'] === _0x73d['\u0069\u0064\u0049\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F']);
      if (_0x4_0x2d5) {
        _0x4_0x2d5['\u0073\u0074\u006F\u0063\u006B'] -= _0x73d['\u0063\u0061\u006E\u0074\u0069\u0064\u0061\u0064'];
        await actualizarStockEnNube(_0x4_0x2d5['\u0069\u0064'], _0x4_0x2d5['\u0073\u0074\u006F\u0063\u006B']);
      }
    }
  }
  if (generarPDF) {
    generarFacturaPDF(_0xef1c8b);
    mostrarNotificacion(`¡Venta cobrada! Factura Nro. ${_0x89e} generada.`);
  } else {
    mostrarNotificacion('¡Venta cobrada con éxito (Sin factura)!');
  }
  carrito = [];
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0066\u0061\u0063\u0074\u0075\u0072\u0061\u002D\u0063\u006C\u0069\u0065\u006E\u0074\u0065")['\u0076\u0061\u006C\u0075\u0065'] = '';
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('factura-nit-cliente')['\u0076\u0061\u006C\u0075\u0065'] = '';
  renderizarCarrito();
  renderizarTodo();
}
function generarFacturaPDF(venta) {
  const {
    '\u006A\u0073\u0050\u0044\u0046': jsPDF
  } = window['\u006A\u0073\u0070\u0064\u0066'];
  var _0xe7e = (282951 ^ 282945) + (407250 ^ 407259);
  const _0x7ec34c = new jsPDF();
  _0xe7e = (440377 ^ 440382) + (328411 ^ 328409);
  const _0xb38cad = new Image();
  _0xb38cad['\u0073\u0072\u0063'] = "favicon.jpg";
  try {
    _0x7ec34c['\u0061\u0064\u0064\u0049\u006D\u0061\u0067\u0065'](_0xb38cad, "\u004A\u0050\u0045\u0047", 765909 ^ 765915, 364130 ^ 364142, 950138 ^ 950120, 822194 ^ 822176);
  } catch (e) {
    console['\u006C\u006F\u0067']("No se pudo cargar el logo local, continuando sin imagen.");
  }
  const _0x7b693f = "\u0044\u0061\u0079\u0061\u006E\u0079\u0061\u006C\u0065\u006E";
  let _0xc84c;
  const _0xf_0x8cf = "\u004E\u0049\u0054\u003A\u0020\u0039\u0030\u0030\u002E\u0031\u0032\u0033\u002E\u0034\u0035\u0036\u002D\u0031";
  _0xc84c = "hhnpif";
  var _0xaa9gac = (554637 ^ 554629) + (845119 ^ 845110);
  const _0x2bb75a = "\u0054\u0065\u006C\u003A\u0020\u0033\u0030\u0030\u0020\u0031\u0032\u0033\u0020\u0034\u0035\u0036\u0037";
  _0xaa9gac = (450764 ^ 450767) + (614224 ^ 614232);
  const _0xfa_0x7ca = "Calle Principal # 10-20, Local 1";
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("\u0068\u0065\u006C\u0076\u0065\u0074\u0069\u0063\u0061", "bold");
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074\u0053\u0069\u007A\u0065'](373202 ^ 373213);
  _0x7ec34c['\u0074\u0065\u0078\u0074'](_0x7b693f, 480119 ^ 480083, 969143 ^ 969126);
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("helvetica", "\u006E\u006F\u0072\u006D\u0061\u006C");
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074\u0053\u0069\u007A\u0065'](8.5);
  _0x7ec34c['\u0074\u0065\u0078\u0074'](_0xf_0x8cf, 701911 ^ 701939, 991299 ^ 991317);
  _0x7ec34c['\u0074\u0065\u0078\u0074'](_0x2bb75a, 170784 ^ 170756, 164858 ^ 164832);
  _0x7ec34c['\u0074\u0065\u0078\u0074'](_0xfa_0x7ca, 690951 ^ 690979, 409014 ^ 409000);
  _0x7ec34c['\u0073\u0065\u0074\u0044\u0072\u0061\u0077\u0043\u006F\u006C\u006F\u0072'](893277 ^ 893304, 548863 ^ 548764, 697028 ^ 696879);
  _0x7ec34c['\u0072\u006F\u0075\u006E\u0064\u0065\u0064\u0052\u0065\u0063\u0074'](833693 ^ 833567, 552417 ^ 552429, 188568 ^ 188638, 361314 ^ 361338, 519095 ^ 519093, 335952 ^ 335954);
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("\u0068\u0065\u006C\u0076\u0065\u0074\u0069\u0063\u0061", "\u0062\u006F\u006C\u0064");
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074\u0053\u0069\u007A\u0065'](258924 ^ 258919);
  _0x7ec34c['\u0074\u0065\u0078\u0074']("FACTURA DE VENTA", 307070 ^ 307193, 662839 ^ 662820);
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074\u0053\u0069\u007A\u0065'](403633 ^ 403643);
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("\u0068\u0065\u006C\u0076\u0065\u0074\u0069\u0063\u0061", "\u006E\u006F\u0072\u006D\u0061\u006C");
  _0x7ec34c['\u0074\u0065\u0078\u0074'](`No. ${venta['\u006E\u0072\u006F\u0046\u0061\u0063\u0074\u0075\u0072\u0061']}`, 844265 ^ 844142, 846267 ^ 846241);
  _0x7ec34c['\u0074\u0065\u0078\u0074'](`Fecha: ${new Date(venta['\u0066\u0065\u0063\u0068\u0061'])['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`, 118871 ^ 118992, 850601 ^ 850569);
  _0x7ec34c['\u0073\u0065\u0074\u0046\u0069\u006C\u006C\u0043\u006F\u006C\u006F\u0072'](445964 ^ 446204, 209019 ^ 209032, 694577 ^ 694731);
  _0x7ec34c['\u0072\u006F\u0075\u006E\u0064\u0065\u0064\u0052\u0065\u0063\u0074'](956935 ^ 956937, 576916 ^ 576956, 842853 ^ 842975, 376149 ^ 376135, 452809 ^ 452811, 725061 ^ 725063, "\u0046");
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("helvetica", "\u0062\u006F\u006C\u0064");
  _0x7ec34c['\u0074\u0065\u0078\u0074']("DATOS DEL CLIENTE:", 510055 ^ 510070, 741471 ^ 741488);
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("helvetica", "normal");
  _0x7ec34c['\u0074\u0065\u0078\u0074'](`Cliente: ${venta['\u0063\u006C\u0069\u0065\u006E\u0074\u0065']}`, 497667 ^ 497682, 996693 ^ 996707);
  _0x7ec34c['\u0074\u0065\u0078\u0074'](`Cédula/NIT: ${venta['\u006E\u0069\u0074\u0043\u006C\u0069\u0065\u006E\u0074\u0065']}`, 796625 ^ 796585, 520625 ^ 520583);
  var _0x93a = (525929 ^ 525929) + (693084 ^ 693081);
  let y = 402090 ^ 402155;
  _0x93a = (959376 ^ 959378) + (865653 ^ 865660);
  _0x7ec34c['\u0073\u0065\u0074\u0046\u0069\u006C\u006C\u0043\u006F\u006C\u006F\u0072'](624616 ^ 624589, 596746 ^ 596841, 855497 ^ 855330);
  _0x7ec34c['\u0072\u0065\u0063\u0074'](317488 ^ 317502, y, 784547 ^ 784409, 908157 ^ 908149, "\u0046");
  _0x7ec34c['\u0073\u0065\u0074\u0054\u0065\u0078\u0074\u0043\u006F\u006C\u006F\u0072'](985005 ^ 984914, 527413 ^ 527562, 156322 ^ 156253);
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("helvetica", "\u0062\u006F\u006C\u0064");
  _0x7ec34c['\u0074\u0065\u0078\u0074']("Descripción del Ítem / Servicio", 785969 ^ 785953, y + (246587 ^ 246589));
  _0x7ec34c['\u0074\u0065\u0078\u0074']("Cant.", 716350 ^ 716365, y + (598933 ^ 598931));
  _0x7ec34c['\u0074\u0065\u0078\u0074']("V. Unitario", 655799 ^ 655664, y + (281597 ^ 281595));
  _0x7ec34c['\u0074\u0065\u0078\u0074']("Total", 396084 ^ 396190, y + (641319 ^ 641313));
  y += 348730 ^ 348726;
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("helvetica", "normal");
  _0x7ec34c['\u0073\u0065\u0074\u0054\u0065\u0078\u0074\u0043\u006F\u006C\u006F\u0072'](795762 ^ 795762, 606987 ^ 606987, 473833 ^ 473833);
  if (venta['\u0069\u0074\u0065\u006D\u0073'] && venta['\u0069\u0074\u0065\u006D\u0073']['\u006C\u0065\u006E\u0067\u0074\u0068'] > (600246 ^ 600246)) {
    venta['\u0069\u0074\u0065\u006D\u0073']['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](item => {
      if (y > (319733 ^ 319503)) {
        _0x7ec34c['\u0061\u0064\u0064\u0050\u0061\u0067\u0065']();
        y = 819523 ^ 819543;
      }
      let _0x3b14bd = item['\u0070\u0072\u0065\u0063\u0069\u006F'] * item['\u0063\u0061\u006E\u0074\u0069\u0064\u0061\u0064'];
      _0x7ec34c['\u0074\u0065\u0078\u0074'](item['\u006E\u006F\u006D\u0062\u0072\u0065']['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](599820 ^ 599820, 646570 ^ 646535), 702718 ^ 702702, y);
      _0x7ec34c['\u0074\u0065\u0078\u0074'](String(item['\u0063\u0061\u006E\u0074\u0069\u0064\u0061\u0064']), 459178 ^ 459228, y);
      _0x7ec34c['\u0074\u0065\u0078\u0074'](`$${item['\u0070\u0072\u0065\u0063\u0069\u006F']['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`, 387627 ^ 387756, y);
      _0x7ec34c['\u0074\u0065\u0078\u0074'](`$${_0x3b14bd['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`, 425236 ^ 425406, y);
      y += 230305 ^ 230313;
    });
  }
  y += 664807 ^ 664802;
  _0x7ec34c['\u0073\u0065\u0074\u0044\u0072\u0061\u0077\u0043\u006F\u006C\u006F\u0072'](290756 ^ 290572, 688133 ^ 688333, 262619 ^ 262419);
  _0x7ec34c['\u006C\u0069\u006E\u0065'](407915 ^ 408041, y, 147204 ^ 147404, y);
  y += 683997 ^ 683989;
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("\u0068\u0065\u006C\u0076\u0065\u0074\u0069\u0063\u0061", "\u0062\u006F\u006C\u0064");
  _0x7ec34c['\u0074\u0065\u0078\u0074']("\u0054\u004F\u0054\u0041\u004C\u0020\u0041\u0020\u0050\u0041\u0047\u0041\u0052\u003A", 412367 ^ 412237, y);
  _0x7ec34c['\u0074\u0065\u0078\u0074'](`$${venta['\u0074\u006F\u0074\u0061\u006C\u0056\u0065\u006E\u0074\u0061']['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`, 776398 ^ 776292, y);
  y += 178705 ^ 178696;
  if (y > (972169 ^ 972147)) {
    _0x7ec34c['\u0061\u0064\u0064\u0050\u0061\u0067\u0065']();
    y = 967885 ^ 967909;
  }
  _0x7ec34c['\u006C\u0069\u006E\u0065'](721060 ^ 721085, y, 775129 ^ 775043, y);
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("\u0068\u0065\u006C\u0076\u0065\u0074\u0069\u0063\u0061", "normal");
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074\u0053\u0069\u007A\u0065'](557616 ^ 557624);
  _0x7ec34c['\u0074\u0065\u0078\u0074']("Firma Autorizada / Sello", 924886 ^ 924924, y + (498999 ^ 498994));
  _0x7ec34c['\u0073\u0065\u0074\u0046\u006F\u006E\u0074\u0053\u0069\u007A\u0065'](122179 ^ 122187);
  _0x7ec34c['\u0073\u0065\u0074\u0054\u0065\u0078\u0074\u0043\u006F\u006C\u006F\u0072'](989210 ^ 989310, 180480 ^ 180580, 231624 ^ 231596);
  _0x7ec34c['\u0074\u0065\u0078\u0074']("\u00A1\u0047\u0072\u0061\u0063\u0069\u0061\u0073\u0020\u0070\u006F\u0072\u0020\u0073\u0075\u0020\u0063\u006F\u006D\u0070\u0072\u0061\u0021\u0020\u0043\u006F\u006E\u0073\u0065\u0072\u0076\u0065\u0020\u0065\u0073\u0074\u0061\u0020\u0066\u0061\u0063\u0074\u0075\u0072\u0061\u002E", 127304 ^ 127265, 160315 ^ 160550, {
    "align": "\u0063\u0065\u006E\u0074\u0065\u0072"
  });
  _0x7ec34c['\u0073\u0061\u0076\u0065'](`Factura_${venta['\u006E\u0072\u006F\u0046\u0061\u0063\u0074\u0075\u0072\u0061']}.pdf`);
}
async function cargarDatosDesdeNube() {
  try {
    let _0x08a = await fetch(`${URL_SHEETDB}?sheet=inventario`);
    inventario = await _0x08a['\u006A\u0073\u006F\u006E']();
    inventario = inventario['\u006D\u0061\u0070'](item => ({
      ...item,
      '\u0069\u0064': Number(item['\u0069\u0064']),
      '\u0063\u006F\u0073\u0074\u006F': Number(item['\u0063\u006F\u0073\u0074\u006F']),
      '\u0070\u0072\u0065\u0063\u0069\u006F': Number(item['\u0070\u0072\u0065\u0063\u0069\u006F']),
      '\u0073\u0074\u006F\u0063\u006B': Number(item['\u0073\u0074\u006F\u0063\u006B'])
    }));
    var _0xa94b = (744789 ^ 744786) + (167728 ^ 167736);
    let _0x6a5a = await fetch(`${URL_SHEETDB}?sheet=ventas`);
    _0xa94b = "eohaap";
    ventas = await _0x6a5a['\u006A\u0073\u006F\u006E']();
    ventas = ventas['\u006D\u0061\u0070'](item => ({
      ...item,
      '\u0069\u0064': Number(item['\u0069\u0064']),
      "totalVenta": Number(item['\u0074\u006F\u0074\u0061\u006C\u0056\u0065\u006E\u0074\u0061']),
      '\u0067\u0061\u006E\u0061\u006E\u0063\u0069\u0061': Number(item['\u0067\u0061\u006E\u0061\u006E\u0063\u0069\u0061'] || 286555 ^ 286555)
    }));
    let _0x346ca;
    let _0xf52f0e = await fetch(`${URL_SHEETDB}?sheet=gastos`);
    _0x346ca = (993166 ^ 993158) + (314705 ^ 314712);
    gastos = await _0xf52f0e['\u006A\u0073\u006F\u006E']();
    gastos = gastos['\u006D\u0061\u0070'](item => ({
      ...item,
      "id": Number(item['\u0069\u0064']),
      "monto": Number(item['\u006D\u006F\u006E\u0074\u006F'] || item['\u0076\u0061\u006C\u006F\u0072'] || 501831 ^ 501831)
    }));
    renderizarTodo();
  } catch (error) {
    console['\u0065\u0072\u0072\u006F\u0072']("\u0045\u0072\u0072\u006F\u0072\u0020\u0061\u006C\u0020\u0063\u0061\u0072\u0067\u0061\u0072\u0020\u0064\u0061\u0074\u006F\u0073\u0020\u0064\u0065\u0020\u006C\u0061\u0020\u006E\u0075\u0062\u0065\u003A", error);
  }
}
async function guardarEnNube(pestana, objetoDatos) {
  try {
    await fetch(`${URL_SHEETDB}?sheet=${pestana}`, {
      '\u006D\u0065\u0074\u0068\u006F\u0064': "\u0050\u004F\u0053\u0054",
      "headers": {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      "body": JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079']({
        '\u0064\u0061\u0074\u0061': [objetoDatos]
      })
    });
  } catch (error) {
    console['\u0065\u0072\u0072\u006F\u0072']("Error al guardar en la nube:", error);
  }
}
async function actualizarStockEnNube(idProducto, nuevoStock) {
  try {
    await fetch(`${URL_SHEETDB}/id/${idProducto}?sheet=inventario`, {
      '\u006D\u0065\u0074\u0068\u006F\u0064': 'PATCH',
      "headers": {
        "\u0041\u0063\u0063\u0065\u0070\u0074": 'application/json',
        "\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u002D\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006C\u0069\u0063\u0061\u0074\u0069\u006F\u006E\u002F\u006A\u0073\u006F\u006E"
      },
      '\u0062\u006F\u0064\u0079': JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079']({
        '\u0064\u0061\u0074\u0061': {
          "stock": nuevoStock
        }
      })
    });
  } catch (error) {
    console['\u0065\u0072\u0072\u006F\u0072']("Error al actualizar stock en la nube:", error);
  }
}
async function reabastecerStock(idProducto) {
  let _0xd5ea;
  const _0xe56b = inventario['\u0066\u0069\u006E\u0064'](p => p['\u0069\u0064'] === idProducto);
  _0xd5ea = (117701 ^ 117698) + (821609 ^ 821601);
  if (!_0xe56b) return;
  let _0x5dcc;
  const _0xf2_0xge4 = prompt(`📦 Reabastecer: "${_0xe56b['\u006E\u006F\u006D\u0062\u0072\u0065']}"\nStock actual: ${_0xe56b['\u0073\u0074\u006F\u0063\u006B']}\n\nIngresa la cantidad que te llegó del nuevo pedido:`, "\u0031\u0030");
  _0x5dcc = (684255 ^ 684251) + (425335 ^ 425331);
  if (_0xf2_0xge4 === null) return;
  var _0xf6d5a = (321726 ^ 321724) + (145947 ^ 145951);
  const _0xff3be = parseInt(_0xf2_0xge4);
  _0xf6d5a = (327204 ^ 327213) + (964358 ^ 964353);
  if (isNaN(_0xff3be) || _0xff3be <= (882125 ^ 882125)) {
    return mostrarNotificacion("\u0049\u006E\u0067\u0072\u0065\u0073\u0061\u0020\u0075\u006E\u0061\u0020\u0063\u0061\u006E\u0074\u0069\u0064\u0061\u0064\u0020\u0076\u00E1\u006C\u0069\u0064\u0061\u002E", "\u0065\u0072\u0072\u006F\u0072");
  }
  _0xe56b['\u0073\u0074\u006F\u0063\u006B'] += _0xff3be;
  await actualizarStockEnNube(_0xe56b['\u0069\u0064'], _0xe56b['\u0073\u0074\u006F\u0063\u006B']);
  renderizarTodo();
  mostrarNotificacion(`¡Stock actualizado! Nuevo total: ${_0xe56b['\u0073\u0074\u006F\u0063\u006B']}`);
}
formProducto['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']('submit', async e => {
  e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
  var _0x65gc6d = (369007 ^ 368999) + (749714 ^ 749722);
  const nombre = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u0064\u002D\u006E\u006F\u006D\u0062\u0072\u0065")['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();
  _0x65gc6d = '\u0070\u0070\u0061\u006A\u0063\u006A';
  const marca = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u0064\u002D\u006D\u0061\u0072\u0063\u0061")['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();
  const color = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('prod-color')['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();
  const costo = parseFloat(document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('prod-costo')['\u0076\u0061\u006C\u0075\u0065']);
  var _0xb114fa = (780279 ^ 780278) + (184351 ^ 184349);
  const precio = parseFloat(document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u0064\u002D\u0070\u0072\u0065\u0063\u0069\u006F")['\u0076\u0061\u006C\u0075\u0065']);
  _0xb114fa = (672651 ^ 672654) + (541634 ^ 541638);
  const stock = parseInt(document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('prod-stock')['\u0076\u0061\u006C\u0075\u0065']);
  var _0x3b23a = (204033 ^ 204038) + (237142 ^ 237139);
  let nombreCompleto = nombre;
  _0x3b23a = '\u0067\u0066\u0065\u0070\u006D\u006D';
  var _0xfb_0x142 = (575569 ^ 575569) + (934697 ^ 934700);
  let detallesExtra = [];
  _0xfb_0x142 = (244081 ^ 244085) + (561474 ^ 561482);
  if (marca) detallesExtra['\u0070\u0075\u0073\u0068'](`Marca: ${marca}`);
  if (color) detallesExtra['\u0070\u0075\u0073\u0068'](`Color: ${color}`);
  if (detallesExtra['\u006C\u0065\u006E\u0067\u0074\u0068'] > (427130 ^ 427130)) nombreCompleto += ` (${detallesExtra['\u006A\u006F\u0069\u006E']("\u0020\u002D\u0020")})`;
  const nuevoProducto = {
    "id": Date['\u006E\u006F\u0077'](),
    "nombre": nombreCompleto,
    '\u0063\u006F\u0073\u0074\u006F': costo,
    "precio": precio,
    '\u0073\u0074\u006F\u0063\u006B': stock
  };
  inventario['\u0070\u0075\u0073\u0068'](nuevoProducto);
  await guardarEnNube("\u0069\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F", nuevoProducto);
  renderizarTodo();
  formProducto['\u0072\u0065\u0073\u0065\u0074']();
  mostrarNotificacion("\u00A1\u0050\u0072\u006F\u0064\u0075\u0063\u0074\u006F\u0020\u0061\u0067\u0072\u0065\u0067\u0061\u0064\u006F\u0020\u0063\u006F\u006E\u0020\u00E9\u0078\u0069\u0074\u006F\u0021");
});
formGasto['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']('submit', async e => {
  e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
  let _0x52d;
  const descripcion = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0067\u0061\u0073\u0074\u006F\u002D\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0063\u0069\u006F\u006E")['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();
  _0x52d = (171633 ^ 171637) + (748784 ^ 748787);
  let _0xe670ee;
  const monto = parseFloat(document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('gasto-monto')['\u0076\u0061\u006C\u0075\u0065']);
  _0xe670ee = (281010 ^ 281018) + (179584 ^ 179589);
  if (!monto || monto <= (389844 ^ 389844)) return mostrarNotificacion('Ingresa un monto válido.', 'error');
  const nuevoGasto = {
    "id": Date['\u006E\u006F\u0077'](),
    "fecha": new Date()['\u0074\u006F\u0049\u0053\u004F\u0053\u0074\u0072\u0069\u006E\u0067'](),
    '\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0063\u0069\u006F\u006E': descripcion,
    "monto": monto
  };
  gastos['\u0070\u0075\u0073\u0068'](nuevoGasto);
  await guardarEnNube("\u0067\u0061\u0073\u0074\u006F\u0073", nuevoGasto);
  formGasto['\u0072\u0065\u0073\u0065\u0074']();
  renderizarTodo();
  mostrarNotificacion('¡Gasto registrado en la nube correctamente!');
});
function obtenerMovimientosFiltrados() {
  let _0xba_0xaa3;
  let _0xc3b46f = [...ventas['\u006D\u0061\u0070'](v => ({
    ...v,
    '\u0065\u0073\u0047\u0061\u0073\u0074\u006F': false,
    "gananciaReal": Number(v['\u0067\u0061\u006E\u0061\u006E\u0063\u0069\u0061'] || 154353 ^ 154353)
  })), ...gastos['\u006D\u0061\u0070'](g => ({
    "id": g['\u0069\u0064'],
    "fecha": g['\u0066\u0065\u0063\u0068\u0061'],
    "esGasto": !![],
    "totalVenta": Number(g['\u006D\u006F\u006E\u0074\u006F'] || g['\u0076\u0061\u006C\u006F\u0072'] || 116026 ^ 116026),
    "gananciaReal": -Number(g['\u006D\u006F\u006E\u0074\u006F'] || g['\u0076\u0061\u006C\u006F\u0072'] || 865067 ^ 865067),
    '\u0063\u006F\u006E\u0063\u0065\u0070\u0074\u006F': `Egreso/Pago: ${g['\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0063\u0069\u006F\u006E'] || 'Sin descripción'}`,
    "tipo": "\u0067\u0061\u0073\u0074\u006F"
  }))];
  _0xba_0xaa3 = (281998 ^ 281997) + (946462 ^ 946459);
  _0xc3b46f['\u0073\u006F\u0072\u0074']((a, b) => new Date(b['\u0066\u0065\u0063\u0068\u0061']) - new Date(a['\u0066\u0065\u0063\u0068\u0061']));
  var _0x27884a = (593391 ^ 593387) + (323411 ^ 323410);
  const _0xa_0xf22 = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0066\u0069\u006C\u0074\u0072\u006F\u002D\u0074\u0069\u0070\u006F")['\u0076\u0061\u006C\u0075\u0065'];
  _0x27884a = (705789 ^ 705790) + (502159 ^ 502150);
  let _0x7a3ebc;
  const _0x3ca4c = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0066\u0069\u006C\u0074\u0072\u006F\u002D\u0066\u0065\u0063\u0068\u0061\u002D\u0064\u0065\u0073\u0064\u0065")['\u0076\u0061\u006C\u0075\u0065'];
  _0x7a3ebc = 537505 ^ 537507;
  var _0x67eeda = (378109 ^ 378100) + (152550 ^ 152558);
  const _0x51d = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0066\u0069\u006C\u0074\u0072\u006F\u002D\u0066\u0065\u0063\u0068\u0061\u002D\u0068\u0061\u0073\u0074\u0061")['\u0076\u0061\u006C\u0075\u0065'];
  _0x67eeda = (294592 ^ 294596) + (470462 ^ 470461);
  return _0xc3b46f['\u0066\u0069\u006C\u0074\u0065\u0072'](m => {
    var _0x7g18d = (967631 ^ 967625) + (389473 ^ 389472);
    const _0xde7ed = new Date(m['\u0066\u0065\u0063\u0068\u0061'])['\u0074\u006F\u0049\u0053\u004F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0073\u0070\u006C\u0069\u0074']("\u0054")[743600 ^ 743600];
    _0x7g18d = 335169 ^ 335171;
    if (_0x3ca4c && _0xde7ed < _0x3ca4c) return false;
    if (_0x51d && _0xde7ed > _0x51d) return false;
    if (_0xa_0xf22 === 'ingresos' && m['\u0065\u0073\u0047\u0061\u0073\u0074\u006F']) return false;
    if (_0xa_0xf22 === "\u0065\u0067\u0072\u0065\u0073\u006F\u0073" && !m['\u0065\u0073\u0047\u0061\u0073\u0074\u006F']) return false;
    return !![];
  });
}
function exportarPDFFiltrado() {
  let _0x6eg;
  const _0xd7e9d = obtenerMovimientosFiltrados();
  _0x6eg = 595825 ^ 595831;
  if (_0xd7e9d['\u006C\u0065\u006E\u0067\u0074\u0068'] === (563539 ^ 563539)) {
    return mostrarNotificacion('No hay movimientos en el filtro seleccionado.', "\u0065\u0072\u0072\u006F\u0072");
  }
  const {
    '\u006A\u0073\u0050\u0044\u0046': jsPDF
  } = window['\u006A\u0073\u0070\u0064\u0066'];
  var _0xg_0x4ce = (108050 ^ 108051) + (313643 ^ 313641);
  const _0x32b = new jsPDF();
  _0xg_0x4ce = (558718 ^ 558715) + (159659 ^ 159660);
  _0x32b['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("\u0068\u0065\u006C\u0076\u0065\u0074\u0069\u0063\u0061", "bold");
  _0x32b['\u0073\u0065\u0074\u0046\u006F\u006E\u0074\u0053\u0069\u007A\u0065'](315805 ^ 315791);
  _0x32b['\u0074\u0065\u0078\u0074']("Papelería & Variedades - Reporte Financiero", 973771 ^ 973765, 896124 ^ 896104);
  _0x32b['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("\u0068\u0065\u006C\u0076\u0065\u0074\u0069\u0063\u0061", "\u006E\u006F\u0072\u006D\u0061\u006C");
  _0x32b['\u0073\u0065\u0074\u0046\u006F\u006E\u0074\u0053\u0069\u007A\u0065'](363475 ^ 363481);
  _0x32b['\u0074\u0065\u0078\u0074'](`Generado el: ${new Date()['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`, 879650 ^ 879660, 193680 ^ 193676);
  let y = 336805 ^ 336771;
  _0x32b['\u0073\u0065\u0074\u0046\u0069\u006C\u006C\u0043\u006F\u006C\u006F\u0072'](617403 ^ 617374, 920555 ^ 920456, 671728 ^ 671515);
  _0x32b['\u0072\u0065\u0063\u0074'](379886 ^ 379872, y, 780367 ^ 780537, 477274 ^ 477266, "\u0046");
  _0x32b['\u0073\u0065\u0074\u0054\u0065\u0078\u0074\u0043\u006F\u006C\u006F\u0072'](590511 ^ 590416, 619508 ^ 619275, 152314 ^ 152069);
  _0x32b['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("\u0068\u0065\u006C\u0076\u0065\u0074\u0069\u0063\u0061", "\u0062\u006F\u006C\u0064");
  _0x32b['\u0074\u0065\u0078\u0074']("\u0046\u0065\u0063\u0068\u0061\u0020\u0079\u0020\u0048\u006F\u0072\u0061", 477646 ^ 477662, y + (211477 ^ 211475));
  _0x32b['\u0074\u0065\u0078\u0074']("Tipo", 529315 ^ 529311, y + (729663 ^ 729657));
  _0x32b['\u0074\u0065\u0078\u0074']("Concepto", 761430 ^ 761356, y + (356545 ^ 356551));
  _0x32b['\u0074\u0065\u0078\u0074']("Valor", 338232 ^ 338345, y + (201117 ^ 201115));
  _0x32b['\u0074\u0065\u0078\u0074']("\u0047\u0061\u006E\u0061\u006E\u0063\u0069\u0061", 949386 ^ 949285, y + (546183 ^ 546177));
  y += 129083 ^ 129079;
  _0x32b['\u0073\u0065\u0074\u0046\u006F\u006E\u0074']("\u0068\u0065\u006C\u0076\u0065\u0074\u0069\u0063\u0061", "normal");
  _0x32b['\u0073\u0065\u0074\u0054\u0065\u0078\u0074\u0043\u006F\u006C\u006F\u0072'](357574 ^ 357574, 620601 ^ 620601, 274717 ^ 274717);
  _0xd7e9d['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](m => {
    if (y > (272668 ^ 272402)) {
      _0x32b['\u0061\u0064\u0064\u0050\u0061\u0067\u0065']();
      y = 729880 ^ 729868;
    }
    let _0xa61b;
    let _0xae97f = new Date(m['\u0066\u0065\u0063\u0068\u0061']);
    _0xa61b = 798299 ^ 798291;
    var _0x_0x590 = (734095 ^ 734087) + (163791 ^ 163783);
    let _0x62be = _0xae97f['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0044\u0061\u0074\u0065\u0053\u0074\u0072\u0069\u006E\u0067']() + "\u0020" + _0xae97f['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0054\u0069\u006D\u0065\u0053\u0074\u0072\u0069\u006E\u0067']([], {
      "hour": '2-digit',
      "minute": '2-digit'
    });
    _0x_0x590 = (559487 ^ 559483) + (261991 ^ 261987);
    let _0x6_0xa6f = m['\u0065\u0073\u0047\u0061\u0073\u0074\u006F'] ? "\u0045\u0067\u0072\u0065\u0073\u006F\u002F\u0050\u0061\u0067\u006F" : 'Venta';
    let _0x29765c;
    let _0x9c7g9a = m['\u0065\u0073\u0047\u0061\u0073\u0074\u006F'] ? "\u002D" : "\u002B";
    _0x29765c = 764296 ^ 764301;
    let _0xdf0gb = `${_0x9c7g9a}$${(m['\u0074\u006F\u0074\u0061\u006C\u0056\u0065\u006E\u0074\u0061'] || 494468 ^ 494468)['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`;
    let _0x7435dc;
    let _0x7_0xce9 = m['\u0065\u0073\u0047\u0061\u0073\u0074\u006F'] ? "\u002D" : `$${(m['\u0067\u0061\u006E\u0061\u006E\u0063\u0069\u0061\u0052\u0065\u0061\u006C'] || 693212 ^ 693212)['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`;
    _0x7435dc = (592691 ^ 592699) + (263575 ^ 263572);
    _0x32b['\u0074\u0065\u0078\u0074'](_0x62be, 336037 ^ 336053, y);
    _0x32b['\u0074\u0065\u0078\u0074'](_0x6_0xa6f, 579316 ^ 579272, y);
    _0x32b['\u0074\u0065\u0078\u0074'](m['\u0063\u006F\u006E\u0063\u0065\u0070\u0074\u006F']['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](892637 ^ 892637, 220630 ^ 220623), 664503 ^ 664557, y);
    _0x32b['\u0074\u0065\u0078\u0074'](_0xdf0gb, 713095 ^ 712982, y);
    _0x32b['\u0074\u0065\u0078\u0074'](_0x7_0xce9, 646115 ^ 645964, y);
    y += 609499 ^ 609491;
  });
  _0x32b['\u0073\u0061\u0076\u0065'](`Reporte_Papeleria_${new Date()['\u0074\u006F\u0049\u0053\u004F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0073\u0070\u006C\u0069\u0074']("\u0054")[451286 ^ 451286]}.pdf`);
}
function filtrarInventarioBase() {
  const _0xcdgg = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('busqueda-inventario-tabla')['\u0076\u0061\u006C\u0075\u0065']['\u0074\u006F\u004C\u006F\u0077\u0065\u0072\u0043\u0061\u0073\u0065']()['\u0074\u0072\u0069\u006D']();
  const _0xc829dg = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('filtro-solo-stock-bajo')['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'];
  return inventario['\u0066\u0069\u006C\u0074\u0065\u0072'](p => {
    let _0x0c_0x9af;
    const _0x3e37f = p['\u006E\u006F\u006D\u0062\u0072\u0065']['\u0074\u006F\u004C\u006F\u0077\u0065\u0072\u0043\u0061\u0073\u0065']()['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0xcdgg);
    _0x0c_0x9af = (716197 ^ 716204) + (140304 ^ 140308);
    const _0x4d_0xfd5 = _0xc829dg ? p['\u0073\u0074\u006F\u0063\u006B'] <= (658373 ^ 658383) : !![];
    return _0x3e37f && _0x4d_0xfd5;
  });
}
function filtrarYCambiarPaginaInventario() {
  paginaActualInventario = 358759 ^ 358758;
  renderizarInventarioPaginado();
}
function cambiarPaginaInventario(direccion) {
  const _0x2821e = filtrarInventarioBase();
  let _0x59f33c;
  const _0x951c = Math['\u0063\u0065\u0069\u006C'](_0x2821e['\u006C\u0065\u006E\u0067\u0074\u0068'] / itemsPorPaginaInventario) || 258463 ^ 258462;
  _0x59f33c = (527511 ^ 527506) + (396298 ^ 396291);
  paginaActualInventario += direccion;
  if (paginaActualInventario < (869319 ^ 869318)) paginaActualInventario = 755184 ^ 755185;
  if (paginaActualInventario > _0x951c) paginaActualInventario = _0x951c;
  renderizarInventarioPaginado();
}
function limpiarFiltrosInventario() {
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u0075\u0073\u0071\u0075\u0065\u0064\u0061\u002D\u0069\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F\u002D\u0074\u0061\u0062\u006C\u0061")['\u0076\u0061\u006C\u0075\u0065'] = '';
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0066\u0069\u006C\u0074\u0072\u006F\u002D\u0073\u006F\u006C\u006F\u002D\u0073\u0074\u006F\u0063\u006B\u002D\u0062\u0061\u006A\u006F")['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = false;
  paginaActualInventario = 231554 ^ 231555;
  renderizarInventarioPaginado();
}
function renderizarInventarioPaginado() {
  tablaInventario['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = '';
  var _0x94bca = (947716 ^ 947718) + (666983 ^ 666980);
  const _0xe2f6c = filtrarInventarioBase();
  _0x94bca = (860672 ^ 860672) + (540710 ^ 540705);
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('badge-total-productos')['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `${inventario['\u006C\u0065\u006E\u0067\u0074\u0068']} ítems`;
  if (_0xe2f6c['\u006C\u0065\u006E\u0067\u0074\u0068'] === (995085 ^ 995085)) {
    tablaInventario['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `<tr><td colspan="4" class="p-4 text-center text-slate-400 font-medium">No se encontraron productos.</td></tr>`;
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('texto-paginacion-inventario')['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `Pág. 0 de 0`;
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('btn-pag-anterior')['\u0064\u0069\u0073\u0061\u0062\u006C\u0065\u0064'] = !![];
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u0074\u006E\u002D\u0070\u0061\u0067\u002D\u0073\u0069\u0067\u0075\u0069\u0065\u006E\u0074\u0065")['\u0064\u0069\u0073\u0061\u0062\u006C\u0065\u0064'] = !![];
    return;
  }
  var _0x41d24f = (233911 ^ 233911) + (896128 ^ 896130);
  const _0x7aa = Math['\u0063\u0065\u0069\u006C'](_0xe2f6c['\u006C\u0065\u006E\u0067\u0074\u0068'] / itemsPorPaginaInventario);
  _0x41d24f = 807292 ^ 807284;
  if (paginaActualInventario > _0x7aa) paginaActualInventario = _0x7aa;
  let _0x512ac;
  const _0xe2eae = (paginaActualInventario - (195703 ^ 195702)) * itemsPorPaginaInventario;
  _0x512ac = 206262 ^ 206262;
  var _0xc7c = (126541 ^ 126537) + (171533 ^ 171531);
  const _0xbb_0xfd1 = _0xe2eae + itemsPorPaginaInventario;
  _0xc7c = (933106 ^ 933107) + (794608 ^ 794616);
  const _0x7c3def = _0xe2f6c['\u0073\u006C\u0069\u0063\u0065'](_0xe2eae, _0xbb_0xfd1);
  _0x7c3def['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](p => {
    tablaInventario['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] += `
            <tr class="border-b border-slate-50 hover:bg-slate-50/60 transition">
                <td class="p-2 font-bold text-slate-800">${p['\u006E\u006F\u006D\u0062\u0072\u0065']}</td>
                <td class="p-2 text-center font-bold ${p['\u0073\u0074\u006F\u0063\u006B'] <= (538493 ^ 538487) ? "\u0074\u0065\u0078\u0074\u002D\u0072\u0065\u0064\u002D\u0036\u0030\u0030\u0020\u0062\u0067\u002D\u0072\u0065\u0064\u002D\u0035\u0030\u0020\u0072\u006F\u0075\u006E\u0064\u0065\u0064" : 'text-slate-700'}">${p['\u0073\u0074\u006F\u0063\u006B']}</td>
                <td class="p-2 text-right font-semibold text-slate-700">$${p['\u0070\u0072\u0065\u0063\u0069\u006F']['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}</td>
                <td class="p-2 text-center">
                    <button onclick="reabastecerStock(${p['\u0069\u0064']})" title="Sumar stock recibido" class="bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 py-1 rounded-lg font-bold text-xs transition">➕</button>
                </td>
            </tr>
        `;
  });
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0065\u0078\u0074\u006F\u002D\u0070\u0061\u0067\u0069\u006E\u0061\u0063\u0069\u006F\u006E\u002D\u0069\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `Pág. ${paginaActualInventario} de ${_0x7aa}`;
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u0074\u006E\u002D\u0070\u0061\u0067\u002D\u0061\u006E\u0074\u0065\u0072\u0069\u006F\u0072")['\u0064\u0069\u0073\u0061\u0062\u006C\u0065\u0064'] = paginaActualInventario === (277055 ^ 277054);
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u0074\u006E\u002D\u0070\u0061\u0067\u002D\u0073\u0069\u0067\u0075\u0069\u0065\u006E\u0074\u0065")['\u0064\u0069\u0073\u0061\u0062\u006C\u0065\u0064'] = paginaActualInventario === _0x7aa;
}
function toggleVentanaBot() {
  let _0x867cfc;
  const _0x9867fc = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0076\u0065\u006E\u0074\u0061\u006E\u0061\u002D\u0062\u006F\u0074\u002D\u0063\u0068\u0061\u0074");
  _0x867cfc = 295411 ^ 295411;
  _0x9867fc['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u0068\u0069\u0064\u0064\u0065\u006E");
  setTimeout(() => {
    _0x9867fc['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u0073\u0063\u0061\u006C\u0065\u002D\u0039\u0035");
    _0x9867fc['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u006F\u0070\u0061\u0063\u0069\u0074\u0079\u002D\u0030");
  }, 101100 ^ 101094);
  actualizarAlertasBot();
}
function filtrarStockBajoAutomatico() {
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0066\u0069\u006C\u0074\u0072\u006F\u002D\u0073\u006F\u006C\u006F\u002D\u0073\u0074\u006F\u0063\u006B\u002D\u0062\u0061\u006A\u006F")['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = !![];
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u0075\u0073\u0071\u0075\u0065\u0064\u0061\u002D\u0069\u006E\u0076\u0065\u006E\u0074\u0061\u0072\u0069\u006F\u002D\u0074\u0061\u0062\u006C\u0061")['\u0076\u0061\u006C\u0075\u0065'] = '';
  paginaActualInventario = 267038 ^ 267039;
  renderizarInventarioPaginado();
  toggleVentanaBot();
  mostrarNotificacion('Inventario filtrado con productos críticos.');
}
function actualizarAlertasBot() {
  const _0xf858f = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('bot-alertas-stock-container');
  const _0x9f43b = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('badge-contador-bot');
  let _0x33450d;
  const _0x70fe7b = inventario['\u0066\u0069\u006C\u0074\u0065\u0072'](p => p['\u0073\u0074\u006F\u0063\u006B'] <= (891529 ^ 891523));
  _0x33450d = 715998 ^ 715999;
  _0xf858f['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = '';
  if (_0x70fe7b['\u006C\u0065\u006E\u0067\u0074\u0068'] === (307907 ^ 307907)) {
    _0x9f43b['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0068\u0069\u0064\u0064\u0065\u006E");
    _0xf858f['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `
            <div class="bg-emerald-50 text-emerald-800 p-2.5 rounded-xl border border-emerald-100 flex items-center space-x-2">
                <span class="text-base">✅</span>
                <div>
                    <p class="font-bold">¡Todo en orden!</p>
                    <p class="text-[11px] text-emerald-700">No hay productos agotados ni con stock crítico en este momento.</p>
                </div>
            </div>
        `;
  } else {
    _0x9f43b['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = _0x70fe7b['\u006C\u0065\u006E\u0067\u0074\u0068'];
    _0x9f43b['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0068\u0069\u0064\u0064\u0065\u006E");
    let _0x37a75c = `<div class="space-y-1.5"><p class="font-bold text-slate-800 text-[11px]">⚠️ Productos que necesitan reposición:</p>`;
    _0x70fe7b['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](p => {
      _0x37a75c += `
                <div class="bg-red-50 border border-red-100 p-2 rounded-xl flex justify-between items-center text-red-900">
                    <span class="font-bold truncate max-w-[170px]" title="${p['\u006E\u006F\u006D\u0062\u0072\u0065']}">${p['\u006E\u006F\u006D\u0062\u0072\u0065']}</span>
                    <span class="bg-red-200 text-red-800 text-[10px] font-black px-2 py-0.5 rounded-full">Stock: ${p['\u0073\u0074\u006F\u0063\u006B']}</span>
                </div>
            `;
    });
    _0x37a75c += `</div>`;
    _0xf858f['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = _0x37a75c;
  }
}
function renderizarTodo() {
  var _0x1459de = (898023 ^ 898017) + (770094 ^ 770088);
  const _0x315f2e = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u006C\u0069\u0073\u0074\u0061\u002D\u0070\u0072\u006F\u0064\u0075\u0063\u0074\u006F\u0073\u002D\u0073\u0075\u0067\u0065\u0072\u0069\u0064\u006F\u0073");
  _0x1459de = (915496 ^ 915496) + (648701 ^ 648700);
  _0x315f2e['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = '';
  let _0x2gf1e;
  let _0x5669bg = 632621 ^ 632621;
  _0x2gf1e = (704341 ^ 704337) + (932613 ^ 932615);
  var _0xae91fb = (284738 ^ 284741) + (823137 ^ 823138);
  let _0xb2b7f = 971880 ^ 971880;
  _0xae91fb = '\u006F\u0066\u0067\u0066\u0068\u0070';
  inventario['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](p => {
    _0x5669bg += p['\u0073\u0074\u006F\u0063\u006B'];
    if (p['\u0073\u0074\u006F\u0063\u006B'] <= (808599 ^ 808605)) _0xb2b7f++;
    if (p['\u0073\u0074\u006F\u0063\u006B'] > (481788 ^ 481788)) {
      _0x315f2e['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] += `<option value="${p['\u006E\u006F\u006D\u0062\u0072\u0065']}" data-id="${p['\u0069\u0064']}">Stock: ${p['\u0073\u0074\u006F\u0063\u006B']} | Precio: $${p['\u0070\u0072\u0065\u0063\u0069\u006F']['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}</option>`;
    }
  });
  var _0xe1cc = (247687 ^ 247686) + (186654 ^ 186651);
  const _0x2ff4e = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0069\u006E\u0070\u0075\u0074\u002D\u0062\u0075\u0073\u0063\u0061\u0064\u006F\u0072\u002D\u0070\u0072\u006F\u0064");
  _0xe1cc = (651939 ^ 651943) + (632897 ^ 632902);
  _0x2ff4e['\u006F\u006E\u0069\u006E\u0070\u0075\u0074'] = function () {
    var _0x42278a = (716951 ^ 716947) + (158189 ^ 158188);
    const _0x37a5cb = this['\u0076\u0061\u006C\u0075\u0065'];
    _0x42278a = "calcfm";
    const _0x1133f = inventario['\u0066\u0069\u006E\u0064'](p => p['\u006E\u006F\u006D\u0062\u0072\u0065'] === _0x37a5cb);
    if (_0x1133f) {
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('venta-producto-id')['\u0076\u0061\u006C\u0075\u0065'] = _0x1133f['\u0069\u0064'];
    } else {
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('venta-producto-id')['\u0076\u0061\u006C\u0075\u0065'] = '';
    }
  };
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('stat-total-items')['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = _0x5669bg;
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0074\u0061\u0074\u002D\u0073\u0074\u006F\u0063\u006B\u002D\u0062\u0061\u006A\u006F")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = _0xb2b7f;
  renderizarInventarioPaginado();
  actualizarAlertasBot();
  let _0x429e;
  let _0x56ba = obtenerMovimientosFiltrados();
  _0x429e = (844650 ^ 844654) + (545715 ^ 545713);
  let _0xf696a = [...ventas['\u006D\u0061\u0070'](v => ({
    ...v,
    '\u0065\u0073\u0047\u0061\u0073\u0074\u006F': false
  })), ...gastos['\u006D\u0061\u0070'](g => ({
    ...g,
    '\u0065\u0073\u0047\u0061\u0073\u0074\u006F': !![],
    "totalVenta": Number(g['\u006D\u006F\u006E\u0074\u006F'] || 902161 ^ 902161)
  }))];
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0074\u0061\u0074\u002D\u0074\u006F\u0074\u0061\u006C\u002D\u006D\u006F\u0076")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = _0xf696a['\u006C\u0065\u006E\u0067\u0074\u0068'];
  tablaHistorial['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = '';
  if (_0x56ba['\u006C\u0065\u006E\u0067\u0074\u0068'] === (152698 ^ 152698)) {
    tablaHistorial['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `<tr><td colspan="5" class="p-4 text-center text-slate-400 font-medium">No hay movimientos que coincidan con el filtro.</td></tr>`;
  } else {
    _0x56ba['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](m => {
      const _0xc37f4g = new Date(m['\u0066\u0065\u0063\u0068\u0061']);
      let _0x094bg;
      const _0xad7d = _0xc37f4g['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0044\u0061\u0074\u0065\u0053\u0074\u0072\u0069\u006E\u0067']() + "\u0020" + _0xc37f4g['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0054\u0069\u006D\u0065\u0053\u0074\u0072\u0069\u006E\u0067']([], {
        '\u0068\u006F\u0075\u0072': '2-digit',
        '\u006D\u0069\u006E\u0075\u0074\u0065': '2-digit'
      });
      _0x094bg = (879336 ^ 879343) + (198308 ^ 198304);
      var _0x2_0xc79 = (550305 ^ 550304) + (778099 ^ 778102);
      let _0x5a3da = '';
      _0x2_0xc79 = "gipmdf";
      let _0xcbf = '';
      let _0x644ad = "\u002D";
      if (!m['\u0065\u0073\u0047\u0061\u0073\u0074\u006F']) {
        _0x5a3da = "\u003C\u0073\u0070\u0061\u006E\u0020\u0063\u006C\u0061\u0073\u0073\u003D\u0022\u0062\u0067\u002D\u0062\u006C\u0075\u0065\u002D\u0031\u0030\u0030\u0020\u0074\u0065\u0078\u0074\u002D\u0062\u006C\u0075\u0065\u002D\u0037\u0030\u0030\u0020\u0070\u0078\u002D\u0032\u0020\u0070\u0079\u002D\u0030\u002E\u0035\u0020\u0072\u006F\u0075\u006E\u0064\u0065\u0064\u002D\u006C\u0067\u0020\u0066\u006F\u006E\u0074\u002D\u0062\u006F\u006C\u0064\u0022\u003E\u0056\u0065\u006E\u0074\u0061\u003C\u002F\u0073\u0070\u0061\u006E\u003E";
        _0xcbf = "\u0074\u0065\u0078\u0074\u002D\u0062\u006C\u0075\u0065\u002D\u0039\u0030\u0030\u0020\u0066\u006F\u006E\u0074\u002D\u0062\u006F\u006C\u0064";
        _0x644ad = `<span class="text-emerald-700 font-black">+$${(m['\u0067\u0061\u006E\u0061\u006E\u0063\u0069\u0061'] || 879285 ^ 879285)['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}</span>`;
      } else {
        _0x5a3da = '<span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-lg font-bold">Pago/Gasto</span>';
        _0xcbf = "\u0074\u0065\u0078\u0074\u002D\u0061\u006D\u0062\u0065\u0072\u002D\u0038\u0030\u0030\u0020\u0066\u006F\u006E\u0074\u002D\u0062\u006F\u006C\u0064";
        _0x644ad = '<span class="text-slate-400">N/A</span>';
      }
      tablaHistorial['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] += `
                <tr class="border-b border-slate-50 hover:bg-slate-50/60 transition">
                    <td class="p-2.5 text-slate-600 font-medium">${_0xad7d}</td>
                    <td class="p-2.5">${_0x5a3da}</td>
                    <td class="p-2.5 text-slate-800 font-semibold">${m['\u0063\u006F\u006E\u0063\u0065\u0070\u0074\u006F']}</td>
                    <td class="p-2.5 ${_0xcbf}">${m['\u0065\u0073\u0047\u0061\u0073\u0074\u006F'] ? "\u002D" : "\u002B"}${(m['\u0074\u006F\u0074\u0061\u006C\u0056\u0065\u006E\u0074\u0061'] || 578843 ^ 578843)['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}</td>
                    <td class="p-2.5">${_0x644ad}</td>
                </tr>
            `;
    });
  }
  const _0xg2_0x90c = new Date();
  const _0x364ac = _0xg2_0x90c['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0044\u0061\u0074\u0065\u0053\u0074\u0072\u0069\u006E\u0067']();
  const _0x59c = new Date();
  _0x59c['\u0073\u0065\u0074\u0044\u0061\u0074\u0065'](_0xg2_0x90c['\u0067\u0065\u0074\u0044\u0061\u0074\u0065']() - (804757 ^ 804754));
  const _0x2a9a7b = _0xg2_0x90c['\u0067\u0065\u0074\u004D\u006F\u006E\u0074\u0068']();
  const _0xbf69eg = _0xg2_0x90c['\u0067\u0065\u0074\u0046\u0075\u006C\u006C\u0059\u0065\u0061\u0072']();
  let _0xb56f = 217819 ^ 217819,
    _0x8433e = 727950 ^ 727950,
    _0x5a1f = 787535 ^ 787535;
  let _0x929ga = 521032 ^ 521032,
    _0x9b8g9c = 980465 ^ 980465,
    _0xfbb4f = 942843 ^ 942843;
  let _0x88d3e = 988194 ^ 988194,
    _0x8_0xc92 = 589031 ^ 589031,
    _0xbbfa7g = 800805 ^ 800805;
  ventas['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](v => {
    const f = new Date(v['\u0066\u0065\u0063\u0068\u0061']);
    const _0xg71ggd = Number(v['\u0074\u006F\u0074\u0061\u006C\u0056\u0065\u006E\u0074\u0061'] || 983454 ^ 983454);
    let _0x729d;
    const _0x413ac = Number(v['\u0067\u0061\u006E\u0061\u006E\u0063\u0069\u0061'] || 796442 ^ 796442);
    _0x729d = (608331 ^ 608332) + (688487 ^ 688484);
    if (f['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0044\u0061\u0074\u0065\u0053\u0074\u0072\u0069\u006E\u0067']() === _0x364ac) {
      _0xb56f += _0xg71ggd;
      _0x8433e += _0x413ac;
    }
    if (f >= _0x59c) {
      _0x929ga += _0xg71ggd;
      _0x9b8g9c += _0x413ac;
    }
    if (f['\u0067\u0065\u0074\u004D\u006F\u006E\u0074\u0068']() === _0x2a9a7b && f['\u0067\u0065\u0074\u0046\u0075\u006C\u006C\u0059\u0065\u0061\u0072']() === _0xbf69eg) {
      _0x88d3e += _0xg71ggd;
      _0x8_0xc92 += _0x413ac;
    }
  });
  gastos['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](g => {
    const f = new Date(g['\u0066\u0065\u0063\u0068\u0061']);
    var _0x80fbg = (233596 ^ 233597) + (258732 ^ 258730);
    const _0x5da = Number(g['\u006D\u006F\u006E\u0074\u006F'] || g['\u0076\u0061\u006C\u006F\u0072'] || 233169 ^ 233169);
    _0x80fbg = (401418 ^ 401410) + (531012 ^ 531013);
    if (f['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0044\u0061\u0074\u0065\u0053\u0074\u0072\u0069\u006E\u0067']() === _0x364ac) _0x5a1f += _0x5da;
    if (f >= _0x59c) _0xfbb4f += _0x5da;
    if (f['\u0067\u0065\u0074\u004D\u006F\u006E\u0074\u0068']() === _0x2a9a7b && f['\u0067\u0065\u0074\u0046\u0075\u006C\u006C\u0059\u0065\u0061\u0072']() === _0xbf69eg) _0xbbfa7g += _0x5da;
  });
  let _0x9af65d = _0x8433e - _0x5a1f;
  let _0x96e13a;
  let _0x6b972b = _0x9b8g9c - _0xfbb4f;
  _0x96e13a = '\u0068\u0063\u0061\u006B\u006E\u0062';
  let _0xb3e6a;
  let _0x7ad = _0x8_0xc92 - _0xbbfa7g;
  _0xb3e6a = '\u0067\u0065\u0069\u0061\u0062\u006B';
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u0061\u006A\u0061\u002D\u0076\u0065\u006E\u0074\u0061\u0073\u002D\u0068\u006F\u0079")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `$${_0xb56f['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`;
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u0061\u006A\u0061\u002D\u0067\u0061\u0073\u0074\u006F\u0073\u002D\u0068\u006F\u0079")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `$${_0x5a1f['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`;
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('caja-neto-hoy')['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `$${_0x9af65d['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`;
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u0061\u006A\u0061\u002D\u0076\u0065\u006E\u0074\u0061\u0073\u002D\u0073\u0065\u006D\u0061\u006E\u0061")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `$${_0x929ga['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`;
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('caja-gastos-semana')['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `$${_0xfbb4f['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`;
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u0061\u006A\u0061\u002D\u006E\u0065\u0074\u006F\u002D\u0073\u0065\u006D\u0061\u006E\u0061")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `$${_0x6b972b['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`;
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u0061\u006A\u0061\u002D\u0076\u0065\u006E\u0074\u0061\u0073\u002D\u006D\u0065\u0073")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `$${_0x88d3e['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`;
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u0061\u006A\u0061\u002D\u0067\u0061\u0073\u0074\u006F\u0073\u002D\u006D\u0065\u0073")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `$${_0xbbfa7g['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`;
  document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u0061\u006A\u0061\u002D\u006E\u0065\u0074\u006F\u002D\u006D\u0065\u0073")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `$${_0x7ad['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0053\u0074\u0072\u0069\u006E\u0067']()}`;
  const _0x4d5ea = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u006D\u0069\u006E\u0069\u002D\u0067\u0072\u0061\u0066\u0069\u0063\u0061\u002D\u0062\u0061\u0072\u0072\u0061\u0073");
  _0x4d5ea['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = '';
  let _0xb7a0b;
  let _0xe37b = [];
  _0xb7a0b = (675407 ^ 675403) + (963652 ^ 963651);
  var _0xc5fb8b = (137885 ^ 137885) + (540153 ^ 540157);
  let _0x47560a = 857505 ^ 857541;
  _0xc5fb8b = (135122 ^ 135131) + (230420 ^ 230418);
  for (let i = 426116 ^ 426112; i >= (175652 ^ 175652); i--) {
    var _0xf9fc5c = (876185 ^ 876191) + (469348 ^ 469346);
    let d = new Date();
    _0xf9fc5c = (285535 ^ 285530) + (689259 ^ 689258);
    d['\u0073\u0065\u0074\u0044\u0061\u0074\u0065'](_0xg2_0x90c['\u0067\u0065\u0074\u0044\u0061\u0074\u0065']() - i);
    var _0x53g = (483764 ^ 483761) + (703363 ^ 703370);
    let _0x4dg04f = d['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0044\u0061\u0074\u0065\u0053\u0074\u0072\u0069\u006E\u0067']();
    _0x53g = 746371 ^ 746375;
    let _0x399ee = d['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0044\u0061\u0074\u0065\u0053\u0074\u0072\u0069\u006E\u0067']("\u0065\u0073\u002D\u0045\u0053", {
      '\u0077\u0065\u0065\u006B\u0064\u0061\u0079': "\u0073\u0068\u006F\u0072\u0074"
    });
    let _0x26f21f = ventas['\u0066\u0069\u006C\u0074\u0065\u0072'](v => new Date(v['\u0066\u0065\u0063\u0068\u0061'])['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0044\u0061\u0074\u0065\u0053\u0074\u0072\u0069\u006E\u0067']() === _0x4dg04f)['\u0072\u0065\u0064\u0075\u0063\u0065']((acc, v) => acc + v['\u0074\u006F\u0074\u0061\u006C\u0056\u0065\u006E\u0074\u0061'], 192333 ^ 192333);
    _0xe37b['\u0070\u0075\u0073\u0068']({
      '\u0064\u0069\u0061': _0x399ee,
      "total": _0x26f21f
    });
    if (_0x26f21f > _0x47560a) _0x47560a = _0x26f21f;
  }
  _0xe37b['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](item => {
    var _0xa1239a = (490440 ^ 490445) + (801762 ^ 801771);
    let _0x027bdg = Math['\u006D\u0061\u0078'](Math['\u0072\u006F\u0075\u006E\u0064'](item['\u0074\u006F\u0074\u0061\u006C'] / _0x47560a * (758762 ^ 758670)), 894366 ^ 894356);
    _0xa1239a = 460900 ^ 460909;
    _0x4d5ea['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] += `
            <div class="flex-1 flex flex-col items-center h-full justify-end group">
                <div class="text-[10px] text-slate-500 font-bold mb-0.5 opacity-0 group-hover:opacity-100 transition">$${item['\u0074\u006F\u0074\u0061\u006C']}</div>
                <div class="w-full bg-blue-600 hover:bg-blue-700 rounded-t transition-all duration-300 shadow-sm" style="height: ${_0x027bdg}%"></div>
                <span class="text-[10px] text-slate-600 font-bold mt-1 capitalize">${item['\u0064\u0069\u0061']}</span>
            </div>
        `;
  });
}
