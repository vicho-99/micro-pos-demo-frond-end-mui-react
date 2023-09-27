import axios from "axios";

const URL = "http://localhost:8080/categorys/";

export async function getCategorys({ }) {
    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}
