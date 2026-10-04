"use client";

import type { ResumeData } from "@/lib/types/resume";

export function ContactLine({ resume, muted = false }: { resume: ResumeData; muted?: boolean }) {
  const { personal } = resume;
  const values = [personal.email, personal.phone, personal.location, personal.website, personal.linkedin, personal.github].filter(Boolean);
  return <div className={`flex flex-wrap gap-x-3 gap-y-1 text-[10px] ${muted ? "text-slate-500" : "text-slate-600"}`}>{values.map((v) => <span key={v}>{v}</span>)}</div>;
}

export function ExperienceList({ resume, compact = false }: { resume: ResumeData; compact?: boolean }) {
  return <div className={compact ? "space-y-3" : "space-y-5"}>{resume.experience.map((item) => <div key={item.id}>
    <div className="flex justify-between gap-4">
      <div className="min-w-0"><h3 className="font-bold">{item.jobTitle || "Job Title"}</h3><p className="font-semibold text-slate-600">{item.company}{item.location ? ` • ${item.location}` : ""}</p></div>
      <div className="whitespace-nowrap text-[10px] text-slate-500">{item.startDate}{item.startDate || item.endDate ? " – " : ""}{item.currentlyWorking ? "Present" : item.endDate}</div>
    </div>
    {item.description && <p className="mt-1.5 whitespace-pre-line text-slate-700">{item.description}</p>}
  </div>)}</div>;
}

export function EducationList({ resume }: { resume: ResumeData }) {
  return <div className="space-y-3">{resume.education.map((item) => <div key={item.id}>
    <div className="flex justify-between gap-4"><div><h3 className="font-bold">{item.degree || "Degree"}</h3><p className="font-semibold text-slate-600">{item.institution}{item.location ? ` • ${item.location}` : ""}</p></div><div className="whitespace-nowrap text-[10px] text-slate-500">{item.startDate}{item.startDate || item.endDate ? " – " : ""}{item.endDate}</div></div>
    {item.description && <p className="mt-1 text-slate-600">{item.description}</p>}
  </div>)}</div>;
}

export function SkillsList({ resume, pills = false }: { resume: ResumeData; pills?: boolean }) {
  const skills = resume.skills.filter((x) => x.name.trim());
  return <div className={pills ? "flex flex-wrap gap-1.5" : "flex flex-wrap gap-x-4 gap-y-2"}>{skills.map((skill) => <span key={skill.id} className={pills ? "rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-700" : "font-medium"}>{skill.name}</span>)}</div>;
}

export function ProjectsList({ resume }: { resume: ResumeData }) {
  return <div className="space-y-3">{resume.projects.map((item) => <div key={item.id}><h3 className="font-bold">{item.name || "Project Name"}</h3>{item.role && <p className="font-semibold text-slate-600">{item.role}</p>}{item.description && <p className="mt-1 whitespace-pre-line text-slate-700">{item.description}</p>}{item.technologies.length > 0 && <p className="mt-1 text-[10px] text-slate-500">{item.technologies.join(" • ")}</p>}</div>)}</div>;
}

export function CertificationsList({ resume }: { resume: ResumeData }) {
  return <div className="space-y-2.5">{resume.certifications.map((item) => <div key={item.id}><h3 className="font-bold">{item.name}</h3><p className="text-slate-600">{item.issuer}{item.issueDate ? ` • ${item.issueDate}` : ""}</p></div>)}</div>;
}

export function SectionHeading({ title, color, style = "line" }: { title: string; color: string; style?: "line" | "bar" | "plain" }) {
  if (style === "bar") return <h2 className="mb-3 border-l-4 pl-3 text-[12px] font-black uppercase tracking-[0.12em]" style={{ borderColor: color }}>{title}</h2>;
  if (style === "plain") return <h2 className="mb-3 text-[12px] font-black uppercase tracking-[0.12em]" style={{ color }}>{title}</h2>;
  return <h2 className="mb-3 border-b pb-1 text-[12px] font-black uppercase tracking-[0.12em]" style={{ borderColor: color, color }}>{title}</h2>;
}
