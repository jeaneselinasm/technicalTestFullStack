import { createRouter, createWebHistory } from "vue-router";
import Details from "../views/Details.vue";
import AllPatients from "../views/AllPatients.vue";
import FormAdd from "../views/FormAdd.vue";
import FormEdit from "../views/FormEdit.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/patients",
      component: AllPatients,
    },
    {
      path: "/add-patient",
      component: FormAdd,
    },
    {
      path: "/patient/:id",
      component: Details,
    },
    {
      path: "/edit-patient",
      component: FormEdit,
    },
  ],
});

export default router;
