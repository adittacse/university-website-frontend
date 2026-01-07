"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";
<<<<<<< HEAD
import Image from "next/image";

// background image
import loginBg from "@/asset/Auth/login.jpg";
=======
>>>>>>> 4fba2396524211f47ea000b97c8da93261a1ffa1

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginForm>();
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
<<<<<<< HEAD
    <div className="relative min-h-[calc(100vh-302px)] flex items-center justify-center">

      {/* Background Image */}
      <Image
        src={loginBg}
        alt="Login background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

        {/* LEFT TEXT */}
        <div className="hidden md:flex flex-col justify-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Welcome Back 
          </h2>
          <p className="text-lg text-white/80 max-w-md">
            Access your university dashboard, notices, and academic
            resources securely from one place.
          </p>
        </div>

        {/* RIGHT GLASS FORM */}
        <div className="flex justify-center">
          <div
            className="
              w-full max-w-sm
              rounded-[28px]
              p-8
              bg-white/30 backdrop-blur-lg
              border border-white/60
              shadow-[0_20px_40px_rgba(0,0,0,0.25)]
              relative overflow-hidden
            "
          >
            {/* glass highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]" />

            {/* shine blob */}
            <div className="pointer-events-none absolute -top-14 -left-14 w-40 h-40 bg-white/40 rounded-full blur-3xl" />

            <div className="relative z-10">

              {/* Title */}
              <h3 className="text-3xl font-bold text-center text-white mb-1">
                Login
              </h3>
              <p className="text-center text-sm text-white/80 mb-6">
                Please login to your account
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="flex flex-col gap-y-4">

                  <input
                    type="email"
                    placeholder="Email address"
                    className="
                      input w-full
                      rounded-full
                      bg-white/70
                      border border-white/60
                      focus:outline-none focus:border-cyan-500
                    "
                    {...register("email", { required: true })}
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="
                      input w-full
                      rounded-full
                      bg-white/70
                      border border-white/60
                      focus:outline-none focus:border-cyan-500
                    "
                    {...register("password", { required: true })}
                  />

                  <button className="btn bg-cyan-500 hover:bg-cyan-600 rounded-full text-white w-full mt-2">
                    Login
                  </button>

                </fieldset>
              </form>

              {/* Register link */}
              <p className="text-center text-sm mt-5 text-white/90">
                Don’t have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-cyan-600 hover:underline"
                >
                  Register
                </Link>
              </p>

            </div>
          </div>
        </div>
=======
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
                {...register("email", { required: true })}
              />

              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full focus:border-primary"
                {...register("password", { required: true })}
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
>>>>>>> 4fba2396524211f47ea000b97c8da93261a1ffa1
      </div>
    </div>
  );
}
