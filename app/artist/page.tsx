/* eslint-disable react/jsx-key */
import { featuredBands } from "@/app/data/FeaturedBands";
import ArtistCard from "../components/ux/ArtistCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Link from "next/link";



export default function ArtistPage() {
    return (
        <>
        <Header />
            <main className="container mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-5">Top Artists</h1>
                <p className="mb-5">Here are our selected artist that you need to check</p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuredBands.map((band) => (
                        <Link href={`/artist/${band.slug}`} className="h-full flex flex-col">
                            <ArtistCard
                                key={band.id}
                                title={band.name}
                                description={band.description}
                                image={band.image}
                                category={band.category}
                                slug={band.slug} />
                        </Link>
                    ))}
                </div>
            </main>
        <Footer />
        </>
    );
}