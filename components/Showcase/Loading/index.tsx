import React from "react";
import style from "./styles.module.scss";
export const Loading: React.FC = () => {
  return (
    <div className={style.loading}>
      <div className={style.load}>
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    </div>
  );
};
