    //Question-1
    // Entrycontrolloop- The loop in which condition is check at the begining of the loop are known as Entrycontrolloop.
   // Syntax of entrycontrolloop-
    // for(let i=0;i<=5;i++ ){
    //     console.log(i);
        
    // }
        
    
    // Exitcontrollooop- The loop in which condition is checked after the loop execute and then condition is checked.
    //Syntax of exit controlloop-
    // let i=0;
    // do{
    // console.log(i);
    // i++;
    // }
    // while (i<5);
//Question-5//
// let nsp=1;
// let nst=5;
// //row
// for (let row=1;row<=5;row++){
// //space
// for (let sp=1; sp<=row;sp++){
//     process.stdout.write(" ")
// }
// //Starprint
// for (let st=1; st<=nst; st++){
//     process.stdout.write("*")
// }
// console.log()
// nst--;

// }
//Question=6
// var prime=(n)=>{
//     for(let i=1;i<=n;i++)
//     if(i%2!==0&& i%!3==0&& i%5==0&& i%7==0)
//     elseif(i==2||i==3||i==5||i==7|)
// }
// prime(100);
//Question-3//
// Write the output of the following question:-
//         let found = false; 
//         for (let i = 1; i <= 3; i++) { 
//         for (let j = 1; j <= 3; j++) { 
//         if (i * j > 4) { 
//         found = true; break; 
//    } 
//        console.log(i, j); 
// } 
//       if (found) break; 
// }
// line47-conditon check=i*j>4 to phir break ho jayega hor us conditon ni chlegi
// then i ki value lene ke lia we will check the line 45
// we want the value of j also so line no 46 chlegi
// line 45- wheni=1
// line 46-whenj=1
// line 47-i*j>4=1*1= condtion ho gyi true
// line 45 when i=1
// line 46 When j=2
// line 47=1*2=2 conditon ho gyi true
// line 45 when i=1
// line 46 when j=3
// line 47-i*j-1*3=3 condtion ho gyi true 
// line 45- when i=2
// line 46- when j=1
// line 47-i*j 2*1=2 condtiorn true
// line 45- when i=2
// line 46 when j=2
// line 47-i*j-2*2=4 condtion true 
// line 45- when i=2
// line 46 when j=3
// line 47-i*j-2*3=6 condtion false
// line 52 to break 
// ouput of  code is
// (1,1) (2,1)
// (1,2)  (2,2)
// (1,3)  (2,3)
// q-2Write the output of the following question:-

//          for (let i = 1; i <= 3; i++) { 
//          for (let j = 1; j <= 3; j++) { 
//          if (i === j) continue; 
//          console.log(i + j); } 
//         }
// line 82-when i=1
// line 83- when j=1
// line 84- i=j not taken 
// line 82- when i=1
// line 83- when j=2
// line 84 condtion true ho gyi 
// line 85- 1+2=3
// line 82 when i =1
// line 83 when j=3
// line 84 i=j conditon check i!=j
// line 85- i+j=1+3=4
// line82- when i=2
// line 83-j=1
// line 84 i!=j condtion true
// line 85- 2+1=3
// line 82-when i=2
// line 83- when j=3
// line 84- i!=j conditon true
// line 85=2+3=5
// line 82=when i=3
// line when j=1
// line 84 condtion true 
// line 85- i+j-3+1=4
// line 82= when i=3
// line 83-when j=2
// line 84 condtion true i!j
// line 85 = i+j=3+2=5

// line 82=i=3
// line 83 i=3
// line 84 i=j condtion false
// output of Code
// 3
// 4
// 3
// 5
// 4
// 5
// Q4. Write the output of the following question:-
// let pattern = ''; 
//  for (let i = 1; i <= 5; i++) { 
// for (let j = 1; j <= i; j++) {
//  pattern += '*';
//  } 
// pattern += '\n';
//  }
//  console.log(pattern);













    


