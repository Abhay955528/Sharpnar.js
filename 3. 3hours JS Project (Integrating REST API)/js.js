let myItem = document.getElementById("GenralStore");
let Useritem = document.getElementById("item");
let Userdescription = document.getElementById("description");
let Itemprice = document.getElementById("price");
let Itemquanity = document.getElementById("quanity");

document.addEventListener("submit", NewItemFrormser);

function NewItemFrormser(e) {
  e.preventDefault();

  if (
    Useritem.value ||
    Userdescription.value ||
    Itemprice.value ||
    Itemquanity.value === ""
  ) {
    alert(" please fill the item deatils");
  } else {
    Item = Useritem.value;
    Description = Userdescription.value;
    Price = Itemprice.value;
    Quanity = Itemquanity.value;
    const itemObject = {
      Item,
      Description,
      Price,
      Quanity,
    };
    axios
      .post(
        "https://crudcrud.com/api/5eb34f145dcd478681d265fe3e367c0e/GenralStore",
        itemObject
      )
      .then((res) => {
        showOnDisplay(res.data);
      })
      .catch((err) => {
        document.body.innerHTML =
          document.body.innerHTML + "<h4>Something went wrong</h4>";
        console.log(err);
      });
  }
}

function showOnDisplay(itemObject) {
  let ParentNewItems = document.getElementById("Useritems");
  let ChildNewItems = document.createElement("li");

  ChildNewItems.appendChild(
    document.createTextNode(
      `${itemObject.Item}: ${itemObject.Description}: ${itemObject.Price}: ${itemObject.Quanity}`
    )
  );

  ParentNewItems.appendChild(ChildNewItems);
}

// window.addEventListener("DOMContentLoaded", refresThePage);
// function refresThePage(e) {
//   axios
//     .get(
//         'https://crudcrud.com/api/5eb34f145dcd478681d265fe3e367c0e/GenralStore'
//     )
//     .then((reponse) => {
//       for (let i = 0; i < reponse.data.length; i++) {
//         showOnDisplay(reponse.data[i]);
//       }
//     })
//     .catch((err)=>{
//         document.body.innerHTML = document.body.innerHTML+'<h4>Something went wrong</h4>';
//         console.log(err);
//     })
// }
