import type { NextPage } from "next";
import { About, Contacts, Showcase, Tagline } from "../components";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <Tagline />
        <Showcase />
        <About />
        <Contacts />
      </MainLayout>
    </div>
  );
};

export default Home;
