import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

import type { ResumeData } from "@/lib/types/resume";

interface ResumePDFProps {
  resume: ResumeData;
}

export function ResumePDF({ resume }: ResumePDFProps) {
  const {
    personal,
    summary,
    experience,
    education,
    skills,
    projects,
    certifications,
    customization,
  } = resume;

  const template = customization.template;
  const isAts = template === "ats-classic";
  const isTech = template === "tech";
  const isMinimal = template === "minimal";
  const isExecutive = template === "executive";
  const accent = isAts ? "#111827" : customization.themeColor;

  /*
  |--------------------------------------------------------------------------
  | PDF TYPOGRAPHY
  |--------------------------------------------------------------------------
  |
  | React-PDF does NOT use normal browser CSS.
  | Therefore this stylesheet is specifically optimized for A4 PDF.
  |
  */

  const styles = StyleSheet.create({
    page: {
      size: "A4",

      paddingTop: isMinimal ? 42 : 36,
      paddingBottom: isMinimal ? 42 : 36,
      paddingLeft: isExecutive ? 48 : 42,
      paddingRight: isExecutive ? 48 : 42,

      fontFamily: isTech ? "Helvetica" : "Helvetica",

      fontSize: isAts ? 8.6 : 9,

      lineHeight: 1.35,

      color: "#111827",

      backgroundColor: "#ffffff",
    },

    /* ================================================================
       HEADER
       ================================================================ */

    header: {
      width: "100%",

      paddingBottom: 11,

      borderBottomWidth: 0.8,

      borderBottomColor: isAts ? "#111827" : "#d1d5db",

      flexShrink: 0,
    },

    name: {
      fontFamily: "Helvetica-Bold",

      fontSize: isMinimal ? 22 : 23,

      /*
       * IMPORTANT:
       * Increased line height prevents the job title
       * from touching/overlapping the name.
       */
      lineHeight: 1.25,

      color: accent,

      marginBottom: 3,
    },

    jobTitle: {
      fontFamily: "Helvetica",

      fontSize: 9.5,

      lineHeight: 1.25,

      color: "#475569",

      marginTop: 1,

      marginBottom: 8,
    },

    contact: {
      flexDirection: "row",

      flexWrap: "wrap",

      alignItems: "center",

      gap: 5,

      fontSize: 7,

      lineHeight: 1.25,

      color: "#64748b",
    },

    contactText: {
      fontSize: 7,

      lineHeight: 1.25,

      color: "#475569",
    },

    /* ================================================================
       SECTIONS
       ================================================================ */

    section: {
      marginTop: 13,

      flexShrink: 0,
    },

    sectionTitle: {
      fontFamily: "Helvetica-Bold",

      fontSize: 9.5,

      lineHeight: 1.2,

      color: accent,

      letterSpacing: 0.7,

      marginBottom: 6,

      paddingBottom: 3,

      borderBottomWidth: 0.8,

      borderBottomColor: accent,
    },

    /* ================================================================
       SUMMARY
       ================================================================ */

    summaryText: {
      fontFamily: "Helvetica",

      fontSize: 8,

      lineHeight: 1.4,

      color: "#374151",
    },

    /* ================================================================
       EXPERIENCE
       ================================================================ */

    experienceItem: {
      marginBottom: 10,

      flexShrink: 0,
    },

    topRow: {
      flexDirection: "row",

      justifyContent: "space-between",

      alignItems: "flex-start",

      gap: 10,
    },

    itemLeft: {
      flex: 1,
    },

    itemTitle: {
      fontFamily: "Helvetica-Bold",

      fontSize: 8.5,

      lineHeight: 1.25,

      color: "#111827",
    },

    company: {
      fontFamily: "Helvetica-Bold",

      fontSize: 7.4,

      lineHeight: 1.25,

      color: "#475569",

      marginTop: 2,
    },

    date: {
      width: 90,

      fontFamily: "Helvetica",

      fontSize: 6.8,

      lineHeight: 1.25,

      color: "#64748b",

      textAlign: "right",
    },

    description: {
      marginTop: 4,

      fontFamily: "Helvetica",

      fontSize: 7.5,

      lineHeight: 1.4,

      color: "#374151",
    },

    /* ================================================================
       EDUCATION
       ================================================================ */

    educationItem: {
      marginBottom: 9,

      flexShrink: 0,
    },

    educationDescription: {
      marginTop: 3,

      fontFamily: "Helvetica",

      fontSize: 7.3,

      lineHeight: 1.35,

      color: "#475569",
    },

    /* ================================================================
       SKILLS
       ================================================================ */

    skillsContainer: {
      flexDirection: "row",

      flexWrap: "wrap",

      gap: 5,
    },

    skill: {
      fontFamily: "Helvetica",

      fontSize: 7,

      lineHeight: 1.15,

      color: "#334155",

      backgroundColor: "#f1f5f9",

      paddingTop: 4,

      paddingBottom: 4,

      paddingLeft: 7,

      paddingRight: 7,
    },

    /* ================================================================
       PROJECTS
       ================================================================ */

    projectItem: {
      marginBottom: 8,

      flexShrink: 0,
    },

    projectTitle: {
      fontFamily: "Helvetica-Bold",

      fontSize: 8.2,

      lineHeight: 1.25,

      color: "#111827",
    },

    projectRole: {
      fontSize: 7.2,

      color: "#475569",

      marginTop: 1,
    },

    projectDescription: {
      marginTop: 3,

      fontSize: 7.4,

      lineHeight: 1.35,

      color: "#374151",
    },

    projectTech: {
      marginTop: 2,

      fontSize: 6.8,

      color: "#64748b",
    },

    /* ================================================================
       CERTIFICATIONS
       ================================================================ */

    certificationItem: {
      marginBottom: 7,

      flexShrink: 0,
    },

    certificationName: {
      fontFamily: "Helvetica-Bold",

      fontSize: 8,

      lineHeight: 1.2,

      color: "#111827",
    },

    certificationIssuer: {
      fontSize: 7.2,

      color: "#475569",

      marginTop: 1,
    },

    certificationDate: {
      fontSize: 6.8,

      color: "#64748b",

      marginTop: 1,
    },

    /* ================================================================
       FOOTER
       ================================================================ */

    footer: {
      position: "absolute",

      bottom: 15,

      left: isExecutive ? 48 : 42,

      right: isExecutive ? 48 : 42,

      textAlign: "center",

      fontSize: 5.5,

      color: "#94a3b8",
    },
  });

  /*
  |--------------------------------------------------------------------------
  | SAFE URL
  |--------------------------------------------------------------------------
  */

  const normalizeUrl = (url: string) => {
    if (!url) return "";

    if (
      url.startsWith("http://") ||
      url.startsWith("https://")
    ) {
      return url;
    }

    return `https://${url}`;
  };

  /*
  |--------------------------------------------------------------------------
  | DATE FORMAT
  |--------------------------------------------------------------------------
  */

  const experienceDate = (
    startDate: string,
    endDate: string,
    currentlyWorking: boolean
  ) => {
    const start = startDate || "";

    const end = currentlyWorking
      ? "Present"
      : endDate || "";

    if (!start && !end) return "";

    if (!start) return end;

    if (!end) return start;

    return `${start} – ${end}`;
  };

  return (
    <Document
      title={
        personal.fullName
          ? `${personal.fullName} Resume`
          : "Resume"
      }
      author="MH SHOVON Resume Maker"
      subject="Professional Resume"
      creator="MH SHOVON Resume Maker"
      producer="MH SHOVON Resume Maker"
    >
      <Page
        size="A4"
        style={styles.page}
        wrap
      >

        {/* ============================================================
            HEADER
            ============================================================ */}

        <View
          style={styles.header}
          wrap={false}
        >

          {/* NAME */}

          <Text style={styles.name}>
            {personal.fullName || "Your Name"}
          </Text>


          {/* JOB TITLE */}

          {personal.jobTitle &&
            personal.jobTitle.trim() && (
              <Text style={styles.jobTitle}>
                {personal.jobTitle}
              </Text>
            )}


          {/* CONTACT */}

          <View style={styles.contact}>

            {personal.email && (
              <Text style={styles.contactText}>
                {personal.email}
              </Text>
            )}

            {personal.phone && (
              <Text style={styles.contactText}>
                {personal.phone}
              </Text>
            )}

            {personal.location && (
              <Text style={styles.contactText}>
                {personal.location}
              </Text>
            )}

            {personal.website && (
              <Link
                src={normalizeUrl(
                  personal.website
                )}
                style={styles.contactText}
              >
                {personal.website}
              </Link>
            )}

            {personal.linkedin && (
              <Link
                src={normalizeUrl(
                  personal.linkedin
                )}
                style={styles.contactText}
              >
                {personal.linkedin}
              </Link>
            )}

            {personal.github && (
              <Link
                src={normalizeUrl(
                  personal.github
                )}
                style={styles.contactText}
              >
                {personal.github}
              </Link>
            )}

          </View>

        </View>


        {/* ============================================================
            PROFESSIONAL SUMMARY
            ============================================================ */}

        {summary &&
          summary.trim() && (

            <View
              style={styles.section}
            >

              <Text
                style={
                  styles.sectionTitle
                }
              >
                Professional Summary
              </Text>

              <Text
                style={
                  styles.summaryText
                }
              >
                {summary}
              </Text>

            </View>

          )}


        {/* ============================================================
            EXPERIENCE
            ============================================================ */}

        {experience.length > 0 && (

          <View
            style={styles.section}
          >

            <Text
              style={
                styles.sectionTitle
              }
            >
              Experience
            </Text>


            {experience.map((item) => (

              <View
                key={item.id}
                style={
                  styles.experienceItem
                }
                wrap={false}
              >

                <View
                  style={
                    styles.topRow
                  }
                >

                  {/* LEFT */}

                  <View
                    style={
                      styles.itemLeft
                    }
                  >

                    <Text
                      style={
                        styles.itemTitle
                      }
                    >
                      {item.jobTitle ||
                        "Job Title"}
                    </Text>


                    {item.company && (
                      <Text
                        style={
                          styles.company
                        }
                      >
                        {item.company}

                        {item.location
                          ? ` • ${item.location}`
                          : ""}
                      </Text>
                    )}

                  </View>


                  {/* DATE */}

                  <Text
                    style={
                      styles.date
                    }
                  >
                    {experienceDate(
                      item.startDate,
                      item.endDate,
                      item.currentlyWorking
                    )}
                  </Text>

                </View>


                {/* DESCRIPTION */}

                {item.description &&
                  item.description.trim() && (

                    <Text
                      style={
                        styles.description
                      }
                    >
                      {item.description}
                    </Text>

                  )}

              </View>

            ))}

          </View>

        )}


        {/* ============================================================
            EDUCATION
            ============================================================ */}

        {education.length > 0 && (

          <View
            style={styles.section}
          >

            <Text
              style={
                styles.sectionTitle
              }
            >
              Education
            </Text>


            {education.map((item) => (

              <View
                key={item.id}
                style={
                  styles.educationItem
                }
                wrap={false}
              >

                <View
                  style={
                    styles.topRow
                  }
                >

                  {/* LEFT */}

                  <View
                    style={
                      styles.itemLeft
                    }
                  >

                    <Text
                      style={
                        styles.itemTitle
                      }
                    >
                      {item.degree ||
                        "Degree"}
                    </Text>


                    {item.institution && (
                      <Text
                        style={
                          styles.company
                        }
                      >
                        {item.institution}

                        {item.location
                          ? ` • ${item.location}`
                          : ""}
                      </Text>
                    )}

                  </View>


                  {/* DATE */}

                  <Text
                    style={
                      styles.date
                    }
                  >
                    {item.startDate}

                    {item.startDate ||
                    item.endDate
                      ? " – "
                      : ""}

                    {item.endDate}
                  </Text>

                </View>


                {item.description &&
                  item.description.trim() && (

                    <Text
                      style={
                        styles.educationDescription
                      }
                    >
                      {item.description}
                    </Text>

                  )}

              </View>

            ))}

          </View>

        )}


        {/* ============================================================
            SKILLS
            ============================================================ */}

        {skills.length > 0 && (

          <View
            style={styles.section}
          >

            <Text
              style={
                styles.sectionTitle
              }
            >
              Skills
            </Text>


            <View
              style={
                styles.skillsContainer
              }
            >

              {skills
                .filter(
                  (skill) =>
                    skill.name &&
                    skill.name.trim()
                )
                .map((skill) => (

                  <Text
                    key={skill.id}
                    style={
                      styles.skill
                    }
                  >
                    {skill.name}
                  </Text>

                ))}

            </View>

          </View>

        )}


        {/* ============================================================
            PROJECTS
            ============================================================ */}

        {projects.length > 0 && (

          <View
            style={styles.section}
          >

            <Text
              style={
                styles.sectionTitle
              }
            >
              Projects
            </Text>


            {projects.map((project) => (

              <View
                key={project.id}
                style={
                  styles.projectItem
                }
                wrap={false}
              >

                <Text
                  style={
                    styles.projectTitle
                  }
                >
                  {project.name}
                </Text>


                {project.role && (
                  <Text
                    style={
                      styles.projectRole
                    }
                  >
                    {project.role}
                  </Text>
                )}


                {project.description && (
                  <Text
                    style={
                      styles.projectDescription
                    }
                  >
                    {project.description}
                  </Text>
                )}


                {project.technologies.length >
                  0 && (

                  <Text
                    style={
                      styles.projectTech
                    }
                  >
                    Technologies:{" "}
                    {project.technologies.join(
                      ", "
                    )}
                  </Text>

                )}


                {project.url && (
                  <Link
                    src={normalizeUrl(
                      project.url
                    )}
                    style={{
                      fontSize: 6.8,
                      color: accent,
                      marginTop: 2,
                    }}
                  >
                    {project.url}
                  </Link>
                )}

              </View>

            ))}

          </View>

        )}


        {/* ============================================================
            CERTIFICATIONS
            ============================================================ */}

        {certifications.length > 0 && (

          <View
            style={styles.section}
          >

            <Text
              style={
                styles.sectionTitle
              }
            >
              Certifications
            </Text>


            {certifications.map(
              (certification) => (

                <View
                  key={certification.id}
                  style={
                    styles.certificationItem
                  }
                  wrap={false}
                >

                  <Text
                    style={
                      styles.certificationName
                    }
                  >
                    {certification.name}
                  </Text>


                  {certification.issuer && (
                    <Text
                      style={
                        styles.certificationIssuer
                      }
                    >
                      {certification.issuer}
                    </Text>
                  )}


                  {certification.issueDate && (
                    <Text
                      style={
                        styles.certificationDate
                      }
                    >
                      {certification.issueDate}
                    </Text>
                  )}


                  {certification.credentialUrl && (
                    <Link
                      src={normalizeUrl(
                        certification.credentialUrl
                      )}
                      style={{
                        fontSize: 6.8,
                        color: accent,
                        marginTop: 2,
                      }}
                    >
                      {certification.credentialUrl}
                    </Link>
                  )}

                </View>

              )
            )}

          </View>

        )}


        {/* ============================================================
            FOOTER
            ============================================================ */}

        <Text
          fixed
          style={styles.footer}
        >
          MH SHOVON Resume Maker
        </Text>

      </Page>
    </Document>
  );
}