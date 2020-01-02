//Vars
const budget = prompt("Set your budget");
let userBudget = 0;
const form = document.querySelector("form#agregar-gasto");

//Classes
class Budget {
  constructor(budget) {
    this.budget = Number(budget);
    this.remaining = Number(budget);
  }

  remainingCalculate(spendAmount = 0) {
    return (this.remaining = this.remaining - Number(spendAmount));
  }
}

class Interface {
  showBudget(message, blockClass) {
    //const budgetBlock = document.getElementById("total");
    const span = document.querySelector("span#total");
    span.innerHTML = `${message}`;
  }
  showRemaning(message, blockClass) {
    //const budgetBlock = document.getElementById("restante");
    const span = document.querySelector("span#restante");
    span.innerHTML = `${message}`;
  }

  showFormMessage(message, blockClass) {
    const div = document.createElement("div");
    div.classList.add("text-center", "alert");
    div.classList.add(blockClass);
    div.appendChild(document.createTextNode(message));
    document.querySelector(".primario").insertBefore(div, form);
  }
  showListMessage(spendName, spendAmount) {
    const spends = document.querySelector("#gastos ul.list-group");
    const li = document.createElement("li");
    const message = `${spendName} <span class="badge badge-primary badge-pill">$ ${spendAmount}</span>`;
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = message;
    spends.appendChild(li);
  }
}

//events
document.addEventListener("DOMContentLoaded", () => {
  if (budget === "" || budget === null) {
    window.location.reload();
  } else {
    userBudget = new Budget(budget);
    const ui = new Interface();
    ui.showBudget(userBudget.budget, "");
    ui.showRemaning(userBudget.remaining, "");
  }
});

form.addEventListener("submit", function(e) {
  console.log("Yo!");
  e.preventDefault();
  const form = document.getElementById("agregar-gasto");
  const spendName = document.getElementById("gasto").value;
  const spendAmount = document.getElementById("cantidad").value;
  const ui = new Interface();

  if ("" === spendName || "" === spendAmount) {
    ui.showFormMessage("Check fields", "alert-danger");
    setTimeout(() => {
      form.reset();
      document.querySelector(".primario .alert").remove();
    }, 1500);
  } else {
    console.log(spendName);
    console.log(spendAmount);
    ui.showListMessage(spendName, spendAmount);
  }
});
