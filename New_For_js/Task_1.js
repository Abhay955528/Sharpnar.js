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

// task sevan

// Add helle before item Listner

let li = document.createElement('div');
li.className = 'hello';
li.id = 'hello1';
li.title = 'Hello div';
li.textContent = ' hello guys';
let container = document.querySelector('header .container');
let h = document.querySelector('header h1');
container.insertBefore(li, h);

// Add helle before item Listner

let li = document.createElement('div');
li.className = 'hello';
li.id = 'hello1';
li.title = 'Hello div';
li.textContent = ' hello guys';
let container = document.querySelector('.container #main');
let h = document.querySelector('#main form');

container.insertBefore(li, h);


// task eight

let from = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// From submit event
from.addEventListener('submit', addItem);

// Delet event
itemList.addEventListener('click', removeItem);

// Event Filter
filter.addEventListener('keyup', filterItem);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    let deletebtn = document.createElement('button');

    // Create classes to del button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deletebtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deletebtn);

    // Append li to list
    itemList.appendChild(li);

    itemList.removeItembyid("item").value;

}

// Remove Item 

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// fiter 
function filterItem(e) {

    // Convert text to LowerCase
    let text = e.target.value.toLowerCase();

    // Get a li
    let items = itemList.getElementsByTagName('li');

    // Convert to an array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })


}



// task nine

let from = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// From submit event
from.addEventListener('submit', addItem);

// Delet event
itemList.addEventListener('click', removeItem);

// Event Filter
filter.addEventListener('keyup', filterItem);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    let deletebtn = document.createElement('button');

    // Create classes to del button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deletebtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deletebtn);

    // Append li to list
    itemList.appendChild(li);

    itemList.removeItembyid("item").value;

}

// Remove Item 

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// fiter 
function filterItem(e) {

    // Convert text to LowerCase
    let text = e.target.value.toLowerCase();

    // Get a li
    let items = itemList.getElementsByTagName('li');

    // Convert to an array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
}

// task ten ---------------------

let myFrom = document.getElementById('my-form');
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let usermob = document.getElementById('Mob');
let parent = document.getElementById('user');


myFrom.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    if (userName.value === '' || userEmail.value === '' || usermob.value === '') {
        alert('Fill the all details');
    }
    else {
        let child = document.createElement('li');
        child.appendChild(document.createTextNode(`${userName.value}:${userEmail.value}:${usermob.value}`));
        const name = userName.value;
        const mail = userEmail.value;
        const mobile = Mob.value;

        let x = {
            name,
            mail,
            mobile,
        }
        let obj = JSON.stringify(x);
        localStorage.setItem(userEmail.value, obj);
        console.log(localStorage);
        
        // create feild
        
        userName.value = '';
        userEmail.value = '';
        usermob.value = '';
    }
}


// task number 12-------------------------------------------------

let myFrom = document.getElementById('my-form');
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let usermob = document.getElementById('Mob');
let parent = document.getElementById('user');


myFrom.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    if (userName.value === '' || userEmail.value === '' || usermob.value === '') {
        alert('Fill the all details');
    }
    else {
        let child = document.createElement('li');
        child.appendChild(document.createTextNode(`${userName.value}:${userEmail.value}:${usermob.value}`));
        const name = userName.value;
        const mail = userEmail.value;
        const mobile = Mob.value;

        let x = {
            name,
            mail,
            mobile,
        }
        let obj = JSON.stringify(x);
        localStorage.setItem(userEmail.value, obj);
        console.log(localStorage);
        
        // create feild
        
        userName.value = '';
        userEmail.value = '';
        usermob.value = '';
    }
}

// task number 13 ----------------------------------------------------------------------------

let myFrom = document.getElementById('my-form');
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let usermob = document.getElementById('Mob');

myFrom.addEventListener('submit', addItem);


function addItem(e) {
    e.preventDefault();
    if (userName.value === '' || userEmail.value === '' || usermob.value === '') {
        alert('Fill the all details');
    }
    else {
        const name = userName.value;
        const mail = userEmail.value;
        const mobile = Mob.value;

        let x = {
            name,
            mail,
            mobile,
        }
        localStorage.setItem(x.mail, JSON.stringify(x))
        showUsersOnScreen(x);
        // create feild

        userName.value = '';
        userEmail.value = '';
        usermob.value = '';
    }
}

function showUsersOnScreen(x) {
    let parent = document.getElementById('user');
    let child = document.createElement('li');


    child.appendChild(document.createTextNode(`${userName.value}:${userEmail.value}:${usermob.value}`));

    // create delete

    let deleteBtn = document.createElement('input');
    deleteBtn.id = 'btn';
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    
    // create EditBtn

    let EditBtn = document.createElement('input'); //task number 14

    EditBtn.id = 'btn';
    EditBtn.type = 'button';
    EditBtn.value = 'Edit';
    EditBtn.onclick = (e) => {
        userName.value = x.name;
        userEmail.value = x.mail;
        usermob.value = x.mobile;
        parent.removeChild(child);
    }
    child.appendChild(EditBtn);

    
    deleteBtn.onclick = (e) => {
        if (confirm("Are You Sure?")) {
            var li = e.target.parentElement;
            localStorage.removeItem(x.mail);
            parent.removeChild(child);
        }
    };
    child.appendChild(deleteBtn);
    parent.appendChild(child);
}
