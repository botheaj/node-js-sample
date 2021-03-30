var config = require('config')
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  if(config.util.getEnv("NODE_ENV") === "Testing"){
    response.send("<b>You are working in the <em>TESTING</em> environment</b>")
  }
  else if (config.util.getEnv("NODE_ENV") === "HerokuTest"){
    response.send("<b>You are working in the <em>HerokuTest</em> environment. <br /> This is running in the cloud.</b>")
  }
  else if (config.util.getEnv("NODE_ENV") === "Production") {
    response.send("<b>This is production. Be careful.</b>")
  }
  else {
    response.send("<b>Environment is unknown</b>")
  }
  //response.send('Hello World! My name is <em>' + process.env.MYNAME + '</em> <br /> My Node Environment is: ' + config.util.getEnv("NODE_ENV") + '</em></b>')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
