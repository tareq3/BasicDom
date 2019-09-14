let uList = document.querySelector("#nameList");

let nameField = document.querySelector("#nameField");

nameField.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    createLi(uList, event.target.value);
    event.target.value = "";
  }
});

function createLi(uList, data) {
  let lItem = document.createElement("li");
  lItem.className = "list-group-item my-2 d-flex text-primary";
  lItem.innerHTML = data;

  let mySpan = document.createElement("span");
  mySpan.innerHTML = "X";
  mySpan.className = "ml-auto";
  mySpan.style.color = "red";
  mySpan.style.cursor = "pointer";

  mySpan.addEventListener("click", function() {
    uList.removeChild(lItem);
  });

  lItem.appendChild(mySpan);

  console.log(mySpan);
  uList.appendChild(lItem);
}
