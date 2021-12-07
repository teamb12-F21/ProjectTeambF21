let typeOfCategories = ['Homework', 'Business', 'Groceries', 'Other']
let schema = "375groupb12"
let newItemAndDescription = []

drpCats.onclick=function(){
    let temp = ""
  drpCats.clear()
  for (i = 0; i < typeOfCategories.length; i++) {
    temp = typeOfCategories[i]
    drpCats.addItem(temp)
  }
}
btnAdd.onclick=function(){
    let temp = inptAddCategory.value
  drpCats.clear()
      inptAddCategory.value = ""
  typeOfCategories.push(temp)
  for (i = 0; i < typeOfCategories.length; i++) {
    temp = typeOfCategories[i]
    drpCats.addItem(temp)
 }
}
btnList.onclick=function(){
  ChangeForm(listPage)
}

btnMaps.onclick=function(){
 ChangeForm(testAPI)
}

btnYelp.onclick=function(){
 ChangeForm(yelp)
}





