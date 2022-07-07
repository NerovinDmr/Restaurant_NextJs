import Image from "next/image";
import React from "react";
import style from "./styles.module.scss";

export const Contacts: React.FC = () => {
  return (
    <div className={style.contacts}>
      <div className={style.form}>
        <div className={style.header}>Contacts</div>
        <div className={style.line} />
        <div className={style.top}>
          <div className={style.icon}>
            <Image src="/images/Location2.svg" width={20} height={25} />
          </div>
          <div className={style.contactIfo}>
            <div className={style.contactIfo_name}> our adress</div>
            <div className={style.contactIfo_info}>
              148-51 Brookville Blvd, 36th Steet
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.icon}>
            <Image src="/images/mail.svg" width={20} height={25} />
          </div>
          <div className={style.contactIfo}>
            <div className={style.contactIfo_name}> our e-mail</div>
            <div className={style.contactIfo_info}> info@gmail.com</div>
          </div>
        </div>
        <div className={style.reserve}>
          <button>Reserve</button>
          <div className={style.callUs}>
            <div className={style.number}>+7(909)510-57-59</div>
            <div className={style.note}>call us for more info </div>
          </div>
        </div>
        <div className={style.social}>
          <div> We are in social networks:</div>
          <div className={style.social_links}>
            <div>
              <Image src="/images/facebook.svg" width={18} height={18} />
            </div>
            <div>
              <Image src="/images/instagram.svg" width={18} height={18} />
            </div>
            <div>
              <Image
                src="/images/video-play-button.svg"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
