const fs=require('fs')
exports.uploadImg=async (ctx)=>{
    console.log(ctx.req.files,ctx.req.body)
    // let {avator}=ctx.req.files,
    //     getName=Number(Math.random().toString().substr(3))+Date.now();
    //     console.log(avator)
    //     new Promise((resolve,reject)=>{
    //         fs.writeFile('./images/'+getName+'.png',avator,err=>{
    //             if(err){
    //                 ctx.body=`
    //                 <h2>上传失败！</h2>
    //                 <button onclick="history.go(-1)">重新上传</button>
    //                 `
    //                 return;
    //             }
    //             ctx.body=`<h2>上传成功！</h2>
    //             图片地址：http://www.dantyli.com/images/${getName}.png`

    //         })
    //     })

}