"use client";
import type { ResumeData } from "@/lib/types/resume";
import { ContactLine, ExperienceList, EducationList, SkillsList, ProjectsList, CertificationsList, SectionHeading } from "./parts";
export function ModernTemplate({ resume }: { resume: ResumeData }) {
 const {personal,summary,experience,education,customization}=resume; const body=customization.fontSize==="small"?11:customization.fontSize==="large"?13:12;
 return <article className="resume-paper bg-white shadow-2xl" style={{padding:customization.margin,fontFamily:customization.fontFamily,fontSize:body,lineHeight:1.45,color:"#111827"}}>
  <header className="border-b border-slate-200 pb-5"><h1 className="text-[30px] font-black tracking-tight" style={{color:customization.themeColor}}>{personal.fullName||"Your Name"}</h1>{personal.jobTitle&&<p className="mt-1 text-[16px] font-semibold text-slate-600">{personal.jobTitle}</p>}<div className="mt-3"><ContactLine resume={resume}/></div></header>
  {summary&&<section style={{marginTop:customization.sectionSpacing}}><SectionHeading title="Professional Summary" color={customization.themeColor}/><p className="whitespace-pre-line">{summary}</p></section>}
  {experience.length>0&&<section style={{marginTop:customization.sectionSpacing}}><SectionHeading title="Experience" color={customization.themeColor}/><ExperienceList resume={resume}/></section>}
  {education.length>0&&<section style={{marginTop:customization.sectionSpacing}}><SectionHeading title="Education" color={customization.themeColor}/><EducationList resume={resume}/></section>}
  {resume.skills.length>0&&<section style={{marginTop:customization.sectionSpacing}}><SectionHeading title="Skills" color={customization.themeColor}/><SkillsList resume={resume}/></section>}
  {resume.projects.length>0&&<section style={{marginTop:customization.sectionSpacing}}><SectionHeading title="Projects" color={customization.themeColor}/><ProjectsList resume={resume}/></section>}
  {resume.certifications.length>0&&<section style={{marginTop:customization.sectionSpacing}}><SectionHeading title="Certifications" color={customization.themeColor}/><CertificationsList resume={resume}/></section>}
 </article>;
}
