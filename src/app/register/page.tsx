"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import Swal from "sweetalert2";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type RegisterForm = {
    name: string;
    email: string;
    password: string;
};

export default function RegisterPage() {
    const { register, handleSubmit } = useForm<RegisterForm>();
    const router = useRouter();

    const onSubmit = async (data: RegisterForm) => {
        try {
            await api.post("/auth/register", data);

            await Swal.fire("Success", "Account created", "success");
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
        <div>
            <Navbar />

            <div className="flex my-5 justify-center items-center">
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl shrink-0">
                    <div className="card-body">
                        <h3 className="text-3xl font-bold text-center mb-1">Register Here!</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="fieldset flex flex-col gap-y-5">
                                <input
                                    placeholder="Name"
                                    className="input input-bordered w-full"
                                    {...register("name", { required: true })}
                                />

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
                                    Register
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
