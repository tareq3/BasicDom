let uList = document.querySelector("#nameList");

let nameField = document.querySelector("#nameField");

nameField.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    uList.appendChild(createLi(event.target.value));
  }
});

function createLi(data) {
  let lItem = document.createElement("li");
  lItem.className = "list-group-item";
  lItem.innerHTML = data;
  return lItem;
}
