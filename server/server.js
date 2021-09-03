const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`
 
  type Project {
    id: ID!
    title: String
    description: String
    times: [Time]
  }

  type Time {
    id: ID!
    activity: String
    date: Int
    time: Int
  }

  type Query {
    projects: [Project]
    times: [Time]
  }
`;

const projects = [
    {
      id: 1,
      title: 'Test 1',
      description: 'Test',
      times: {
        id: 1,
        activity: "read",
        date: "09-01-2021",
        time: "2,"
      }
    },
    {
      id: 2,
      title: 'Test 2',
      description: 'Test',
      times: {
        id: 2,
        activity: "write",
        date: "09-02-2021",
        time: "4,"
      }
    },
  ];

const resolvers = {
    Query: {
      projects: () => projects,
    },
    Project: {       
      title: (parent,args,context)=>{ return projects[id] },    
      description: (parent, args, context) => { return projects[ id] } 
    },   
  };
  

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
  
