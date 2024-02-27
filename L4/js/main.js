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

    cargarGestoresEventos();

}


function imprimirProducto(producto) {
    if (producto instanceof Vuelo) {
        return `<div class="producto">
                    <div class="nombre_producto">${producto.nombre}</div>
                    <span style="display: block;padding: 4px;"><strong>Precio:</strong> ${producto.precio}€</span>
                    <span style="display: block;padding: 4px;"><strong>Origen:</strong> ${producto.origen}</span>
                    <span style="display: block;padding: 4px;"><strong>Destino:</strong> ${producto.destino}</span>
                    <button disabled style="padding: 4px;">Comprar</button>
                    <input type="number" value="0" min="0" max="9" style="padding: 4px;">
                </div>`;
    }else {
        return `<div class="producto">
                    <div class="nombre_producto">${producto.nombre}</div>
                    <span style="display: block;padding: 4px;"><strong>Precio:</strong> ${producto.precio}€</span>
                    <span style="display: block;padding: 4px;"><strong>Ciudad:</strong> ${producto.ciudad}</span>
                    <button disabled style="padding: 4px;">Comprar</button>
                    <input type="number" value="0" min="0" max="9" style="padding: 4px;">
                </div>`;
    }
}



function cargarGestoresEventos() {
    
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
            var nombre_producto = this.parentElement.getElementsByTagName("div")[0].innerText;
            var spans = this.parentElement.getElementsByTagName("span");

            var precio = spans[0].innerHTML;
            var extra_dato = spans[1].innerHTML;
            var extra_dato2 = "";
            if (spans.length > 2) {
                extra_dato2 = spans[2].innerHTML;
            }

            var cantidad_input = this.parentElement.querySelector("input");
            var cantidad = cantidad_input.value;
            
            var no_carrito = document.getElementById("todoContenido");
            var carrito = document.getElementsByTagName("aside")[0];

            // Mostrar el carrito
            carrito.setAttribute("style", "visibility: visible;");
            no_carrito.setAttribute("style", "width: 85%;");

            // Añadir el producto al carrito
            if (document.getElementById(nombre_producto) == null){
                var producto = document.createElement("div");

                producto.setAttribute("id", nombre_producto);
                producto.setAttribute("class", "producto_carrito");

                producto.addEventListener("mouseover", function() {
                    producto.setAttribute("style", "background-color: rgb(81, 174, 255); color: white;");
                });
                producto.addEventListener("mouseout", function() {
                    producto.setAttribute("style", "background-color: none; color: black;");
                });

                var nombre_producto_div = document.createElement("div");
                
                nombre_producto_div.innerHTML = `<div class="nombre_producto_carrito">${cantidad}x${nombre_producto}</div>`;
                var precio_div = document.createElement("div"); 
                precio_div.innerHTML = precio;
                var extra_dato_div = document.createElement("div");
                extra_dato_div.innerHTML = extra_dato;

                producto.appendChild(nombre_producto_div);
                producto.appendChild(precio_div);
                producto.appendChild(extra_dato_div);

                if (extra_dato2 != "") {
                    var extra_dato2_div = document.createElement("div");
                    extra_dato2_div.innerHTML = extra_dato2;
                    producto.appendChild(extra_dato2_div);
                }

                carrito.appendChild(producto);
            }
            else {
                var producto = document.getElementById(nombre_producto);
                console.log(producto);
                var nombre_producto_div = producto.getElementsByTagName("div")[0];
                var cantidad_actual = nombre_producto_div.innerHTML.split("x")[0].replace(`<div class="nombre_producto_carrito">`, "");
                var total = parseInt(cantidad_actual) + parseInt(cantidad);
                if (total > 9) {
                    alert("No puedes comprar más de 9 productos iguales");
                }
                else {
                    nombre_producto_div.innerHTML = `<div class="nombre_producto_carrito">${total}x${nombre_producto}</div>`;       
                }    
            }

            // Eliminar valor del spinner y desahabilitar botón
            cantidad_input.value = 0;
            this.disabled = true;
            this.innerText = "Comprar";
        });
    });

    var carrito = document.getElementsByTagName("aside")[0];
    var no_carrito = document.getElementById("todoContenido");
    carrito.addEventListener("mouseenter", function() {
        carrito.setAttribute("style", "width: 20.2%; visibility: visible;");
        no_carrito.setAttribute("style", "width: 80%;");
    });

    carrito.addEventListener("mouseleave", function() {
        carrito.setAttribute("style", "width: 15.2%; visibility: visible;");
        no_carrito.setAttribute("style", "width: 85%;");
    });
}