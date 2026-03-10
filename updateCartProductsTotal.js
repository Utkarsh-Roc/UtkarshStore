import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductsTotal=()=>{
    let productSubTotal=document.querySelector(".productSubTotal");
    let productFinalTotal=document.querySelector(".productFinalTotal");


    let cartProducts = getCartProductFromLS();
    let initialValue=0;
    
    let totalProductPrice=cartProducts.reduce((accum,currElem)=>{
        let productPrice=parseInt(currElem.price) || 0;
        return accum+productPrice;
    },initialValue)

    productSubTotal.innerText=totalProductPrice;
    productFinalTotal.innerText=totalProductPrice+50;
}