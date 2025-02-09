<template>
  <div class="side-menu">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/our-foods">Our Foods</router-link>
      </li>
      <li>
        <router-link to="/loyalty-points">Loyalty Points</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideMenu',
});
</script>

<style scoped>
.side-menu {
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.side-menu ul {
  list-style: none;
  padding: 0;
}

.side-menu ul li {
  margin: 15px 0;
}

.side-menu ul li a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
}

.side-menu ul li a:hover {
  color: #42b983;
}
</style>