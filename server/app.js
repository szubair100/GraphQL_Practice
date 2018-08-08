const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//Connect to mlab(MongoDB) database
mongoose.connect('mongodb://dbmaster:testdb1@ds115762.mlab.com:15762/graphql-practice');
mongoose.connection.once('open', () => {
    console.log('connected to database')
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requrests on port 4000');
});

