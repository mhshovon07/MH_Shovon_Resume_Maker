"use client";

import { Copy, FilePlus2, MoreVertical, Pencil, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useResumeStore } from "@/lib/store/resume-store";

export function ResumeLibrary({ onClose }: { onClose: () => void }) {
  const { resumes, currentResumeId, createResume, selectResume, duplicateResume, deleteResume, renameResume } = useResumeStore();
  const [editing, setEditing] = useState<string | null>(null);
  const [title, setTitle] = useState("");

  const startRename = (id: string, current: string) => { setEditing(id); setTitle(current); };
  const saveRename = () => { if (editing) { if (editing === currentResumeId) renameResume(title); else { const item = resumes.find(r => r.id === editing); if (item) { useResumeStore.setState({ resumes: resumes.map(r => r.id === editing ? { ...r, title: title.trim() || "Untitled Resume" } : r) }); } } } setEditing(null); };

  useEffect(() => { const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [onClose]);

  return <div className="fixed inset-0 z-50 bg-slate-950/40 p-4 backdrop-blur-sm" onMouseDown={onClose}>
    <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl" onMouseDown={(e) => e.stopPropagation()}>
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div><h2 className="text-xl font-black text-slate-950">My Resumes</h2><p className="mt-1 text-xs text-slate-500">Create and manage multiple resume versions on this device.</p></div>
        <div className="flex gap-2"><button onClick={createResume} className="inline-flex items-center gap-2 rounded-xl bg-[#174a9c] px-4 py-2.5 text-xs font-bold text-white"><FilePlus2 size={15}/> New Resume</button><button onClick={onClose} className="rounded-xl border border-slate-200 p-2.5 text-slate-500"><X size={17}/></button></div>
      </div>
      <div className="max-h-[65vh] overflow-y-auto p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          {resumes.map((r) => <div key={r.id} className={`rounded-2xl border p-4 ${r.id === currentResumeId ? "border-blue-300 bg-blue-50/50" : "border-slate-200 bg-white"}`}>
            <button className="w-full text-left" onClick={() => { selectResume(r.id); onClose(); }}><div className="mb-2 flex items-center justify-between"><span className="text-sm font-black text-slate-900">{r.title || "Untitled Resume"}</span>{r.id === currentResumeId && <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-black text-[#174a9c]">CURRENT</span>}</div><p className="truncate text-xs text-slate-500">{r.personal.fullName || "No name added yet"}</p><p className="mt-1 text-[10px] text-slate-400">{r.personal.jobTitle || "Add a job title"}</p></button>
            <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3">
              {editing === r.id ? <><input autoFocus value={title} onChange={e=>setTitle(e.target.value)} onKeyDown={e=>{if(e.key==="Enter") saveRename();}} className="min-w-0 flex-1 rounded-lg border border-slate-300 px-2 py-1.5 text-xs outline-none focus:border-blue-500"/><button onClick={saveRename} className="rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white">Save</button></> : <><button onClick={()=>startRename(r.id,r.title)} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] font-bold text-slate-600"><Pencil size={12}/> Rename</button><button onClick={()=>duplicateResume(r.id)} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] font-bold text-slate-600"><Copy size={12}/> Duplicate</button><button disabled={resumes.length===1} onClick={()=>{if(confirm("Delete this resume? This cannot be undone.")) deleteResume(r.id)}} className="ml-auto rounded-lg border border-red-100 p-1.5 text-red-500 disabled:opacity-30"><Trash2 size={14}/></button></>}
            </div>
          </div>)}
        </div>
      </div>
    </div>
  </div>;
}
