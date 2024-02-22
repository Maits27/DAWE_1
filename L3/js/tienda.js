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
    new Vuelo('Vuelo Madrid-Amsterdam', 200, 'Madrid', 'Amsterdam'), 
    new Vuelo('Vuelo Amsterdam-Madrid', 150, 'Amsterdam', 'Madrid'), 
    new Vuelo('Vuelo Madrid-Paris', 100, 'Madrid', 'Paris'),
    new Vuelo('Vuelo Madrid-Londres', 250, 'Madrid', 'Londres'),
    new Vuelo('Vuelo Madrid-Roma', 180, 'Madrid', 'Roma'),
    new Vuelo('Vuelo Amsterdam-Berlin', 20, 'Amsterdam', 'Berlin'),
    new Vuelo('Vuelo Amsterdam-Lisboa', 90, 'Amsterdam', 'Lisboa'),
    new Vuelo('Vuelo Amsterdam-Praga', 130, 'Amsterdam', 'Praga'),
    new Vuelo('Vuelo Madrid-Berlin', 220, 'Madrid', 'Berlin'),
    new Vuelo('Vuelo Madrid-Lisboa', 90, 'Madrid', 'Lisboa'),
    new Vuelo('Vuelo Madrid-Praga', 130, 'Madrid', 'Praga'), 
    new Vuelo('Vuelo Madrid-Viena', 170, 'Madrid', 'Viena'),
    new Vuelo('Vuelo Madrid-Budapest', 160, 'Madrid', 'Budapest'),
    new Vuelo('Vuelo Madrid-Bruselas', 140, 'Madrid', 'Bruselas'),
    new Vuelo('Vuelo Madrid-Estocolmo', 230, 'Madrid', 'Estocolmo'),
    new Vuelo('Vuelo Madrid-Atenas', 240, 'Madrid', 'Atenas'),
    new Vuelo('Vuelo Madrid-Copenhague', 210, 'Madrid', 'Copenhague'),
    new Vuelo('Vuelo Madrid-Oslo', 200, 'Madrid', 'Oslo')
  ],
  [
    new Alojamiento('Hotel Via en Amsterdam', 80, 'Amsterdam'), 
    new Alojamiento('Hotel Seraton en Madrid', 190, 'Madrid'), 
    new Alojamiento('Hotel Chateau en Paris', 200, 'Paris')
  ]
];
