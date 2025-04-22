import { films } from '../data/data.js';
import { createCards } from './methods.js';
import { setupSearch } from "./methods.js";

// Seleccionar el contenedor donde se mostrarán las tarjetas
const containerfilms = document.getElementById('movies-container');

// Llamar a la función para crear y mostrar las tarjetas
createCards(films, containerfilms);

document.addEventListener("DOMContentLoaded", () => {
    setupSearch();
});

