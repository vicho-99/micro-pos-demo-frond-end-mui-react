import { ProductContext } from '@/context/product'
import { deleteProduct, getProducts } from '@/services/product';
import { toast } from 'sonner'
import useLoading from '@/hooks/useLoading';

export function useProduct() {

    const {
        product,
        setProduct,
        selectedProducts,
        setSelectedProducts,
    } = ProductContext()

    const { hideLoading, showLoading } = useLoading();

    async function reListProducts() {

        try {
            showLoading();
            const data = await getProducts();
            setProduct(data);
            hideLoading();
        } catch (error) {
            hideLoading();
            console.log({ error })
            alert('Error getProducts')
        }
    }

    async function removeProducts() {

        if (!selectedProducts.length) {
            toast.error("You have not selected any item!")
            return false;
        }

        showLoading();

        for await (const productId of selectedProducts) {
            try {
                await deleteProduct({ id: productId });
            } catch (error) {
                toast.error("Error remove product - ID: " + productId);
            }
        }

        await reListProducts();
        hideLoading();
        toast.success("process completed successfully!")





    }

    let hasSelected = selectedProducts.length;

    return {
        product,
        reListProducts,
        selectedProducts,
        setSelectedProducts,
        removeProducts,
        hasSelected
    }
}


