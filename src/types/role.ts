export type Role = {
    _id: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
};

export type UserRole =
    | "admin"
    | "teacher"
    | "student"
<<<<<<< HEAD
    | "staff";
=======
    | "staff"
    | "moderator"
    | "super_admin";
>>>>>>> ea3e87c (Fix notices module and resolve conflicts)
