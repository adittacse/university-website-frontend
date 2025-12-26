export type Notice = {
    _id: string;
    title: string;
    description?: string;
    createdAt: string;
    viewCount: number;
    downloadCount: number;
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
