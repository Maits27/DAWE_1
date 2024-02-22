export class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    
    getNombre(){
        return this.nombre;
    }

    getPrecio(){
        return this.precio;
    }   
    
    setNombre(nombre){
        this.nombre = nombre;
    }
    
    setPrecio(precio){
        this.precio = precio;
    }

    
}