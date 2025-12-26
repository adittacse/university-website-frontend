import api from "@/lib/axios";
import Swal from "sweetalert2";

export const getAdminNotices = async (params: {
    page: number;
    search?: string;
    isDeleted: boolean;
}) => {
    const res = await api.get("/notices", {
        params
    });

    return res.data;
};

export const getNoticeCounts = async () => {
    const res = await api.get("/notices/counts");
    return res.data;
};

export const softDeleteNotice = async (id: string) => {
    return api.delete(`/notices/${id}`);
};

// single restore
export const restoreNotice = async (id: string) => {
    return api.patch("/notices/restore", {
        ids: [id],
    });
};

// bulk restore
export const bulkRestoreNotice = async (ids: string[]) => {
    return api.patch("/notices/restore", { ids });
};

export const permanentDeleteNotices = async (ids: string[]) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Notice has been deleted.",
                icon: "success"
            });
            return api.delete(`/notices/permanent`, {
                data: { ids }
            });
        }
    });
};
