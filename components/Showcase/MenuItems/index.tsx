import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./styles.module.scss";
import { CartItem } from "../../../store/cart/types";
import { ItemCard } from "../ItemCard";

export const MenuItems: React.FC<any> = ({ menuItems, menuSection }) => {
  return (
    <div>
      <div className={style.menu_class}>
        <h2 id={menuSection}>{menuSection}</h2>
      </div>

      <div className={style.wrapp}>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={6}
          className="mySwiper"
          loop={true}
        >
          {menuItems.map((menu: CartItem) => (
            <SwiperSlide className={style.itemCard_wrapp} key={menu.id}>
              <ItemCard {...menu} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
