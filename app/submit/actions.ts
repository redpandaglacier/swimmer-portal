"use server";

import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export async function submitEntry(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const raceName = String(formData.get("race_name") ?? "").trim();
  const raceDate = String(formData.get("race_date") ?? "").trim();
  const pr = String(formData.get("pr") ?? "").trim();

  const match = pr.match(/^(\d{1,3}):([0-5]\d)$/);
  if (!name || !match) {
    throw new Error("Enter a name and a PR in minutes:seconds format, like 25:30.");
  }
  const prSeconds = Number(match[1]) * 60 + Number(match[2]);

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { error } = await supabase.from("submissions").insert({
    name,
    race_name: raceName || null,
    race_date: raceDate || null,
    pr_seconds: prSeconds,
  });

  if (error) {
    throw new Error("Could not save your submission. Please try again.");
  }

  redirect("/leaderboard");
}
