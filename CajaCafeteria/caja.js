let pedidos = [];
let totalAcumulado = 0;

function cargarPedidos() {
    pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
}

function mostrarPedidos() {
    cargarPedidos();

    let texto = "";
    
   const total = pedidos
        .filter(pedido => pedido.estado !== "Esperando pago")
        .reduce((acumulado, pedido) => acumulado + pedido.total, 0);

    document.getElementById("pedidos").innerHTML = texto;
    document.getElementById("total").innerText = `Total: $${totalAcumulado}`;
}

function cobrarPedido(id) {
    cargarPedidos();

    let pedido = pedidos.find(function(pedido) {
        return pedido.id == id;
    });

    pedido.estado = "En cocina";

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    alert("Pedido enviado a cocina");

    mostrarPedidos();
}

mostrarPedidos();