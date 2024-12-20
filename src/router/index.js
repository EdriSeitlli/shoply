import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import ProductPerformanceView from "@/views/ProductPerformanceView.vue";
import OptimizationView from "@/views/OptimizationView.vue";
import InsightsView from "@/views/InsightsView.vue";

const routes = [
  { path: "/", redirect: "/dashboard" },
  { path: "/shoply", redirect: "/dashboard" },
  { path: "/dashboard", component: DashboardView },
  { path: "/product-performance", component: ProductPerformanceView },
  { path: "/optimization", component: OptimizationView },
  { path: "/insights", component: InsightsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
