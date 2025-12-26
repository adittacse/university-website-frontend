import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="p-6">
                <h1 className="text-2xl font-bold">Welcome</h1>
                <p>This is the home page.</p>
            </div>
        </>
    );
}
