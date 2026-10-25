import type { Metadata } from "next";
import { featuredBands } from "@/app/data/FeaturedBands";
import { notFound } from "next/navigation";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import Image from "next/image";export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;

  const band = featuredBands.find(
    (band) => band.slug === slug
  );

  if (!band) {
    return {
      title: "Band Not found | Music Storm"
    };
  }

  return {
    title: `${band.name} | Music Storm`,
    description: band.description,
  }
}




export default async function Blog(
  props: PageProps<"/blog/[slug]">
) {
  const { slug } = await props.params;

  const band = featuredBands.find(
    (band) => band.slug === slug
  );

  if (!band) {
    notFound();
  }

  return (
    <>
    <Header />
    <main className="w-full max-w-5xl mx-auto px-6 py-12">
    <Image className="mb-8 w-full h-100 object-cover" src={`/images/${band.banner}`} height={400} width={600} alt="Artist Image"  />      
    <h1 className="text-4xl font-bold mb-8">{band.name}</h1>
    <div className="mb-5">
      <p>Genre: {band.category}</p>
      <p>Formed: {band.formed}</p>
      <p>Location: {band.location} </p>
    </div>

    {band.text.map((paragraph, index) => (
    <p key={index} className="mb-6">
      {paragraph}
    </p>
  ))}

    </main>
    <Footer />
    </>
  );
}