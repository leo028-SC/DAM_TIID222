function listarPedidos() {

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    let lista = document.getElementById("listaPedidos");

    lista.innerHTML = "";

    for (let i = 0; i < pedidos.length; i++) {

        let productos = "";

        for (let j = 0; j < pedidos[i].productos.length; j++) {

            productos +=
                "<li>" +
                pedidos[i].productos[j].nombre +
                "</li>";
        }

        lista.innerHTML +=
            "<div class='pedido'>" +

            "<h3>Pedido #" + pedidos[i].id + "</h3>" +

            "<ul>" +
            productos +
            "</ul>" +

            "<p>Total: $" +
            pedidos[i].total +
            "</p>" +

            "<p>Estado: " +
            pedidos[i].estado +
            "</p>" +

            botonCobrar(i, pedidos[i].estado) +

            "</div>";
    }
}




function botonCobrar(posicion, estado) {

    if (estado == "Listo") {

        return "<button onclick='cobrarPedido(" +
            posicion +
            ")'>Cobrar</button>";
    }

    if (estado == "Pagado") {

        return "<p>Pedido pagado</p>";
    }

    return "<p>Esperando a cocina...</p>";
}




function cobrarPedido(posicion) {

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    pedidos[posicion].estado = "Pagado";

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    alert("Pedido cobrado");

    listarPedidos();
}


listarPedidos();