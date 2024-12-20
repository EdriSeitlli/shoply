<template>
    <div class="nav-container">
        <!-- Logo -->
        <a id="logo" href="https://shoply.pro">
            <img alt="Shoply" src="@/assets/shoply.png" />
        </a>

        <!-- Hamburger Menu Icon -->
        <div class="menu-toggle" @click="toggleMenu">
            <font-awesome-icon :icon="['fas', isMenuOpen ? 'times' : 'bars']" />
        </div>

        <!-- Navigation Links -->
        <nav :class="{ 'nav-open': isMenuOpen }">
            <ul>
                <li>
                    <router-link to="/dashboard" active-class="active">
                        <font-awesome-icon :icon="['fas', 'gauge']" /> Dashboard
                    </router-link>
                </li>
                <li>
                    <router-link to="/product-performance" active-class="active">
                        <font-awesome-icon :icon="['fas', 'bars-staggered']" /> Product Performance
                    </router-link>
                </li>
                <li>
                    <router-link to="/optimization" active-class="active">
                        <font-awesome-icon :icon="['fas', 'gear']" /> Optimization
                    </router-link>
                </li>
                <li>
                    <router-link to="/insights" active-class="active">
                        <font-awesome-icon :icon="['fas', 'chart-line']" /> Insights
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "AppNavbar",
    data() {
        return {
            isMenuOpen: false, // State to control the visibility of the nav
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style scoped>
/* Navigation Container */
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: white;
    position: relative;
    z-index: 10;
}

/* Logo */
#logo img {
    height: 80px;
    width: auto;
    object-fit: contain;
    transition: transform 0.3s ease;
}

/* Hamburger Menu */
.menu-toggle {
    display: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #747474;
    transition: color 0.3s ease;
}

.menu-toggle:hover {
    color: #0FB8ED;
}

/* Navigation Links */
nav ul {
    display: flex;
    list-style: none;
    gap: 40px;
    padding: 0;
}

nav ul li a {
    text-decoration: none;
    color: #747474;
    background-color: white;
    border-radius: 8px;
    padding: 10px 18px;
    transition: color 0.3s, background-color 0.3s;
    display: flex;
    align-items: center;
    gap: 10px;
}

nav ul li a:hover {
    color: #0FB8ED;
}

nav ul li a.active {
    color: #0FB8ED;
    background-color: #E3F6FE;
}

/* Mobile Styles */
@media (max-width: 900px) {

    /* Show hamburger menu */
    .menu-toggle {
        display: block;
    }

    /* Hide the navigation links by default */
    nav {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 10px 0;
    }

    nav.nav-open {
        display: flex;
        /* Show nav when state is toggled */
    }

    nav ul {
        flex-direction: column;
        gap: 20px;
    }

    nav ul li a {
        justify-content: flex-start;
        padding: 10px 20px;
        border-radius: 0;
    }
}

@media (max-width: 480px) {
    #logo img {
        height: 40px;
        /* Adjust logo size for smaller screens */
    }
}
</style>