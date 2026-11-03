"use server";

import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { SWIM_EVENTS, parseTimeToSeconds } from "@/lib/events";

export async function submitEntry(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const event = String(formData.get("event") ?? "");
  const raceName = String(formData.get("race_name") ?? "").trim();
  const raceDate = String(formData.get("race_date") ?? "").trim();
  const prSeconds = parseTimeToSeconds(String(formData.get("pr") ?? ""));

  if (!name || !SWIM_EVENTS.includes(event) || prSeconds === null) {
    throw new Error("Choose an event and enter a PR like 49.82 or 1:58.40.");
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { error } = await supabase.from("submissions").insert({
    name,
    event,
    race_name: raceName || null,
    race_date: raceDate || null,
    pr_seconds: prSeconds,
  });

  if (error) {
    throw new Error("Could not save your submission. Please try again.");
  }

  redirect(`/leaderboard?event=${encodeURIComponent(event)}`);
}
