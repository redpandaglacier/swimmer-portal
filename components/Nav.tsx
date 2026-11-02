import Link from "next/link";

const links = [
  { href: "/submit", label: "Submit" },
  { href: "/leaderboard", label: "Leaderboard" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-extrabold tracking-wide text-[#E6BE4A]">
          SWIMMER PORTAL
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-6 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:text-[#E6BE4A]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/submit"
            className="rounded-full bg-[#E6BE4A] px-5 py-2 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#f0cc5c]"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
