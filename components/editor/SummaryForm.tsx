"use client";

import { useResumeStore } from "@/lib/store/resume-store";

export function SummaryForm() {
  const summary = useResumeStore((s) => s.resume.summary);
  const update = useResumeStore((s) => s.updateSummary);

  return (
    <div>
      <textarea
        value={summary}
        onChange={(e) => update(e.target.value)}
        rows={7}
        placeholder="Write a concise 3–5 sentence professional summary..."
        className="w-full resize-y rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none focus:border-[#174a9c] focus:ring-4 focus:ring-blue-50"
      />
    </div>
  );
}
