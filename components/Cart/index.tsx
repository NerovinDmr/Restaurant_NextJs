import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./styles.module.scss";
import { CartItems } from "./CartItems";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cart/selectors";
import { CartItem } from "../../store/cart/types";
import { EmptyCart } from "../EmptyCart";

export const Cart: React.FC = () => {
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce(
    (sum: number, item: CartItem) => sum + item.count,
    0
  );
  return (
    <div className={style.cart}>
      <Link href={"/"}>
        <div className={style.back}>
          <div className={style.icon}>
            <Image src="/images/ArrowBack.svg" width={12} height={12} />
          </div>
          <div>Back</div>
        </div>
      </Link>
      <div className={style.heading}>
        <h3>Cart</h3>
        <p> prodacts in cart {totalCount} </p>
      </div>
      <div className={style.wrapp}>
        {!totalCount ? (
          <EmptyCart />
        ) : (
          items.map((item: CartItem) => <CartItems key={item.id} {...item} />)
        )}
      </div>
      <div className={style.total}>
        <div className={style.totalPriceBlock}>
          <div className={style.totalPrice}>
            Total: <div>{totalPrice} $</div>
          </div>
          <div className={style.deliveryPrice}> delivery price = 10 $</div>
          <div className={style.minimalSumm}> minimum amount 300 $ </div>
        </div>
        <div className={style.btn}>
          <Link href={"/Order"}>
            <button disabled={totalPrice === 0} className={style.orderBtn}>
              make an order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
