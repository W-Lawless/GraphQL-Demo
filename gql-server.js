import { ApolloServer } from 'apollo-server';
import "dotenv/config.js"

//Types

    //Queries

const typeDefs = `
    type Query {
        postTotal: Int!
    }
`

    //Mutations

    //Subscription

//Resolvers 

const resolvers = {
    Query: {
        postTotal: () => 8
    }
}


//GraphQL Server

const apolloServer = new ApolloServer({
    typeDefs, 
    resolvers
})

apolloServer.listen(process.env.PORT, ()=> {
    console.log(`Listening at port ${process.env.PORT}`)
})