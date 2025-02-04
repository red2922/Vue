import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobView from "@/views/JobView.vue";
import AddJobVue from "@/views/AddJobVue.vue";
import EditJobVue from "@/views/EditJobVue.vue";

//Remember that Routes HAVE TO START WITH / no matter what
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },
    {
      path: "/job/add",
      name: "addJob",
      component: AddJobVue,
    },
    {
      path: "/jobs/edit/:id",
      name: "editJob",
      component: EditJobVue,
    },
    {
      path: "/:catchAll(.*)",
      name: "Not Found",
      component: NotFoundView,
    },
  ],
});

export default router;
