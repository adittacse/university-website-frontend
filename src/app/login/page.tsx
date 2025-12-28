"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import Swal from "sweetalert2";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LoginForm = {
    email: string;
    password: string;
};

export default function LoginPage() {
    const { register, handleSubmit } = useForm<LoginForm>();
    const router = useRouter();

    const onSubmit = async (data: LoginForm) => {
        try {
            const res = await api.post("/auth/login", data);

            localStorage.setItem("token", res.data.token);

            await Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Logged in successfully",
                showConfirmButton: false,
                timer: 1500
            })
                .then(() => {
                    router.push("/");
                })
        } catch (error: any) {
            await Swal.fire(
                "Error",
                error?.response?.data?.message || "Login failed",
                "error"
            );
        }
    };

    return (
        <div>
            <Navbar />

            <div className="flex my-5 justify-center items-center">
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl shrink-0">
                    <div className="card-body">
                        <h3 className="text-3xl font-bold text-center mb-1">Login Here!</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="fieldset flex flex-col gap-y-5">
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
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
