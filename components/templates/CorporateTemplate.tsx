"use client";
import type { ResumeData } from "@/lib/types/resume";
import { ContactLine, ExperienceList, EducationList, SkillsList, ProjectsList, CertificationsList, SectionHeading } from "./parts";
export function CorporateTemplate({resume}:{resume:ResumeData}){const {personal,summary,experience,education,customization}=resume;return <article className="resume-paper bg-white shadow-2xl" style={{padding:customization.margin,fontFamily:customization.fontFamily,fontSize:11.5,lineHeight:1.4,color:"#172033"}}>
<header className="border-b-2 pb-4" style={{borderColor:customization.themeColor}}><div className="flex justify-between gap-6"><div><h1 className="text-[27px] font-black" style={{color:customization.themeColor}}>{personal.fullName||"Your Name"}</h1>{personal.jobTitle&&<p className="mt-1 font-semibold text-slate-600">{personal.jobTitle}</p>}</div><div className="max-w-[48%] pt-1 text-right"><ContactLine resume={resume} muted/></div></div></header>
{summary&&<section className="mt-5"><SectionHeading title="Profile" color={customization.themeColor} style="bar"/><p className="whitespace-pre-line">{summary}</p></section>}
{experience.length>0&&<section className="mt-5"><SectionHeading title="Professional Experience" color={customization.themeColor} style="bar"/><ExperienceList resume={resume}/></section>}
{education.length>0&&<section className="mt-5"><SectionHeading title="Education" color={customization.themeColor} style="bar"/><EducationList resume={resume}/></section>}
{resume.skills.length>0&&<section className="mt-5"><SectionHeading title="Core Skills" color={customization.themeColor} style="bar"/><SkillsList resume={resume} pills/></section>}
{resume.projects.length>0&&<section className="mt-5"><SectionHeading title="Selected Projects" color={customization.themeColor} style="bar"/><ProjectsList resume={resume}/></section>}
{resume.certifications.length>0&&<section className="mt-5"><SectionHeading title="Certifications" color={customization.themeColor} style="bar"/><CertificationsList resume={resume}/></section>}
</article>}
