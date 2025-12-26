"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";

const getNoticeDetails = async (id: string) => {
    const res = await api.get(`/notices/${id}`);
    return res.data;
};

export const useNoticeDetails = (id: string) => {
    return useQuery({
        queryKey: ["notice", id],
        queryFn: () => getNoticeDetails(id),
        enabled: !!id, // id না থাকলে request যাবে না
    });
};
