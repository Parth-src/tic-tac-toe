# 🎮 Tic Tac Toe Game (X and O)

This is a web-based **Tic Tac Toe** game built using **HTML**, **CSS**, and **JavaScript**. The game allows two players to
play turn-by-turn, detects the winner, and provides a clean UI with reset functionality.

---


## 🛠️ Features

- 🎲 Two-player gameplay (X vs O)
- ✅ Automatic win detection for all possible patterns
- 🚫 Disables boxes after game ends
- 🔁 Restart and New Game buttons
- 💡 Highlighted message on winning
- 🎨 Fully responsive and styled layout

---

## 📚 What I Learned & Used

### 🧱 **HTML**
- Semantic structure (`<main>`, `<button>`, `<div>`, `<h1>`)
- Buttons for game interaction
- Structured layout for grid and controls

### 🎨 **CSS**
- `flexbox` for layout and centering elements
- `vmin` units for responsive design
- Button hover effects using `:hover`
- Box shadows, border-radius for modern UI
- Utility classes like `.hide` for toggling visibility

### ⚙️ **JavaScript**
- DOM manipulation using `document.querySelectorAll()` and event listeners
- Dynamic text and button disabling
- Turn tracking using a `boolean` variable
- Win condition checking using predefined patterns (`winpattern`)
- Showing/hiding messages using `classList.add` / `remove`
- Functions for:
  - Game logic
  - UI updates
  - Reset functionality
