import { api } from "../api";

async function getAllAnime() {
    const { data } = await api.get("anime");
    return data;
}

export { getAllAnime };