import { Producto } from './producto.js';

export class Vuelo extends Producto{
    constructor(nombre, precio, origen, destino){
        super(nombre, precio);
        this.origen = origen;
        this.destino = destino;
    }
    
    getOrigen(){
        return this.origen;
    }
    
    setOrigen(origen){
        this.origen = origen;
    }

    getDestino(){
        return this.destino;
    }

    setDestino(destino){
        this.destino = destino;
    }
    static getTipoProducto() {
        return "Vuelo";
    }
}