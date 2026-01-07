"use client";

import Image from "next/image";
import { useNotices } from "@/hooks/useNotices";

<<<<<<< HEAD
// asset image import
import campusImg from "@/asset/ariel-schmunck-T03Sf0jQ9EI-unsplash.jpg";

const StatsSection = () => {
  const { data } = useNotices(1);

  return (
    <section className="py-16 ">
      <div className=" px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[320px] md:h-[420px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={campusImg}
            alt="University campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-cyan-900/20"></div>
        </div>

        {/* RIGHT STATS */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800">
            University Overview
          </h3>

          <div className="grid grid-cols-2 gap-6">

            {/* Card */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-400">
              <p className="text-slate-500">Departments</p>
              <h4 className="text-3xl font-bold text-cyan-600">12</h4>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-400">
              <p className="text-slate-500">Students</p>
              <h4 className="text-3xl font-bold text-cyan-600">6K+</h4>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-400">
              <p className="text-slate-500">Teachers</p>
              <h4 className="text-3xl font-bold text-cyan-600">350+</h4>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-400">
              <p className="text-slate-500">Notices</p>
              <h4 className="text-3xl font-bold text-cyan-600">
                {data?.pagination?.total || 0}
              </h4>
            </div>

          </div>
=======

const StatsSection = () => {
  const { data} = useNotices(1);

 

  return (
    <section className="bg-base-200 py-14">
      {/* Section title */}
      <h3 className="text-4xl font-bold text-center  mb-12">
        Overview
      </h3>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {/* Card */}
          <div className="stat bg-base-100 shadow-md rounded-lg border-t-4 border-primary">
            <div className="stat-title text-gray-500">Departments</div>
            <div className="stat-value text-primary">12</div>
          </div>

          <div className="stat bg-base-100 shadow-md rounded-lg border-t-4 border-primary">
            <div className="stat-title text-gray-500">Students</div>
            <div className="stat-value text-primary">6K+</div>
          </div>

          <div className="stat bg-base-100 shadow-md rounded-lg border-t-4 border-primary">
            <div className="stat-title text-gray-500">Teachers</div>
            <div className="stat-value text-primary">350+</div>
          </div>

          <div className="stat bg-base-100 shadow-md rounded-lg border-t-4 border-primary">
            <div className="stat-title text-gray-500">Notices</div>
            <div className="stat-value text-primary">
              {data?.pagination?.total || 0}
            </div>
          </div>

>>>>>>> 4fba2396524211f47ea000b97c8da93261a1ffa1
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
