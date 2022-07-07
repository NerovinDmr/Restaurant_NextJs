//@ts-nocheck
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-scroll";
import "swiper/css";
import style from "./styles.module.scss";
import { Loading, MenuItems } from "../../components";
import { useSelector } from "react-redux";
import { selectProdactData } from "../../store/prodacts/selectors";
import { fetchProdacts } from "../../store/prodacts/asyncActions";
import { useAppDispatch } from "../../store/store";

const menus: string[] = [
  "Appetizer",
  "Beef",
  "Soups",
  "Fish",
  "Grill",
  "Drinkables",
  "Dessert",
];

export const Showcase: React.FC = () => {
  const { items, status } = useSelector(selectProdactData);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProdacts());
  }, []);

  return (
    <div className={style.showcase}>
      <div className={style.wrapp}>
        <Swiper watchSlidesProgress={true} slidesPerView={8} loop={true}>
          {menus.map((menu, id) => (
            <SwiperSlide className={style.slide} key={id}>
              <Link
                to={menu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div className={style.menu_items}>{menu}</div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style.line} />

        {status === "error" ? (
          <div>ERROR</div>
        ) : status === "loading" ? (
          <Loading />
        ) : (
          <>
            <MenuItems menuSection={"Appetizer"} menuItems={items.appetizer} />
            <MenuItems menuSection={"Beef"} menuItems={items.beef} />
            <MenuItems menuSection={"Fish"} menuItems={items.fishMeals} />
            <MenuItems menuSection={"Grill"} menuItems={items.grill} />
            <MenuItems menuSection={"Soups"} menuItems={items.soups} />
            <MenuItems menuSection={"Dessert"} menuItems={items.dessert} />
            <MenuItems
              menuSection={"Drinkables"}
              menuItems={items.drinkables}
            />
          </>
        )}
      </div>
    </div>
  );
};
