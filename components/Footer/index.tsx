import Image from "next/image";
import React from "react";
import ArrowToTop from "../../public/svgs/ArrowToTop";

import style from "./styles.module.scss";
import { animateScroll as scroll } from "react-scroll";

export const Footer: React.FC = () => {
  const menus: string[] = [
    "About the restaurant ",
    "Delivery",
    "Promotions",
    "contacts",
  ];
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <footer className={style.footer}>
      <button className={style.btnToTop} onClick={scrollToTop}>
        <ArrowToTop />
      </button>
      <div className={style.logo}>
        <Image src="/images/logo.webp" width={200} height={100} />
      </div>
      <nav className={style.nav}>
        {menus.map((menu, id) => {
          return <li key={id}>{menu}</li>;
        })}
      </nav>
    </footer>
  );
};
