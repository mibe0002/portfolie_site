document.addEventListener("DOMContentLoaded", function () {
  const imageLink = document.getElementById("imageLink");
  const imagePopup = document.getElementById("imagePopup");
  const closePopup = document.getElementById("closePopup");

  imageLink.addEventListener("click", function (e) {
    e.preventDefault();
    imagePopup.style.display = "block";
  });

  closePopup.addEventListener("click", function () {
    imagePopup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === imagePopup) {
      imagePopup.style.display = "none";
    }
  });
});

// hele koden er vha. chatgpt for at kunne have billedet af mit sitemap til at fungere som en popup.
