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

//events
document.addEventListener("DOMContentLoaded", () => {
  if (budget === "" || budget === null) {
    window.location.reload();
  } else {
    console.log(budget);
    userBudget = new Budget(budget);
    console.log(userBudget);
    console.log(userBudget.remainingCalculate(300));
  }
});
