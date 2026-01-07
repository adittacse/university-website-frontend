import api from "@/lib/axios";

export const getCategories = async () => {
    const res = await api.get("/categories");
    return res.data;
};

export const createCategory = async (data: {
    name: string;
    parent?: string | null;
}) => {
    try {
        return api.post("/categories", data);
    } catch (error) {
        console.log(error);
    }
};

export const updateCategory = async (
    id: string,
    data: {
        name: string;
        parent?: string | null
    }
) => {
    // return api.patch(`/categories/${id}`, data);
    const res = await api.patch(`/categories/${id}`, data);
    return res.data;
};

export const deleteCategory = async (id: string) => {
    return api.delete(`/categories/${id}`);
};
