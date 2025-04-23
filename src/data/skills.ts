export interface Skill {
  name: string;
  logo: string;
  category: "language" | "framework" | "database" | "cloud" | "tools";
}

const skillsData: Skill[] = [
  // Languages
  { name: "Python", logo: "/images/skills/python.png", category: "language" },
  { name: "Java", logo: "/images/skills/java.png", category: "language" },
  {
    name: "JavaScript",
    logo: "/images/skills/javascript.png",
    category: "language",
  },
  {
    name: "TypeScript",
    logo: "/images/skills/typescript.png",
    category: "language",
  },
  { name: "SQL", logo: "/images/skills/sql.png", category: "language" },
  { name: "Bash", logo: "/images/skills/bash.png", category: "language" },

  // Frameworks & Libraries
  {
    name: "Spring Boot",
    logo: "/images/skills/spring-boot.png",
    category: "framework",
  },
  { name: "React", logo: "/images/skills/react.png", category: "framework" },
  { name: "Flask", logo: "/images/skills/flask.png", category: "framework" },
  {
    name: "FastAPI",
    logo: "/images/skills/fastapi.png",
    category: "framework",
  },
  {
    name: "TensorFlow",
    logo: "/images/skills/tensorflow.png",
    category: "framework",
  },
  {
    name: "PyTorch",
    logo: "/images/skills/pytorch.png",
    category: "framework",
  },

  // Databases
  {
    name: "PostgreSQL",
    logo: "/images/skills/postgresql.png",
    category: "database",
  },
  { name: "MySQL", logo: "/images/skills/mysql.png", category: "database" },
  {
    name: "Oracle DB",
    logo: "/images/skills/oracle.png",
    category: "database",
  },
  { name: "MongoDB", logo: "/images/skills/mongodb.png", category: "database" },
  { name: "Kafka", logo: "/images/skills/kafka.png", category: "database" },
  {
    name: "BigQuery",
    logo: "/images/skills/bigquery.png",
    category: "database",
  },

  // Cloud & DevOps
  { name: "AWS", logo: "/images/skills/aws.png", category: "cloud" },
  { name: "GCP", logo: "/images/skills/gcp.png", category: "cloud" },
  { name: "Docker", logo: "/images/skills/docker.png", category: "cloud" },
  {
    name: "Kubernetes",
    logo: "/images/skills/kubernetes.png",
    category: "cloud",
  },
  {
    name: "Terraform",
    logo: "/images/skills/terraform.png",
    category: "cloud",
  },
  { name: "CI/CD", logo: "/images/skills/cicd.png", category: "cloud" },
];

export default skillsData;
