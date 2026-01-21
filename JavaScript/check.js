
function display(array){
    // array.forEach(ele => {
    //     console.log("ele-->",ele);
    // });

    console.log(array);
}

let fruits = ["apple", "banana", "mango"];

fruits.push("111");
display(fruits);
fruits.pop();
display(fruits);
fruits.shift();
display(fruits);
fruits.unshift(222);
display(fruits);

var f1=["aa","bb","cc","dd","ee"];
f1=f1.slice();
console.log(f1);
f1=f1.slice(1);
console.log(f1);
f1=f1.slice(1,3);
console.log(f1);