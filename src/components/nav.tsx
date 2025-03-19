export default function Nav() {
  return (
    <nav className="border-b border-neutral-800 py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-bold hover:text-neutral-100">
          Onchain Template
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/mint"
            className="hover:text-neutral-100"
          >
            Mint
          </Link>
        </div>
      </div>
    </nav>
  );
}