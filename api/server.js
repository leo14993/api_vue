var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

http.createServer(app).listen(4000, function() {
    console.log('API escutando na porta: ' + this.address().port);
});

