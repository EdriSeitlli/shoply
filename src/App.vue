<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
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

.widget-container.vertical {
  flex-direction: column;
}

.widget {
  background-color: white;
  border: 1px solid #E6E9EE;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
}
</style>
