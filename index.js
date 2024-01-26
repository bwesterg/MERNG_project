const { ApolloServer } = require('apollo-server');
// const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js')



// const resolvers = {
    
// }

const server = new ApolloServer({
    typeDefs,
    resolvers
});


mongoose
    .connect(MONGODB)
    .then(() => {
        console.log('MongoDB connected')
        return server.listen({ port: 5000 });
    }).then(res=> {
        console.log(`Server running at ${res.url}`);
    })