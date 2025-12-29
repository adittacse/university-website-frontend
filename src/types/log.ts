export type Log = {
    _id: string;
    admin: {
        _id: string;
        name: string;
        email: string;
    }
    action: string;
    targetedId?: string;
    targetType: string;
    createdAt: string;
    updatedAt?: string;
    __v?: number;
}