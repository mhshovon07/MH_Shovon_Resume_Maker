"use client";

import { Accordion } from "./Accordion";
import { PersonalForm } from "./PersonalForm";
import { SummaryForm } from "./SummaryForm";
import { ExperienceForm } from "./ExperienceForm";
import { EducationForm } from "./EducationForm";
import { SkillsForm } from "./SkillsForm";
import { ProjectsForm } from "./ProjectsForm";
import { CertificationsForm } from "./CertificationsForm";
import { StylingControls } from "./StylingControls";
import { TemplateGallery } from "./TemplateGallery";

export function ResumeEditor() {
  return (
    <div className="h-full overflow-y-auto bg-white">
      <TemplateGallery />
      <div className="border-b border-slate-200 px-5 py-4">
        <div className="text-sm font-black text-slate-950">Edit your resume</div>
        <div className="mt-1 text-xs text-slate-500">Changes appear instantly in the preview.</div>
      </div>
      <Accordion title="Personal Information"><PersonalForm /></Accordion>
      <Accordion title="Professional Summary"><SummaryForm /></Accordion>
      <Accordion title="Work Experience"><ExperienceForm /></Accordion>
      <Accordion title="Education"><EducationForm /></Accordion>
      <Accordion title="Skills"><SkillsForm /></Accordion>
      <Accordion title="Projects"><ProjectsForm /></Accordion>
      <Accordion title="Certifications"><CertificationsForm /></Accordion>
      <Accordion title="Styling" defaultOpen={false}><StylingControls /></Accordion>
    </div>
  );
}
