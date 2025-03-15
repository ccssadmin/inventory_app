import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://inventoryapi.crestclimbers.com/Graphql/", 
  cache: new InMemoryCache(),
});

export default client;
