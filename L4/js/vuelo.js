import { Producto } from './producto.js';

export class Vuelo extends Producto{
    constructor(nombre, precio, origen, destino){
        super(nombre, precio);
        this._origen = origen;
        this._destino = destino;
    }

    get origen(){
        return this._origen;
    }


    set origen(nuevo_origen){
        this._origen = nuevo_origen;
    }

    get destino(){
        return this._destino;
    }

    set destino(nuevo_destino){
        this._destino = nuevo_destino;
    }
    static get tipoProducto() {
        return "Vuelo";
    }
}