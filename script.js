// --------------------
// 🎯 Part 1: Variables & Conditionals
// --------------------
function checkAge() {
  let age = prompt("Enter your age:");
  let message;

  if (age >= 18) {
    message = "✅ You are an adult.";
  } else if (age > 0) {
    message = "👶 You are a minor.";
  } else {
    message = "❌ Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = message;
}

// --------------------
// ❤️ Part 2: Functions
// --------------------

// Function to calculate a total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(50, 3); // Example: 50 * 3
  document.getElementById("totalResult").textContent = "Total Price: $" + total;
}

// Function to toggle text content
function toggleMessage() {
  let text = document.getElementById("toggleText");
  if (text.textContent === "Hello! 👋") {
    text.textContent = "Goodbye! 👋";
  } else {
    text.textContent = "Hello! 👋";
  }
}

// --------------------
// 🔁 Part 3: Loops
// --------------------

// Countdown with a for loop
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous results
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Iterate through an array with forEach
function listFruits() {
  let fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange", "🍇 Grapes"];
  let list = document.getElementById("fruitList");
  list.innerHTML = "";
  fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

// --------------------
// 🌐 Part 4: DOM Manipulation
// --------------------

// Change heading text
function changeHeading() {
  document.querySelector("h1").textContent = "Heading Changed with JS!";
}

// Add a new item dynamically
function addItem() {
  let list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New Dynamic Item";
  list.appendChild(li);
}

// Highlight a section with a class toggle
function highlight() {
  document.getElementById("part4").classList.toggle("highlight");
}
