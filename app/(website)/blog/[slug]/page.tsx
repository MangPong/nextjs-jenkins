"use client";
import { useEffect, useState } from "react";
export default function BlogPost() {
    const [slug, setSlug] = useState<string>("");
    useEffect(() => {
        if (typeof window !== "undefined") {
            const currentSlug = window.location.pathname.split("/").pop();
            setSlug(currentSlug || "");
        }
    }, []);

    const formatSlug = (slug: string): string => {
        if (!slug) return '';
        return slug.replace(/-/g, ' ');
    };

    return (
        <div>
            <h1>{formatSlug(slug)}</h1>
        </div>
    );
}
