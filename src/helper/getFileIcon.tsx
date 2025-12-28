import {
    FaFilePdf,
    FaFileImage,
    FaFileArchive,
    FaFileAlt,
} from "react-icons/fa";

export const getFileIcon = (file: {
    originalname: string;
    filename: string;
    url: string;
    mimetype: string;
    size: number
} | undefined) => {
    if (!file) {
        return <FaFileAlt className="text-gray-400" />;
    }

    const ext = file?.path?.split(".")?.pop()?.toLowerCase();

    if (ext === "pdf") {
        return <FaFilePdf className="text-red-600 text-3xl" />;
    }

    if (["jpg", "jpeg", "png", "webp"].includes(ext as string)) {
        return <FaFileImage className="text-green-600 text-3xl" />;
    }

    if (["zip", "rar"].includes(ext as string)) {
        return <FaFileArchive className="text-indigo-600 text-3xl" />;
    }

    return <FaFileAlt className="text-gray-500 text-3xl" />;
};
