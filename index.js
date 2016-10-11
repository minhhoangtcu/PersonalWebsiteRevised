const path = require('path')  
const express = require('express')  
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// set the layout dir to views/layouts
app.engine('.hbs', exphbs({  
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')  
app.set('views', path.join(__dirname, 'views'))

// routing for get request at '/'
app.get('/', (request, response) => {
  // render takes 2 params: name of the view and the data you want to render
  response.render('home', {
    name: 'Minh Hoang'
  })
})

// hosting the server
app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})