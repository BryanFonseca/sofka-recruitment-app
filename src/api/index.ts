const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const PRODUCTS_RESOURCE_URL = `${apiUrl}/products`;

export async function findOneProduct(id: string) {
    const result = await fetch(`${PRODUCTS_RESOURCE_URL}/${id}`);
    const productItems = (await result.json()) as RemoteProductItem;
    return productItems;
}

export async function findAllProducts() {
    const result = await fetch(PRODUCTS_RESOURCE_URL);
    const productItems = (await result.json()) as {
        data: RemoteProductItem[];
    };
    return productItems.data;
}

export async function createProduct(product: RemoteProductItem) {
    const response = await fetch(PRODUCTS_RESOURCE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        throw new Error(response.status + "");
    }

    const data = (await response.json()) as { data: RemoteProductItem };

    return data.data;
}

export async function editProduct(id: string, product: RemoteProductItem) {
    const response = await fetch(`${PRODUCTS_RESOURCE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        throw new Error(response.status + "");
    }

    const data = (await response.json()) as { data: RemoteProductItem };

    return data.data;
}

export async function deleteProduct(id: string) {
    const response = await fetch(`${PRODUCTS_RESOURCE_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(response.status + "");
    }

    return true;
}

export async function exists(id: string) {
    const result = await fetch(`${PRODUCTS_RESOURCE_URL}/${id}`);
    return result.status === 200;
}
