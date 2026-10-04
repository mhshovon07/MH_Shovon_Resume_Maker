"use client";
import { Check, Eye, LayoutTemplate } from "lucide-react";
import { useState } from "react";
import { useResumeStore } from "@/lib/store/resume-store";
import type { ResumeTemplate } from "@/lib/types/resume";

const templates: {id: ResumeTemplate; name: string; description: string; tags: string[]}[] = [
 {id:"ats-classic",name:"ATS Classic",description:"Simple single-column structure built for ATS readability.",tags:["ATS Friendly","Single Column"]},
 {id:"modern",name:"Modern Professional",description:"Clean contemporary layout with strong section hierarchy.",tags:["Popular","Professional"]},
 {id:"corporate",name:"Corporate",description:"Formal layout for business, finance and corporate roles.",tags:["Corporate","Formal"]},
 {id:"minimal",name:"Minimal",description:"Lightweight typography and generous whitespace.",tags:["Minimal","Clean"]},
 {id:"tech",name:"Tech / Developer",description:"Skills and projects are given more visual priority.",tags:["Tech","Projects"]},
 {id:"executive",name:"Executive",description:"Polished leadership-focused layout for experienced professionals.",tags:["Executive","Senior"]},
];

function Mini({id,color}:{id:ResumeTemplate;color:string}){
 const common=<><div className="h-1.5 w-16 rounded" style={{background:id==="ats-classic"?"#111827":color}}/><div className="mt-1 h-1 w-10 rounded bg-slate-300"/><div className="mt-3 h-1 w-full rounded bg-slate-200"/><div className="mt-1 h-1 w-11/12 rounded bg-slate-100"/></>;
 if(id==="tech") return <div className="rounded border border-slate-200 bg-white p-2"><div className="rounded p-2 text-white" style={{background:color}}><div className="h-1.5 w-14 rounded bg-white"/><div className="mt-1 h-1 w-9 rounded bg-white/60"/></div>{common}</div>;
 if(id==="corporate") return <div className="rounded border border-slate-200 bg-white p-2"><div className="flex justify-between"><div>{common}</div><div className="h-4 w-8 rounded bg-slate-100"/></div><div className="mt-3 border-l-2 pl-1" style={{borderColor:color}}><div className="h-1 w-12 rounded bg-slate-300"/></div></div>;
 if(id==="minimal") return <div className="rounded border border-slate-200 bg-white p-2"><div className="h-2 w-16 rounded" style={{background:color}}/><div className="mt-1 h-1 w-10 rounded bg-slate-300"/><div className="mt-4 h-1 w-8 rounded bg-slate-400"/><div className="mt-1 h-1 w-full rounded bg-slate-100"/></div>;
 if(id==="executive") return <div className="rounded border border-slate-200 bg-white p-2"><div className="h-2 w-20 rounded bg-slate-800"/><div className="mt-2 border-t pt-2" style={{borderColor:color}}>{common}</div></div>;
 return <div className="rounded border border-slate-200 bg-white p-2">{common}<div className="mt-2 h-1 w-9/12 rounded" style={{background:id==="ats-classic"?"#111827":color}}/></div>;
}

export function TemplateGallery(){
 const selected=useResumeStore(s=>s.resume.customization.template); const color=useResumeStore(s=>s.resume.customization.themeColor); const setTemplate=useResumeStore(s=>s.setTemplate); const [showAll,setShowAll]=useState(false);
 const shown=showAll?templates:templates.slice(0,4);
 return <section className="border-b border-slate-200 bg-slate-50/80 px-5 py-4">
  <div className="mb-3 flex items-center justify-between"><div><div className="flex items-center gap-2 text-sm font-black text-slate-950"><LayoutTemplate size={16}/> Resume Templates</div><p className="mt-1 text-[11px] text-slate-500">Switch layouts anytime. Your resume data stays unchanged.</p></div><button type="button" onClick={()=>setShowAll(v=>!v)} className="text-xs font-bold text-[#174a9c]">{showAll?"Show Less":"View All"}</button></div>
  <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">{shown.map(t=><button key={t.id} type="button" onClick={()=>setTemplate(t.id)} className={`group relative rounded-xl border bg-white p-2 text-left transition ${selected===t.id?"border-[#174a9c] ring-2 ring-blue-100":"border-slate-200 hover:border-slate-300"}`}>
    <div className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-50 p-2"><Mini id={t.id} color={color}/></div>
    <div className="mt-2 flex items-center justify-between gap-2"><span className="text-xs font-extrabold text-slate-800">{t.name}</span>{selected===t.id?<span className="flex items-center gap-1 text-[10px] font-bold text-[#174a9c]"><Check size={12}/>Selected</span>:<Eye size={13} className="text-slate-400"/>}</div>
    <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-slate-500">{t.description}</p>
    <div className="mt-2 flex flex-wrap gap-1">{t.tags.map(tag=><span key={tag} className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-500">{tag}</span>)}</div>
  </button>)}</div>
 </section>;
}
