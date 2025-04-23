export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "professional" | "academic" | "ai-ml";
  technologies: string[];
  highlights: string[];
  github: string | null;
  demo: string | null;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Aircraft Planning System",
    description:
      "Developed a web-based enterprise system using Java and Spring Boot, reducing application load time by 40% and improving user experience for 10K+ monthly users.",
    image: "/images/projects/aircraft-planning.jpg",
    category: "professional",
    technologies: ["Java", "Spring Boot", "ReactJS", "Oracle", "MySQL", "JMS"],
    highlights: [
      "Frontend built with ReactJS, JSP, and CSS, improving navigation efficiency by 25%",
      "Optimized high-throughput SQL workloads using indexing, partitioning, and materialized views",
      "Enabled 10K+ daily transactions with improved query performance",
      "Led collaboration across 5 departments, improving application performance by 30%",
    ],
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: "Ground Operations Cloud Migration",
    description:
      "Directed migration of an on-premise enterprise application with Oracle DB to AWS EC2 and RDS, reducing infrastructure costs by 50% and improving scalability.",
    image: "/images/projects/cloud-migration.jpg",
    category: "professional",
    technologies: ["AWS", "EC2", "RDS", "Oracle", "MySQL"],
    highlights: [
      "Ensured compatibility across 40+ modules, cutting integration issues by 30%",
      "Improved project efficiency by 20% through close collaboration with stakeholders",
      "On-time delivery with minimal disruption to business operations",
      "Implemented robust monitoring and alerting for the migrated infrastructure",
    ],
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: "APIverse",
    description:
      "A comprehensive API hub with a two-tier architecture using Flask (frontend) and FastAPI (backend), serving as a reliable API platform for PSU students.",
    image: "/images/projects/apiverse.jpg",
    category: "academic",
    technologies: [
      "Python",
      "Flask",
      "FastAPI",
      "Google Cloud",
      "OAuth",
      "Docker",
    ],
    highlights: [
      "Secure user authentication with PDX domain restriction and Google OAuth",
      "API key generation with salted SHA-256 hashing",
      "Integrated Google's Gemini model for AI-powered text generation",
      "Launched on GCP using Cloud Run containers and Cloud Datastore",
    ],
    github: "https://github.com/sriramnurani1995/apiverse",
    demo: null,
  },
  {
    id: 4,
    title: "TriMet GPS Insights",
    description:
      "Ingested and analyzed 1.5M+ real-time GPS data points using Python and PostgreSQL to enhance transit insights with interactive dashboards.",
    image: "/images/projects/trimet.jpg",
    category: "academic",
    technologies: [
      "Python",
      "PostgreSQL",
      "Google Cloud",
      "Pub/Sub",
      "MapboxGL",
      "Google Maps API",
    ],
    highlights: [
      "Data validation with ASSERT checks, ensuring accuracy and reducing errors by 40%",
      "Accelerated data ingestion with bulk inserts, cutting processing time by 60%",
      "Constructed a scalable data pipeline on Google Cloud with Pub/Sub",
      "Devised failure handling with alerts and exponential back off",
    ],
    github: "https://github.com/sriramnurani1995/trimet-gps",
    demo: null,
  },
];

export default projectsData;
