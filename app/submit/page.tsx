import { submitEntry } from "./actions";
import { SWIM_EVENTS } from "@/lib/events";

export default function SubmitPage() {
  return (
    <main className="mx-auto max-w-md p-8">
      <h1 className="text-3xl font-bold">Submit your PR</h1>
      <form action={submitEntry} className="mt-6 flex flex-col gap-4 rounded-xl border-2 border-zinc-300 p-6 shadow-sm">
        <label className="flex flex-col gap-1">
          Name
          <input name="name" required className="rounded border p-2" />
        </label>
        <label className="flex flex-col gap-1">
          Race name
          <input name="race_name" className="rounded border p-2" />
        </label>
        <label className="flex flex-col gap-1">
          Race date
          <input name="race_date" type="date" className="rounded border p-2" />
        </label>
        <label className="flex flex-col gap-1">
          Event
          <select name="event" required defaultValue="" className="rounded border p-2">
            <option value="" disabled>Select an event</option>
            {SWIM_EVENTS.map((e) => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          PR time
          <input name="pr" placeholder="49.82 or 1:58.40" required className="rounded border p-2" />
        </label>
        <button type="submit" className="rounded bg-black px-6 py-3 text-white">
          Save submission
        </button>
      </form>
    </main>
  );
}
