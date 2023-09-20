// // app.use(verifyJWT);
// require('dotenv').config();
// const express = require('express');
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');
// const path = require('path');

// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');
// const { verify } = require('crypto');

// const collection = require("./models/User")
// const cors = require("cors")

// const PORT = process.env.PORT || 3001;
// const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// app.post("/",async(req,res)=>{
//   const{email,password}=req.body

//   try{
//       const check=await collection.findOne({email:email})

//       if(check){
//           res.json("exist")
//       }
//       else{
//           res.json("notexist")
//       }

//   }
//   catch(e){
//       res.json("fail")
//   }

// })



// app.post("/signup",async(req,res)=>{
//   const{email,password}=req.body

//   const data={
//       email:email,
//       password:password
//   }

//   try{
//       const check=await collection.findOne({email:email})

//       if(check){
//           res.json("exist")
//       }
//       else{
//           res.json("notexist")
//           await collection.insertMany([data])
//       }

//   }
//   catch(e){
//       res.json("fail")
//   }

// })

// const startApolloServer = async () => {
//   await server.start();

  

//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.json());
//   app.use(cors())

//   app.get("/",cors(),(req,res)=>{

// })


// app.post("/",async(req,res)=>{
//     const{email,password}=req.body

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })



// app.post("/signup",async(req,res)=>{
//     const{email,password}=req.body

//     const data={
//         email:email,
//         password:password
//     }

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await collection.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })
  
//   // Important for MERN Setup: When our application runs from production, it functions slightly differently than in development
//   // In development, we run two servers concurrently that work together
//   // In production, our Node server runs and delivers our client-side bundle from the dist/ folder 
//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/dist')));
    
//     app.get('*', (req, res) => {
//       res.sendFile(path.join(__dirname, '../client/dist/index.html'));
//     });
//   }
  
//   // Important for MERN Setup: Any client-side requests that begin with '/graphql' will be handled by our Apollo Server
//   app.use('/graphql', expressMiddleware(server));

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//     });
//   });
// };

// startApolloServer();

// *************************************

// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const connection = require("./config/connection");
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');

// const { typeDefs, resolvers } = require('./schemas');
// const server = new ApolloServer({
//    typeDefs,
//    resolvers,
//  });
// const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");

// // database connection
// connection();

// // middlewares
// app.use(express.json());
// app.use(cors());

// // routes
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

// const startApolloServer = async () => {
//  await server.start();

//   if (process.env.NODE_ENV === 'production') {
//         app.use(express.static(path.join(__dirname, '../client/dist')));
        
//         app.get('*', (req, res) => {
//           res.sendFile(path.join(__dirname, '../client/dist/index.html'));
//         });
//       }

// // Important for MERN Setup: Any client-side requests that begin with '/graphql' will be handled by our Apollo Server
// app.use('/graphql', expressMiddleware(server));

// const port = process.env.PORT || 3001;
// app.listen(port, console.log(`Listening on port ${port}...`))};

// startApolloServer();

// *************************************

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config/connection");
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const path = require('path'); // Add this line to import 'path'

const { typeDefs, resolvers } = require('./schemas');
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

// database connection


// middlewares
app.use(express.json());
app.use(cors());

// Start Apollo Server
const startApolloServer = async () => {
  await server.start();
  
  // Add Apollo Server middleware
  app.use('/graphql', expressMiddleware(server));

  // routes
  app.use("/api/users", userRoutes);
  app.use("/api/auth", authRoutes);

  // Serve static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  const PORT = process.env.PORT || 3001;
  connection.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();

// ****************************************

// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const connection = require("./config/connection");
// const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");

// // database connection
// connection();

// // middlewares
// app.use(express.json());
// app.use(cors());

// // routes
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

// const port = process.env.PORT || 3001;
// app.listen(port, console.log(`Listening on port ${port}...`));