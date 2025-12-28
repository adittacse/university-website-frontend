import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="bg-base-200 py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    XYZ University
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Official notice board for academic, administrative & general announcements
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/notices" className="btn btn-primary">
                        View All Notices
                    </Link>
                    <a href="/login" className="btn btn-outline">
                        Login
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;