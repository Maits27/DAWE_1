import { Visita } from './visita.js';
import { Vuelo } from './vuelo.js'; 
import { Alojamiento } from './alojamiento.js';

export const tiposProductos = [
    Visita.getTipoProducto(), 
    Vuelo.getTipoProducto(), 
    Alojamiento.getTipoProducto()
];

export const productosPorClase = [
  [
    new Visita('Visita a la Casa de Ana Frank', 10, 'Amsterdam'), 
    new Visita('Visita al Museo Van Gogh', 15, 'Amsterdam'), 
    new Visita('Visita al Museo del Prado', 20, 'Madrid')
  ],
  [
    new Vuelo('Vuelo a Amsterdam', 200, 'Madrid', 'Amsterdam'), 
    new Vuelo('Vuelo a Madrid', 150, 'Amsterdam', 'Madrid'), 
    new Vuelo('Vuelo a Paris', 100, 'Madrid', 'Paris'),
    new Vuelo('Vuelo a Londres', 250, 'Madrid', 'Londres'),
    new Vuelo('Vuelo a Roma', 180, 'Madrid', 'Roma'),
    new Vuelo('Vuelo a Berlin', 20, 'Amsterdam', 'Berlin'),
    new Vuelo('Vuelo a Lisboa', 90, 'Amsterdam', 'Lisboa'),
    new Vuelo('Vuelo a Praga', 130, 'Amsterdam', 'Praga'),
    new Vuelo('Vuelo a Berlin', 220, 'Madrid', 'Berlin'),
    new Vuelo('Vuelo a Lisboa', 90, 'Madrid', 'Lisboa'),
    new Vuelo('Vuelo a Praga', 130, 'Madrid', 'Praga'), 
    new Vuelo('Vuelo a Viena', 170, 'Madrid', 'Viena'),
    new Vuelo('Vuelo a Budapest', 160, 'Madrid', 'Budapest'),
    new Vuelo('Vuelo a Bruselas', 140, 'Madrid', 'Bruselas'),
    new Vuelo('Vuelo a Estocolmo', 230, 'Madrid', 'Estocolmo'),
    new Vuelo('Vuelo a Atenas', 240, 'Madrid', 'Atenas'),
    new Vuelo('Vuelo a Copenhague', 210, 'Madrid', 'Copenhague'),
    new Vuelo('Vuelo a Oslo', 200, 'Madrid', 'Oslo')
  ],
  [
    new Alojamiento('Hotel en Amsterdam', 80, 'Amsterdam'), 
    new Alojamiento('Hotel en Madrid', 190, 'Madrid'), 
    new Alojamiento('Hotel en Paris', 200, 'Paris')
  ]
];
