"use client";

import { useState } from "react";

import {
  ArrowRight,
  Check,
  Download,
  FileText,
  LayoutTemplate,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import ResumeBuilder from "@/components/ResumeBuilder";


export default function HomePage() {

  const [started, setStarted] = useState(false);


  /*
  |--------------------------------------------------------------------------
  | OPEN RESUME BUILDER
  |--------------------------------------------------------------------------
  */

  if (started) {

    return <ResumeBuilder />;

  }


  /*
  |--------------------------------------------------------------------------
  | LANDING PAGE
  |--------------------------------------------------------------------------
  */

  return (

    <main className="min-h-screen bg-white">


      {/* ================================================================ */}
      {/* HEADER */}
      {/* ================================================================ */}

      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


          {/* BRAND */}

          <div className="flex items-center gap-3">

            <img
              src="/logo.jpg"
              alt="MH SHOVON Resume Maker"
              className="h-11 w-11 rounded-xl object-cover"
            />

            <div>

              <div className="text-lg font-black tracking-tight text-slate-950">
                MH SHOVON
              </div>

              <div className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                RESUME MAKER
              </div>

            </div>

          </div>


          {/* HEADER BUTTON */}

          <button
            type="button"
            onClick={() => setStarted(true)}
            className="rounded-xl bg-[#174a9c] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#123d83]"
          >
            Create Resume
          </button>

        </div>

      </header>


      {/* ================================================================ */}
      {/* HERO */}
      {/* ================================================================ */}

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,#dff8f8,transparent_34%),linear-gradient(180deg,#f8fbff,#fff)]">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-28">


          {/* LEFT CONTENT */}

          <div>


            {/* BADGE */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#174a9c]">

              <Sparkles size={14} />

              Professional CV Builder

            </div>


            {/* TITLE */}

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl">

              Build a resume that looks professional and reads clearly.

            </h1>


            {/* DESCRIPTION */}

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">

              Create, customize, preview and download an ATS-friendly resume
              directly in your browser.

            </p>


            {/* BUTTONS */}

            <div className="mt-8 flex flex-wrap gap-3">


              <button
                type="button"
                onClick={() => setStarted(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#174a9c] px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-100 transition hover:bg-[#123d83]"
              >

                Start Building

                <ArrowRight size={18} />

              </button>


              <a
                href="#features"
                className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-700 transition hover:bg-slate-50"
              >

                Explore Features

              </a>

            </div>


            {/* FEATURES */}

            <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">

              <div className="flex items-center gap-2">

                <Check
                  size={16}
                  className="text-emerald-600"
                />

                Live preview

              </div>


              <div className="flex items-center gap-2">

                <Check
                  size={16}
                  className="text-emerald-600"
                />

                ATS-friendly PDF

              </div>


              <div className="flex items-center gap-2">

                <Check
                  size={16}
                  className="text-emerald-600"
                />

                Autosave-ready

              </div>

            </div>

          </div>


          {/* ============================================================ */}
          {/* RESUME MOCKUP */}
          {/* ============================================================ */}

          <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4 shadow-2xl shadow-slate-200">

            <div className="rounded-2xl bg-white p-7 shadow-sm">


              {/* NAME */}

              <div className="border-b border-slate-200 pb-5">

                <div className="text-3xl font-black text-[#174a9c]">

                  YOUR NAME

                </div>

                <div className="mt-1 text-sm font-semibold text-slate-500">

                  Software Engineer

                </div>

                <div className="mt-3 text-xs text-slate-500">

                  email@example.com • Dhaka, Bangladesh •
                  linkedin.com/in/yourname

                </div>

              </div>


              {/* MOCK SECTIONS */}

              {[
                "Professional Summary",
                "Experience",
                "Education",
                "Skills",
              ].map((section) => (

                <div
                  key={section}
                  className="mt-5"
                >

                  <div className="border-b border-[#174a9c] pb-1 text-xs font-black uppercase tracking-widest text-[#174a9c]">

                    {section}

                  </div>


                  <div className="mt-2 space-y-1.5">

                    <div className="h-2 w-11/12 rounded bg-slate-200" />

                    <div className="h-2 w-9/12 rounded bg-slate-100" />

                    <div className="h-2 w-10/12 rounded bg-slate-100" />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================================================================ */}
      {/* FEATURES */}
      {/* ================================================================ */}

      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-20"
      >

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">


          {/* TEMPLATE */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#174a9c]">

              <LayoutTemplate size={21} />

            </div>

            <h2 className="font-extrabold">
              Professional Templates
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">

              Clean layouts designed for readability and hiring workflows.

            </p>

          </div>


          {/* LIVE PREVIEW */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#174a9c]">

              <FileText size={21} />

            </div>

            <h2 className="font-extrabold">
              Live A4 Preview
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">

              See your resume update as you type without page refreshes.

            </p>

          </div>


          {/* PDF */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#174a9c]">

              <Download size={21} />

            </div>

            <h2 className="font-extrabold">
              PDF Export
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">

              Generate a text-based PDF directly in your browser.

            </p>

          </div>


          {/* PRIVACY */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#174a9c]">

              <ShieldCheck size={21} />

            </div>

            <h2 className="font-extrabold">
              Privacy First
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">

              Keep editing local and connect Supabase when you need cloud
              persistence.

            </p>

          </div>

        </div>

      </section>


      {/* ================================================================ */}
      {/* FOOTER */}
      {/* ================================================================ */}

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">

        © {new Date().getFullYear()} MH SHOVON Resume Maker

      </footer>

    </main>

  );
}