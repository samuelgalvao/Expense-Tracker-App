const form = document.querySelector("form");
const expenseList = document.querySelector("#expense-list");
const totalExpense = document.querySelector("#total-expense");

let expenses = [];

form.addEventListener("submit",    
  function(event) {
  event.preventDefault();
  var description = event.target.elements.description.value;
  const amount = Number(event.target.elements.amount.value);
  if (!description) {
    description = 'Without description'
  }
  if(amount === 0){
    return alert('[Error] Please insert the amount')
  }
  expenses.push({ description, amount});
  renderExpenses();
  form.reset();
});


// function addExpense() {
//     const description = descriptionInput.value;
//     let amount = parseFloat(amountInput.value);
//     if (!description || isNaN(amount)) {
//       return;
//     }
//     amount = parseFloat(amount.toFixed(2));
//     expenses.push({
//       description: description,
//       amount: amount
//     });
//     renderExpenses();
//     descriptionInput.value = "";
//     amountInput.value = "";
//   }
  


function renderExpenses() {
    expenseList.innerHTML = "";
    let total = 0;
    const table = document.createElement("table");
    table.classList.add('table-sty')
    const tableHead = document.createElement("thead");
    const headRow = document.createElement("tr");
    const descriptionHead = document.createElement("th");
    descriptionHead.textContent = "Description";
    const amountHead = document.createElement("th");
    amountHead.textContent = "Amount";
    const actionsHead = document.createElement("th");
    actionsHead.textContent = "Actions";
    headRow.appendChild(descriptionHead);
    headRow.appendChild(amountHead);
    headRow.appendChild(actionsHead);
    tableHead.appendChild(headRow);
    table.appendChild(tableHead);
    const tableBody = document.createElement("tbody");
    expenses.forEach(function(expense, index) {
      const row = document.createElement("tr");
      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = expense.description;
      const amountCell = document.createElement("td");
      amountCell.textContent = `$${expense.amount}`;
      const actionsCell = document.createElement("td");
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add('remove-btn')
      removeButton.addEventListener("click", function() {
        expenses.splice(index, 1);
        renderExpenses();
      });
      actionsCell.appendChild(removeButton);
      row.appendChild(descriptionCell);
      row.appendChild(amountCell);
      row.appendChild(actionsCell);
      tableBody.appendChild(row);
      total += expense.amount;
    });
    table.appendChild(tableBody);
    expenseList.appendChild(table);
    totalExpense.textContent = '$' + total;
}


  
  
