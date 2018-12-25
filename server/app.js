const Koa=require('koa')
const https=require('https')
var Router=require('koa-router')
const router=new Router()
const app=new Koa();
router.get('/getCoinList',async (ctx)=>{
    let res=await spider()
    ctx.body={
        code:'200',
        msg:'success',
        data:res.data
    }
})
//设置请求接口
router.get('/getConfig',async (ctx)=>{
    ctx.body={
        code:'200',
        url:'http://www.dantyli.com'
    }
})
app.use(router.routes())
app.listen(3001,()=>{
    console.log('server start on port 3001')
})
function spider(){
    return new Promise((resolve,reject)=>{
        https.get('https://dncapi.feixiaohao.com/api/coin/coinrank?page=1&type=0&pagesize=100&webp=1',(res)=>{
            var str=''
            res.on('data',(chunk)=>{
                str+=chunk
            })
            res.on('end',()=>{
                resolve(JSON.parse(str))
            })
            res.on('error',()=>{
                reject('request fail')
            })
        })
    })
}
