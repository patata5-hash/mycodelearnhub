document.addEventListener("DOMContentLoaded", () => {
    console.log("CodeLearn Hub loaded");
  
    // Toggle dark mode
    const toggleTheme = () => {
      document.body.classList.toggle('dark-mode');
    };
  
    // Example usage
    // toggleTheme();
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const filter = document.getElementById("difficultyFilter");
  
    if (filter) {
      filter.addEventListener("change", () => {
        const value = filter.value;
        const cards = document.querySelectorAll(".card");
  
        cards.forEach(card => {
          const level = card.dataset.difficulty;
          if (value === "all" || value === level) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    }
  });
  const toggleButton = document.getElementById("themeToggle");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save user preference
    const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });

  // Apply saved theme on load
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark-mode");
  }
}
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}
function markComplete(tutorialId) {
  const progress = JSON.parse(localStorage.getItem("progress") || "[]");
  if (!progress.includes(tutorialId)) {
    progress.push(tutorialId);
    localStorage.setItem("progress", JSON.stringify(progress));
  }
}

document.querySelectorAll(".complete-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const card = e.target.closest(".card");
    const id = card.dataset.id;
    markComplete(id);
    alert("Marked as completed!");
  });
});
const progressCount = document.getElementById("progressCount");

if (progressCount) {
  const progress = JSON.parse(localStorage.getItem("progress") || "[]");
  progressCount.querySelector("strong").textContent = `${progress.length}`;
}
function toggleBookmark(id) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  if (bookmarks.includes(id)) {
    bookmarks = bookmarks.filter(b => b !== id);
  } else {
    bookmarks.push(id);
  }
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

document.querySelectorAll(".bookmark-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const id = e.target.closest(".card").dataset.id;
    toggleBookmark(id);
    alert("Bookmark toggled!");
  });
});
const bookmarkList = document.getElementById("bookmarkList");

if (bookmarkList) {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  bookmarks.forEach(title => {
    const li = document.createElement("li");
    li.textContent = title;
    bookmarkList.appendChild(li);
  });
}
function runCode() {
  const input = document.getElementById("editor").value;
  const output = document.getElementById("output");

  try {
    const result = eval(input);
    output.textContent = result ?? "Code executed successfully.";
  } catch (err) {
    output.textContent = `Error: ${err.message}`;
  }
}
const form = document.getElementById("signupForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const username = form.username.value.trim();
    const email = form.email.value.trim();

    if (!email.includes("@") || username.length < 3) {
      alert("Invalid input. Please check your details.");
    } else {
      alert("Form submitted successfully!");
      form.reset(); // Optional: Clear the form
    }
  });
}
try {
  const data = JSON.parse('{"invalidJson"'); // error on purpose
} catch (err) {
  console.error("Oops! Something went wrong:", err.message);
}
