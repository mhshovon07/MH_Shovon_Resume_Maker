"use client";
import type { ResumeData } from "@/lib/types/resume";
import { ContactLine, ExperienceList, EducationList, SkillsList, ProjectsList, CertificationsList, SectionHeading } from "./parts";
export function ExecutiveTemplate({resume}:{resume:ResumeData}){const {personal,summary,experience,education,customization}=resume;const accent=customization.themeColor;return <article className="resume-paper bg-white shadow-2xl" style={{padding:customization.margin,fontFamily:customization.fontFamily,fontSize:11.5,lineHeight:1.42,color:"#1f2937"}}>
<header className="pb-5"><h1 className="text-[29px] font-black tracking-tight text-slate-900">{personal.fullName||"Your Name"}</h1><div className="mt-1 flex items-center justify-between gap-5"><p className="font-semibold" style={{color:accent}}>{personal.jobTitle||"Professional"}</p><ContactLine resume={resume} muted/></div></header>
{summary&&<section className="border-t pt-4" style={{borderColor:accent}}><SectionHeading title="Executive Profile" color={accent} style="plain"/><p className="whitespace-pre-line text-slate-600">{summary}</p></section>}
{experience.length>0&&<section className="mt-5"><SectionHeading title="Career Experience" color={accent} style="plain"/><ExperienceList resume={resume}/></section>}
{resume.skills.length>0&&<section className="mt-5"><SectionHeading title="Core Competencies" color={accent} style="plain"/><SkillsList resume={resume}/></section>}
{education.length>0&&<section className="mt-5"><SectionHeading title="Education" color={accent} style="plain"/><EducationList resume={resume}/></section>}
{resume.projects.length>0&&<section className="mt-5"><SectionHeading title="Selected Projects" color={accent} style="plain"/><ProjectsList resume={resume}/></section>}
{resume.certifications.length>0&&<section className="mt-5"><SectionHeading title="Credentials" color={accent} style="plain"/><CertificationsList resume={resume}/></section>}
</article>}
