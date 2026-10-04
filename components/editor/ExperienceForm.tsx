"use client";

import { Plus, Trash2 } from "lucide-react";
import { useResumeStore } from "@/lib/store/resume-store";
import { Field } from "./Field";

export function ExperienceForm() {
  const items = useResumeStore((s) => s.resume.experience);
  const add = useResumeStore((s) => s.addExperience);
  const update = useResumeStore((s) => s.updateExperience);
  const remove = useResumeStore((s) => s.removeExperience);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">Experience {index + 1}</span>
            <button onClick={() => remove(item.id)} className="rounded-lg p-2 text-red-500 hover:bg-red-50"><Trash2 size={16} /></button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Job Title" value={item.jobTitle} onChange={(v) => update(item.id, { jobTitle: v })} />
            <Field label="Company" value={item.company} onChange={(v) => update(item.id, { company: v })} />
            <Field label="Location" value={item.location} onChange={(v) => update(item.id, { location: v })} />
            <Field label="Start Date" value={item.startDate} placeholder="Jan 2024" onChange={(v) => update(item.id, { startDate: v })} />
            {!item.currentlyWorking && <Field label="End Date" value={item.endDate} placeholder="Dec 2025" onChange={(v) => update(item.id, { endDate: v })} />}
          </div>
          <label className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-600">
            <input type="checkbox" checked={item.currentlyWorking} onChange={(e) => update(item.id, { currentlyWorking: e.target.checked })} />
            Currently working here
          </label>
          <textarea
            value={item.description}
            onChange={(e) => update(item.id, { description: e.target.value })}
            rows={5}
            placeholder="Describe responsibilities, achievements and measurable impact..."
            className="mt-4 w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none focus:border-[#174a9c]"
          />
        </div>
      ))}
      <button onClick={add} className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50">
        <Plus size={17} /> Add Experience
      </button>
    </div>
  );
}
