<template>
  <div class="homepage">
    <SideMenu />
    <div class="content">
      <h1>Welcome to FastFood App</h1>
      <button @click="goToOurFoods">Order Now</button>

      <!-- Special Offers Section -->
      <section class="section">
        <h2>Special Offers</h2>
        <div class="cards">
          <div class="card" v-for="offer in specialOffers" :key="offer.id">
            <img :src="offer.image" :alt="offer.name" />
            <h3>{{ offer.name }}</h3>
            <p>{{ offer.description }}</p>
            <button @click="viewOffer(offer)">View Offer</button>
          </div>
        </div>
      </section>

      <!-- Category Section -->
      <section class="section">
        <h2>Categories</h2>
        <div class="categories">
          <div
            class="category"
            v-for="category in categories"
            :key="category.id"
            @click="goToCategory(category)"
          >
            <img :src="category.image" :alt="category.name" />
            <h3>{{ category.name }}</h3>
          </div>
        </div>
      </section>

      <!-- What's New? Section -->
      <section class="section">
        <h2>What's New?</h2>
        <div class="cards">
          <div class="card" v-for="item in whatsNew" :key="item.id">
            <img :src="item.image" :alt="item.name" />
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <button @click="viewItem(item)">Learn More</button>
          </div>
        </div>
      </section>

      <!-- Most Popular Section -->
      <section class="section">
        <h2>Most Popular</h2>
        <div class="cards">
          <div class="card" v-for="item in mostPopular" :key="item.id">
            <img :src="item.image" :alt="item.name" />
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <button @click="viewItem(item)">Order Now</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideMenu from '@/components/SideMenu.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    SideMenu,
  },
  data() {
    return {
      specialOffers: [
        {
          id: 1,
          name: 'Combo Meal',
          description: 'Get a burger, fries, and drink for just $10!',
          image: '/src/assets/images/combo meal.jpg',
        },
        {
          id: 2,
          name: 'Family Pack',
          description: 'Feed the whole family for $20!',
          image: '/src/assets/images/family pack.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          name: 'Burgers',
          image: '/src/assets/images/burger.jpg',
        },
        {
          id: 2,
          name: 'Pizza',
          image: '/src/assets/images/pizza.jpg',
        },
        {
          id: 3,
          name: 'Drinks',
          image: '/src/assets/images/drinks.jpg',
        },
      ],
      whatsNew: [
        {
          id: 1,
          name: 'New Spicy Burger',
          description: 'Try our new spicy burger with extra kick!',
          image: '/src/assets/images/spicy burger.jpg',
        },
        {
          id: 2,
          name: 'Vegan Pizza',
          description: 'Our new vegan pizza is here!',
          image: '/src/assets/images/vegan pizza.jpg',
        },
      ],
      mostPopular: [
        {
          id: 1,
          name: 'Classic Burger',
          description: 'Our best-selling classic burger.',
          image: '/src/assets/images/burger.jpg',
        },
        {
          id: 2,
          name: 'Pepperoni Pizza',
          description: 'A crowd favorite!',
          image: '/src/assets/images/pizza.jpg',
        },
      ],
    };
  },
  methods: {
    goToOurFoods() {
      this.$router.push('/our-foods');
    },
    viewOffer(offer: any) {
      alert(`You clicked on ${offer.name}`);
    },
    goToCategory(category: any) {
      alert(`You clicked on ${category.name}`);
    },
    viewItem(item: any) {
      alert(`You clicked on ${item.name}`);
    },
  },
});
</script>

<style scoped>
.homepage {
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #336648, #2a5298);
  color: white;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Prevents double scrollbars */
}

.content {
  flex: 1;
  padding: 20px;
  text-align: center;
  overflow-y: auto; /* Enables vertical scrolling */
  max-height: 100vh; /* Restricts height and allows scrolling */
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
}

button:hover {
  background-color: #3aa876;
}

.section {
  margin: 40px 0;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  text-align: center;
  color: black;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.categories {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.category {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 150px;
  text-align: center;
  cursor: pointer;
  color: black;
}

.category img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
