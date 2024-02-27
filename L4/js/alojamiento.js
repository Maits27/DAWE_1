import { Producto } from './producto.js';


export class Alojamiento extends Producto{
    constructor(nombre, precio, ciudad){
        super(nombre, precio);
        this._ciudad = ciudad;
    }
    
    get ciudad(){
        return this._ciudad;
    }   

    set ciudad(nueva_ciudad){
        this._ciudad = nueva_ciudad;
    }

    static get tipoProducto() {
        return "Alojamiento";
    }
    
}