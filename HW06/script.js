const data = JSON.parse(DataJS);
const template = document.querySelector("#productTemplate");
const container = document.createElement("div");
container.classList.add("items");
document.body.appendChild(container);

data.forEach((item) => {
  const clone = document.importNode(template.content, true);

  clone.querySelector(".product-img").src = item.imgUrl;
  clone.querySelector(".product-name").textContent = item.name;
  clone.querySelector(".product-price").textContent = item.price;
  clone.querySelector(".product-description").textContent = item.description;

  container.appendChild(clone);
});
