document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const income = document.getElementById("productIncome").value;
    const expense = document.getElementById("productExpense").value;

    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <h4>${name}</h4>
        <p><strong>Price:</strong> $${price}</p>
        <p><strong>Income:</strong> $${income}</p>
        <p><strong>Expense:</strong> $${expense}</p>
      `;

    document.getElementById("productList").appendChild(card);

    document.getElementById("productMessage").textContent = `${name} added successfully!`;
    e.target.reset();
});
