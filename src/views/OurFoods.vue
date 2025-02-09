<template>
  <div class="our-foods">
    <SideMenu />
    <div class="content">
      <h1>Our Foods</h1>
      <div class="food-list">
        <div v-for="food in foods" :key="food.id" class="food-card" @click="goToFood(food.route)">
          <img :src="food.image" :alt="food.name" class="food-image" />
          <h2>{{ food.name }}</h2>
          <p>Type: {{ food.type }}</p>
          <p>Price: ${{ food.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideMenu from '@/components/SideMenu.vue';

export default defineComponent({
  name: 'OurFoods',
  components: {
    SideMenu,
  },
  data() {
    return {
      foods: [
        { id: 1, name: 'Steak Fries', type: 'Snack', price: 8.99, route: '/steak-fries', image: '/src/assets/images/steak fries.jpg' },
        { id: 2, name: 'Grilled Chicken', type: 'Main Course', price: 12.99, route: '/grilled-chicken', image: '/src/assets/images/grilled chicken.jpg' },
        { id: 3, name: 'Caesar Salad', type: 'Salad', price: 7.99, route: '/caesar-salad', image: '/src/assets/images/caesar salad.jpg' },
        { id: 4, name: 'Cheeseburger', type: 'Main Course', price: 10.99, route: '/cheeseburger', image: '/src/assets/images/cheeseburger.jpg' },
        { id: 5, name: 'Chocolate Cake', type: 'Dessert', price: 6.99, route: '/chocolate-cake', image: '/src/assets/images/chocolate cake.jpg' }
      ],
    };
  },
  methods: {
    goToFood(route: string) {
      this.$router.push(route);
    },
  },
});
</script>

<style scoped>
.our-foods {
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #336648, #2a5298);
  color: white;
  align-items: center;
  justify-content: center;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.food-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px 0;
}

.food-card {
  background-color: #000000;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.food-card:hover {
  transform: scale(1.05);
  background-color: #42b983;
  color: white;
}

.food-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}
</style>
