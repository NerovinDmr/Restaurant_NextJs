import React from "react";
import { Footer, Header } from "../components";

const MainLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
