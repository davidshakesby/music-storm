import { featuredBands } from "@/app/data/FeaturedBands";
import Card from "./Card";

export default function FeaturedBands() {
  return (
    <section className="p-10 border-b">
      <h2 className="text-3xl font-bold mb-8">
        Featured Bands
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredBands.map((band) => (
          band.featured && (
            <Card
              key={band.id}
              title={band.name}
              description={band.description}
              image={band.image}
              category={band.category}
            />
          )
        ))}
      </div>
    </section>
  );
}