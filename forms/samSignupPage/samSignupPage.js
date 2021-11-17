
let req = ""
let query = ""
let results = ""
let pw = "Creighton1234"  // ***** put your database password here
let netID = "sjs08496"
let databaseSchema = "375groupb12" 
let allUserData = []

btnCreate.onclick=function(){
    let firstName = inptFirst.value
    let lastName = inptLast.value
    let street = inptStreet.value
    let city = inptCity.value
    let state = inptState.value
    let email = inptEmail.value
    let password = inptPass.value
  
let query = "INSERT INTO user (`first_name`,`last_name`,`street`,`city`,`state`,`email`,`password1`) VALUES ('" + firstName + "', '" + lastName + "', '" + street + "', '" + city + "', '" + state + "', '" + email + "', '" + password + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)

    if (req.status == 200) { 
    //console.log(req.responseText)
        if (req.responseText == 500)    
            lblMessage3.textContent = "You have successfully created your account!"
        else
            lblMessage3.textContent = "There was a problem with adding the user to the database."
    } else 
        lblMessage3.textContent = "Error: " + req.status



}

btnHome.onclick=function(){
  ChangeForm(RyanLoginPage)
}
