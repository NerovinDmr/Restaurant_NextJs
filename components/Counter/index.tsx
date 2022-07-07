import Image from "next/image";
import React from "react";
import { CartItem } from "../../store/cart/types";

import style from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { addItem, minusItem } from "../../store/cart/slice";
interface prop {
  id: string;
  count: number;
}
export const Counter: React.FC<prop> = ({ id, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItem)
    );
  };
  const onClickMinus = () => {
    if (count === 1) {
      return false;
    } else {
      dispatch(minusItem(id));
    }
  };
  return (
    <div className={style.counter}>
      <div className={style.minus} onClick={onClickMinus}>
        <Image src={"/images/minus.svg"} width={12} height={3} />
      </div>
      <div className={style.quantity}>{count}</div>
      <div className={style.plus} onClick={onClickPlus}>
        <Image src={"/images/plus.svg"} width={12} height={12} />
      </div>
    </div>
  );
};
