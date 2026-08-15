import Link from "next/link"
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  //image: string;
  category: string;
};

export default function Card({ title, description, category }: CardProps) {
    return (
        <div className="border p-6 rounded">
            {/* <Image src={image} alt="Artist Image" className="mb-4 rounded" /> */}
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
            <Link href="/artist" className="mb-10">
              View Artist &#8594;
            </Link> 
            <p className="text-gray-400 mt-10">{category}</p>
        </div>
    )
}
