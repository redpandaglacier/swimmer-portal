const swimmer = {
  initials: "JS",
  name: "Sample Swimmer",
  school: "Sample High School",
  location: "State · Class of '29",
  score: 102,
  stars: 5,
  times: [
    { event: "100 Free", time: "49.82" },
    { event: "200 IM", time: "1:58.40" },
  ],
};

export default function RecruitCard() {
  return (
    <div className="rounded-xl border border-cyan-400/60 bg-zinc-950 p-6 shadow-[0_0_60px_-15px_rgba(34,211,238,0.35)]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Featured swimmer</p>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 font-black text-black">
          {swimmer.initials}
        </div>
        <div>
          <p className="text-xl font-bold">{swimmer.name}</p>
          <p className="text-sm text-zinc-400">{swimmer.school}</p>
          <p className="font-mono text-xs text-zinc-500">{swimmer.location}</p>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-cyan-400/30 bg-black p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Score</p>
        <p className="mt-2 text-6xl font-black">{swimmer.score}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Rating</p>
        <p className="mt-2 text-2xl text-cyan-300">{"★".repeat(swimmer.stars)}</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-center">
        {swimmer.times.map((t) => (
          <div key={t.event}>
            <p className="font-mono text-2xl">{t.time}</p>
            <p className="text-xs uppercase tracking-wider text-zinc-500">{t.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
