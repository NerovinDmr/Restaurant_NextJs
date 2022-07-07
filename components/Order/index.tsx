import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./styles.module.scss";

export const Order: React.FC = () => {
  const [person, setPerson] = React.useState(1);
  const onPlusPerson = () => {
    setPerson(person + 1);
  };
  const onMinusPerson = () => {
    if (person === 1) {
      return false;
    } else {
      setPerson(person - 1);
    }
  };
  return (
    <div className={style.order}>
      <Link href={"/Cart"}>
        <div className={style.back}>
          <div className={style.icon}>
            <Image src="/images/ArrowBack.svg" width={12} height={12} />
          </div>
          <div>Back to cart</div>
        </div>
      </Link>

      <div className={style.orderForm}>
        <div className={style.heading}>
          <h3> Make an order</h3>
        </div>
        <div className={style.contactForm}>
          <div className={style.formHeading}>Contact information</div>
          <div className={style.formWrapp}>
            <form>
              <input placeholder="your name" />
              <input type="text" placeholder="your phone number" />
            </form>
          </div>
        </div>
        <div className={style.deliveryForm}>
          <div className={style.formHeading}>Delivery types</div>

          <form action="post">
            <div className={style.radio}>
              <input type="radio" id="1" name="deliveryMethods" value="self" />
              <label htmlFor="1"> self </label>
              <input
                type="radio"
                id="2"
                name="deliveryMethods"
                value="courier"
                defaultChecked
              />
              <label htmlFor="2"> by courier</label>
            </div>

            <div className={style.addresform}>
              <div className={style.formHeading}>Enter your address</div>
              <div className={style.deliveryInfo}>
                <input
                  type="text"
                  placeholder="street"
                  className={style.street}
                />
                <input
                  type="text"
                  placeholder="building"
                  className={style.build}
                />
                <input
                  type="text"
                  placeholder="flat number"
                  className={style.flat}
                />
                <input
                  type="text"
                  placeholder="entrance"
                  className={style.entrance}
                />
                <input
                  type="text"
                  placeholder="floor number"
                  className={style.floor}
                />
              </div>
            </div>
          </form>
        </div>
        <div className={style.paymentForm}>
          <div className={style.formHeading}>Payment methods</div>
          <form action="post">
            <div className={style.radio}>
              <input
                type="radio"
                id="3"
                name="payMethods"
                value="online"
                defaultChecked
              />
              <label htmlFor="3"> online </label>
              <input type="radio" id="4" name="payMethods" value="by card" />
              <label htmlFor="4"> by card</label>
              <input type="radio" id="5" name="payMethods" value="by card" />
              <label htmlFor="5"> by cash</label>
            </div>

            <div className={style.deliveryOptions}>
              <div className={style.formHeading}>When to deliver</div>
              <div className={style.TimeforDeliver}>
                <div className={style.radio}>
                  <input
                    type="radio"
                    id="6"
                    name="TimeforDelivery"
                    value="near"
                    defaultChecked
                  />
                  <label htmlFor="6"> nearest time </label>
                  <input
                    type="radio"
                    id="7"
                    name="TimeforDelivery"
                    value="by courier"
                  />
                  <label htmlFor="7">by time</label>
                  {/* <input
                    className={style.dayTime}
                    type="text"
                    placeholder=" Delivery Time"
                  /> */}
                </div>
                <div className={style.person}>
                  <div className={style.personCounter}>
                    <div>number of persons</div>
                    <div className={style.minus} onClick={onMinusPerson}>
                      <Image src={"/images/minus.svg"} width={12} height={3} />
                    </div>
                    <div className={style.quantity}>{person}</div>
                    <div className={style.plus} onClick={onPlusPerson}>
                      <Image src={"/images/plus.svg"} width={12} height={12} />
                    </div>
                  </div>
                  <div className={style.call}>
                    <div className={style.question}>
                      Do you want us to call?
                    </div>
                    <div className={style.answers}>
                      <div className={style.answer}>
                        <input
                          type="radio"
                          defaultChecked
                          id="110"
                          name="call"
                          value="no"
                        />
                        <label htmlFor="110">Don't call</label>
                      </div>
                      <div className={style.answer}>
                        <input type="radio" id="111" name="call" value="yes" />
                        <label htmlFor="111">Call is required</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={style.confirm}>
          <div className={style.checker}>
            <input type="checkbox" id="200" name="checker" />
            <label htmlFor="200">
              I agree to the processing of my personal data
            </label>
          </div>
          <button type="submit" className={style.btnConfirm}>
            confirm
          </button>
        </div>
      </div>
    </div>
  );
};
