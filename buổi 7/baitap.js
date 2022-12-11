// bài 1
// function student = (name, age, address) 
function student() {
    const student = {
        name : 'đạt',
        age : '16',
        address : 'Vĩnh Phúc'
    };
    console.log(student);
  }
student();
// bài 2
var smartPhones = [ 
    { name: 'iphone', price: '649' }, 
    { name: 'Galaxy S6', price: '576' }, 
    { name: 'Galaxy Note 5', price: '489' }  
];
console.log;smartPhones.map(function(smartPhone) {
    return smartPhone.price;
});
console.log(smartPhones.map(smartPhone => smartPhone.price));
// bài 3
var foo = () => {
    console.log('x,y,z');
  };
  foo();

var foo = () => {
    alert('hello');
  };
  foo();

var foo = (a,b) => {
    let m = a+b*100
    return m
};
foo(1,3)
console.log('hàm ko có return',foo('hello'));
console.log('hàm có return',foo(1,3));  