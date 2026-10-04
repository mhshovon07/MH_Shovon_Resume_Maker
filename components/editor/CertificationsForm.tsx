"use client";

import { Plus, Trash2 } from "lucide-react";
import { useResumeStore } from "@/lib/store/resume-store";
import { Field } from "./Field";

export function CertificationsForm() {
  const items = useResumeStore((s) => s.resume.certifications);
  const add = useResumeStore((s) => s.addCertification);
  const update = useResumeStore((s) => s.updateCertification);
  const remove = useResumeStore((s) => s.removeCertification);

  return <div className="space-y-4">
    {items.map((item) => <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
      <div className="mb-4 flex justify-between"><span className="text-xs font-black uppercase tracking-wider text-slate-500">Certification</span><button onClick={() => remove(item.id)} className="text-red-500"><Trash2 size={16}/></button></div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Certification" value={item.name} onChange={(v)=>update(item.id,{name:v})}/>
        <Field label="Issuer" value={item.issuer} onChange={(v)=>update(item.id,{issuer:v})}/>
        <Field label="Issue Date" value={item.issueDate} onChange={(v)=>update(item.id,{issueDate:v})}/>
        <Field label="Credential URL" value={item.credentialUrl} onChange={(v)=>update(item.id,{credentialUrl:v})}/>
      </div>
    </div>)}
    <button onClick={add} className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 py-3 text-sm font-bold"><Plus size={17}/> Add Certification</button>
  </div>;
}
