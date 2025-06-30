export const Data = {
  profile: {
    name: "Eugene Evstafev",
    ocupation: "Full-Stack Software Developer",
    location: "Cambridge, United Kingdom",
    email: "hi@eugene.plus",
    telephone: "+44 7999839415",
    image: "images/me.jpeg",
  },
  aboutMe: {
    label: "About Me",
    description:
      "Software developer with 11+ years of enterprise experience. Expert in Python, React, TypeScript, and SQL, with strong DevOps skills in GCP and Terraform. Focused on microservices, infrastructure-as-code, and machine-learning applications. Former system architect and product owner in banking and e-commerce.",
  },
  skills: {
    technicalLabel: "Technologies",
    softLabel: "Skills",
    technicalSkills: [
      "Python (Flask, FastAPI, Django)",
      "JavaScript (React, Node.js)",
      "SQL (PostgreSQL, MS SQL)",
      "NoSQL (MongoDB)",
      "Pub/Sub",
      "GCP",
      "Terraform",
      "Docker",
      "CI/CD (GitLab, GitHub Actions)",
      "Git (GitLab, GitHub)",
      "Cypress, Jest, Pytest",
      "Linux (Ubuntu, Debian)",
      "Fine-tuning custom LLMs",
    ],
    softSkills: [
      "Systems analysis",
      "Critical thinking",
      "Problem solving",
      "Teamwork",
      "Communication",
      "Mentoring",
      "Self-management",
      "Initiative",
      "Creativity",
      "Results-oriented",
    ],
  },
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Eugene Evstafev on LinkedIn",
        name: "linkedin",
        url: "https://www.linkedin.com/in/eugene-evstafev-716669181/",
        className: "bxl-linkedin-square",
      },
      {
        label: "Eugene Evstafev on GitHub",
        name: "github",
        url: "https://github.com/chigwell",
        className: "bxl-github",
      },
    ],
  },
  experience: {
    works: [
      {
          title: "Software Developer (UIS)",
          period: "Sep. 2022 – Present",
          company: "University of Cambridge",
          description: [
            "Own & re-architect Cambridge's identity platform (30k active cards) on a secure GCP stack-React, Django, PostgreSQL, Terraform, GitLab CI/CD—cutting defects and help-desk load.",
            "Modernised staff/student onboarding: new myaccount.apps.cam.ac.uk flow plus high-trust REST APIs syncing CHRIS ↔ CamSIS with IAM services.",
            "Top commit rate (5 509 pushes / 526 MRs), mentored six DevOps hires, and earned the 2024 Contribution Reward for excellent impact.",
          ],
        },
      {
        title: "System Architect & Tech Product Owner",
        period: "Oct. 2020 - Feb. 2022",
        company: "L'Étual",
        description: [
          "Re-architected Russia’s #1 beauty e-commerce (20M monthly visits) from a monolithic Oracle ATG stack to a Kafka-driven Java micro-service marketplace with Vue SSR, onboarding thousands of partners and keeping web + 10 M-download mobile apps online throughout.",
          "Led 3 SAFe squads (21 Java/Vue devs + QA) through 28 sprints and 930 + tasks, lifting Google Play ratings 3.2 → 4.7, downloads 3M → 10M, and supporting revenue growth from 61 → 100 bn RUB.",
        ],
      },
      {
        title: "Head of System Analytics",
        period: "Jun. 2019 - Sep. 2020",
        company: "Gazprombank",
        description: [
          "Built and led a 23-strong analytics/dev squad for core-banking systems serving 7M daily users, instituting Agile, Jira, and KPI frameworks.",
          "Architected Python/Java/MS SQL automations-from regulatory reporting to pre-approved-offer engines-scaling to 7M daily users.",
        ],
      },
      {
          title: "Head of System Analysis & Software Design",
          period: "Jul. 2019 – Oct. 2020",
          company: "CENTER 2M",
          description: [
            "Led the System Analysis & Data Analytics department (9 analysts) post-promotion, instituting SADT/IDEF0 and BPMN 2.0 workflows.",
            "Engineered ETL pipelines consolidating hundreds of GB of unstructured data-shrinking integration from 10-person weeks to <1 week.",
            "Shaped Big-Data/ML architecture (UML, ISO/IEC/IEEE 42010) and ran 300+ senior-level technical interviews for strategic hires.",
          ],
      },
      {
          title: "Full-stack Developer",
          period: "Nov. 2016 – Jul. 2019",
          company: "T Plus PJSC",
          description: [
          ],
      },
      {
          title: "Director",
          period: "Dec. 2015 – Oct. 2016",
          company: "UFM, LLC",
          description: [
          ],
      },
      {
          title: "Full-stack Engineer",
          period: "Oct. 2014 – Nov. 2015",
          company: "ITIS, LLC",
          description: [
          ],
      },
      {
          title: "Junior Full-stack Engineer",
          period: "Jul. 2010 – Sep. 2014",
          company: "IT Invest, LLC et al.",
          description: [
          ],
      },
    ],
    academic: [
      {
        career: "Master's in Programming",
        date: "2016",
        institution: "Perm Polytechnic University",
      },
      {
        career: "BSc in Business Informatics",
        date: "2014",
        institution: "Higher School of Economics (HSE)",
      },
    ],
    proyects: [
      {
          name: "LLM7.io",
          company: "LLM7.io",
          period: "Apr. 2025 - Present",
          description: [
            "Free, anonymous LLM provider-start using powerful models instantly with no sign-up.",
          ],
        },
        {
          name: "Findora.dev",
          period: "May 2025 - Present",
          description: [
            "LLM-based search utility with open-source SDKs on PyPI and npm.",
          ],
        },
        {
          name: "telegram-mcp",
          period: "Mar. 2025 - Present",
          description: [
            "Telethon-powered Python integration that exposes Telegram via Model Context Protocol for Claude, Cursor, and other MCP clients.",
          ],
        },
        {
          name: "eknowledge",
          period: "Apr. 2024 - Present",
          description: [
            "Python package that converts unstructured text into knowledge graphs using LLM extraction.",
          ],
        },
    ],
  },
};
