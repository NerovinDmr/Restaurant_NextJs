import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemById } from "../../../store/cart/selectors";
import { addItem } from "../../../store/cart/slice";
import { CartItem } from "../../../store/cart/types";
import { Counter } from "../../Counter";
import style from "./styles.module.scss";

export const ItemCard: React.FC<CartItem> = ({
  id,
  name,
  image,
  weight,
  description,
  price,
}) => {
  const cartItem = useSelector(selectCartItemById(id));
  const dispatch = useDispatch();
  const addedCount = cartItem ? cartItem.count : 0;
  return (
    <div className={style.itemCard}>
      <Link href={`/Prodact/${id}`}>
        <div className={style.cardImage}>
          <img src={image} alt="" />
        </div>
      </Link>
      <div className={style.cardinfo}>
        <div className={style.cardinfo_top}>
          <div className={style.itemName}>{name}</div>
          <div className={style.weight}> {weight} gram</div>
        </div>
        <div className={style.description}>{description}</div>
        <div className={style.card_bot}>
          <div className={style.price}>{price} $</div>
          {addedCount > 0 ? (
            <Counter id={id} count={addedCount} />
          ) : (
            <button
              onClick={() => {
                const item: CartItem = {
                  id: id,
                  name: name,
                  description: description,
                  price: price,
                  image: image,
                  weight: weight,
                  count: 0,
                };
                dispatch(addItem(item));
              }}
              className={style.btn}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
