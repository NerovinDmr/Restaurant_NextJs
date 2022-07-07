import React from "react";
import style from "./styles.module.scss";

export const EmptyCart: React.FC = () => {
  return (
    <div className={style.emptyCartWrapp}>
      <div className={style.emptyCart}>
        <div> Cart is Empty</div>
      </div>
    </div>
  );
};
