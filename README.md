# MH SHOVON Resume Maker

Modern Next.js resume builder with live A4 preview, browser PDF export, Zustand state management and six selectable ATS-conscious templates.

## Templates
- ATS Classic
- Modern Professional
- Corporate
- Minimal
- Tech / Developer
- Executive

Template changes do not modify resume data. The selected template is stored in `resume.customization.template` and is used by the live preview and PDF renderer.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production
```bash
npm run build
npm start
```

Supabase is ready for connection through the existing environment variables.
