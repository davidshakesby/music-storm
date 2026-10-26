import type { MetadataRoute } from "next";
import { articles } from "./data/articles";
import { featuredBands } from "./data/FeaturedBands";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://music-storm-five.vercel.app";

    const articleUrls = articles.map((article) => ({
        url: `${baseUrl}/blog/${article.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const bandUrls = featuredBands.map((band) => ({
        url: `${baseUrl}/artist/${band.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/artist`,
            changeFrequency: "weekly",
            priority: 0.8,        
        },
        ...articleUrls,
        ...bandUrls,
    ]
   
}