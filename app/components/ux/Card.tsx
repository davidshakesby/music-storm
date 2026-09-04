import Link from "next/link"
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  slug: string;
};

export default function Card({ title, image, description, category, slug }: CardProps) {
    return (
        <div className="border p-6 rounded h-full flex flex-col">
            <Image className="mb-4 w-full h-70 object-cover" src={`/images/${image}`} height={400} width={600} alt="Artist Image"  />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-slate-600 mb-4">{description}</p>
            <Link href={`/artist/${slug}`} className="mb-10">
              View Artist &#8594;
            </Link> 
            <p className="text-xs text-slate-500">{category}</p>
        </div>
    )
}
