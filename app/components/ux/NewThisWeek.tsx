export default function NewThisWeek() {
  return (
    <section className="p-10 border-b">
      <h2 className="text-3xl font-bold mb-6">
        New This Week
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-6 rounded">
          Song / Artist
        </div>

        <div className="border p-6 rounded">
          Song / Artist
        </div>

        <div className="border p-6 rounded">
          Song / Artist
        </div>
      </div>
    </section>
  )
}