"use client";

import { CheckCircle2, CloudOff, Eye, FolderOpen, RotateCcw } from "lucide-react";

import { useResumeStore } from "@/lib/store/resume-store";

import { ResumeEditor } from "@/components/editor/ResumeEditor";
import { ResumePreview } from "@/components/preview/ResumePreview";
import { PDFDownloadButton } from "@/components/pdf/PDFDownloadButton";
import { ResumeLibrary } from "@/components/ResumeLibrary";
import { useEffect, useState } from "react";

function ResumeBuilder() {
  const reset = useResumeStore((state) => state.reset);
  const resume = useResumeStore((state) => state.resume);
  const resumes = useResumeStore((state) => state.resumes);
  const currentResumeId = useResumeStore((state) => state.currentResumeId);
  const hydrateLibrary = useResumeStore((state) => state.hydrateLibrary);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [saved, setSaved] = useState(true);

  useEffect(() => { hydrateLibrary(); }, [hydrateLibrary]);

  useEffect(() => {
    setSaved(false);
    const timer = window.setTimeout(() => {
      const latest = useResumeStore.getState();
      const synced = latest.resumes.map((item) => item.id === currentResumeId ? resume : item);
      localStorage.setItem("mh-shovon-resume-library", JSON.stringify(synced));
      localStorage.setItem("mh-shovon-current-resume", currentResumeId);
      useResumeStore.setState({ resumes: synced });
      setSaved(true);
    }, 450);
    return () => window.clearTimeout(timer);
  }, [resume, currentResumeId]);

  return (
    <main className="h-screen overflow-hidden bg-slate-100">

      {/* ================= HEADER ================= */}

      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">

        {/* BRAND */}

        <div className="flex min-w-0 items-center gap-3">

          <img
            src="/logo.jpg"
            alt="MH SHOVON Resume Maker"
            className="h-9 w-9 rounded-lg object-cover"
          />

          <div className="min-w-0">

            <div className="truncate text-sm font-black text-slate-950">
              MH SHOVON Resume Maker
            </div>

            <div className="hidden text-[10px] font-semibold tracking-[0.18em] text-slate-400 sm:block">
              BUILD YOUR CAREER
            </div>

          </div>

        </div>


        {/* ACTIONS */}

        <div className="flex items-center gap-2">

          {/* RESET */}

          <button
            type="button"
            onClick={reset}
            className="hidden items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-50 sm:flex"
          >
            <RotateCcw size={15} />

            Reset
          </button>


          {/* DOWNLOAD PDF */}

          <button type="button" onClick={() => setLibraryOpen(true)} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50"><FolderOpen size={15} /> <span className="hidden sm:inline">My Resumes</span><span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px]">{resumes.length}</span></button>
          <div className="hidden items-center gap-1.5 text-[10px] font-bold text-slate-400 xl:flex">{saved ? <CheckCircle2 size={13} className="text-emerald-500" /> : <CloudOff size={13} />} {saved ? "Saved" : "Saving..."}</div>
          <PDFDownloadButton />

        </div>

      </header>


      {/* ================= MAIN BUILDER ================= */}

      <div className="grid h-[calc(100vh-4rem)] lg:grid-cols-2">

        {/* ================= LEFT EDITOR ================= */}

        <section className="min-h-0 border-r border-slate-200 bg-white">

          <ResumeEditor />

        </section>


        {/* ================= RIGHT PREVIEW ================= */}

        <section className="hidden min-h-0 overflow-auto lg:block">

          {/* Preview Header */}

          <div className="sticky top-0 z-10 flex items-center gap-2 border-b border-slate-200 bg-white/95 px-5 py-3 text-xs font-bold text-slate-500 backdrop-blur">

            <Eye size={15} />

            Live A4 Preview

          </div>


          {/* Resume */}

          <ResumePreview />

        </section>

      </div>

      {libraryOpen && <ResumeLibrary onClose={() => setLibraryOpen(false)} />}
    </main>
  );
}


/*
|--------------------------------------------------------------------------
| IMPORTANT
|--------------------------------------------------------------------------
| Export as DEFAULT.
|
| This fixes:
| "Element type is invalid... got undefined"
|--------------------------------------------------------------------------
*/

export default ResumeBuilder;