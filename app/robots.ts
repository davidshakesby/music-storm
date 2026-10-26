import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://music-storm-five.vercel.app";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${baseUrl}/sitemap.xml`
    };
}