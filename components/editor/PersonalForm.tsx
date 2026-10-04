"use client";

import { useResumeStore } from "@/lib/store/resume-store";
import { Field } from "./Field";

export function PersonalForm() {
  const personal = useResumeStore((s) => s.resume.personal);
  const update = useResumeStore((s) => s.updatePersonal);

  const fields: [keyof typeof personal, string, string][] = [
    ["fullName", "Full Name", "Your full name"],
    ["jobTitle", "Professional Title", "Software Engineer"],
    ["email", "Email", "you@example.com"],
    ["phone", "Phone", "+880 1XXXXXXXXX"],
    ["location", "Location", "Dhaka, Bangladesh"],
    ["website", "Website", "https://example.com"],
    ["linkedin", "LinkedIn", "linkedin.com/in/username"],
    ["github", "GitHub", "github.com/username"]
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {fields.map(([key, label, placeholder]) => (
        <Field
          key={key}
          label={label}
          value={personal[key]}
          placeholder={placeholder}
          onChange={(value) => update({ [key]: value })}
          type={key === "email" ? "email" : "text"}
        />
      ))}
    </div>
  );
}
