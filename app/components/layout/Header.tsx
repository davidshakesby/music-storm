import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 border-b flex justify-between items-center">
      <h1 className="font-bold text-xl">Music Storm</h1>

      <nav aria-label="Main navigation">
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:underline" aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/playlist" className="hover:underline">
              Playlist
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}