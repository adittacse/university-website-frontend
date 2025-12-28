"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import LatestNotice from "@/components/home/LatestNotice";
import StatsSection from "@/components/home/StatsSection";
import DepartmentsSection from "@/components/home/DepartmentsSection";

export default function Home() {
    return (
        <div >
            <Navbar />

            <HeroSection />
            <LatestNotice />
            <StatsSection />
            <DepartmentsSection />

            <Footer />
        </div>
    );
}
