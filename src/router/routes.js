const Home = () => import("@/views/Home.vue");
const TheContainer = () => import("@/containers/index");
const About = () => import("@/views/About.vue");

import { HOME, ABOUT } from "./name.types";

export const routes = [
  {
    path: "/",
    component: TheContainer,
    children: [
      {
        path: "",
        name: HOME,
        component: Home,
        meta: {
          title: HOME,
          stack: 1,
        },
      },
    ],
  },
  {
    path: "/about",
    name: ABOUT,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: {
      title: ABOUT,
      stack: 2,
    },
  },
];
