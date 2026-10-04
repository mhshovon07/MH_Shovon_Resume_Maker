"use client";

import { Plus, Trash2 } from "lucide-react";
import { useResumeStore } from "@/lib/store/resume-store";

export function SkillsForm() {
  const items = useResumeStore((s) => s.resume.skills);
  const add = useResumeStore((s) => s.addSkill);
  const update = useResumeStore((s) => s.updateSkill);
  const remove = useResumeStore((s) => s.removeSkill);

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="flex gap-2">
          <input value={item.name} onChange={(e) => update(item.id, { name: e.target.value })} placeholder="JavaScript" className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-2.5 text-sm" />
          <input value={item.category} onChange={(e) => update(item.id, { category: e.target.value })} placeholder="Technical" className="w-28 rounded-xl border border-slate-300 px-3 py-2.5 text-sm" />
          <button onClick={() => remove(item.id)} className="rounded-xl p-2 text-red-500 hover:bg-red-50"><Trash2 size={16} /></button>
        </div>
      ))}
      <button onClick={add} className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50">
        <Plus size={17} /> Add Skill
      </button>
    </div>
  );
}
