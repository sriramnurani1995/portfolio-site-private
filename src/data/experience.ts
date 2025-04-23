export interface ExperienceItem {
  title: string;
  company: string;
  logo: string;
  period: string;
  achievements: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "AI/ML Intern",
    company: "Tychons USA",
    logo: "/images/logos/tychons.png",
    period: "September 2024 - June 2025",
    achievements: [
      "Pioneered a Langchain RAG pipeline with Vanna and Chroma, to achieve 2× faster SQL generation.",
      "Compared GPT-4 (OpenAI) and LLaMA2 (HuggingFace) for SQL tasks based on latency, accuracy, and cost.",
      "Evaluated 10+ LLM agents with prompt engineering and RAG tuning to select the top model.",
      "Deployed the chosen model with Agile workflows, ensuring smooth production integration.",
    ],
  },
  {
    title: "Backend Software Engineer – Onsite",
    company: "Tata Consultancy Services",
    logo: "/images/logos/tcs.png",
    period: "September 2019 - August 2023",
    achievements: [
      "Drove cloud modernization on AWS and GCP, cutting costs by 50% and boosting uptime by 30%.",
      "Built event-driven systems with Kafka, AWS SQS, and IBM MQ, enhancing real-time data streaming.",
      "Delivered rapid incident resolution for high-severity (P1/P2) enterprise applications, ensuring 99.9% uptime.",
      "Architected scalable and high-performance application architectures.",
    ],
  },
  {
    title: "Backend Software Engineer – Offshore",
    company: "Tata Consultancy Services",
    logo: "/images/logos/tcs.png",
    period: "June 2016 - August 2019",
    achievements: [
      "Developed and deployed enterprise applications using Java (Spring Boot) and Python, supporting global clients.",
      "Optimized database queries in PostgreSQL, MySQL, and Oracle DB, reducing query execution time by 40%.",
      "Led production support for high-severity applications, resolving P1/P2 incidents.",
      "Automated deployments with CI/CD pipelines using Jenkins and Docker, cutting release cycle time by 30%.",
    ],
  },
  {
    title: "Graduate Teaching Assistant",
    company: "Portland State University",
    logo: "/images/logos/psu.png",
    period: "October 2024 - Present",
    achievements: [
      "Spearheaded instructional support for 'Intro to Web Development,' mentoring students in HTML, CSS, JavaScript.",
      "Graded 100+ assignments and projects, providing constructive feedback to improve student learning.",
    ],
  },
];

export default experienceData;
