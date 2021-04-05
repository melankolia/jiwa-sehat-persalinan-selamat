const TheContainer = () => import("@/containers/index");
const Home = () => import("@/views/Home");
const Agreement = () => import("@/views/Agreement");

import { HOME, AGREEMENT } from "./name.types";

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
      {
        path: "/agreement",
        name: AGREEMENT,
        component: Agreement,
        meta: {
          title: AGREEMENT,
          stack: 2,
        },
      },
    ],
  },
];
