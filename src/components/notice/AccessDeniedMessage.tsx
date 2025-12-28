export default function AccessDeniedMessage({ status }: { status?: number }) {
    if (status === 401) {
        return (
            <div className="bg-warning/10 border border-warning p-5 rounded">
                <h2 className="font-semibold text-lg mb-2">
                    Login Required
                </h2>
                <p className="text-sm text-gray-700">
                    To see this notice, login first
                </p>
            </div>
        );
    }

    if (status === 403) {
        return (
            <div className="bg-error/10 border border-error p-5 rounded">
                <h2 className="font-semibold text-lg mb-2">
                    Access Restricted
                </h2>
                <p className="text-sm text-gray-700">
                    এই নোটিশটি শুধুমাত্র নির্দিষ্ট Role-এর ব্যবহারকারীদের
                    জন্য প্রকাশ করা হয়েছে।
                </p>
                <p className="text-sm text-gray-700 mt-1">
                    This notice is not for you!
                </p>
            </div>
        );
    }

    return (
        <div className="bg-base-200 p-5 rounded">
            <h2 className="font-semibold text-lg mb-2">
                Notice Not Available
            </h2>
            <p className="text-sm text-gray-700">
                এই নোটিশটি পাওয়া যাচ্ছে না অথবা এটি সরিয়ে ফেলা হয়েছে।
            </p>
        </div>
    );
}
