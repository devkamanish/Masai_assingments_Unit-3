const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    let price = Number(item.price);

    if (isNaN(price)) {
      console.error("Invalid price. Price must be a number.");
      return;
    }

    // Optional: round price to 2 decimals
    price = parseFloat(price.toFixed(2));

    this.items.push({ ...item, price });
    this.total += price;

    console.log(`Item "${item.name}" added. Price: $${price}`);
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

// Test cases
checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // Should be accepted
checkout.addItem({ name: "Milk", price: 3.50 });             // Should be accepted
checkout.addItem({ name: "Invalid Item", price: "abc" });    // Should be rejected

console.log(checkout.getTotal()); // ✅ Output: Total: $103.45
