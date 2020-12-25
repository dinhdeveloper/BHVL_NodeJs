const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hand = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./routers/index.route')
const connect = require('./connected')
const connected = require('./connected')

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

app.use(morgan('combined'))
app.engine('hbs',hand({
    extname:'.hbs'
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resources/views'))

//connect 
connected()
//Router init
route(app)

app.listen(port,()=>{console.log(`Listen port ${port}`)})
