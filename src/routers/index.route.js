const newsRouter = require('./news.route')
const homeRouter = require('./home.route')

function route(app){

    // app.get('/',(req,res)=>{
    //     return res.render('home')
    // })
    app.use('/home',homeRouter);
    
    // app.get('/news',(req,res)=>{
    //     return res.render('news')
    // })
    app.use('/news',newsRouter)
    
    
    app.get('/search',(req,res)=>{
        return res.render('search')
    })
    
    app.post('/search',(req,res)=>{
        console.log(req.body)
        return res.render('search')
    })
}

module.exports = route