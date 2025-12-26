"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import Swal from "sweetalert2";

type LoginForm = {
    email: string;
    password: string;
};

export default function LoginPage() {
    const { register, handleSubmit } = useForm<LoginForm>();
    const router = useRouter();

    const onSubmit = async (data: LoginForm) => {
        try {
            await api.post("/auth/login", data);

            Swal.fire("Success", "Logged in successfully", "success");
            router.push("/");
        } catch (error: any) {
            Swal.fire(
                "Error",
                error?.response?.data?.message || "Login failed",
                "error"
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="card bg-base-100 shadow p-6 w-96 space-y-4"
            >
                <h1 className="text-xl font-bold text-center">
                    Login
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    {...register("email", { required: true })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                    {...register("password", { required: true })}
                />

                <button className="btn btn-primary w-full">
                    Login
                </button>
            </form>
        </div>
    );
}
