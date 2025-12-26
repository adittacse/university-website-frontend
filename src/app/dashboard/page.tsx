import Navbar from "@/components/Navbar";
import Protected from "@/components/Protected";

export default function DashboardPage() {
    return (
        <Protected>
            <Navbar />
            <div className="p-6">
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <p>You are logged in.</p>
            </div>
        </Protected>
    );
}
