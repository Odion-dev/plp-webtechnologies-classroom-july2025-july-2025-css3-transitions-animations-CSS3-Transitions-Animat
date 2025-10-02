
let globalCount = 0;

function calculateTotal(base, multiplier) {
  let localResult = base * multiplier;
  return localResult;
}


console.log("Total:", calculateTotal(5, 3)); 

const pulseBtn = document.getElementById("pulseBtn");
pulseBtn.addEventListener("click", () => {
  pulseBtn.classList.add("active");
  setTimeout(() => pulseBtn.classList.remove("active"), 600);
});


function triggerBoxAnimation() {
  const box = document.getElementById("animateBox");
  box.classList.remove("animate"); 
  void box.offsetWidth; 
  box.classList.add("animate");
}


function flipCard(cardElement) {
  cardElement.classList.toggle("flipped");
}


function openModal() {
  document.getElementById("modal").style.display = "block";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

