import { createRouter, createWebHistory } from "vue-router";
import ConnextionPro from "../src/components/ConnexionPro.vue";
import SignUp from "../src/Pages/SignUp/SignUp.Vue";
const routes = [
  {
    path: "/",
    name: "connexion",
    component: ConnextionPro,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
