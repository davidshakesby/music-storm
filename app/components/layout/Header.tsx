export default function Header() {
  return (
    <header className="p-6 border-b flex justify-between">
      <h1 className="font-bold text-xl">
        Music Storm
      </h1>

      <nav>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>Blog</li>
          <li>Playlist</li>
        </ul>
      </nav>
    </header>
  )
}