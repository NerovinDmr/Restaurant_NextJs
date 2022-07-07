import Image from "next/image";
import Link from "next/link";
import React from "react";
import { addItem } from "../../store/cart/slice";
import { CartItem } from "../../store/cart/types";
import { Contacts } from "../Contact";
import { useDispatch, useSelector } from "react-redux";
import style from "./styles.module.scss";
import { selectCartItemById } from "../../store/cart/selectors";
import { Counter } from "../Counter";
import Bounce from "react-reveal/Bounce";

export const FullProdact: React.FC<any> = ({ items, id }) => {
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const dispatch = useDispatch();
  return (
    <div>
      <div className={style.fullProdact}>
        <Link href={"/"}>
          <div className={style.back}>
            <div className={style.icon}>
              <Image src="/images/ArrowBack.svg" width={12} height={12} />
            </div>
            <div>Back</div>
          </div>
        </Link>
        {Object.entries<any>(items)
          .reduce((a: any, b: any) => {
            return a.concat(b);
          })
          .filter((a) => typeof a !== "string")
          .reduce((a, b) => {
            return a.concat(b);
          })
          .filter((items: { id: number }) => items.id === id)
          .map(
            (items: {
              price: number;
              weight: string;
              name: string;
              image: string;
              id: string;
              description: string;
            }) => (
              <div key={items.id} className={style.prodactCard}>
                <div className={style.imageBlock}>
                  <Image
                    className={style.img}
                    src={`/${items.image}`}
                    width={500}
                    height={400}
                  />
                </div>

                <div className={style.infoBlck}>
                  <div className={style.name}>{items.name}</div>
                  <div className={style.description}>{items.description}</div>
                  <div className={style.weight}>
                    weight: {items.weight} gram
                  </div>
                  <div className={style.control}>
                    {addedCount > 0 ? (
                      <Counter id={items.id} count={addedCount} />
                    ) : (
                      <button
                        className={style.btn}
                        onClick={() => {
                          const item: CartItem = {
                            id: items.id,
                            name: items.name,
                            description: items.description,
                            price: items.price,
                            image: items.image,
                            weight: items.weight,
                            count: 0,
                          };
                          dispatch(addItem(item));
                        }}
                      >
                        Add to cart
                      </button>
                    )}

                    <div className={style.price}>{items.price} $</div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
      <Contacts />
    </div>
  );
};
