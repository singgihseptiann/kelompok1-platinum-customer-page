import { Navigate } from "react-router-dom";
import Header from "../pages/base/Header";
import OurServices from "../components/Content/OurServices";
import WhyUs from "../components/Content/WhyUs";
import Testimony from "../components/Content/Testimony";
import Banner from "../components/Content/Banner";
import Faq from "../components/Content/Faq";
import MainOutlet from "../components/Outlet/Outlet";
import CariMobil from "../components/Mobil/CariMobil";
import DetailMobil from "../components/Mobil/DetailMobil";
import HasilPencarian from "../components/Mobil/HasilPencarian";
import LoginPage from "../pages/login/Login";
import SignupPage from "../pages/Signup/Signup";
import Payment from "../components/FirstPayment/Payment";
import Etiket from "../components/Payment/Etiket";
import BankPayment from "../components/SecondPayment/BankPayment";
const routes = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <SignupPage />,
  },
  {
    path: "home",
    element: <Header />,
    children: [
      {
        path: "",
        element: (
          <>
            <MainOutlet />
          </>
        ),
      },
    ],
  },
  {
    path: "services",
    element: <Header />,
    children: [
      {
        path: "",
        element: <OurServices />,
      },
    ],
  },
  {
    path: "why-us",
    element: <Header />,
    children: [
      {
        path: "",
        element: <WhyUs />,
      },
    ],
  },
  {
    path: "testimony",
    element: <Header />,
    children: [
      {
        path: "",
        element: <Testimony />,
      },
    ],
  },
  {
    path: "banner",
    element: <Header />,
    children: [
      {
        path: "",
        element: <Banner />,
      },
    ],
  },
  {
    path: "faq",
    element: <Header />,
    children: [
      {
        path: "",
        element: <Faq />,
      },
    ],
  },
  {
    path: "cari-mobil",
    element: <Header />,
    children: [
      {
        path: "",
        element: <CariMobil />,
      },
    ],
  },
  {
    path: "hasil-cari",
    element: <Header />,
    children: [
      {
        path: "",
        element: <HasilPencarian />,
      },
    ],
  },
  {
    path: "detail-mobil/:id",
    element: <Header />,
    children: [
      {
        path: "",
        element: <DetailMobil />,
      },
    ],
  },
  {
    path: "payment/:id",
    element: <Header />,
    children: [
      {
        path: "",
        element: <Payment />,
      },
    ],
  },
  {
    path: "second-payment",
    element: <Header />,
    children: [
      {
        path: "",
        element: <BankPayment />,
      },
    ],
  },
  {
    path: "etiket",
    element: <Header />,
    children: [
      {
        path: "",
        element: <Etiket />,
      },
    ],
  },
];

export { routes };
