import { Navigate } from "react-router";
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
const routes = [
  {
    path: "",
    element: <Navigate to="/home" />,
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
];

export { routes };
