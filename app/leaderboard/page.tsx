import { Suspense } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { SWIM_EVENTS, formatTime } from "@/lib/events";

async function Results({
  searchParams,
}: {
  searchParams: Promise<{ event?: string }>;
}) {
  const { event } = await searchParams;
  const selected = SWIM_EVENTS.includes(event ?? "") ? event! : SWIM_EVENTS[0];

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: rows, error } = await supabase
    .from("submissions")
    .select("id, name, race_name, pr_seconds")
    .eq("event", selected)
    .order("pr_seconds", { ascending: true });

  return (
    <>
      <nav className="mt-6 flex flex-wrap gap-2">
        {SWIM_EVENTS.map((e) => (
          <Link
            key={e}
            href={`/leaderboard?event=${encodeURIComponent(e)}`}
            className={`rounded-full border px-3 py-1 text-sm ${
              e === selected ? "bg-black text-white" : "hover:bg-zinc-100"
            }`}
          >
            {e}
          </Link>
        ))}
      </nav>

      {error && <p className="mt-6 text-red-600">Could not load results. Please try again.</p>}

      {!error && rows?.length === 0 && (
        <p className="mt-6 text-zinc-500">No {selected} times yet. Be the first to submit one.</p>
      )}

      {rows && rows.length > 0 && (
        <table className="mt-6 w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Rank</th>
              <th className="p-2">Name</th>
              <th className="p-2">Race</th>
              <th className="p-2">PR</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.id} className="border-b">
                <td className="p-2">{i + 1}</td>
                <td className="p-2">{r.name}</td>
                <td className="p-2">{r.race_name ?? "—"}</td>
                <td className="p-2 font-mono">{formatTime(Number(r.pr_seconds))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default function LeaderboardPage({
  searchParams,
}: {
  searchParams: Promise<{ event?: string }>;
}) {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold">Leaderboard</h1>
      <Suspense fallback={<p className="mt-6 text-zinc-500">Loading results...</p>}>
        <Results searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
