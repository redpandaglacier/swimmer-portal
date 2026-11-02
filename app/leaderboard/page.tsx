const placeholderRunners = [
  { rank: 1, name: "Sample Swimmer", pr: "24:10" },
  { rank: 2, name: "Another Swimmer", pr: "25:45" },
  { rank: 3, name: "Third Swimmer", pr: "27:02" },
];

export default function LeaderboardPage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Leaderboard</h1>
      <table className="mt-6 w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2">Rank</th>
            <th className="p-2">Name</th>
            <th className="p-2">PR</th>
          </tr>
        </thead>
        <tbody>
          {placeholderRunners.map((r) => (
            <tr key={r.rank} className="border-b">
              <td className="p-2">{r.rank}</td>
              <td className="p-2">{r.name}</td>
              <td className="p-2">{r.pr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
