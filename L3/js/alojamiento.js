import { Producto } from './producto.js';


export class Alojamiento extends Producto{
    constructor(nombre, precio, ciudad){
        super(nombre, precio);
        this.ciudad = ciudad;
    }
    
    getCiudad(){
        return this.ciudad;
    }   

    setCiudad(ciudad){
        this.ciudad = ciudad;
    }

    static getTipoProducto() {
        return "Alojamiento";
    }
    
}