//Vars
const budget = prompt("Set your budget");
let userBudget = 0;

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
    const budgetBlock = document.querySelector("span#total");
    budgetBlock.innerHTML = message;
  }
  showRemaning(message, blockClass) {
    //const budgetBlock = document.getElementById("restante");
    const budgetBlock = document.querySelector("span#restante");
    budgetBlock.innerHTML = message;
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
