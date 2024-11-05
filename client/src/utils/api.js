const BASE_URL = "http://localhost:3000/pembaca"

export async function getAllPembaca() {
    const response = await fetch(BASE_URL)
    return response.json()
}

export async function createPembaca(data) {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return response.json()
}

export async function updatePembaca(id, data) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return response.json()
}

export async function deletePembaca(id) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    });
    return response.json()
}
