import api from "@/lib/axios";

export const getNotices = async (
    page = 1,
    limit = 10
) => {
    const res = await api.get("/notices", {
        params: { page, limit },
    });

    return res.data;
};
