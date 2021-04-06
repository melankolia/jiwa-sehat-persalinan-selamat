const TheContainer = () => import("@/containers/index");
const Home = () => import("@/views/Home");
const Agreement = () => import("@/views/Agreement");
const Identity = () => import("@/views/Identity");

import { HOME, AGREEMENT, IDENTITY } from "./name.types";

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
          text: null,
        },
      },
      {
        path: "/agreement",
        name: AGREEMENT,
        component: Agreement,
        meta: {
          title: AGREEMENT,
          stack: 2,
          text: "Lembar Persetujuan",
        },
      },
      {
        path: "/identity",
        name: IDENTITY,
        component: Identity,
        meta: {
          title: IDENTITY,
          stack: 3,
          text: "Identitas Responden",
        },
      },
    ],
  },
];
