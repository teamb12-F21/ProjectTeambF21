let typeOfCategories = ["Business", "Homework", "Grocery", "Personal", "Home"]

Categories.onshow = function() {
  let temp = " "
  drpCategories.clear()
  for (i = 0; i < typeOfCategories.length; i++) {
    temp = typeOfCategories[i]
    drpCategories.addItem(temp)
  }
}
//drpCategories.onclick = function(s){
//if (typeof(s)


btnAdd.onclick = function() {
  let temp = inptAddCategory.value
  drpCategories.clear()
      inptAddCategory.value = ""
  typeOfCategories.push(temp)
  for (i = 0; i < typeOfCategories.length; i++) {
    temp = typeOfCategories[i]
    drpCategories.addItem(temp)
  }
  
}