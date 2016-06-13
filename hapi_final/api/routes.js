var superagent = require('superagent');

var bus_id='';
module.exports = function (app) {
	

	app.route( {
	method: 'GET',
	path: '/api/search',
	config: {
		handler:function(request, reply) {
			superagent
            	.get('http://api.metro.net/agencies/lametro/routes/'+request.query.search+'/')
				.end(function (err, response) {
					reply(response.body);
				});
		}
	}
	});

	app.route( {
	method: 'GET',
	path: '/api/show/{busid}',
	handler:function(request, reply) {
		superagent
            .get('http://api.metro.net/agencies/lametro/routes/'+request.params.busid+'/sequence/')
			.query({ json: true })
			.end(function (err, response) {
					bus_id = request.params.busid;	
					reply(response.body);
			});
		}
	});
	app.route( {
		method: 'GET',
		path: '/api/email',
		handler:function(request, reply) {
			app.methods.validateemail(request.query.emailid, function (err, result) {
				if(result) {
					var data = {
        				from: 'cs454.hapi@gmail.com',
        				to: request.query.emailid,
        				subject: 'Routes for ' +bus_id,
        				text: request.query.busrroutes,
    				};
 
    				var Mailer = request.server.plugins.mailer;
    				Mailer.sendMail(data, function (err, info) {
 					//console.log(err);
 					//console.log(info);
        				reply({name:'Email sent to ' + request.query.emailid});
    				});	
				} else {
					reply({name:'Invalid Email. Please enter the correct email id'})
				}
    
			});
			
		}
	});
	

	
}