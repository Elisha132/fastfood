<template>
  <div class="order-received">
    <div class="card">
      <h1> Order Received! </h1>
      <p>Your order has been successfully placed. Thank you for choosing us!</p>
      <router-link to="/" class="home-btn">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderReceived',
};
</script>

<style scoped>
.order-received {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #336648, #2a5298);
}

.card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
}

h1 {
  font-size: 24px;
  color: #28a745;
  margin-bottom: 15px;
}

p {
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
}

.home-btn {
  display: inline-block;
  background: #007bff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;
}

.home-btn:hover {
  background: #0056b3;
}
</style>
