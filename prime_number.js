// Number is prime or not

let number=12;
let count=0;
for(let i=1; i<=number; i++){
  if(number%i==0)
{
    count++;
}
}

if(count==2)
{
  console.log("It is a Prime Number");
}
else
 {
 console.log("Not a Prime Number");
}
