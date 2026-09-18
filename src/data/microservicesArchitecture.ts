export type ArchEdgeType = "v" | "h" | "d";

export type ArchNode = {
  id: string;
  label: string;
  sublabel?: string;
  description: string;
  /** Horizontal center, 0–100 */
  x: number;
  /** Vertical center, 0–100 */
  y: number;
};

export type ArchEdge = {
  id: string;
  from: string;
  to: string;
  type: ArchEdgeType;
};

export const microservicesArch = {
  nodes: [
    {
      id: "client",
      label: "Client",
      description: "Browser or API consumer sending HTTP requests to the platform.",
      x: 50,
      y: 10,
    },
    {
      id: "swagger",
      label: "Swagger / OpenAPI",
      description: "springdoc-openapi and Swagger UI for REST API documentation and testing.",
      x: 25,
      y: 28,
    },
    {
      id: "gateway",
      label: "API Gateway",
      sublabel: "Spring Cloud",
      description:
        "Spring Cloud Gateway routes requests to microservices and aggregates API documentation.",
      x: 50,
      y: 28,
    },
    {
      id: "keycloak",
      label: "Keycloak",
      description:
        "Centralized authentication and authorization exploration integrated with the gateway.",
      x: 75,
      y: 28,
    },
    {
      id: "product",
      label: "Product Service",
      sublabel: "Spring Boot",
      description: "Product catalog and pricing; document-oriented data stored in MongoDB.",
      x: 25,
      y: 52,
    },
    {
      id: "order",
      label: "Order Service",
      sublabel: "Spring Boot",
      description:
        "Order domain service; persists to MySQL and coordinates with Inventory for stock checks.",
      x: 50,
      y: 52,
    },
    {
      id: "inventory",
      label: "Inventory Service",
      sublabel: "Spring Boot",
      description: "Stock and availability service backed by MySQL.",
      x: 75,
      y: 52,
    },
    {
      id: "mongodb",
      label: "MongoDB",
      description: "Document store for product service collections and flexible schemas.",
      x: 25,
      y: 76,
    },
    {
      id: "mysql-order",
      label: "MySQL",
      description: "Relational database for order transactions and structured order data.",
      x: 50,
      y: 76,
    },
    {
      id: "mysql-inventory",
      label: "MySQL",
      description: "Relational database for inventory levels and stock records.",
      x: 75,
      y: 76,
    },
  ] satisfies ArchNode[],
  edges: [
    { id: "e-client-gateway", from: "client", to: "gateway", type: "v" },
    { id: "e-swagger-gateway", from: "swagger", to: "gateway", type: "h" },
    { id: "e-gateway-keycloak", from: "gateway", to: "keycloak", type: "h" },
    { id: "e-gateway-product", from: "gateway", to: "product", type: "d" },
    { id: "e-gateway-order", from: "gateway", to: "order", type: "v" },
    { id: "e-gateway-inventory", from: "gateway", to: "inventory", type: "d" },
    { id: "e-product-mongodb", from: "product", to: "mongodb", type: "v" },
    { id: "e-order-mysql", from: "order", to: "mysql-order", type: "v" },
    { id: "e-order-inventory", from: "order", to: "inventory", type: "h" },
    { id: "e-inventory-mysql", from: "inventory", to: "mysql-inventory", type: "v" },
  ] satisfies ArchEdge[],
};
