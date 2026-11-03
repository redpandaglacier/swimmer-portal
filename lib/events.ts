export const SWIM_EVENTS = [
  "50 Free",
  "100 Free",
  "200 Free",
  "500 Free",
  "100 Back",
  "100 Breast",
  "100 Fly",
  "200 IM",
  "200 Medley Relay",
  "200 Free Relay",
  "400 Free Relay",
];

// Accepts 49.82, 1:58.40, or 25:30. Returns seconds, or null if invalid.
export function parseTimeToSeconds(input: string): number | null {
  const match = input.trim().match(/^(?:(\d{1,2}):)?(\d{1,2})(?:\.(\d{1,2}))?$/);
  if (!match) return null;
  const minutes = match[1] ? Number(match[1]) : 0;
  const seconds = Number(match[2]);
  const hundredths = match[3] ? Number(match[3].padEnd(2, "0")) : 0;
  if (seconds > 59) return null;
  const total = minutes * 60 + seconds + hundredths / 100;
  return total > 0 ? Math.round(total * 100) / 100 : null;
}

// Converts seconds back to a display time, like 109.4 -> "1:49.40".
export function formatTime(total: number): string {
  const minutes = Math.floor(total / 60);
  const seconds = (total - minutes * 60).toFixed(2);
  if (minutes === 0) return seconds;
  return `${minutes}:${seconds.padStart(5, "0")}`;
}
