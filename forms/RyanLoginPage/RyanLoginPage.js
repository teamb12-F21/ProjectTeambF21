

btnLogin.onclick=function(){
let email = inptEmail1.value
    let password = inptPassword1.value
    query = "select email, password1 from user where email='" + email + "' and password1='" + password + "'"
    // Below change from my netID to yours (twice: user and database)   
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    if (req.status == 200) {
      results = JSON.parse(req.responseText)
      console.log(results)
      if (results.length == 0) // no results were returned by the query
        lblError.value = "Incorrect Email or Password."
      else ChangeForm(samSignupPage)

    }
}   

btnSignUp.onclick=function(){
  ChangeForm(samSignupPage)
}
