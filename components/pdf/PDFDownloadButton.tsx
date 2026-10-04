"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { useResumeStore } from "@/lib/store/resume-store";
import { ResumePDF } from "./ResumePDF";

export function PDFDownloadButton() {
  const resume = useResumeStore((s) => s.resume);
  const safeName = (resume.personal.fullName || "MH-SHOVON-Resume").trim().replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-_]/g, "");

  return (
    <PDFDownloadLink
      document={<ResumePDF resume={resume} />}
      fileName={`${safeName || "resume"}.pdf`}
      className="inline-flex items-center gap-2 rounded-xl bg-[#174a9c] px-4 py-2.5 text-sm font-extrabold text-white hover:bg-[#123d83]"
    >
      {({ loading }) => <><Download size={16} />{loading ? "Generating..." : "Download PDF"}</>}
    </PDFDownloadLink>
  );
}
