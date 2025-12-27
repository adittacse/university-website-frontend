export type Notice = {
    _id: string;
    title: string;
    description?: string;
    categories: {
        _id: string;
        name: string;
    }[];
    allowedRoles: {
        _id: string;
        name: string;
    }[];
    file?: {
        filename: string;
        path: string;
        mimetype: string;
        size: number;
    };
    viewCount: number;
    downloadCount: number;
    isDeleted: boolean;

    createdBy?: {
        _id: string;
        name: string;
    };

    createdAt: string;
    updatedAt: string;
};


export interface NoticesResponse {
    data: Notice[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}
