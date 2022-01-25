const chipsContainer = document.getElementById("chips-container");

const handleInput = () => {
  const inputText = document.getElementById("chips-input").value;
  if (inputText !== "") {
    const chip = document.createElement("div");
    chip.classList.add("chip");
    chip.innerHTML =
      "<span class='chips-text'>" +
      document.getElementById("chips-input").value +
      `</span><i class="fas fa-times-circle" onclick='removeChip(event);'></i>`;
    chipsContainer.append(chip);
    document.getElementById("chips-input").value = "";
  }
};

const removeChip = (e) => {
  if (e.target.classList.contains("fas")) {
    e.target.parentElement.remove();
  }
};

document.getElementById("chips-input").addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    handleInput();
  }
});

document.getElementById("chips-input").addEventListener("focusout", function () {
  handleInput();
});
