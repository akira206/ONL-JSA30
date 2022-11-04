// let number = [1, 2, 3, 4, 5]
// // console.log(number[2]) 
// // console.log(number.length); 

// // for (let i = 0 ; 1 < number.length ; i++) {
// //     console.log(number[i]);
// // }

// // number.push(6)
// // console.log(number.push(6));
// // console.log(number) 

// // var days = ['sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
// // console.log(days)
// // days.splice(2,2)
// // console.log('days.splice(2,2)', days) 
// // days.splice(2,1,'test')
// // console.log("days.splice(2,1,'test')", days)

// // console.log("days.includes('Sunday')",days.includes('Sunday'))

// // days.push("Monday")
// // console.log("days.push('Monday')", day)
// // console.log("days.indexOF('Monday')", days.indexOf('Monday', 2)) 

// let myComputer = {
//     type: "laptop",
//     brand: "Sony",
//     os: "Windows 7",
//     graphicCard: "NVIDIA",
//   };
//   for (let key in myComputer){
//     console.log(key);
//   }
// //   console.log(myComputer.os)
// //   console.log(myComputer['type']);
// //   myComputer['brand'] = 'LG'
// //   console.log(myComputer)
// //   myComputer.price = 1000
// //   console.log(myComputer)
// //   delete myComputer.graphicCard

// let str = "xin chào"
// for ( let s of str ){
//     console.log(s);
// }
// for ( let num of number ){
//     console.log(num);
// }
// let students = [
//     {
//         name:"Trí"
//     },
//     {
//         name:"Ngọc"
//     },
//     {
//         name:"Quân"
//     }
// ]
// console.log(students);
// for ( let stu of students ){
//     console.log(stu);
// }

function search() {
    var input, filter, ul, li, txtValue;
    input = document.getElementById("myInput");
    console.log(input)
    filter = input.value.toUpperCase();
    console.log(filter)
    li = document.getElementsByTagName("li");
    console.log(li)


    for (let i = 0 ; i < li.length ; i++) {
        txtValue = li[i].textContent
        console.log(txtValue)
        if (txtValue.toUpperCase().indexOf(filter) > -1 ) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}