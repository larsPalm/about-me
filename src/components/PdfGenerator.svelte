<script lang="ts">
    import pdfMake from "pdfmake/build/pdfmake.js";
    import pdfFonts from "pdfmake/build/vfs_fonts.js";

    import type { Experience } from "../types/experience";

    import langJson from "../dataFiles/language.json";
    import kompetanse from "../dataFiles/kompetanse.json";
    import techStack from "../dataFiles/techStack.json";
    import schoolsJson from "../dataFiles/schools.json";
    import educationJson from "../dataFiles/education.json";
    import experienceJson from "../dataFiles/experience.json";
    import personalJson from "../dataFiles/contactInfo.json";

    import { t } from "../stores/i18n";

    $: tr = $t;

    pdfMake.vfs = pdfFonts.vfs;

    const generatePDF = () => {
        const educationEntries = Object.values(educationJson);
        const experiences: Experience[] = experienceJson.erfaring;

        const docDefinition = {
            info: {
                title: "CV – Lars Palm",
                author: personalJson.name,
            },

            content: [
                { text: personalJson.name, style: "header" },
                {
                    text: `${personalJson.email} | ${personalJson.phone}
GitHub: ${personalJson.github}
LinkedIn: ${personalJson.linkedin}`,
                    style: "personalInfo",
                    margin: [0, 0, 0, 10],
                },

                { text: tr.pdfExperience, style: "sectionHeader" },

                ...experiences.map((exp: Experience) => ({
                    stack: [
                        {
                            text: `${exp.role} — ${exp.company}`,
                            style: "subHeader",
                        },
                        {
                            text: `${exp.department ? exp.department + ", " : ""}${exp.from} – ${exp.current ? "Present" : exp.to}`,
                            margin: [0, 0, 0, 4],
                        },

                        exp.acomplishments?.length
                            ? {
                                  stack: [
                                      { text: tr.accomplishments, bold: true },
                                      {
                                          text: exp.acomplishments
                                              .map((a) => `• ${a}`)
                                              .join("\n"),
                                          margin: [10, 0, 0, 4],
                                      },
                                  ],
                              }
                            : undefined,

                        exp.comments?.length
                            ? {
                                  stack: [
                                      { text: tr.comments, bold: true },
                                      {
                                          text: exp.comments
                                              .map((c) => `• ${c}`)
                                              .join("\n"),
                                          margin: [10, 0, 0, 4],
                                      },
                                  ],
                              }
                            : undefined,

                        exp.remarks?.length
                            ? {
                                  stack: [
                                      { text: tr.remarks, bold: true },
                                      {
                                          text: exp.remarks.join(", "),
                                          italics: true,
                                          margin: [10, 0, 0, 6],
                                      },
                                  ],
                              }
                            : undefined,
                    ].filter(Boolean),
                    margin: [0, 2, 0, 6],
                })),

                { text: tr.pdfEducation, style: "sectionHeader" },

                ...educationEntries.map((edu: any) => ({
                    stack: [
                        {
                            text: `${edu.name} (${edu.type})`,
                            style: "subHeader",
                        },
                        {
                            text: `${edu.school} (${edu.from} – ${edu.to})`,
                            margin: [0, 0, 0, 3],
                        },

                        edu.subjects?.length
                            ? {
                                  text: `${tr.topics}: ${edu.subjects.join(", ")}`,
                                  margin: [0, 0, 0, 3],
                              }
                            : undefined,

                        edu.thesis
                            ? {
                                  text: `${tr.pdfThesis}: ${edu.thesis.name} – ${edu.thesis.subTitle}`,
                                  italics: true,
                              }
                            : undefined,

                        edu.thesis?.topics?.length
                            ? {
                                  text: `${tr.pdfTopic}: ${edu.thesis.topics.join(", ")}`,
                                  margin: [0, 0, 0, 6],
                              }
                            : undefined,
                    ].filter(Boolean),
                    margin: [0, 3, 0, 6],
                })),

                { text: tr.pdfSchool, style: "sectionHeader" },

                {
                    stack: schoolsJson.schools.map((s: any) => ({
                        stack: [
                            {
                                text: `${s.name} (${s.type}) — ${s.from}–${s.to}`,
                            },
                            s.fordypning
                                ? {
                                      text: `${tr.pdfFordypning}: ${s.fordypning}`,
                                      margin: [20, 2, 0, 4],
                                  }
                                : undefined,
                        ].filter(Boolean),
                        margin: [0, 0, 0, 6],
                    })),
                    margin: [0, 0, 0, 10],
                },

                // ✅ Språk + Kompetanse side om side
                {
                    columns: [
                        {
                            width: "*",
                            stack: [
                                { text: tr.pdfLang, style: "sectionHeader" },
                                {
                                    ul: langJson.map(
                                        (l) => `${l.name}: ${l.level}`,
                                    ),
                                },
                            ],
                        },
                        {
                            width: "*",
                            stack: [
                                {
                                    text: tr.pdfOtherComp,
                                    style: "sectionHeader",
                                },
                                { ul: kompetanse },
                            ],
                        },
                    ],
                    columnGap: 20,
                    margin: [0, 0, 0, 10],
                },

                { text: tr.pdfSkills, style: "sectionHeader" },

                // ✅ 4 kolonner
                {
                    columns: [
                        {
                            width: "*",
                            stack: [
                                { text: "Programmering", bold: true },
                                { ul: techStack.programming },
                            ],
                        },
                        {
                            width: "*",
                            stack: [
                                { text: "Frameworks", bold: true },
                                { ul: techStack.framework },
                            ],
                        },
                        {
                            width: "*",
                            stack: [
                                { text: "Database", bold: true },
                                { ul: techStack.database },
                                {
                                    text: "CI/CD",
                                    bold: true,
                                    margin: [0, 6, 0, 0],
                                },
                                { ul: techStack.cicd },
                            ],
                        },
                        {
                            width: "*",
                            stack: [
                                { text: "IaC", bold: true },
                                { ul: techStack.iac },
                                {
                                    text: "Observability",
                                    bold: true,
                                    margin: [0, 6, 0, 0],
                                },
                                { ul: techStack.observability },
                                {
                                    text: "Other",
                                    bold: true,
                                    margin: [0, 6, 0, 0],
                                },
                                { ul: techStack.other },
                            ],
                        },
                    ],
                    columnGap: 15,
                    margin: [0, 0, 0, 10],
                },

                { text: tr.pdfCloud, style: "sectionHeader" },

                {
                    columns: techStack.clouds.map((cloud: any) => ({
                        stack: [
                            { text: cloud.name, bold: true },
                            { text: cloud.resources.join(", ") },
                        ],
                    })),
                    columnGap: 20,
                    margin: [0, 0, 0, 10],
                },
            ],

            styles: {
                header: {
                    fontSize: 22,
                    bold: true,
                    alignment: "center",
                    margin: [0, 0, 0, 8],
                },
                personalInfo: {
                    fontSize: 10,
                    alignment: "center",
                    color: "#555",
                },
                sectionHeader: {
                    fontSize: 15,
                    bold: true,
                    margin: [0, 10, 0, 5],
                },
                subHeader: {
                    fontSize: 12,
                    bold: true,
                },
            },

            defaultStyle: {
                fontSize: 10,
                lineHeight: 1.3,
            },
        };

        pdfMake.createPdf(docDefinition).download("CV_LarsPalm.pdf");
    };
</script>

<button on:click={generatePDF} class="pdf-btn">
    📄 {$t.pdfButton}
</button>

<style>
    .pdf-btn {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: 1px solid var(--text);
        background-color: blue;
        color: white;
        cursor: pointer;
        font-weight: bold;
        transition:
            background-color 0.25s ease,
            transform 0.2s ease;
    }

    .pdf-btn:hover {
        background-color: red;
        transform: scale(1.05);
    }
</style>
