const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  console.log(chorus);
}
console.log("Until the sun comes up!");

for (var x = 100; x <= 200; x++)
{
  switch(x){
    case(x / 3 == 0 && x / 4 != 0): 
      console.log("Loopy");
      break;
    case(x / 4 == 0 && x / 3 != 0):
      console.log("Lighthouse");
      break;
    case(x / 3 == 0 && x / 4 == 0):
      console.log("LoopyLighthouse");
  }
  console.log(x);
}