const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Magic Library API',
    description: 'Documentação'
  },
  host: 'localhost:3000'
};

const outputFile = '../doc/ApiDoc.json';
const routes = ['./View/User.View.js', './View/Book.View.js'];

swaggerAutogen(outputFile, routes, doc);