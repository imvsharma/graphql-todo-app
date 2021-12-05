//  Add express dependency
const express = require('express');
const { graphqlRoute } = require('./graphql');
const port = 3000 || process.env.PORT
//  Intialize express app
const app = express();

app.use('/graphql', graphqlRoute)

app.listen(port, () => {
  console.log("Running express server at "+port);
})

