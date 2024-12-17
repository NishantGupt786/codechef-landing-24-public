"use client";
import { ClipLoader } from "react-spinners";

interface SpinnerProps {
    color?: string;
    size?: number;
    loading?: boolean;
}

export default function Spinner({
    color = "white",
    size = 50,
    loading = true,
}: SpinnerProps) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <ClipLoader color={color} size={size} loading={loading} />
        </div>
    );
}
