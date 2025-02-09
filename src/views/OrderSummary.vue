<template>
  <div class="order-summary-page">
    <div class="order-summary">
      <h1>Order Summary</h1>
      
      <div class="user-info">
        <p><strong>Name:</strong> {{ userName }}</p>
        <p><strong>Address:</strong> {{ userAddress }}</p>
      </div>
      
      <ul class="order-list">
        <li v-for="(item, index) in orderItems" :key="index" class="order-item">
          {{ item.name }} - ${{ item.price.toFixed(2) }}
        </li>
      </ul>
      
      <div class="cost-summary">
        <p><strong>Food Cost:</strong> ${{ foodCost.toFixed(2) }}</p>
        <p><strong>Delivery Charge:</strong> ${{ deliveryCharge.toFixed(2) }}</p>
        <p class="total-cost"><strong>Total Cost:</strong> ${{ totalCost.toFixed(2) }}</p>
      </div>
      
      <div class="payment-options">
        <h2>Payment Options</h2>
        <button class="btn payment-btn">Credit Card</button>
        <button class="btn payment-btn">Cash on Delivery</button>
      </div>
      
      <div class="button-group">
        <button class="btn order-btn" @click="placeOrder">Place Order</button>
        <button class="btn back-btn" @click="goBack">Go Back</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "John Doe", // Example name
      userAddress: "123 Main Street, City, Country", // Example address
      orderItems: [
        { name: "Steak Fries", price: 5.99 },
      ],
      deliveryCharge: 2.99, // Example delivery charge
    };
  },
  computed: {
    foodCost() {
      return this.orderItems.reduce((total, item) => total + item.price, 0);
    },
    totalCost() {
      return this.foodCost + this.deliveryCharge;
    },
  },
  methods: {
    placeOrder() {
      this.$router.push('/order-received');
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.order-summary-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #336648, #2a5298);
}

.order-summary {
  text-align: center;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  color: #000000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}

h1 {
  font-size: 24px;
  color: #000000;
  margin-bottom: 15px;
}

.user-info {
  text-align: left;
  margin-bottom: 15px;
}

.order-list {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.order-item {
  font-size: 18px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.cost-summary {
  text-align: left;
  margin-bottom: 20px;
  color: #000000;
}

.total-cost {
  font-size: 20px;
  font-weight: bold;
  color: #28a745;
}

.payment-options {
  margin-bottom: 20px;
}

.payment-btn {
  background: #ff9800;
  color: white;
  margin: 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.payment-btn:hover {
  background: #e68900;
}

.button-group {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.btn {
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.back-btn {
  background: #007bff;
  color: white;
}

.back-btn:hover {
  background: #0056b3;
}

.order-btn {
  background: #28a745;
  color: white;
}

.order-btn:hover {
  background: #218838;
}
</style>
