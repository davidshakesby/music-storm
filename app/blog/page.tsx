/* eslint-disable react/jsx-key */
import { articles } from "@/app/data/articles";
import Card from "../components/ux/Card";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Link from "next/link";



export default function BlogPage() {
    return (
        <>
        <Header />
            <main className="container mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-5">Latest Articles</h1>
                <p>News, reviews, interview and playlists from the pop punk scene.</p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((blog) => (
                        <Link href={`/blog/${blog.slug}`} className="h-full flex flex-col">
                            <Card
                                key={blog.id}
                                title={blog.title}
                                description={blog.excerpt}
                                image={blog.image}
                                category={blog.category} />
                        </Link>
                    ))}
                </div>
            </main>
        <Footer />
        </>
    );
}