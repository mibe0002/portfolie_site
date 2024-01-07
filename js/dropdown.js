const ddIcon = document.querySelector(".ddicon");
const dropdown = document.querySelector(".dropdown");

ddIcon.addEventListener("click", () => {
  ddIcon.classList.toggle("active");
  dropdown.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    ddIcon.classList.remove("active");
    dropdown.classList.remove("active");
  });
});

// genbrugt kode fra tema 3: menu_test.zip
