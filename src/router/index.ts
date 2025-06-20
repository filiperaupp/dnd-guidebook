import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import CharacterClassList from "@/pages/characterClass/CharacterClassList.vue";
import Dashboard from "@/pages/Dashboard.vue";

const routes: RouteRecordRaw[] = [
  { path: "/dashboard", component: Dashboard, children: [
    { path: "", redirect: "/dashboard/characterClass" },
    { path: "characterClass", component: CharacterClassList }
  ]},
  { path: "/", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
