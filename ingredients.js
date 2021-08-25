const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var counter = 0;
while (counter < ingredients.length)
{
  console.log(ingredients[counter]);
  counter++;
}


// Write a for loop that prints out the contents of ingredients:
for(var x = 0; x < ingredients.length; x++)
{
  console.log(ingredients[x]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(var x = ingredients.length; x >= 0; x--)
{
  console.log(ingredients[x]);
}