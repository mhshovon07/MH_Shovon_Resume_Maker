"use client";

import { useResumeStore } from "@/lib/store/resume-store";

export function StylingControls() {
  const c = useResumeStore((s) => s.resume.customization);
  const update = useResumeStore((s) => s.updateCustomization);

  return (
    <div className="space-y-5">
        <div>
        <label className="mb-2 block text-xs font-bold text-slate-600">Resume Template</label>
        <select value={c.template} onChange={(e) => update({ template: e.target.value as typeof c.template })} className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm">
          <option value="ats-classic">ATS Classic</option>
          <option value="modern">Modern Professional</option>
          <option value="corporate">Corporate</option>
          <option value="minimal">Minimal</option>
          <option value="tech">Tech / Developer</option>
          <option value="executive">Executive</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold text-slate-600">Theme Color</label>
        <div className="flex items-center gap-3">
          <input type="color" value={c.themeColor} onChange={(e) => update({ themeColor: e.target.value })} className="h-10 w-14 cursor-pointer rounded-lg" />
          <code className="rounded-lg bg-slate-100 px-3 py-2 text-xs">{c.themeColor}</code>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold text-slate-600">Font</label>
        <select value={c.fontFamily} onChange={(e) => update({ fontFamily: e.target.value as typeof c.fontFamily })} className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm">
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Georgia">Georgia</option>
          <option value="Times-Roman">Times</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold text-slate-600">Font Size</label>
        <select value={c.fontSize} onChange={(e) => update({ fontSize: e.target.value as typeof c.fontSize })} className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold text-slate-600">Page Margin: {c.margin}px</label>
        <input type="range" min="24" max="64" value={c.margin} onChange={(e) => update({ margin: Number(e.target.value) })} className="w-full" />
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold text-slate-600">Section Spacing: {c.sectionSpacing}px</label>
        <input type="range" min="8" max="36" value={c.sectionSpacing} onChange={(e) => update({ sectionSpacing: Number(e.target.value) })} className="w-full" />
      </div>
    </div>
  );
}
