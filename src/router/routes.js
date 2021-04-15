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
const Technique = () => import("@/views/Technique");
const FirstTechnique = () => import("@/views/Technique/Detail/First");
const SecondTechnique = () => import("@/views/Technique/Detail/Second");
const ThirdTechnique = () => import("@/views/Technique/Detail/Third");
const Login = () => import("@/views/Login");
const Dashboard = () => import("@/views/Dashboard");
const Detail = () => import("@/views/Dashboard/Detail");

import {
  HOME,
  AGREEMENT,
  IDENTITY,
  PRETEST,
  SCREENING,
  POSTTEST,
  TECHNIQUE,
  LOGIN,
  DASHBOARD,
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
        path: "/teknik",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            name: TECHNIQUE.LIST,
            component: Technique,
            meta: {
              title: TECHNIQUE.LIST,
              stack: 8,
              text: "Teknik Mengatasi Kecemasan dalam Menghadapi Persalinan",
            },
          },
          {
            path: "first",
            name: TECHNIQUE.DETAIL.FIRST,
            component: FirstTechnique,
            meta: {
              title: TECHNIQUE.DETAIL.FIRST,
              stack: 9,
              text: "Relaksasi Napas Dalam",
            },
          },
          {
            path: "second",
            name: TECHNIQUE.DETAIL.SECOND,
            component: SecondTechnique,
            meta: {
              title: TECHNIQUE.DETAIL.SECOND,
              stack: 10,
              text: "Latihan Hipnotis Lima Jari",
            },
          },
          {
            path: "third",
            name: TECHNIQUE.DETAIL.THIRD,
            component: ThirdTechnique,
            meta: {
              title: TECHNIQUE.DETAIL.THIRD,
              stack: 11,
              text: "Relaksasi Otot Progresif (ROP)",
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
              stack: 13,
              text: "Post-test",
            },
          },
          {
            path: "cover",
            name: POSTTEST.COVER,
            component: Posttest,
            meta: {
              title: POSTTEST.ROOT,
              stack: 12,
              text: "Post-test",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: LOGIN,
    component: Login,
    meta: {
      title: LOGIN,
      stack: 2,
    },
  },
  {
    path: "/dashboard",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    meta: {
      requiresAuth: true,
      title: DASHBOARD.ROOT,
    },
    children: [
      {
        path: "",
        name: DASHBOARD.ROOT,
        component: Dashboard,
        meta: {
          requiresAuth: true,
          title: DASHBOARD.ROOT,
          stack: 3,
        },
      },
      {
        path: ":secureId",
        name: DASHBOARD.DETAIL,
        component: Detail,
        meta: {
          requiresAuth: true,
          title: DASHBOARD.DETAIL,
          stack: 4,
        },
      },
    ],
  },
];
