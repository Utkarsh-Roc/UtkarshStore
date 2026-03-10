import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currElem = document.querySelector(`#card${id}`);
  let quantity = currElem.querySelector(".productQuantity").innerText;
  let price = currElem.querySelector(".productPrice").innerText;

  let existingProduct = arrLocalStorageProduct.find(
    (currProd) => currProd.id === id,
  );

  price = price.replace("₹", "");

  if (existingProduct && quantity > 1) {
    quantity = existingProduct.quantity + Number(quantity);
    price = price * quantity;

    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((currProd) => {
      return currProd.id === id ? updatedCart : currProd;
    });

    localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));

    showToast("add",id);
  }

  if (existingProduct) {
    return false;
  }

  price = price * quantity;
  // console.log(quantity,price);

  quantity = Number(quantity);

  let updateCart = { id, quantity, price };
  arrLocalStorageProduct.push(updateCart);
  localStorage.setItem(
    "cartProductsLS",
    JSON.stringify(arrLocalStorageProduct),
  );

  //update cart button value
  updateCartValue(arrLocalStorageProduct);

  showToast("add",id);
};
