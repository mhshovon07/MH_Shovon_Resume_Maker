"use client";

import { useResumeStore } from "@/lib/store/resume-store";
import { ResumeTemplate } from "@/components/templates/ResumeTemplate";

export function ResumePreview() {
  const resume = useResumeStore((s) => s.resume);
  return <div className="min-h-full bg-slate-100 p-8"><div className="mx-auto w-fit"><ResumeTemplate resume={resume} /></div></div>;
}
