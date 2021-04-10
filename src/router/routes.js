const TheContainer = () => import("@/containers/index");
const Home = () => import("@/views/Home");
const Agreement = () => import("@/views/Agreement");
const Identity = () => import("@/views/Identity");
const Pretest = () => import("@/views/Pretest/CoverScreen");
const PretestStepper = () => import("@/views/Pretest");
const Screening = () => import("@/views/Screening/CoverScreen");
const ScreeningStepper = () => import("@/views/Screening");
const Posttest = () => import("@/views/Posttest/CoverScreen");
const PosttestStepper = () => import("@/views/Posttest");

import {
  HOME,
  AGREEMENT,
  IDENTITY,
  PRETEST,
  SCREENING,
  POSTTEST,
} from "./name.types";

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
      {
        path: "/screening",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            name: SCREENING.STEPPER,
            component: ScreeningStepper,
            meta: {
              title: SCREENING.ROOT,
              stack: 7,
              text: "Screening",
            },
          },
          {
            path: "cover",
            name: SCREENING.COVER,
            component: Screening,
            meta: {
              title: SCREENING.ROOT,
              stack: 6,
              text: "Screening",
            },
          },
        ],
      },
      {
        path: "/post-test",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            name: POSTTEST.STEPPER,
            component: PosttestStepper,
            meta: {
              title: POSTTEST.ROOT,
              stack: 11,
              text: "Post-test",
            },
          },
          {
            path: "cover",
            name: POSTTEST.COVER,
            component: Posttest,
            meta: {
              title: POSTTEST.ROOT,
              stack: 10,
              text: "Post-test",
            },
          },
        ],
      },
    ],
  },
];
