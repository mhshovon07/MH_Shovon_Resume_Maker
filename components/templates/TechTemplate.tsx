"use client";
import type { ResumeData } from "@/lib/types/resume";
import { ContactLine, ExperienceList, EducationList, SkillsList, ProjectsList, CertificationsList, SectionHeading } from "./parts";
export function TechTemplate({resume}:{resume:ResumeData}){const {personal,summary,experience,education,customization}=resume;const accent=customization.themeColor;return <article className="resume-paper bg-white shadow-2xl" style={{padding:customization.margin,fontFamily:"Arial, sans-serif",fontSize:11,lineHeight:1.4,color:"#111827"}}>
<header className="rounded-xl p-5 text-white" style={{background:accent}}><h1 className="text-[28px] font-black">{personal.fullName||"Your Name"}</h1>{personal.jobTitle&&<p className="mt-1 text-[14px] font-semibold text-white/80">{personal.jobTitle}</p>}<div className="mt-3"><ContactLine resume={resume}/></div></header>
{summary&&<section className="mt-5"><SectionHeading title="About" color={accent}/><p className="whitespace-pre-line">{summary}</p></section>}
{resume.skills.length>0&&<section className="mt-5"><SectionHeading title="Technical Skills" color={accent}/><SkillsList resume={resume} pills/></section>}
{experience.length>0&&<section className="mt-5"><SectionHeading title="Experience" color={accent}/><ExperienceList resume={resume}/></section>}
{resume.projects.length>0&&<section className="mt-5"><SectionHeading title="Projects" color={accent}/><ProjectsList resume={resume}/></section>}
{education.length>0&&<section className="mt-5"><SectionHeading title="Education" color={accent}/><EducationList resume={resume}/></section>}
{resume.certifications.length>0&&<section className="mt-5"><SectionHeading title="Certifications" color={accent}/><CertificationsList resume={resume}/></section>}
</article>}
