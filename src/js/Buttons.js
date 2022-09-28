import { displayProductItems } from "./UI.js";

const container = document.querySelector(".btn-container");

function displayProductBtns(product) {
  //Iteracion de botones de filtrado
  const categories = product.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["todos"]
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" 
        data-id=${category}> 
        ${category}
        </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  /**
   * Filtrado de elementos
   */

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const productCategory = product.filter(function (productItem) {
        if (productItem.category === category) {
          return productItem;
        }
      });
      if (category === "todos") {
        displayProductItems(product);
      } else {
        displayProductItems(productCategory);
      }
    });
  });
}

export { displayProductBtns };
