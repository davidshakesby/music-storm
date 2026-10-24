/* eslint-disable @next/next/no-img-element */
import { articles } from "@/app/data/articles"
import Card from "./Card"

export default function LatestArticles() {
    return (
    <section className="p-10 border-b">
        <h2 className="text-3xl font-bold mb-6"> Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  article.featured && (
                    <Card
                        key={article.id}
                        title={article.title}
                        description={article.excerpt}
                        image={article.image}
                        category={article.category}
                        slug={article.slug} />
    )
                ))}
              </div>
    </section>

)}