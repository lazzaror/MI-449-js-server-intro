// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that responds for different routes
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end('<h1>Welcome!</h1>' +
    'You found the home page of the best server around. Impressive.')
  } else if (request.url === '/random-joke') {
    var num = Math.floor(Math.random() * 3) 
    if (num === 0) {
      response.end('<h1>Random Joke Generator</h1>' +
      'Knock knock. Who\'s there? Beats. Beats who? Beats me.' +
      '<br><br><a href="/" style="text-decoration:none; color:white; background-color:black; border-radius:10%; padding:0.5%; margin-top:12%;">Go Home</a>')
    }
    else if (num === 1) {
      response.end('<h1>Random Joke Generator</h1>' +
      'Knock knock. Who\'s there? The interrupting cow. Interrupting cow wh- Moooooo!' +
      '<br><br><a href="/" style="text-decoration:none; color:white; background-color:black; border-radius:10%; padding:0.5%; margin-top:12%;">Go Home</a>')
    }
    else {
      response.end('<h1>Random Joke Generator</h1>' +
      'Knock, knock! Who\'s there? Tomato. Tomato who?' +
      ' Tomatoes don\'t have last names, silly.' +
      '<br><br><a href="/" style="text-decoration:none; color:white; background-color:black; border-radius:10%; padding:0.5%; margin-top:12%;">Go Home</a>')
    }
  } else if (request.url === '/cuteness') {
    response.end('<h1>You asked for Cuteness...</h1>' +
    '<img src="https://i.pinimg.com/originals/0f/0d/87/0f0d87779573583b11643cde62767ab3.jpg" style="width:45%">' +
    '<br><br><a href="/" style="text-decoration:none; color:white; background-color:black; border-radius:10%; padding:0.5%; margin-top:12%;">Go Home</a>')
  }
  // 404 eror page
  else {
    response.end('<h1>Page not found!</h1>' +
    '<img src="https://image.shutterstock.com/image-illustration/404-funny-cats-design-260nw-757415008.jpg">' +
    '<br>Sorry, I can\t seem to find ' + request.url +
    ' like you asked. Try something more reasonable.' +
    '<br><br><a href="/" style="text-decoration:none; color:white; background-color:black; border-radius:10%; padding:0.5%; margin-top:12%;">Go Home</a>')
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
