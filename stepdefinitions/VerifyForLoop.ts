var num:number = 0
var count:number = 0;
var oddNumbers: number[]=new Array(4);

for(num=0;num<=20;num++) {
   if (num % 2==0) {
      continue
   }
   else {
      oddNumbers[count]=num;
   }
   count++
}
console.log (" The count of odd values between 0 and 20 is: "+count)    //outputs 10 start
console.log("The odd numbers before 20 are:\n"+oddNumbers);