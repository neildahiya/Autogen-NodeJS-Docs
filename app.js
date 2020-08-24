const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 5000;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer",
      },
      servers: ["http://localhost:5000"],
    },
  },
  // ['.routes/*.js']
  apis: ["app.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/customers", (req, res) => {
  res.status(200).send("Customer results");
});

// Routes
/**
 * @swagger
 * /customers:
 *  put:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.put("/customers", (req, res) => {
  res.status(200).send("Customer results");
});

// Routes
/**
 * @swagger
 * /customers:
 *  post:
 *    description: Use to post some data
 *    responses:
 *      '200':
 *        description: Posted Successfully
 */
app.post("/customers", (req, res) => {
  res.status(200).send("Posted results");
});

// Routes
/**
 * @swagger
 * /customers:
 *  delete:
 *    description: Use to delete some data
 *    responses:
 *      '200':
 *        description: Deleted Successfully
 */
app.delete("/customers", (req, res) => {
  res.status(200).send("Deleted results");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
