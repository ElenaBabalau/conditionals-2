let a = 3;
let b = -7;
let c = 2;
if (a>0 && b>0 && c>0) {
  console.log(`The sign is +`);
} else if (a<0 && b<0 && c<0) {
  console.log(`The sign is -`);
} else if (a<0 && b>0 && c<0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}