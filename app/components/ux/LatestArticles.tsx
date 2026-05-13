/* eslint-disable @next/next/no-img-element */
export default function LatestArticles() {
    return (
    <section className="p-10 border-b">
        <h2 className="text-3xl font-bold mb-6"> Latest Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border p-6 rounded">
                <img className="w-full h-40 object-cover rounded mb-4" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80" alt="Pop punk band on stage" />
                <h3 className="text-xl font-semibold mb-2">5 Pop Punk Artists You Need to Hear</h3>
                <p className="text-sm text-slate-600 mb-4">Explore the rising pop punk bands redefining the scene with catchy hooks and high-energy anthems.</p>
                <p className="text-xs text-slate-500">By Sam Taylor · 4 min read</p>
            </div>
            <div className="border p-6 rounded">
                <img className="w-full h-40 object-cover rounded mb-4" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80" alt="Crowd at a concert" />
                <h3 className="text-xl font-semibold mb-2">Where to Discover New Pop Punk Bands</h3>
                <p className="text-sm text-slate-600 mb-4">A guide to playlists, communities, and indie labels that help you uncover fresh pop punk talent.</p>
                <p className="text-xs text-slate-500">By Riley Morgan · 5 min read</p>
            </div>
            <div className="border p-6 rounded">
                <img className="w-full h-40 object-cover rounded mb-4" src="https://images.unsplash.com/photo-1511379927131-2d41b1e4f6b4?auto=format&fit=crop&w=800&q=80" alt="Guitar player performing" />
                <h3 className="text-xl font-semibold mb-2">Why Pop Punk Is Back in 2026</h3>
                <p className="text-sm text-slate-600 mb-4">Learn what’s driving the new wave of pop punk and which underground artists are leading the charge.</p>
                <p className="text-xs text-slate-500">By Casey Lee · 3 min read</p>
            </div>
        </div>
    </section>

)}