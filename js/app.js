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
  showBudget(message) {
    //const budgetBlock = document.getElementById("total");
    const span = document.querySelector("span#total");
    span.innerHTML = `${message}`;
  }
  showRemaning(message, blockClass = "") {
    //const budgetBlock = document.getElementById("restante");
    const span = document.querySelector("span#restante");
    span.innerHTML = `${message}`;
    if (blockClass !== "") {
      const remaining = document.querySelector("div.restante");
      remaining.classList.remove("alert-success");
      remaining.classList.remove("alert-warning");
      remaining.classList.remove("alert-danger");
      remaining.classList.add(blockClass);
    }
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

  updateRemaining(spendAmount) {
    userBudget.remainingCalculate(spendAmount);
    const ui = new Interface();
    const className = this.checkRemaining();
    ui.showRemaning(userBudget.remaining, className);
  }

  checkRemaining() {
    let classRemaining = "";
    if (userBudget.remaining < (userBudget.budget / 100) * 10) {
      classRemaining = "alert-danger"; //less 10%
    } else if (userBudget.remaining < (userBudget.budget / 100) * 50) {
      classRemaining = "alert-warning"; //less 50%
    }
    return classRemaining;
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
    ui.showListMessage(spendName, spendAmount);
    ui.updateRemaining(spendAmount);
  }
});
