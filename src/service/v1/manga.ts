import { api } from "../api";

async function getAllManga() {
    const { data } = await api.get("manga");
    return data;
}

async function createManga(data: any) {
    await api.post("manga", data);
}
export { getAllManga, createManga };
