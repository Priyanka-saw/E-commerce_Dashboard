    // Data
    const sales = [1200, 1400, 1000, 1600, 2000, 1800, 1500];
    const income = [1000, 1200, 900, 1400, 1700, 1600, 1300];
    const expenses = [500, 600, 400, 700, 900, 800, 600];
    const customers = [10, 12, 9, 14, 18, 15, 13];

    const totalSales = sales.reduce((a, b) => a + b, 0);
    const totalIncome = income.reduce((a, b) => a + b, 0);
    const totalExpenses = expenses.reduce((a, b) => a + b, 0);
    const totalCustomers = customers.reduce((a, b) => a + b, 0);
    const avgSale = (totalSales / totalCustomers).toFixed(2);

    document.getElementById('totalSales').textContent = `$${totalSales}`;
    document.getElementById('totalIncome').textContent = `$${totalIncome}`;
    document.getElementById('totalExpenses').textContent = `$${totalExpenses}`;
    document.getElementById('totalCustomers').textContent = totalCustomers;
    document.getElementById('avgSale').textContent = `$${avgSale}`;

    // Products
    const products = [
      { name: 'T-shirt', price: '$25', sales: 120 },
      { name: 'Shoes', price: '$70', sales: 80 },
      { name: 'Slipers', price: '$80', sales: 90 },
      { name: 'Snikers', price: '$70', sales: 80 },
      { name: 'Backpack', price: '$40', sales: 50 },
      { name: 'Trouser', price: '$40', sales: 50 },
      { name: 'Jogger', price: '$40', sales: 50 },
    ];

    const productTable = document.getElementById('productTable');
    products.forEach(product => {
      productTable.innerHTML += `<tr><td>${product.name}</td><td>${product.price}</td><td>${product.sales}</td></tr>`;
    });

    // Customers
    const customerData = [
      { name: 'priya', purchase: '$250', date: '2025-05-29' },
      { name: 'Sneha', purchase: '$120', date: '2025-05-30' },
      { name: 'Shivansh', purchase: '$120', date: '2025-05-30' },
      { name: 'Priyanshi', purchase: '$190', date: '2025-06-01' },
      { name: 'Dipa', purchase: '$190', date: '2025-06-01' },
      { name: 'Rishi', purchase: '$190', date: '2025-06-01' },
      { name: 'Nora', purchase: '$190', date: '2025-06-01' },
      { name: 'Satyam', purchase: '$190', date: '2025-06-01' },
    ];

    const customerTable = document.getElementById('customerTable');
    customerData.forEach(cust => {
      customerTable.innerHTML += `<tr><td>${cust.name}</td><td>${cust.purchase}</td><td>${cust.date}</td></tr>`;
    });

    // Dark Mode Toggle
    document.getElementById('darkModeToggle').addEventListener('change', function () {
      document.body.classList.toggle('dark-mode');
    });
  