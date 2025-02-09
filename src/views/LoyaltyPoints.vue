<template>
  <div class="loyalty-points">
    <SideMenu />
    <div class="content">
      <div class="card">
        <h1>Loyalty Points</h1>
        <p class="points">You have <span>{{ loyaltyPoints }}</span> points.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideMenu from '@/components/SideMenu.vue';

export default defineComponent({
  name: 'LoyaltyPoints',
  components: {
    SideMenu,
  },
  data() {
    return {
      loyaltyPoints: 120, // Example value
    };
  },
});
</script>

<style scoped>
.loyalty-points {
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #336648, #2a5298);
  color: white;
  align-items: center;
  justify-content: center;
}

.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

h1 {
  font-size: 28px;
  margin-bottom: 15px;
}

.points {
  font-size: 22px;
  margin-bottom: 20px;
}

.points span {
  font-weight: bold;
  color: #ffcc00;
  font-size: 26px;
}
</style>
