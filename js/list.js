// Declare the DOM
const Link = document.querySelectorAll(".linked");

// toggle the list
function dropDownList() {
  const menu = this.closest("[data-target]"); // data-target of the div
  const Content = this.closest("li").children[1].id; // is the parent of the div

  if (menu.dataset.target === Content) {
    this.parentNode.classList.toggle("open");
    this.parentNode.children[1].classList.toggle("slide-down");
  }
}

Link.forEach((e) => {
  e.addEventListener("click", dropDownList);
});
