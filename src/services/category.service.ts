import api from "@/lib/axios";

export const getCategories = async () => {
  const res = await api.get("/categories");
  return res.data;
};

export const createCategory = async (data: {
  name: string;
  parent?: string | null;
}) => {
  const res = await api.post("/categories", data);
  return res.data;
};

export const updateCategory = async (
  id: string,
  data: {
    name: string;
    parent?: string | null;
  }
) => {
  const res = await api.patch(`/categories/${id}`, data);
  return res.data;
};

export const deleteCategory = async (id: string) => {
  return api.delete(`/categories/${id}`);
};
