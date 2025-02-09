<template>
  <div class="order-received">
    <div class="container">
      <h1>Steak Fries</h1>
      <img src="/src/assets/images/steak fries.jpg" alt="Steak Fries Veggies" class="food-image" />
      <p class="description">Crispy and golden steak fries, served hot and fresh!</p>
      
      <button class="btn add-btn" @click="addToBag">Add to Bag</button>
      <div v-if="showSuccessMessage" class="success-message">Successfully Added!</div>
      
      <div class="button-group">
        <button class="btn checkout-btn" @click="proceedToCheckout">Proceed to Checkout</button>
        <button class="btn more-btn" @click="addMoreItems">Add More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSuccessMessage: false,
    };
  },
  methods: {
    addToBag() {
      this.showSuccessMessage = true;
      // Add logic to update the order bag
    },
    proceedToCheckout() {
      this.$router.push('/order-summary');
    },
    addMoreItems() {
      this.$router.push('/our-foods');
    },
  },
};
</script>

<style scoped>
.order-received {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #336648, #2a5298);
}

.container {
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  max-width: 400px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  color: white;
  backdrop-filter: blur(10px);
}

h1 {
  font-size: 24px;
  color: #ffcc00;
}

.food-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

.description {
  font-size: 16px;
  color: #ddd;
  margin-bottom: 15px;
}

.btn {
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  transition: background 0.3s;
}

.add-btn {
  background: #42b983;
  color: white;
}

.add-btn:hover {
  background: #369a6e;
}

.checkout-btn {
  background: #ff9800;
  color: white;
}

.checkout-btn:hover {
  background: #e68900;
}

.more-btn {
  background: #007bff;
  color: white;
}

.more-btn:hover {
  background: #0056b3;
}

.success-message {
  margin-top: 10px;
  color: #ffcc00;
  font-weight: bold;
}
</style>
