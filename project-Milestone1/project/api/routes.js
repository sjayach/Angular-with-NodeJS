var superagent = require('superagent');

module.exports = function (app) {
	app.get('/api/search', function (req, res) {

		console.log(req.query)
		superagent
			.get('http://api.tvmaze.com/search/shows?q=' + req.query.search)
			.query({ json: true })
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}

				res.json(response.body);
			});

	});
}