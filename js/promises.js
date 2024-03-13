let tosse =(val)=>new Promise((resolve,reject)=>{
        if(val>0){
setTimeout(resolve=()=>{console.log("dhvgfsd")},3000);
        }
        else{
            reject("fg");
        }
    })

function toss3e(val){
    return new Promise((resolve,reject)=>{
        if(val>0){
setTimeout(resolve,1000,"v");
        }
        else{
            reject("not rec");
        }
    })
}
/* Promise.allSettled([toss3e(1),tosse(-1)])
.then((val)=>{
    console.log(val+true)
})
.catch(()=>{
    console.log(false)
}) */
async function check(){
    try{console.log("hi");
    res=await tosse((value)=>{
if(value>0){return true}
else{
    return false
}
    });
    console.log(res);
    }
    catch(error){
        console.log(error);
    }
}
check();