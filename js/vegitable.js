let tomato = (weight) => new Promise((resolve, reject) => {
    if (weight > 1) {
        resolve((amount) => {
            return weight * amount;
        })
    }
    else {
        reject(() => { return "tomato" })
    }
})
let onion = (weight) => new Promise((resolve, reject) => {
    if (weight > 1) {
        resolve((amount) => {
            return weight * amount;
        })
    }
    else {
        reject(() => { return "onion" })
    }
})


async function vegtable(value1, value2, amount) {
     var total = 0;
    try {
       
        let totalamount = await tomato(value1);
        console.log("the price  " + value1 + "kg tomato :" + totalamount(amount));
        total = total + totalamount(amount);

        let totalamount1 = await onion(value2);
        console.log("the price  " + value2 + "kg onion :" + totalamount1(amount));
        total = total + totalamount1(amount);
        console.log(total);
        return total;

    }
    catch (error) {
        let flag = error();
        console.log(error());
        var tomatovalue = document.getElementById("tomato").value;
        if (flag=="tomato") {
            console.log("please enter more than tomato 1 kg");
            let change = prompt("you entered below tomato 1 kg")
            let num=parseInt(change);
            
            tomatovalue=num;
            let total3=await tomato(num);
            total=total+total3(amount);

        }
            var onionvalue = document.getElementById("onion").value;
         if (flag=="onion") {
            console.log("please enter morethan onion 1 kg");
            let change = prompt("you entered below onion 1 kg:")
       let num=parseFloat(change);
          onionvalue=num;
          let total3=await onion(num);
            total=total+total3(amount);
          

        }return total;
 /*        console.log(onionvalue);
        console.log(tomatovalue);
        let perKgAmount = 100;
        let show = document.getElementById("show");
        show.textContent=(vegtable(tomatovalue, onionvalue, perKgAmount)).then(num=>{
            show.innerText=num;
        }); */
    }
}

function val() {
    let tomatovalue = document.getElementById("tomato").value;
    let onionvalue = document.getElementById("onion").value;
    let perKgAmount = 100;
    let show = document.getElementById("show");
    let value =( vegtable(tomatovalue, onionvalue, perKgAmount)).then(num=>{show.innerText=(num)});

}
//if given kilogram less than 1 kg it shows error and to reuplode;