"use client";

import { Plus, Trash2 } from "lucide-react";
import { useResumeStore } from "@/lib/store/resume-store";
import { Field } from "./Field";

export function ProjectsForm() {
  const items = useResumeStore((s) => s.resume.projects);
  const add = useResumeStore((s) => s.addProject);
  const update = useResumeStore((s) => s.updateProject);
  const remove = useResumeStore((s) => s.removeProject);

  return <div className="space-y-4">
    {items.map((item) => <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
      <div className="mb-4 flex justify-between"><span className="text-xs font-black uppercase tracking-wider text-slate-500">Project</span><button onClick={() => remove(item.id)} className="text-red-500"><Trash2 size={16}/></button></div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Project Name" value={item.name} onChange={(v) => update(item.id,{name:v})}/>
        <Field label="Role" value={item.role} onChange={(v) => update(item.id,{role:v})}/>
        <Field label="Project URL" value={item.url} onChange={(v) => update(item.id,{url:v})}/>
        <Field label="Technologies" value={item.technologies.join(", ")} onChange={(v) => update(item.id,{technologies:v.split(",").map(x=>x.trim()).filter(Boolean)})}/>
      </div>
      <textarea value={item.description} onChange={(e)=>update(item.id,{description:e.target.value})} rows={4} placeholder="What did you build and what was the result?" className="mt-4 w-full rounded-xl border border-slate-300 px-3 py-3 text-sm"/>
    </div>)}
    <button onClick={add} className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 py-3 text-sm font-bold"><Plus size={17}/> Add Project</button>
  </div>;
}
