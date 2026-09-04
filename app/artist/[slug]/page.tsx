import { featuredBands } from "@/app/data/FeaturedBands";
import { notFound } from "next/navigation";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import Image from "next/image";


export default async function Blog(
  props: PageProps<"/blog/[slug]">
) {
  const { slug } = await props.params;

  const article = featuredBands.find(
    (article) => article.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <>
    <Header />
    <main className="container mx-auto py-12">
    <Image className="mb-8 w-full h-100 object-cover" src={`/images/${article.banner}`} height={400} width={600} alt="Artist Image"  />      
    <h1 className="text-4xl font-bold mb-8">{article.name}</h1>

    {article.text.map((paragraph, index) => (
    <p key={index} className="mb-6">
      {paragraph}
    </p>
  ))}

  {/* <p>
    {article.description}
  </p> */}
    
    </main>
    <Footer />
    </>
  );
}