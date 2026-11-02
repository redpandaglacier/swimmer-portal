import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-6 border-b p-4">
      <Link href="/" className="font-bold">Swimmer Portal</Link>
      <Link href="/submit">Submit</Link>
      <Link href="/leaderboard">Leaderboard</Link>
    </nav>
  );
}
