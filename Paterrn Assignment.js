// Question-1 flipped simple pyramid//
let nsp= 4;
let nst = 1;

for  (let row = 1; row <= 5; row++) {
//space//
for (let sp = 1; sp <= nsp; sp++){
    process.stdout.write(" ");
}
//star//
for (let st = 1; st <= nst; st++){
    process.stdout.write("*");

}
console.log();
nsp = nsp - 1;
nst = nst + 1;
}



// Question-2 - flipped-Inverted pyramid//
//  let nsp = 0;
//  let nst = 5;

//  for  (let row = 1; row <= 5; row++) {
// //space//
//  for (let sp = 1; sp <= nsp; sp++){
//      process.stdout.write(" ");
// }
// //star//
// for (let st = 1; st <= nst; st++){
//     process.stdout.write("*");

// }
// console.log();
// nsp = nsp + 1;
// nst = nst -1;
// }


// // question-3- inverted pyramid//
// let nsp = 0;
// let nst = 6;

// for (let row = 1; row <= 6; row++) {
//     // Print spaces
//     for (let sp = 1; sp <= nsp; sp++) {
//         process.stdout.write(" ");
//     }

//     // Print stars
//     for (let st = 1; st <= nst; st++) {
//         process.stdout.write("*");
//     }

//     console.log();

//     nsp++;
//     nst--;
// }
// // Q-4 simple pyramid//
// let nsp=5
// let nst=1
// for(let row=1; row<=5; row++){
//     if(row=4) {
//         nst=nst+1;
//     }
// for( let sp=1; sp<= nsp; sp++){
//     process.stdout.write(" ")
// }    

// for(let st=1;st<=nst; st++){
//     process.stdout.write("*")
//     }

// console.log();
// nsp=nsp+1;
// nst=nst+1;
// }
// // Q=5-triangle//
// for(let row=1;row<=5;row++){
// for(let star=1;star<=row; star++){
// process.stdout.write("*")
// }
// console.log()
// }
// // q-6-Inverted triangle//
// for(let row=1;row<=5;row++){
//     for(let star=1;star<=5-row+1; star++){
//      process.stdout.write("*")
//      }
//      console.log()
//      }



