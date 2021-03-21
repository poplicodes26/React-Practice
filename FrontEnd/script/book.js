const params = new URLSearchParams(window.location.search)

var lat = params.get('lat');

var long =params.get('long');
var pick=params.get('pick');
var dest=params.get('dest');
var url = "http://localhost:8081";

axios({
    method: 'GET',
    url: url + '/cab?lat='+lat+'&long='+long,
}).then((data)=>
{
    console.log(data);
    var s = '';
    data.data.data.forEach((i) => {
        s = s + `
        <div class="container" id="card-cont">
            <div class="card w-100" id="card">
                <div class="card-header" id="header">
                    <h2>` + i.vehicle + `</h2>
                </div>
                <div class="card-body" id="card-body">
                    <h4>Car number:` + i.vehicleNo + `</h3>
                    <h4>Driver Mobile Number:` + i.phoneNo + `</h3>
                    <h4 id="price">price: <span>` + i.charge + ` Ether</span></h3>
                    <a href="../htmlFIles/bill.html?pick=${pick}&dest=${dest}&carNo=${i.vehicleNo}&driverNo=${i.phoneNo}&DriverID=${i._id}&Charge=${i.charge}" class="btn">Book Ride</a>
                </div>
            </div>
        </div>
        `
    })

    if(s!='')
        document.querySelector('.rides').innerHTML = s;
    else    
        document.querySelector('.rides').innerHTML = `<h2 style="text-align: center; color: white">No rides available nearby</h2>`;
})