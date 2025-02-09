import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'; // Vue Router 4 syntax
import Homepage from '../views/HomePage.vue';
import OurFoods from '../views/OurFoods.vue';
import LoyaltyPoints from '../views/LoyaltyPoints.vue';
import SteakFries from '../views/SteakFries.vue';
import OrderSummary from '../views/OrderSummary.vue';
import OrderReceived from '../views/OrderReceived.vue';
import SideMenu from '../components/SideMenu.vue';
const routes: RouteRecordRaw[] = [
  { path: '/', component: Homepage },
  { path: '/our-foods', component: OurFoods },
  { path: '/loyalty-points', component: LoyaltyPoints },
  { path: '/steak-fries', component: SteakFries },
  { path: '/order-summary', component: OrderSummary },
  { path: '/order-received', component: OrderReceived },
  { path: '/side-menu', component: SideMenu }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;