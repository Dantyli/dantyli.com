var Router=require('koa-router')
const router=new Router()
const coin=require('../controller/coin')
const static=require('../controller/multi')
router.get('/getCoinList',coin.coinlist)
router.get('/getConfig',coin.config)
router.post('/upload',static.uploadImg)
module.exports=router;