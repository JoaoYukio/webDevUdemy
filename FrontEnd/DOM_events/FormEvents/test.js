// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const myform = document.querySelector('#myForm');
console.log(myform)
const myUl = document.querySelector('#list');

const quantd = document.querySelector('#qty');
const prod = document.querySelector('#product');

myform.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(quantd.value)
    /*
    let qtd = quantd.elements.qty;
    let prod = quantd.elements.product;
 
    const myLi = document.createElement('li');
    myLi.innerText = `${qtd} ${prod}`;
    myUl.appendChild(myLi);
    quantd.value = '';
    prod.value = '';*/
});