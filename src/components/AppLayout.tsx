import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const AppLayout: FC = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
