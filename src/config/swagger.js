import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Central de Resultados API",
      version: "1.0.0",
      description:
        "API para gerenciamento da Copa do Mundo"
    },
    servers: [
      {
        url: "http://localhost:3333"
      }
    ]
  },

  apis: [
    "./src/routes/*.js"
  ]
};


const swaggerSpec = swaggerJsdoc(options);


export default swaggerSpec;