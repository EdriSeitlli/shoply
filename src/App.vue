<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import { fetchAllProducts } from '@/services/googleAdsApi';

// Example of fetching data on component mount
import { onMounted, ref } from 'vue';

const products = ref([]);

onMounted(async () => {
  try {
    const data = await fetchAllProducts();
    products.value = data.products; // Assuming the API returns an object with a products key
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
});
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}

html {
  font-family: "Open Sans", sans-serif;
}

.main-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 25px;
  gap: 20px;
}

.widget-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.widget {
  background-color: white;
  border: 1px solid #E6E9EE;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
}
</style>
