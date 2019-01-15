const Koa=require('koa')
const app=new Koa();
const path=require('path')
const bodyParser=require('koa-bodyparser')
const staticCache=require('koa-static-cache')
app.use(bodyParser())
app.use(require('./router/router').routes())
app.use(staticCache(path.join(__dirname,'./images'),{dybamic:true},{maxAge:30*24*60*60}))
app.listen(3001,()=>{
    console.log('server start on port 3001')
})