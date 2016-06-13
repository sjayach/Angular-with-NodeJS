var Hapi = require('hapi');
var Bcrypt = require('bcryptjs');
var Basic = require('hapi-auth-basic');
var Vision = require('vision');
var Inert = require('inert');
var Good = require('good');
var validator = require('validator');

var app = new Hapi.Server();
app.connection({ port: 8000, labels: 'a' });
app.connection({ port: 8080, labels: 'b' });

var a=app.select('a');

require('./api/routes')(a)

var session={user : "nik"};
  a.state('demoo', {
      ttl:  null,
      isSecure: false,
      isHttpOnly: true,
      encoding: 'base64json',
  });


var users = {
    admin: {
        username: 'admin',
       password: '$2a$10$TKnmJYsS7GM26WgLiqPYJ.1m75d7w9eTbbOcct4RumJthGVwRYPgC', //'password'
        name: 'Admin',
    },
    anisha: {
      username : 'anisha',
      password : '$2a$10$9BzKDLFVj1Pw6/5xHObetOT09E5.zZ10B2Z46oYERAxaPDYjpL6PG',  // 'login'
      name : 'Anisha'
    }
};




a.register([  
  {
    register: require('vision')  
  },
  {
    register: require('inert')  
  },
  {
    register : Basic
  },
  {
    register : Good,
    options : {
      reporters:[{
        reporter: require('good-console'),
        events: {
          response: '*',
          log: '*'
          //log : ['error', 'medium']
        }
      }]
    }
  },
  {
    register: require('hapi-mailer'),
    options: {
      transport: {
        service: 'Gmail',
        auth: {
            user: 'cs454.hapi@gmail.com',
            pass: 'hapi1234'
        }
      }
    }
  }
], function(err) {
  if (err) {
    throw err;
  }

  a.views({
    engines: {
      html: require('handlebars')
    },
    path:  __dirname + '/client'
  });

  a.route({
    method: 'GET',
    path: '/{filename*}',
    handler: {
      directory: {
        path:    __dirname + '/client',
        listing: false,
        index:   false
      }
    }
  });
  var validate = function (request, username, password, callback) {
    var user = users[username];
    if(user){
      Bcrypt.compare(password, user.password, function (err, isValid) {
        callback(err, isValid, {username: user.username});
      });
    }
    else
      return callback(null, false);
  };

  
  a.auth.strategy('hapilogin', 'basic', { validateFunc: validate });

  a.route(
  {
    method: 'GET',
    path: '/',
    config: {
      auth: 'hapilogin',
      handler :function(request, reply){
        //reply
        reply.state('demoo', session);
        reply.view('views/index');
       return reply;
        
      }
    }
  });

});

var validateemail = function (email, next) {
    // note that the 'next' callback must be used to return values
    var result = validator.isEmail(email);
    next(null, result);
};

a.method('validateemail', validateemail, {});


app.start(function () {
  for(var i =0;i<a.connections.length;i++)
    app.log('Server running at : ' +a.connections[i].info.uri);
});

