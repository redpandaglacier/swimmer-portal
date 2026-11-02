import Hero from "@/components/Hero";
import RecruitCard from "@/components/RecruitCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.2fr_1fr]">
        <Hero />
        <RecruitCard />
      </section>
    </main>
  );
}
