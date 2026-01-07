"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";

type LoginForm = {
    email: string;
    password: string;
};

export default function LoginPage() {
    const {register, handleSubmit} = useForm<LoginForm>();
    const router = useRouter();

    const onSubmit = async (data: LoginForm) => {
        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        if (!res || res.error) {
            await Swal.fire("Error", res?.error || "Login failed", "error");
            return;
        }

        await Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in successfully",
            showConfirmButton: false,
            timer: 1500,
        });

        router.push("/");
    };

    return (
        <div className="py-22 flex items-center justify-center px-4 ">
            <div className="card bg-base-100 w-full max-w-sm shadow-xl border border-base-300">
                <div className="card-body">

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-center text-primary mb-1">
                        Login
                    </h3>
                    <p className="text-center text-sm text-gray-500 mb-4">
                        Welcome back! Please login to your account
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="flex flex-col gap-y-4">

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
                                Login
                            </button>

                        </fieldset>
                    </form>
                    {/* Register link */}
                    <p className="text-center text-sm mt-4">
                        Don’t have an account?{" "}
                        <Link href="/register" className="text-primary font-semibold hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}