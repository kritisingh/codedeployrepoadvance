'use strict';

const Hapi = require('hapi');
const mongojs = require('mongojs');  //<--- Added
// Create a server with a host and port
const server = new Hapi.Server();  
server.connection({  
    host: 'localhost',
    port: 3000
});
//Connect to db
server.app.db = mongojs('hapi-rest-mongo', ['books']);  //<--- Added

// Add the route
server.route({  
    method: 'GET',
    path:'/books',
    handler: function (request, reply) {

        return reply('Here the books will be shown soon...');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

