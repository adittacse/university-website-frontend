import api from "@/lib/axios";

export const getAdminDashboard = async () => {
    const res = await api.get("/admin/dashboard");
    return res.data;
};
