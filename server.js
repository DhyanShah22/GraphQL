const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config()

const typeDefs = require('./GraphQl/typeDefs')
const resolvers = require('./GraphQl/resolvers')


const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        server.listen((process.env.PORT), () => {
            console.log('Server connected to DB and running on port ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })