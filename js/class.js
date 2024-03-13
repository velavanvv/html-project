class areoplain{
plain(num){
console.log(num);
return 32;
}
a=10;
cam=()=>{
/* alert("welcome"); */
}
}
emrits=new areoplain();
emrits.cam();
console.log(emrits.plain(32));



welcome=function(){
    console.log("hi");
}
/* 
const url = 'https://kfc-locations.p.rapidapi.com/kfc/location/0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'kfc-locations.p.rapidapi.com'
	}
}; */


let vel=(name)=>{
	return new Promise((reslove,reject)=>{
		
		if(name=="vela"){
			setTimeout(reslove,3000,"welcome");
		}
		else{
			reject(()=>{console.log("wait")});
			
		}
	})
}
async function check(){
try {
	
	const result = await vel("vela");
	console.log(result);
} catch (error) {
	error();
}
}check();