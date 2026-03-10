import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartProductsTotal } from "./updateCartProductsTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
  let cartProducts = getCartProductFromLS();

  cartProducts = cartProducts.filter((currProd) => currProd.id != id);
  localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));

  updateCartValue(cartProducts);

  let removeProd=document.querySelector(`#card${id}`);
  removeProd.remove();

  updateCartProductsTotal();

  showToast("delete",id);
};
