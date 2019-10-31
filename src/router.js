import Vue from "vue";
import Router from "vue-router";
import AddCaregiver from "./components/AddCaregiver.vue";
import Caregiver from "./components/Caregivers.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "caregiver",
      alias: "/caregiver",
      component: Caregiver
    },
    {
      path: "/caregiver/add",
      name: "add",
      alias: "/add",
      component: AddCaregiver
    },
  ]
});