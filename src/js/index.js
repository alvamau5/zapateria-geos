/**
 * Cargado de estilos .css
 */
require("/src/public/styles.css");

/**
 * Cargado de Imagenes
 */
require("/src/img/image-1.jpeg");
require("/src/img/image-2.jpeg");
require("/src/img/image-3.jpeg");
require("/src/img/image-4.jpeg");
require("/src/img/image-5.jpeg");
require("/src/img/image-6.jpeg");
require("/src/img/image-7.jpeg");
require("/src/img/image-8.jpeg");
require("/src/img/image-9.jpeg");
require("/src/img/image-10.jpeg");
require("/src/img/image-11.jpeg");
require("/src/img/image-12.jpeg");
require("/src/img/boot.ico");

/**
 * Codigo de Interfaz
 */
import { product } from "./Product.js";
import { displayProductBtns } from "./Buttons.js";
import { displayProductItems } from "./UI.js";

/**
 * Eventos de Agregado de elementos
 */

window.addEventListener("DOMContentLoaded", function () {
  displayProductItems(product);
  displayProductBtns(product);
});
