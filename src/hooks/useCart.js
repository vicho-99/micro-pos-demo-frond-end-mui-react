import { CartContext } from "@/context/cart";
import { toast } from "sonner";
import { useProduct } from "./useProduct";


export default function useCart() {

    const {
        cart,
        setCart
    } = CartContext()

    const {
        product
    } = useProduct();

    const totalItem = cart.length;

    function addProductToCart({
        newProduct
    }) {

        const productIndex = cart.findIndex((item) => item.productId === newProduct.productId);

        if (productIndex !== -1) {

            const updatedCart = [...cart];
            updatedCart[productIndex].qty += 1;
            setCart(updatedCart);
        } else {

            newProduct.qty = 1;
            setCart([...cart, newProduct]);
        }

    }

    function removeProductFromCart({
        productId
    }) {

        setCart(cart.filter(product => parseInt(product.productId) !== parseInt(productId)));

    }

    function updateCartItemQuantity({
        productId,
        newQuantity
    }) {

        const productIndex = cart.findIndex((item) => item.productId === productId);

        if (productIndex !== -1) {

            const productStock = cart[productIndex].stock;

            if (newQuantity >= 1 && newQuantity <= productStock) {
                const updatedCart = [...cart];
                updatedCart[productIndex].qty = parseFloat(newQuantity);
                setCart(updatedCart);
            }

        }

    }

    function searchLectureCode({
        value
    }) {

        const productSearch = product.find(e => e.lectureCode === value);

        if (!productSearch) {
            toast.error("product not found ")

            return false;
        }

        addProductToCart({ newProduct: productSearch })

        return true;

    }

    function calculateCartTotals() {


        let finalTotal = 0;

        if (cart) {

            cart.forEach((item) => {

                finalTotal += item.qty * item.price;
            });

        }


        return { finalTotal };
    }


    return {
        cart,
        addProductToCart,
        removeProductFromCart,
        totalItem,
        updateCartItemQuantity,
        calculateCartTotals,
        searchLectureCode
    }

}