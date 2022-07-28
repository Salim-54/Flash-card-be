import { context } from "./context";   
import { ApolloServer } from "apollo-server";
import 'dotenv/config';

// import { context } from "./context";   

// 1
import { schema } from "./schema";
export const server = new ApolloServer({
    schema,
    context, 
});

const port = process.env.PORT
// 2
server.listen({port}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}🔥🔥`);
});