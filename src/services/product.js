import axios from "axios";

export async function getProducts() {
    try {
        const { data } = await axios.get("http://localhost:8080/products/");
        return data;
    } catch (error) {
        throw new Error(error);
    }
}


export function getProduct() {

}


export function createProduct() {

}

export function updateProduct() {

}

export async function deleteProduct({
    id
}) {
    try {
        const { data } = await axios.delete("http://localhost:8080/products/" + id);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

