// Get DOM elements
const generateBtn = document.getElementById("generateBtn");
const profileCard = document.getElementById("profileCard");

// Event listener for button
generateBtn.addEventListener("click", () => {
  profileCard.classList.remove("hidden");
});
