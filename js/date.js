const date=()=>{
    let currentDate=new Date();
    let day=currentDate.getDate();
    let mont=currentDate.getMonth()+1;
    let year=currentDate.getFullYear();
    if(day<10){
        day="0"+day;
    }
    if(mont<10){
        mont="0"+mont;
    }
    if(year<10){
        year="0"+year;
    }
    console.log(mont+"/"+day+"/"+year);
    console.log(mont+"-"+day+"-"+year);
    console.log(day+"/"+mont+"/"+year);
    console.log(day+"-"+mont+"-"+year);
}
date();