import React from "react";
import style from "./styles.module.scss";
import { removeItem } from "../../../store/cart/slice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { CartItem } from "../../../store/cart/types";
import { Counter } from "../../Counter";

export const CartItems: React.FC<CartItem> = ({
  id,
  name,
  price,
  count,
  image,
}) => {
  const dispatch = useDispatch();
  const onClickRemove = () => {
    if (window.confirm("Delete? ")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={style.cartItems}>
      <div className={style.image}>
        <Image src={`/${image}`} width={117} height={86} />
      </div>
      <div className={style.wrapp}>
        <div className={style.name}>{name}</div>
        <div className={style.controlSecttion}>
          <Counter id={id} count={count} />
          <div className={style.price}>{price * count} $</div>
          <div className={style.remove} onClick={onClickRemove}>
            <Image src={"/images/cross.svg"} width={12} height={12} />
          </div>
        </div>
      </div>
    </div>
  );
};
