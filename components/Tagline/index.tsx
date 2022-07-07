//@ts-nocheck
import React from "react";
import Flip from "react-reveal/Flip";
import style from "./styles.module.scss";
export const Tagline: React.FC = () => {
  return (
    <div className={style.tagline}>
      <Flip left cascade>
        <div className={style.heading}>
          <h1>
            Delivery of delicious
            <div> dishes in 60 minutes </div>
          </h1>

          <div className={style.tagline_btn}>haven't tried it yet?</div>
        </div>
      </Flip>
    </div>
  );
};
