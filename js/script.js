const collapsibles = document.querySelectorAll(".collapsible");
console.log(collapsibles);
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// //For navbar collapsible
// const navbar = document.querySelector(".nav");
// const toggler = document.querySelector(".nav__toggler");
// toggler.addEventListener("click", function () {
//   navbar.classList.toggle("collapsible--expanded");
// });

const listItems = document.querySelectorAll(".domain-block__prices li");
listItems.forEach((item) =>
  item.addEventListener("click", function () {
    listItems.forEach((item) => item.classList.remove("badge-primary"));
    this.classList.toggle("badge-primary");
  })
);
