export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Spring Boot", "Node.js", "NestJS", "RESTful API Design"],
  },
  {
    id: "security",
    label: "Security & Auth",
    items: ["Spring Security", "JWT", "Keycloak"],
  },
  {
    id: "microservices",
    label: "Microservices",
    items: [
      "Spring Cloud",
      "OpenFeign",
      "REST Clients",
      "API Gateway",
      "Inter-Service Communication",
      "Resilience4j",
      "Circuit Breaker"
    ],
  },
  {
    id: "data",
    label: "Databases",
    items: ["MySQL", "MongoDB", "JPA / Hibernate"],
  },
  {
    id: "devops-messaging",
    label: "DevOps & Messaging",
    items: ["Docker", "Apache Kafka"],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["React.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "others",
    label: "Others",
    items: ["Git", "GitLab", "Postman", "Maven"],
  },
];
