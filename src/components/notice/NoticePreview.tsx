interface Props {
    notice: any;
}

export default function NoticePreview({ notice }: Props) {
    // const fileUrl = `https://university-website-backend.onrender.com/${notice.file.path}`;
    const fileUrl = `http://localhost:5002/${notice.file.path}`;
    const type = notice.file.mimetype;

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
    if (type.startsWith("image/")) {
        return (
            <img
                src={fileUrl}
                alt="Notice preview"
                className="max-w-full border rounded"
            />
        );
    }

    return (
        <p className="text-sm text-gray-500">
            Preview not available for this file type.
        </p>
    );
}
