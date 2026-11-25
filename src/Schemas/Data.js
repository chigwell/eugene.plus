export const Data = {
  profile: {
    name: "Eugene Evstafev",
    ocupation: "CTO / Systems Architect",
    location: "Peterborough, United Kingdom",
    email: "hi@eugene.plus",
    telephone: "+44 7999839415",
    image: "images/me.jpeg",
  },
  aboutMe: {
    label: "About Me",
    description:
      "Hands-on technology leader and systems architect with 11+ years of engineering experience across mobile applications, enterprise platforms and AI products. Built iOS and Android applications from scratch for an internal audience of 50,000 at T Plus and led engineering teams delivering large-scale consumer e-commerce. Combine Python, React and TypeScript with mobile development skills in Cordova and Swift. Independently build and operate LLM7.io, a paid LLM API, using multi-agent development, with peak throughput of 28M+ tokens per minute. Bring technical product ownership, identity and access management experience, mentoring and hands-on delivery.",
    additionalDescription:
      "Awarded a UK Global Talent visa under the Exceptional Talent category in 2025; subsequently granted indefinite leave to remain (ILR) through an accelerated route.",
  },
  skills: {
    technicalLabel: "Technologies",
    softLabel: "Skills",
    technicalSkills: [
      "Python (Flask, FastAPI, Django)",
      "JavaScript / TypeScript (React, Node.js)",
      "Mobile development (Cordova, Swift)",
      "LLM APIs, fine-tuning & MCP",
      "Multi-agent development",
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
    ],
    softSkills: [
      "Systems architecture",
      "Technical product ownership",
      "Engineering leadership",
      "Identity & access management",
      "Technical interviewing",
      "Mentoring",
      "Systems analysis",
      "Cross-functional communication",
    ],
  },
  research: [
    ["Member of the ", { text: "ARTEMIS Research Center", url: "https://www.umfst.ro/fileadmin/cercetare/CACMF/ARTEMIS_Centru_de_cercetare_Informatica.pdf" }, ", working across artificial intelligence, data science, and smart engineering."],
    ["Mentoring students and reviewing research papers for ",
      { text: "ICLR 2025 DeLTa", url: "https://openreview.net/group?id=ICLR.cc/2025/Workshop/DeLTa#tab-accept-oral" }, ", ",
      { text: "CHIL 2025", url: "https://openreview.net/group?id=chilconference.org/CHIL/2025/Conference" }, ", ",
      { text: "MathAI 2025", url: "https://openreview.net/group?id=mathai.club/MathAI/2025/Conference" }, ", ",
      { text: "RSECon25", url: "https://rsecon25.society-rse.org/" }, ", and ",
      { text: "AGI-25", url: "https://agi-conf.org/2025/" }, "."],
    [{ text: "Research impact: 47 citations · h-index 4 · i10-index 2", url: "https://scholar.google.com/citations?user=cYLfW7QAAAAJ&hl=en" }],
  ],
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Eugene Evstafev on LinkedIn",
        name: "linkedin",
        url: "https://www.linkedin.com/in/eugene-evstafev/",
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
          title: "Senior Software Developer (UIS)",
          period: "Sep. 2022 – Present",
          company: "University of Cambridge",
          description: [
            "Own and re-architect Cambridge's identity platform supporting 30k active cards. Deliver a secure GCP stack with React, Django, PostgreSQL, Terraform and GitLab CI/CD, reducing defects and help-desk load.",
            "Modernised staff and student onboarding through myaccount.apps.cam.ac.uk and trusted REST APIs connecting CHRIS and CamSIS with identity and access management services.",
            "Mentored six DevOps hires and received the 2024 Contribution Reward for engineering impact.",
          ],
        },
      {
        title: "System Architect & Tech Product Owner",
        period: "Oct. 2020 - Feb. 2022",
        company: "L'Étual",
        description: [
          "Owned the technical evolution of a consumer e-commerce platform with 20M monthly visits, including its web and mobile applications. Led the move from Oracle ATG to a Kafka-driven Java microservices marketplace with Vue SSR, onboarding thousands of partners while keeping the products online.",
          "Led 3 SAFe squads comprising 21 Java/Vue developers plus QA through 28 sprints and 930+ tasks. During this period, Google Play ratings rose from 3.2 to 4.7, mobile downloads grew from 3M to 10M, and revenue increased from RUB 61bn to RUB 100bn.",
        ],
      },
      {
        title: "Head of System Analytics",
        period: "Jun. 2019 - Sep. 2020",
        company: "Gazprombank",
        description: [
          "Built and led a 23-person analytics and development team for core-banking systems serving 7M daily users. Established Agile delivery, Jira workflows and KPI frameworks.",
          "Architected Python, Java and MS SQL automation for regulatory reporting and pre-approved-offer engines across the banking platform.",
        ],
      },
      {
          title: "Head of System Analysis & Software Design",
          period: "Jul. 2019 – Oct. 2020",
          company: "CENTER 2M",
          description: [
            "Led the System Analysis & Data Analytics department of 9 analysts following promotion, establishing SADT/IDEF0 and BPMN 2.0 workflows.",
            "Engineered ETL pipelines consolidating hundreds of GB of unstructured data, reducing integration effort from 10 person-weeks to less than one week.",
            "Defined big-data and ML architecture using UML and ISO/IEC/IEEE 42010, and conducted 300+ senior-level technical interviews.",
          ],
      },
      {
          title: "Full-stack Developer",
          period: "Nov. 2016 – Jul. 2019",
          company: "T Plus PJSC",
          description: [
            "Independently built iOS and Android applications from the ground up for an internal audience of 50,000 employees.",
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
          url: "https://llm7.io/",
          period: "Apr. 2025 - Present",
          description: [
            "Independently built and operate a paid, OpenAI-compatible LLM API platform using multi-agent development, with peak throughput of 28M+ tokens per minute.",
          ],
        },
        {
          name: "SkillDock.io",
          url: "https://skilldock.io/",
          description: [
            "A platform to discover and publish reusable skills for AI agents.",
          ],
        },
        {
          name: "telegram-mcp",
          url: "https://github.com/chigwell/telegram-mcp",
          period: "Mar. 2025 - Present",
          description: [
            "Telethon-powered Python integration that exposes Telegram via Model Context Protocol for Claude, Cursor and other MCP clients. 2k+ GitHub stars.",
          ],
        },
        {
          name: "eknowledge",
          url: "https://pypi.org/project/eknowledge/",
          period: "Apr. 2024 - Present",
          description: [
            "Python package that converts unstructured text into knowledge graphs using LLM extraction.",
          ],
        },
    ],
  },
};
