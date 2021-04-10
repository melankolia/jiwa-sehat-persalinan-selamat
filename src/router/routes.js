const TheContainer = () => import("@/containers/index");
const Home = () => import("@/views/Home");
const Agreement = () => import("@/views/Agreement");
const Identity = () => import("@/views/Identity");
const Pretest = () => import("@/views/Pretest/CoverScreen");
const PretestStepper = () => import("@/views/Pretest");

import { HOME, AGREEMENT, IDENTITY, PRETEST } from "./name.types";

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
          text: "Home Page",
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
      {
        path: "/pre-test",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            name: PRETEST.STEPPER,
            component: PretestStepper,
            meta: {
              title: PRETEST.ROOT,
              stack: 5,
              text: "Kueioner Pre-test",
            },
          },
          {
            path: "cover",
            name: PRETEST.COVER,
            component: Pretest,
            meta: {
              title: PRETEST.ROOT,
              stack: 4,
              text: "Kueioner Pre-test",
            },
          },
        ],
      },
    ],
  },
];
