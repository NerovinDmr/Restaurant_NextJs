//@ts-nocheck
import Image from "next/image";
import React from "react";
import style from "./styles.module.scss";
import Onion from "../../public/svgs/Onion";
import Flash from "../../public/svgs/Flash";
import Cheef from "../../public/svgs/Cheef";
import Zoom from "react-reveal/Zoom";
export const About: React.FC = () => {
  return (
    <div className={style.main_wrapp}>
      <div>
        <div className={style.about}>
          <div className={style.about_text}>
            <Zoom left cascade>
              {" "}
              <h3> Our restaurant</h3>
            </Zoom>
            <div className={style.wrap}>
              <Zoom right cascade>
                <p>
                  We are located in one of the most picturesque places in the
                  city - on the banks of the river, this is your oasis within
                  the city, where you can escape from the noisy and dusty
                  metropolis. We are truly unique, because everything is thought
                  out to the smallest detail: the project was built from a wild
                  Transcarpathian log house, a fireplace in the main hall of the
                  restaurant and panoramic windows overlooking the river, cozy
                  gazebos on the river bank and the best view terrace, a tent
                  with a seating for 200 people, a fabulous children's house and
                  swimming pool.
                </p>
              </Zoom>
            </div>
          </div>
          <div className={style.about_tags}>
            <div className={style.tags_top}>
              <div className={style.tag}>
                <div>
                  <Onion />
                </div>

                <div> the freshest products</div>
              </div>
              <div className={style.tag}>
                <div>
                  <Flash />
                </div>
                <div> fast delivery </div>
              </div>
            </div>
            <div className={style.tags_bottom}>
              <div className={style.tag}>
                <div>
                  <Cheef />
                </div>
                <div> best chefs</div>
              </div>
              <div className={style.tag}>
                <div>
                  <Flash />
                </div>
                <div> fast delivery </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
