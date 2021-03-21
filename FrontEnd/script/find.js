var url = "http://localhost:8081";



var form = document.querySelector('form'); 
form.addEventListener('submit', (e)=>{ 
    //to prevent reload 
    e.preventDefault(); 
    console.log(document.querySelector('.pick').value)
    axios({ 
        method  : 'post', 
        url : url + '/ride', 
        data : { 
            currentLocation: document.querySelector('.pick').value,
            destination: document.querySelector('.dest').value,
            lat: document.querySelector('.lat').value,
            long: document.querySelector('.long').value
        }, 
    }) 
    .then((res)=>{ 
        //location.reload();
        //location.reload();
        console.log("Worked")
        window.location.href = 'taxi.html?lat=' + document.querySelector('.lat').value + '&long=' + document.querySelector('.long').value + '&pick=' + document.querySelector('.pick').value + '&dest=' + document.querySelector('.dest').value;
    })
    .catch((e)=>{
        console.log(e);
    }) 
})