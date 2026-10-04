"use client";

import { create } from "zustand";
import type { Certification, Education, PersonalInfo, Project, ResumeData, ResumeTemplate, Skill, WorkExperience } from "@/lib/types/resume";

const id = () => crypto.randomUUID();

export const createEmptyResume = (title = "My Resume"): ResumeData => ({
  id: id(), title,
  personal: { fullName: "", jobTitle: "", email: "", phone: "", location: "", website: "", linkedin: "", github: "" },
  summary: "", experience: [], education: [], skills: [], projects: [], certifications: [],
  customization: { template: "modern", themeColor: "#174a9c", fontFamily: "Arial", fontSize: "medium", margin: 42, sectionSpacing: 18 }
});

const initialResume = createEmptyResume();

type ResumeStore = {
  resume: ResumeData;
  resumes: ResumeData[];
  currentResumeId: string;
  updatePersonal: (data: Partial<PersonalInfo>) => void;
  updateSummary: (summary: string) => void;
  addExperience: () => void;
  updateExperience: (id: string, data: Partial<WorkExperience>) => void;
  removeExperience: (id: string) => void;
  addEducation: () => void;
  updateEducation: (id: string, data: Partial<Education>) => void;
  removeEducation: (id: string) => void;
  addSkill: () => void;
  updateSkill: (id: string, data: Partial<Skill>) => void;
  removeSkill: (id: string) => void;
  addProject: () => void;
  updateProject: (id: string, data: Partial<Project>) => void;
  removeProject: (id: string) => void;
  addCertification: () => void;
  updateCertification: (id: string, data: Partial<Certification>) => void;
  removeCertification: (id: string) => void;
  updateCustomization: (data: Partial<ResumeData["customization"]>) => void;
  setTemplate: (template: ResumeTemplate) => void;
  renameResume: (title: string) => void;
  createResume: () => void;
  duplicateResume: (resumeId: string) => void;
  deleteResume: (resumeId: string) => void;
  selectResume: (resumeId: string) => void;
  hydrateLibrary: () => void;
  reset: () => void;
};

export const useResumeStore = create<ResumeStore>((set) => {
  const patch = (updater: (r: ResumeData) => ResumeData) => set((s) => ({ resume: updater(s.resume) }));
  return {
    resume: initialResume,
    resumes: [initialResume],
    currentResumeId: initialResume.id,

    updatePersonal: (data) => patch((r) => ({ ...r, personal: { ...r.personal, ...data } })),
    updateSummary: (summary) => patch((r) => ({ ...r, summary })),
    addExperience: () => patch((r) => ({ ...r, experience: [...r.experience, { id: id(), jobTitle: "", company: "", location: "", startDate: "", endDate: "", currentlyWorking: false, description: "" }] })),
    updateExperience: (rid, data) => patch((r) => ({ ...r, experience: r.experience.map((x) => x.id === rid ? { ...x, ...data } : x) })),
    removeExperience: (rid) => patch((r) => ({ ...r, experience: r.experience.filter((x) => x.id !== rid) })),
    addEducation: () => patch((r) => ({ ...r, education: [...r.education, { id: id(), degree: "", institution: "", location: "", startDate: "", endDate: "", description: "" }] })),
    updateEducation: (rid, data) => patch((r) => ({ ...r, education: r.education.map((x) => x.id === rid ? { ...x, ...data } : x) })),
    removeEducation: (rid) => patch((r) => ({ ...r, education: r.education.filter((x) => x.id !== rid) })),
    addSkill: () => patch((r) => ({ ...r, skills: [...r.skills, { id: id(), name: "", category: "" }] })),
    updateSkill: (rid, data) => patch((r) => ({ ...r, skills: r.skills.map((x) => x.id === rid ? { ...x, ...data } : x) })),
    removeSkill: (rid) => patch((r) => ({ ...r, skills: r.skills.filter((x) => x.id !== rid) })),
    addProject: () => patch((r) => ({ ...r, projects: [...r.projects, { id: id(), name: "", role: "", description: "", url: "", technologies: [] }] })),
    updateProject: (rid, data) => patch((r) => ({ ...r, projects: r.projects.map((x) => x.id === rid ? { ...x, ...data } : x) })),
    removeProject: (rid) => patch((r) => ({ ...r, projects: r.projects.filter((x) => x.id !== rid) })),
    addCertification: () => patch((r) => ({ ...r, certifications: [...r.certifications, { id: id(), name: "", issuer: "", issueDate: "", credentialUrl: "" }] })),
    updateCertification: (rid, data) => patch((r) => ({ ...r, certifications: r.certifications.map((x) => x.id === rid ? { ...x, ...data } : x) })),
    removeCertification: (rid) => patch((r) => ({ ...r, certifications: r.certifications.filter((x) => x.id !== rid) })),
    updateCustomization: (data) => patch((r) => ({ ...r, customization: { ...r.customization, ...data } })),
    setTemplate: (template) => patch((r) => ({ ...r, customization: { ...r.customization, template } })),

    renameResume: (title) => patch((r) => ({ ...r, title: title.trim() || "Untitled Resume" })),
    createResume: () => set((s) => { const next = createEmptyResume(`Resume ${s.resumes.length + 1}`); return { resume: next, resumes: [...s.resumes, next], currentResumeId: next.id }; }),
    duplicateResume: (resumeId) => set((s) => { const source = s.resumes.find((r) => r.id === resumeId) ?? s.resume; const copy = structuredClone(source); copy.id = id(); copy.title = `${source.title} Copy`; return { resume: copy, resumes: [...s.resumes, copy], currentResumeId: copy.id }; }),
    deleteResume: (resumeId) => set((s) => { if (s.resumes.length <= 1) return s; const remaining = s.resumes.filter((r) => r.id !== resumeId); const next = remaining.find((r) => r.id === s.currentResumeId) ?? remaining[0]; return { resumes: remaining, resume: next, currentResumeId: next.id }; }),
    selectResume: (resumeId) => set((s) => { const next = s.resumes.find((r) => r.id === resumeId); return next ? { resume: next, currentResumeId: next.id } : s; }),
    hydrateLibrary: () => set(() => { try { const raw = localStorage.getItem("mh-shovon-resume-library"); if (!raw) return {}; const parsed = JSON.parse(raw); if (!Array.isArray(parsed) || !parsed.length) return {}; const currentId = localStorage.getItem("mh-shovon-current-resume") || parsed[0].id; const current = parsed.find((r: ResumeData) => r.id === currentId) ?? parsed[0]; return { resumes: parsed, resume: current, currentResumeId: current.id }; } catch { return {}; } }),
    reset: () => patch((r) => ({ ...createEmptyResume(r.title), id: r.id }))
  };
});
