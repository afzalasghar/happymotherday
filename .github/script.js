const popup = document.getElementById("popup");
const surpriseBtn = document.getElementById("surpriseBtn");
const closeBtn = document.getElementById("closeBtn");

surpriseBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});