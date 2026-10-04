"use client";

import type { ResumeData } from "@/lib/types/resume";

export function ModernTemplate({ resume }: { resume: ResumeData }) {
  const { personal, summary, experience, education, skills, customization } = resume;
  const bodySize = customization.fontSize === "small" ? 11 : customization.fontSize === "large" ? 13 : 12;

  return (
    <article
      className="resume-paper bg-white shadow-2xl"
      style={{
        padding: customization.margin,
        fontFamily: customization.fontFamily,
        fontSize: bodySize,
        lineHeight: customization.fontSize === "small" ? 1.4 : 1.5,
        color: "#111827"
      }}
    >
      <header className="border-b border-slate-200 pb-5">
        <h1 className="text-[30px] font-black tracking-tight" style={{ color: customization.themeColor }}>
          {personal.fullName || "Your Name"}
        </h1>
        {personal.jobTitle && <p className="mt-1 text-[16px] font-semibold text-slate-600">{personal.jobTitle}</p>}
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-slate-500">
          {[personal.email, personal.phone, personal.location, personal.website, personal.linkedin, personal.github].filter(Boolean).map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </header>

      {summary && <Section title="Professional Summary" color={customization.themeColor} spacing={customization.sectionSpacing}><p className="whitespace-pre-line">{summary}</p></Section>}

      {experience.length > 0 && (
        <Section title="Experience" color={customization.themeColor} spacing={customization.sectionSpacing}>
          <div className="space-y-5">
            {experience.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-bold">{item.jobTitle || "Job Title"}</h3>
                    <p className="font-semibold text-slate-600">{item.company}{item.location ? ` • ${item.location}` : ""}</p>
                  </div>
                  <div className="whitespace-nowrap text-[10px] text-slate-500">{item.startDate} – {item.currentlyWorking ? "Present" : item.endDate}</div>
                </div>
                {item.description && <p className="mt-2 whitespace-pre-line text-slate-700">{item.description}</p>}
              </div>
            ))}
          </div>
        </Section>
      )}

      {education.length > 0 && (
        <Section title="Education" color={customization.themeColor} spacing={customization.sectionSpacing}>
          <div className="space-y-4">
            {education.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-bold">{item.degree || "Degree"}</h3>
                    <p className="font-semibold text-slate-600">{item.institution}{item.location ? ` • ${item.location}` : ""}</p>
                  </div>
                  <div className="whitespace-nowrap text-[10px] text-slate-500">{item.startDate} – {item.endDate}</div>
                </div>
                {item.description && <p className="mt-1 text-slate-600">{item.description}</p>}
              </div>
            ))}
          </div>
        </Section>
      )}

      {skills.length > 0 && (
        <Section title="Skills" color={customization.themeColor} spacing={customization.sectionSpacing}>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {skills.filter((x) => x.name.trim()).map((skill) => (
              <span key={skill.id} className="font-medium">{skill.name}</span>
            ))}
          </div>
        </Section>
      )}

      {resume.projects.length > 0 && (
        <Section title="Projects" color={customization.themeColor} spacing={customization.sectionSpacing}>
          <div className="space-y-4">{resume.projects.map((item) => <div key={item.id}><h3 className="font-bold">{item.name || "Project Name"}</h3>{item.role && <p className="font-semibold text-slate-600">{item.role}</p>}<p className="mt-1 whitespace-pre-line">{item.description}</p>{item.technologies.length > 0 && <p className="mt-1 text-[10px] text-slate-500">{item.technologies.join(" • ")}</p>}</div>)}</div>
        </Section>
      )}

      {resume.certifications.length > 0 && (
        <Section title="Certifications" color={customization.themeColor} spacing={customization.sectionSpacing}>
          <div className="space-y-3">{resume.certifications.map((item) => <div key={item.id}><h3 className="font-bold">{item.name}</h3><p className="text-slate-600">{item.issuer}{item.issueDate ? ` • ${item.issueDate}` : ""}</p></div>)}</div>
        </Section>
      )}
    </article>
  );
}

function Section({ title, color, spacing, children }: { title: string; color: string; spacing: number; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: spacing }}>
      <h2 className="mb-3 border-b pb-1 text-[13px] font-black uppercase tracking-[0.12em]" style={{ borderColor: color, color }}>
        {title}
      </h2>
      {children}
    </section>
  );
}
