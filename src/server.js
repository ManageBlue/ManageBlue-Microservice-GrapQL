const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();
const config = require('./config/config')

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const port = config.port
const url = config.url
//----------------------------------------------------------------------------------------------------------------------


// cors settings
let corsOptions = {
    //origin: url + ":" + 8080
    origin: '*'
};
server.use(cors(corsOptions));

// parse requests of content-type - application/json
server.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
//----------------------------------------------------------------------------------------------------------------------
// graphql init

const schema = buildSchema(`
  type Query {
    id: String
    title: String
    members: [member]
    totalHours: Float
    totalOwed: Float
    totalPaid: Float
  }
`);

const member = buildSchema(`
    type Member {
        id: String
        firstName: String
        lastName: String
        totalHours: Float
        totalOwed: Float
        totalPaid: Float
  }
    
`)

const root = {
    hello: () => 'Hello world!',
    test: () => 'aaa aaa aaa',
};

server.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

//----------------------------------------------------------------------------------------------------------------------


//require("./routes/projectImage")(server);

server.get("/", (req, res) => {
    res.json({ message: "Server is running!" });
});


/**
 * Start server
 */
server.listen(port, () => {
    console.log(`Server running on port ${port}!`);
});

module.exports = server;
