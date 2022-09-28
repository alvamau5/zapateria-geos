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
