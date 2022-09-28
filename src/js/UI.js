const sectionCenter = document.querySelector(".section-center");

function displayProductItems(productItems) {
  let displayProduct = productItems.map((item) => {
    return `<article class="product-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
              ${item.desc}
              </p>
          </div>
      </article>`;
  });
  displayProduct = displayProduct.join("");
  sectionCenter.innerHTML = displayProduct;
}

export { displayProductItems };
