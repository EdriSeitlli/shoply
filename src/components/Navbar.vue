<template>
    <nav>
        <ul>
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            <li><router-link to="/product-performance">Product Performance</router-link></li>
            <li><router-link to="/optimization">Optimization</router-link></li>
            <li><router-link to="/insights">Insights</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "AppNavbar", // Updated component name
};
</script>

<style scoped>
nav ul {
    display: flex;
    list-style: none;
    gap: 20px;
}
</style>