"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import Swal from "sweetalert2";
import Link from "next/link";

type RegisterForm = {
    name: string;
    email: string;
    password: string;
};

export default function RegisterPage() {
    const {register, handleSubmit} = useForm<RegisterForm>();
    const router = useRouter();

    const onSubmit = async (data: RegisterForm) => {
        try {
            await api.post("/auth/register", data);

            await Swal.fire("Success", "Account created successfully", "success");
            router.push("/login");
        } catch (error: any) {
            await Swal.fire(
                "Error",
                error?.response?.data?.message || "Registration failed",
                "error"
            );
        }
    };

    return (
        <div className="flex items-center justify-center py-20 px-4">
            <div className="card bg-base-100 w-full max-w-sm shadow-xl border border-base-300">
                <div className="card-body">

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-center text-primary mb-1">
                        Register
                    </h3>
                    <p className="text-center text-sm text-gray-500 mb-4">
                        Create a new account to continue
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="flex flex-col gap-y-4">

                            <input
                                placeholder="Full name"
                                className="input input-bordered w-full focus:border-primary"
                                {...register("name", {required: true})}
                            />

                            <input
                                type="email"
                                placeholder="Email address"
                                className="input input-bordered w-full focus:border-primary"
                                {...register("email", {required: true})}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full focus:border-primary"
                                {...register("password", {required: true})}
                            />

                            <button className="btn btn-primary w-full mt-2">
                                Register
                            </button>

                        </fieldset>
                    </form>
                    {/* Login link */}
                    <p className="text-center text-sm mt-4">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-primary font-semibold hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}