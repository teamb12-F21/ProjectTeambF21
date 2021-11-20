

btnAdd.onclick=function(){
let newItem = inptNewItem.value
let newDescription = inptDescription.value
    
    query = "INSERT INTO list (item,description) VALUES ('" + newItem + "','" + newDescription + "')"
    // look at how the query is rendered by the code and use this form to test with database
    /*alert(query)*/
    
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + schema + "&query=" + query)

    if (req.status == 200) { //transit worked.
        /*let temp = JSON.parse(req.responseText)
        console.log(temp)*/
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblMessage.value = "You have successfully added the item!"
        else
            lblMessage.value = "There was a problem with adding the item to the database."
    } else   // transit error
        lblMessage.value = "Error: " + req.status
      
}

/*
btnShowList.onclick=function(){
  query = "SELECT * FROM list"
  alert(query)
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + schema + "&query=" + query)
 
 if (req.status == 200) { //transit trip worked.
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblMessage.textContent = "There are no ${petType}'s in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           taList.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage.textContent = "Error code: " + req.status

}
*/
