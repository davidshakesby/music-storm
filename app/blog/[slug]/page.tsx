import { articles } from "@/app/data/articles";
import { notFound } from "next/navigation";

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
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold">{article.title}</h1>

      <p className="mt-2 text-gray-500">
        {article.category} • {article.publishedAt}
      </p>

      <p className="mt-8">
        {article.category}
      </p>
    </main>
  );
}