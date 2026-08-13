import Link from "next/link"
import Image from "next/image";

export default function Card() {
    return (
        <div className="border p-6 rounded">
            <Image src="/path/to/image.jpg" alt="Artist Image" className="mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">Artist Name</h3>
            <p className="text-gray-700">Description</p>
            <Link href="/artist" className="text-blue-500 hover:underline">
              View Artist
            </Link> 
        </div>
    )
}