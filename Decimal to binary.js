/// function anybasetodecimal(num,base){
// ans=0;
// power=1;
// while(num>0){
//     let rem=num%10;
//     num=Math.floor(num/10)
//     rem=num*power;
//     ans=ans+rem;
//     power=power*base;
// }
// return ans;
// }
// let rv=anybasetodecimal(240,8);
// console.log(rv);
// function anybasetodecimal(num,base) {
//     ans=0;
//     pow=1;
//     while (num>0) {
//         let rem= num%10;
//         num= Math.floor(num/10);
//         rem=rem*pow;
//         ans=ans + rem;
//         pow= pow*base;
//     }
//     return ans;
// }
//  let rv=anybasetodecimal(120,8);
//  console.log(rv);   
// function anyDecimalToBase(num, base) {
//     let ans = 0;
//     let pow = 1;
//     while (num > 0) {
//       let rem = num % base;
//       num = Math.floor(num / base);
//       ans = ans + (rem * pow);
//       pow = pow * 10;
//     }
//     return ans;
//   }
  
//   let rv = anyDecimalToBase(120, 8);
//   console.log(rv);
 //Anybasetobase
// function Anybaseaddition(base,num1,num2) {
// let ans=0;
// let c=0;
// let pow=1;
// while (num1>0||num2>0||c>0) {
//     let num1ld=num1%10;
//     let num2ld=num2%10;
//     num1=Math.floor(num1/10);
//     num2= Math.floor(num2/10);
// let d=num1ld+num2ld+c;
// c= Math.floor(d/base);
// d=d%base;
// ans+=d*pow;
// pow=pow*10;
  
// }
// return ans; 
// }
// let sum=Anybaseaddition(8,67,43)
// console.log(sum);
