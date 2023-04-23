import { createRouter, createWebHistory } from "vue-router";
import Details from "../views/Details.vue";
import AllPatients from "../views/AllPatients.vue";
import FormAdd from "../views/FormAdd.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      component: Details,
    },
    {
      path: "/patients",
      component: AllPatients,
    },
    {
      path: "/add-patient",
      component: FormAdd,
    },
  ],
});

export default router;
