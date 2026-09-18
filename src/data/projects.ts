export type Project = {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  repoExtras?: string[];
  repoUrl: string;
};

export const projects: Project[] = [
  {
    id: "ecommerce-microservices",
    title: "E-Commerce Microservices Suite",
    summary:
      "Domain-driven microservices backend with dedicated Order, Product, and Inventory services, unified behind an API Gateway for routing, documentation, and consistent error handling.",
    highlights: [
      "Inter-service communication with OpenFeign and RestClient; centralized @RestControllerAdvice for structured errors.",
      "Docker-based containerization with Keycloak exploration for centralized authentication.",
      "REST APIs documented with springdoc-openapi and Swagger UI for integration and testing.",
    ],
    techStack: [
      "Spring Boot",
      "Spring Cloud",
      "MySQL",
      "MongoDB",
      "Docker",
      "OpenFeign",
      "OpenAPI",
    ],
    repoExtras: [
      "Resilience4j",
      "OAuth2 Resource Server",
      "Actuator",
      "Java 21",
    ],
    repoUrl:
      "https://github.com/Dinesh-012/Spring/tree/main/Microservices",
  },
];
