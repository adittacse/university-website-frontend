import { Notice } from "@/types/notice";

type Props = {
    notice: Notice;
};

export default function NoticePreview({ notice }: Props) {
    // const fileUrl = `https://university-website-backend.onrender.com/${notice?.file?.path}`;
    const fileUrl = `http://localhost:5002/${notice?.file?.path}`;
    const type = notice?.file?.mimetype;

    // PDF preview
    if (type === "application/pdf") {
        return (
            <iframe
                src={fileUrl}
                className="w-full h-[600px] border rounded"
            />
        );
    }

    // Image preview
    if (type?.startsWith("image/")) {
        return (
            <div className="border rounded bg-neutral-800 p-2 max-h-[500px] overflow-y-auto">
                <img
                    src={fileUrl}
                    alt="Notice preview"
                    className="w-10/12 mx-auto object-contain rounded"
                />
            </div>
        );
    }

    return (
        <p className="text-sm text-gray-500">
            Preview not available for this file type.
        </p>
    );
}
