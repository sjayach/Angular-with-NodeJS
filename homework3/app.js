var fs = require('fs');
var superagent = require('superagent');

module.exports.run = function(flags) {
  var fileApp = new FileApp(flags);
  fileApp.init();
};

function FileApp(flags) {
  this.flags = flags;
}

FileApp.prototype.init = function() {
  if (this.flags.math) {
    this.facts(this.flags.math, 'math', this.flags.save);
  } else if (this.flags.trivia) {
    this.facts(this.flags.trivia, 'trivia', this.flags.save);
  } else if (this.flags.date) {
    var dateOption = this.flags.date.toString();
    if (dateOption.indexOf('/') > -1) {
          this.facts(this.flags.date, 'date', this.flags.save);
    }
    else {
          this.facts(this.flags.date, 'year', this.flags.save);
    }
  }
};

FileApp.prototype.facts = function(value, type, save) {

  superagent.get('http://numbersapi.com/'+value+'/'+type+'?json')
  .end(function (err, response) {
    console.log(type + ': '+ response.body.text);
    response.body["saved"] = Date();
    if (save === true) {
      var obj = [];
      fs.readFile('facts.json', 'utf8', function (err, data) {
        if (!err) {
          obj = JSON.parse(data);
        }
        obj.push(response.body);
        fs.writeFile('facts.json', JSON.stringify(obj, null, 4), function(err) {
          if (err) throw err;
            console.log('File Saved');
        });
      });
    }
  });
}

