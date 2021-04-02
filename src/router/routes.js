const Home = () => import("@/views/Home.vue");
const TheContainer = () => import("@/containers/index");

import { HOME } from "./name.types";

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
];
