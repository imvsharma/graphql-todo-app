const { graphqlHTTP } = require("express-graphql");
const { root } = require("./resolver/root.resolver");
const { schema } = require("./schema/task.schema");

const graphqlRoute = graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
})

module.exports = {
  graphqlRoute
}