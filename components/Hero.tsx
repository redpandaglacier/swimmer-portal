import Link from "next/link";

const stats = [
  { value: "1,000+", label: "Swimmers" },
  { value: "50", label: "States" },
  { value: "5 min", label: "Avg. signup" },
];

export default function Hero() {
  return (
    <div className="flex flex-col gap-8">
      <span className="inline-flex w-fit items-center rounded-full border border-cyan-400/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
        Verified times for high school swimmers
      </span>

      <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl">
        Swim fast.
        <br />
        <span className="text-cyan-300">Get seen.</span>
      </h1>

      <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
        Build your swimmer profile, submit your best times, and put your name in front of college coaches. Your profile is ready in about five minutes.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/submit"
          className="rounded bg-cyan-400 px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-cyan-300"
        >
          Submit my times
        </Link>
        <Link
          href="/leaderboard"
          className="rounded border border-white/20 px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-cyan-400"
        >
          View leaderboard
        </Link>
      </div>

      <dl className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
        {stats.map((s) => (
          <div key={s.label}>
            <dd className="text-3xl font-black">{s.value}</dd>
            <dt className="mt-1 text-xs uppercase tracking-wider text-zinc-500">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
