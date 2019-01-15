
const https=require('https')
exports.coinlist=async (ctx)=>{
    let res=await spider()
    ctx.body={
        code:'200',
        msg:'success',
        data:res.data
    }
}
//设置请求接口
exports.config=async (ctx)=>{
    ctx.body={
        code:'200',
        url:'http://wwww.dantyli.com'
    }
}
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