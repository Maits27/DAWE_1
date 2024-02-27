export class Producto{
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
    }
    
    get nombre(){
        return this._nombre;
    }

    get precio(){
        return this._precio;
    }   
    
    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }
    
    set precio(nuevo_precio){
        this._precio = nuevo_precio;
    }

    
}