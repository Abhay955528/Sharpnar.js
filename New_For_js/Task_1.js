const List = document.getElementsByClassName('list-group-item');

List[4].style.color = 'green';
List[4].style.fontWeight = 'bold';

// four task
for (let i = 0; i < List.length; i++) {
    List[i].style.backgroundColor = '#f4f4f4';
}
List[2].style.background = 'green';

// task five

let Add_hello_word_1 = document.createElement('div');
Add_hello_word_1.id = 'item';
let add_tex = document.createTextNode('Hello world');

let contain = document.querySelector('.container #main');

let h2 = document.querySelector('.container #items');

Add_hello_word_1.append(add_tex);
console.log(Add_hello_word_1);
contain.insertBefore(Add_hello_word_1, h2)

// task six

List[1].style.color = 'green';


let titels = document.querySelectorAll('.title');

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = "#f4f4f4";
    even[i].style.backgroundColor = "#ccc";
}
