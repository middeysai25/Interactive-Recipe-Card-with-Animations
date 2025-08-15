const toggleIngredientsBtn = document.getElementById("toggle-ingredients");
const ingredientsList = document.getElementById("ingredients");
const toggleStepsBtn = document.getElementById("toggle-steps");
const stepsList = document.getElementById("steps");

const startBtn = document.getElementById("start-cooking");
const nextBtn = document.getElementById("next-step");
const progress = document.getElementById("progress");
const steps = stepsList.querySelectorAll("li");
let currentStep = 0;

// Toggle Ingredients
toggleIngredientsBtn.addEventListener("click", () => {
  ingredientsList.classList.toggle("hidden");
  toggleIngredientsBtn.textContent = ingredientsList.classList.contains("hidden") ? "Show Ingredients" : "Hide Ingredients";
});

// Toggle Steps
toggleStepsBtn.addEventListener("click", () => {
  stepsList.classList.toggle("hidden");
  toggleStepsBtn.textContent = stepsList.classList.contains("hidden") ? "Show Steps" : "Hide Steps";
});

// Start Cooking
startBtn.addEventListener("click", () => {
  currentStep = 0;
  steps.forEach(step => step.style.background = "");
  steps[currentStep].style.background = "#ffebf0";
  nextBtn.disabled = false;
  progress.style.width = "0%";
});

// Next Step
nextBtn.addEventListener("click", () => {
  steps[currentStep].style.background = "";
  currentStep++;
  if (currentStep < steps.length) {
    steps[currentStep].style.background = "#ffebf0";
    progress.style.width = ((currentStep) / (steps.length - 1)) * 100 + "%";
  } else {
    nextBtn.disabled = true;
    progress.style.width = "100%";
  }
});