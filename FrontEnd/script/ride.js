const params = new URLSearchParams(window.location.search)


var pick=params.get('pick');
var dest=params.get('dest');
var carNo=params.get('carNo');
var driverNo=params.get('driverNo');
var driverID=params.get('DriverID');
var charge=params.get('Charge');

var url = "http://localhost:8081";


document.querySelector('.bill').innerHTML = `
<h4>Pickup Point : ${pick}</h3>
<h4>Destination Point : ${dest}</h3>
<h4>Car : ${carNo}</h4>
<h4> Total Amount : ${charge} ether</h4>
<h4> Ethereum payment address:</h4>
<h4 id="address">0x6ed083FC652682C1721fdECe9f9f6326434c2674</h4>`;


axios({ 
    method  : 'post', 
    url : url + '/booking', 
    data : { 
        pickUp: pick,
        dest: dest,
        carNo: carNo,
        Drinumber: driverNo,
        driverID: driverID
    }, 
}) 
.then((res)=>{ 
    //location.reload();
    //location.reload();
    console.log("Worked")
})
.catch((e)=>{
    console.log(e);
}) 