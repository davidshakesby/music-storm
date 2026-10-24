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
        <div className="border p-5 rounded h-full min-h-80 flex flex-col">
            <Image className="mb-4 w-full h-60 object-cover rounded" src={`/images/${image}`} height={400} width={600} alt="Artist Image"  />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-slate-600 mb-4">{description}</p>
            <Link href={`/blog/${slug}`} className="mb-4 mt-auto">
              View Post &#8594;
            </Link> 
            <p className="text-xs text-slate-500 mt-auto">{category}</p>
        </div>
    )
}
