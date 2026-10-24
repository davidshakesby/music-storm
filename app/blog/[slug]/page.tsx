import { articles } from "@/app/data/articles";
import { notFound } from "next/navigation";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import Image from "next/image";


export default async function Blog(
  props: PageProps<"/blog/[slug]">
) {
  const { slug } = await props.params;

  const article = articles.find(
    (article) => article.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <>
    <Header />
    <main className="w-full max-w-5xl mx-auto px-6 py-12">
    <Image className="mb-4 w-full h-70 object-cover" src={`/images/${article.image}`} height={400} width={600} alt="Artist Image"  />      
    <h1 className="text-4xl font-bold mb-2">{article.title}</h1>

      <p className="mb-4 text-gray-500">
        {article.category} • {article.publishedAt} • Writen by: {article.author}
      </p>

  {article.content.map((paragraph, index) => {
  if (paragraph.startsWith("## ")) {
    return (
      <h2
        key={index}
        className="text-2xl font-bold mt-6 mb-4"
      >
        {paragraph.replace("## ", "")}
      </h2>
    );
  }

  return (
    <p key={index} className="mb-4 leading-7">
      {paragraph}
    </p>
  );
})}
    
    </main>
    <Footer />
    </>
  );
}