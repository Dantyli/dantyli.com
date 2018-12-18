let ajaxOptions={
    url:'/',
    method:'get',
    data:{},
    dataType:'text'
}
function ajax(optionsOverride){
    let options={}
    Object.keys(ajaxOptions).forEach(k=>{
        options[k]=optionsOverride[k]||ajaxOptions[k];
    })
        let xhr=new XMLHttpRequest();
        return new Promise((resolve,reject)=>{
            xhr.open(options.method,options.url)
            xhr.responseType=options.dataType;
            xhr.ontimeout=()=>{
                reject({
                    code:'500',
                    xhr:xhr
                })
            }
            xhr.onerror=()=>{
                reject({
                    code:'504',
                    xhr:xhr
                })
            }
            xhr.onloadend=()=>{
                if(xhr.status>=200&&xhr.status<300){
                    resolve(xhr.responseText)
                }else{
                    reject({
                        code:'400',
                        xhr:xhr
                    })
                }
            }
            xhr.send(options.data)
        })
}
export default ajax;