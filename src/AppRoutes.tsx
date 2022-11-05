import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { Contacts } from "./components/Contacts/Contacts";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
};
