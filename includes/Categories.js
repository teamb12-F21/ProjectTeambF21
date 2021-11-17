let typeOfCategories = ["Business", "Homework", "Grocery", "Personal", "Home"]
Categories.onshow=function(){
drpCategories.clear()
for (i = 0; i < typeOfCategories.length; i++)
  drpCategories.addItem(typeOfCategories[i])
  }

