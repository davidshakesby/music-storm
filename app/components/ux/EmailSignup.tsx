import Link from "next/link"

export default function EmailSignup() {
    return (
    <section className="p-10 border-b flex justify-center items-center flex-col">
            <h2 className="text-3xl font-bold mb-6">Sign up to the newsletter</h2>
            <Link href="/" className="px-6 py-3 border rounded">
                Join the Storm
            </Link>

    </section>
)}