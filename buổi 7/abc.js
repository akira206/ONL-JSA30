function message(param){
    console.log(param);
}

// message("hê lô hê sờ ly ly")
const es6_message = (param) =>{
    console.log(param)
} 
message([1,2,3])
message({key:'value'})
message('hello')

// biến toàn cục : đc khai báo ở ngoài hàm
// biến cục bộ : đc khai báo trong thân hàm

function sum(a, b) {
    console.log(a+b);
    return a + b;
  }
sum(1,3)
console.log('hàm ko có return',message('hello'));
console.log('hàm có return',sum(6,3));  