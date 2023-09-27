import { getCategorys } from "@/services/category";
import { useEffect, useState } from "react";


export default function useCategory() {

    const [category, setCategory] = useState([]);


    async function listCategorys() {

        try {
            const response = await getCategorys({});
            setCategory(response)
        } catch (error) {
            console.log({ error })
            alert('Error listCategorys')
        }

    }

    useEffect(() => {

        (async () => await listCategorys())();

    }, [])


    return {
        category,
    }

}