"use client";
import type { ResumeData } from "@/lib/types/resume";
import { ContactLine, ExperienceList, EducationList, SkillsList, ProjectsList, CertificationsList, SectionHeading } from "./parts";
export function ATSClassicTemplate({resume}:{resume:ResumeData}){const {personal,summary,experience,education,customization}=resume;return <article className="resume-paper bg-white shadow-2xl" style={{padding:customization.margin,fontFamily:"Arial, sans-serif",fontSize:11,lineHeight:1.38,color:"#111827"}}>
<header className="pb-4"><h1 className="text-[26px] font-bold">{personal.fullName||"Your Name"}</h1>{personal.jobTitle&&<p className="mt-1 text-[13px] font-semibold">{personal.jobTitle}</p>}<div className="mt-2"><ContactLine resume={resume} muted/></div></header>
{summary&&<section className="mt-4"><SectionHeading title="Professional Summary" color="#111827" style="plain"/><p className="whitespace-pre-line">{summary}</p></section>}
{experience.length>0&&<section className="mt-4"><SectionHeading title="Experience" color="#111827" style="plain"/><ExperienceList resume={resume} compact/></section>}
{education.length>0&&<section className="mt-4"><SectionHeading title="Education" color="#111827" style="plain"/><EducationList resume={resume}/></section>}
{resume.skills.length>0&&<section className="mt-4"><SectionHeading title="Skills" color="#111827" style="plain"/><SkillsList resume={resume}/></section>}
{resume.projects.length>0&&<section className="mt-4"><SectionHeading title="Projects" color="#111827" style="plain"/><ProjectsList resume={resume}/></section>}
{resume.certifications.length>0&&<section className="mt-4"><SectionHeading title="Certifications" color="#111827" style="plain"/><CertificationsList resume={resume}/></section>}
</article>}
