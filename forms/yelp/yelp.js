//let yelp = 'https://api.yelp.com/v3/businesses/search?location="Omaha"&term=restaurant'

btnRes.onclick=function(){
   window.open('https://www.yelp.com/nearme/grocery-stores')
}

/*
function callAPI(yelp) {
    var xhttp = new XMLHttpRequest()

    // if you need cors, use this code
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + yelp)

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
   
    txtRes.value = message

    // if want to add to database call a function here that does that
    // addToDatabase()
}
*/
btn3screen.onclick=function(){
  ChangeForm(thirdScreen)
}

