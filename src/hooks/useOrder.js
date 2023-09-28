import { getOrders } from "@/services/order";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useLoading from "./useLoading";

export default function useOrder() {

    const [order, setOrder] = useState();

    const { showLoading, hideLoading } = useLoading();

    async function listOrder() {
        try {
            showLoading();
            const data = await getOrders({});
            setOrder(data);
            hideLoading();
        } catch (error) {
            hideLoading();
            toast.error("Error - modify listOrder - " + error.toString());
            return false;
        }
    }

    async function createOrder() {

    }

    useEffect(() => {
   
        listOrder();

    }, [])


    return {
        order,
        listOrder
    }

}