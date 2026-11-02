export default function SubmitPage() {
  return (
    <main className="mx-auto max-w-md p-8">
      <h1 className="text-3xl font-bold">Submit your PR</h1>
      <form className="mt-6 flex flex-col gap-4">
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
          PR time
          <input name="pr" placeholder="25:30" required className="rounded border p-2" />
        </label>
        <label className="flex flex-col gap-1">
          Photo
          <input name="photo" type="file" accept="image/*" className="p-2" />
        </label>
        <button type="submit" className="rounded bg-black px-6 py-3 text-white">
          Continue to payment
        </button>
      </form>
    </main>
  );
}
