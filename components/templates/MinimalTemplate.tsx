"use client";
import type { ResumeData } from "@/lib/types/resume";
import { ContactLine, ExperienceList, EducationList, SkillsList, ProjectsList, CertificationsList } from "./parts";
export function MinimalTemplate({resume}:{resume:ResumeData}){const {personal,summary,experience,education,customization}=resume;const accent=customization.themeColor;return <article className="resume-paper bg-white shadow-2xl" style={{padding:customization.margin,fontFamily:customization.fontFamily,fontSize:11.5,lineHeight:1.45,color:"#1f2937"}}>
<header className="pb-6"><h1 className="text-[31px] font-light tracking-tight" style={{color:accent}}>{personal.fullName||"Your Name"}</h1>{personal.jobTitle&&<p className="mt-1 text-[14px] text-slate-500">{personal.jobTitle}</p>}<div className="mt-3"><ContactLine resume={resume} muted/></div></header>
{summary&&<section className="mt-6"><h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em]" style={{color:accent}}>Summary</h2><p className="whitespace-pre-line text-slate-600">{summary}</p></section>}
{experience.length>0&&<section className="mt-6"><h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em]" style={{color:accent}}>Experience</h2><ExperienceList resume={resume}/></section>}
{education.length>0&&<section className="mt-6"><h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em]" style={{color:accent}}>Education</h2><EducationList resume={resume}/></section>}
{resume.skills.length>0&&<section className="mt-6"><h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em]" style={{color:accent}}>Skills</h2><SkillsList resume={resume}/></section>}
{resume.projects.length>0&&<section className="mt-6"><h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em]" style={{color:accent}}>Projects</h2><ProjectsList resume={resume}/></section>}
{resume.certifications.length>0&&<section className="mt-6"><h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em]" style={{color:accent}}>Certifications</h2><CertificationsList resume={resume}/></section>}
</article>}
