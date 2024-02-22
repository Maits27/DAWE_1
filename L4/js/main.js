import { tiposProductos, productosPorClase } from "./tienda.js";
import { Vuelo } from "./vuelo.js";

window.onload = function() {
    for (let i = 0; i < tiposProductos.length; i++) {
        var columna = document.getElementById(tiposProductos[i]);
        var titulo = document.createElement("h2");
        titulo.innerHTML = tiposProductos[i]
        columna.appendChild(titulo);
        for (let producto of productosPorClase[i]) {
            columna.innerHTML += imprimirProducto(producto);
        }
    }

    var inputs = document.querySelectorAll("input[type='number']");
    inputs.forEach(input => {
        input.addEventListener("change", function() {
            var button = this.parentElement.querySelector("button");
            button.disabled = this.value == 0;
            if (this.value == 0) {
                button.innerHTML = 'Comprar';
            }else {
                button.innerHTML = 'Comprar ' + this.value ;
            }
        });
    });
    var buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            var producto_div = this.parentElement.getElementsByTagName("div")[0];
            var nombre = producto_div.innerText;
            
        });
    });
}


function imprimirProducto(producto) {
    if (producto instanceof Vuelo) {
        return `<div class="producto" style="border: 1px solid #333; margin: 10px;" >
                    <div style="font-weight: bold; background-color: rgb(125, 196, 230);color: #f4f4f4;padding: 6px;">${producto.getNombre()}</div>
                    <span style="display: block;padding: 4px;"><strong>Precio:</strong> ${producto.getPrecio()}€</span>
                    <span style="display: block;padding: 4px;"><strong>Origen:</strong> ${producto.getOrigen()}</span>
                    <span style="display: block;padding: 4px;"><strong>Destino:</strong> ${producto.getDestino()}</span>
                    <button disabled style="padding: 4px;">Comprar</button>
                    <input type="number" value="0" min="0" max="9" style="padding: 4px;">
                </div>`;
    }else {
        return `<div class="producto" style="border: 1px solid #333; margin: 10px;" >
                    <div style="font-weight: bold; background-color: rgb(125, 196, 230);color: #f4f4f4; padding: 6px;">${producto.getNombre()}</div>
                    <span style="display: block;padding: 4px;"><strong>Precio:</strong> ${producto.getPrecio()}€</span>
                    <span style="display: block;padding: 4px;"><strong>Ciudad:</strong> ${producto.getCiudad()}</span>
                    <button disabled style="padding: 4px;">Comprar</button>
                    <input type="number" value="0" min="0" max="9" style="padding: 4px;">
                </div>`;
    }
}
