const buttons = document.querySelectorAll("main button");
const submit = document.getElementById("submit");
const selectionMessage = document.getElementById("selection-message");
const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");
let selectedItems = [];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.textContent;
    const isSelected = selectedItems.includes(buttonText);

    if (!isSelected && selectedItems.length < 3) {
      // Toggle selection
      selectedItems.push(buttonText);
      e.target.style.backgroundColor = "#CEB888";
    } else if (isSelected) {
      // Toggle unselection
      const index = selectedItems.indexOf(buttonText);
      if (index > -1) {
        selectedItems.splice(index, 1);
      }
      e.target.style.backgroundColor = "transparent";
    }

    // Update selection message as a list
    updateSelectionList();
  });
});

submit.addEventListener("click", (e) => {
  if (selectedItems.length === 0) {
    addError();
    setTimeout(() => {
      removeError();
    }, 3000);
    return;
  }

  page1.classList.add("hide-display");
  page2.classList.remove("hide-display");
  submit.innerHTML = "Confirm your order";

  submit.addEventListener("click", (e) => {
    window.location.href = "/Hello-World-Hackathon-main/page3.html"
    submit.classList.add("hide-display");
    });
});

function addError() {
  alert("Please select up to three items before hitting submit.");
}

function updateSelectionList() {
  // Clear the current selection list
  selectionMessage.innerHTML = "";

  // Create a list element for each selected item
  selectedItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    selectionMessage.appendChild(listItem);
  });
}

page1.classList.remove("hide-display");
page2.classList.add("hide-display");


