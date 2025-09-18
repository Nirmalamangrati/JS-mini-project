var istatus = document.querySelector("h2");
var addFriend = document.querySelector("#add");
addFriend.addEventListener("click", function () {
  istatus.innerHTML = "Friends";
  istatus.style.color = "Green";
});
remove.addEventListener("click", function () {
  istatus.innerHTML = "Stranger";
  istatus.style.color = "red";
});
