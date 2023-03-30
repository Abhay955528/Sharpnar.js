let form = document.getElementById('my-form');
let spendMoney = document.getElementById('Amount');
let spendOn = document.getElementById('kis-chiz-pe');
let spendWhat = document.getElementById('kahaPe');

form.addEventListener('submit', AddNewSpend);

function AddNewSpend(e) {
    e.preventDefault();
    if (spendMoney.value === '' || spendOn.value === '' || spendWhat.value === '') {
        alert('Fill the deatils');
    }
    else {
        let money = spendMoney.value;
        let On = spendOn.value;
        let What = spendWhat.value;

        let myObj = {
            money,
            On,
            What,
        }

        localStorage.setItem(myObj.money, JSON.stringify(myObj));
        showUsersOnScreen(myObj);

        spendMoney.value = '';
        spendOn.value = '';
        spendWhat.value = '';
    }
}
function showUsersOnScreen(myObj) {
    let parent = document.getElementById('user');
    let child = document.createElement('li');

    child.appendChild(document.createTextNode(`${myObj.money} : ${myObj.On} : ${myObj.What}`));

    // create delete button
    let deletebtn = document.createElement('input');
    deletebtn.value = 'Delete Expense';
    deletebtn.id = 'btn';
    deletebtn.type = 'button'

    deletebtn.onclick = (e) => {
        if (confirm('Are You Sure ..?')) {
            var li = e.target.parentElement;
            localStorage.removeItem(myObj.money);
        parent.removeChild(child);
        }
    }
    child.appendChild(deletebtn);


    // create edit button
    let editBtn = document.createElement('input');
    editBtn.value = 'Edit Expense';
    editBtn.id = 'btn';
    editBtn.type = 'button';

    editBtn.onclick = (e) => {
        spendMoney.value = myObj.money;
        spendOn.value = myObj.On;
        spendWhat.value = myObj.What;
        parent.removeChild(child);
    }
    child.appendChild(editBtn);

    parent.appendChild(child);
    // parent.appendChild(detailsOfPeople);
    
};

window.addEventListener('DOMContentLoaded', onPageLoading); 
function onPageLoading(e){
    let myKeys=Object.keys(localStorage); 

    myKeys.forEach((key) =>{

      let stringifiedValue=localStorage.getItem(key);
      
      let detailsOfPeople=JSON.parse(stringifiedValue);
    //   console.log(detailsOfPeople);

       // console.log(myObj[key]);

       showUsersOnScreen(detailsOfPeople);
    });
}