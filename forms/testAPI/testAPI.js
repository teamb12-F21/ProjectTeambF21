let requestURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyBMoVzUTADYgTYmBaJgw7MmkCk9ercFWUA&query=Grocery Stores in Omaha&radius=500&location=41.265331,-95.949364&type=Grocery"


btnGrocery.onclick=function(){
    callAPI(requestURL)
}


function callAPI(URL) {
    var xhttp = new XMLHttpRequest()

    // if you need cors, use this code
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)

    // if you DON'T need cors use this line instead:
    //xhttp.open('GET',URL)

    // free CORS proxies: https://nordicapis.com/10-free-to-use-cors-proxies/

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}


function onXHRLoad() {
    let message = ""

    // 'this' is another name for the object returned from the API call
    let pm = JSON.parse(this.responseText)

    for (i = 0; i <= pm.results.length - 1; i++) {
        message = message + pm.results[i].name + "\n"
    }
    
    txtGrocery.value = message

    // if want to add to database call a function here that does that
    // addToDatabase()
}
