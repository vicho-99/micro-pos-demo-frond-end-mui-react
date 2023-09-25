export const mappedCreateProduct = ({ form }) => {

    const data = {
        name: form.name,
        description: form.description,
        stock: form.stock,
        price: form.price,
        photoUrl: form.photoUrl,
        isActive: form.isActive
    }

    return data

}

export const mappedUpdateProduct = ({ form }) => {

    const data = {
        productId: form.productId,
        name: form.name,
        description: form.description,
        stock: form.stock,
        price: form.price,
        photoUrl: form.photoUrl,
        isActive: form.isActive
    }

    return data

}