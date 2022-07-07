import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cart/selectors";
import { Search } from "./Search";
import style from "./styles.module.scss";

export const Header: React.FC = () => {
  const { items } = useSelector(selectCart);
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Image src="/images/logo.webp" width={200} height={100} />
      </div>
      <div className={style.wrap}>
        <Search />
        <div className={style.header_contact}>
          <div className={style.header_contact_icon}>
            <div>
              <Image src="/images/Calling.svg" width={15} height={15} />
            </div>
          </div>
          <div>
            <span className={style.callUs}> call us: </span>
            <br />
            <span className={style.number}> +7(909)510-57-59</span>
          </div>
        </div>
      </div>
      <Link href={"/Cart"}>
        <div className={style.header_cart}>
          <div className={style.btnCart}>Cart</div>

          <div className={style.header_cart_counter}>{totalCount}</div>
        </div>
      </Link>
    </header>
  );
};
