import api from "@/lib/axios";
import { Role } from "@/types/role";

export const getRoles = async (params?: { search?: string }) => {
    const res = await api.get<Role[]>("/roles", { params });
    return res.data;
};

export const createRole = async (data: { name: string }) => {
    return api.post("/roles", data);
};

export const updateRole = async (
    id: string,
    data: { name: string }
) => {
    return api.patch(`/roles/${id}`, data);
};

export const deleteRole = async (id: string) => {
    return api.delete(`/roles/${id}`);
};
