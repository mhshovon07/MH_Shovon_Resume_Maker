"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Accordion({
  title,
  children,
  defaultOpen = true
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="border-b border-slate-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-slate-50"
      >
        <span className="text-sm font-extrabold text-slate-900">{title}</span>
        <ChevronDown size={17} className={open ? "rotate-180 transition" : "transition"} />
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </section>
  );
}
