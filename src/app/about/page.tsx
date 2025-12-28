"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHeader from "@/components/about/AboutHeader";
import AboutOverview from "@/components/about/AboutOverview";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";

const AboutPage = () => {
    return (
        <>
            <Navbar />

            <AboutHeader />
            <AboutOverview />
            <MissionVision />
            <CoreValues />
            <WhyChooseUs />

            <Footer />
        </>
    );
};

export default AboutPage;