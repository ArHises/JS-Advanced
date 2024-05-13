const data = JSON.parse(DataJS);
const template = document.querySelector("#productTemplate");
const container = document.createElement("div");
container.classList.add("items");
container.classList.add("center");
document.body.insertBefore(container, document.body.firstChild);

data.forEach((item) => {
  const clone = document.importNode(template.content, true);

  clone.querySelector(".product-img").src = item.imgUrl;
  clone.querySelector(".product-name").textContent = item.name;
  clone.querySelector(".product-price").textContent = item.price;
  clone.querySelector(".product-description").textContent = item.description;

  container.appendChild(clone);
});

const cart = document.querySelector('.product-cart');
const products = document.querySelectorAll('.items .product');
let cartList = document.querySelectorAll('.product-cart .product');

console.log(products);

products.forEach(product => {
  product.addEventListener('click', () => {
    const productClone = product.cloneNode(true);
    productClone.addEventListener('click', () => {
      productClone.remove();
    });
    cart.appendChild(productClone);
    cartList = document.querySelectorAll('.product-cart .product');

    document.querySelectorAll('.product-cart .overlay-text').forEach(item => {
      item.textContent = 'X - Remove';
    });

  });
});





