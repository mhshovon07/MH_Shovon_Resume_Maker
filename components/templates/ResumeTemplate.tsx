"use client";
import type { ResumeData } from "@/lib/types/resume";
import { ATSClassicTemplate } from "./ATSClassicTemplate";
import { ModernTemplate } from "./ModernTemplate";
import { CorporateTemplate } from "./CorporateTemplate";
import { MinimalTemplate } from "./MinimalTemplate";
import { TechTemplate } from "./TechTemplate";
import { ExecutiveTemplate } from "./ExecutiveTemplate";
export function ResumeTemplate({resume}:{resume:ResumeData}){switch(resume.customization.template){case "ats-classic":return <ATSClassicTemplate resume={resume}/>;case "corporate":return <CorporateTemplate resume={resume}/>;case "minimal":return <MinimalTemplate resume={resume}/>;case "tech":return <TechTemplate resume={resume}/>;case "executive":return <ExecutiveTemplate resume={resume}/>;default:return <ModernTemplate resume={resume}/>;}}
