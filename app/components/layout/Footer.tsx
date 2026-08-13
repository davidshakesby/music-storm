import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" flex align-middle justify-between p-10 border-t text-center">
      <p>© {new Date().getFullYear()} Music Storm</p>

      <div className="flex justify-center gap-4">
        <Link href="https://twitter.com/" className="text-sm hover:underline" aria-label="Twitter">
          Twitter
        </Link>
        <Link href="https://instagram.com/" className="text-sm hover:underline" aria-label="Instagram">
          Instagram
        </Link>
      </div>
    </footer>
  );
}