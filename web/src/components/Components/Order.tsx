import { products } from "../../data";
import ArrowDown from "../../assets/icons/arrow-down.svg?react";
import { useRef, useState } from "react";
import { getDiscountPrice } from "../../utils";
import Card from "../../assets/icons/credit-card.svg?react";
import Cash from "../../assets/icons/cash.svg?react";
import { v4 as uuid } from 'uuid';

export default function Order() {
  const order = {
    id: "3e9d9du",
    date: "05/01/2024",
    quantity: 2,
    status: "completed",
    payment_method: "Apple pay",
    delivery_price: 4.99,
    products: [
      "2dcr57h44782u289uj2",
      "2bdy77h72782u289uj9",
      "2dcr57h44782u289uj9",
      "2bdy77h72782u289uj9",
    ],
  };

  const orderImages = order.products.map((el) => {
    return products.find((item) => item.id === el)?.image;
  });

  const orderProducts = order.products.map((el) => {
    return products.find((item) => item.id === el);
  });

  const [isMainBoxOpened, setIsMainBoxOpened] = useState(false);

  const [user, setUser] = useState({
    first_name: "Ronald",
    last_name: "Richards",
    phone_number: "(505) 555-0125",
    email: "ronaldrichards@gmail.com",
    date_of_birth: "02/04/1980",
    delivery_address: {
      country: "United Kingdom",
      city: "London",
      address: "235 Euston Road",
      postal_code: 45000,
    },
    wishList: [
      "2dcr57h44782u289uj9",
      "2ccr47h24782u289uj9",
      "2dcr57h44782u289uj2",
    ],
    waitList: ["2dcr57h44782u289uj9", "2ccr47h24782u289uj9"],
  });

  const calculateTotalPrice = (order) => {
    const totalProductsPrice = 0;
  };

  return (
    <div
      className={isMainBoxOpened ? "order isOpened" : "order"}
      onClick={() => setIsMainBoxOpened(!isMainBoxOpened)}
    >
      <div
        className={
          isMainBoxOpened
            ? `order__top isOpened ${order.status}`
            : `order__top ${order.status}`
        }
      >
        <div className="order__top-info-box">
          <p>#{order.id}</p>
          <p>{order.date}</p>
          <div className="top-price-box">
            <p>Order price:</p>
            <p className="price">$20.99</p>
          </div>
          <p className={order.status}>{order.status}</p>
        </div>
        {!isMainBoxOpened && (
          <div className="order__top-images">
            {orderImages.slice(0, 4).map((el) => {
              return (
                <img src={`/assets/images/${el}`} className="order__top-img" key={uuid()} />
              );
            })}
          </div>
        )}
        <ArrowDown className="order__icon arrow-down" />
      </div>
      <div className="order__main">
        <div className="order__products-box">
          <h4 className="order__heading">Goods:</h4>
          <div className="order__product-list">
            {orderProducts.map((el) => {
              return (
                <div className="order__product" key={uuid()}>
                  <div>
                    <img
                      src={`/assets/images/${el?.image}`}
                      alt={el?.name}
                      className="order__product-img"
                    />
                    <div className="order__product-infos">
                      <h5>
                        {el?.name}{" "}
                        <span>
                          (
                          {el?.measurement === "piece"
                            ? "pcs"
                            : el?.measurement}
                          )
                        </span>
                      </h5>
                      <p>
                        Product code: <span>({el?.code})</span>
                      </p>
                      <p>Qty: {order.quantity}</p>
                    </div>
                  </div>
                  <div className="order__product-price-box">
                    {!el?.discount ? (
                      <p className="order__product-price">${el?.price}</p>
                    ) : (
                      <div>
                        <p className="order__product-price original">
                          ${el?.price}
                        </p>
                        <p className="order__product-price current">
                          ${getDiscountPrice(el?.price, el?.discount)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="order__payment-details">
            <div className="order__info">
              <p>Payment method:</p>
              <div className="order__payment-method">
                <p className="primary">{order.payment_method}</p>
                {order.payment_method.toLowerCase() !== "cash" ? (
                  <Card className="icon" />
                ) : (
                  <Cash className="icon" />
                )}
              </div>
            </div>
            <div className="order__info">
              <p>Delivery:</p>
              <p>${order.delivery_price}</p>
            </div>
            <div className="order__info">
              <p>Total:</p>
              <p>$20.99</p>
            </div>
          </div>
          <div className="order__btns">
            <button className="btn btn--primary-light btn--sm">
              Write a review
            </button>
            <button className="btn btn--primary btn--sm">
              Repeat an order
            </button>
          </div>
        </div>
        <div className="order__user-box">
          <h4 className="order__heading">Delivery:</h4>
          <div className="order__delivery-details">
            <div className="order__info">
              <p>Country:</p>
              <p>{user.delivery_address.country}</p>
            </div>
            <div className="order__info">
              <p>City:</p>
              <p>{user.delivery_address.city}</p>
            </div>
            <div className="order__info">
              <p>Address:</p>
              <p>{user.delivery_address.address}</p>
            </div>
            <div className="order__info">
              <p>Postal code:</p>
              <p>{user.delivery_address.postal_code}</p>
            </div>
          </div>
          <h4 className="order__heading">User information:</h4>
          <div className="order__user-details">
            <div className="order__info">
              <p>First name:</p>
              <p>{user.first_name}</p>
            </div>
            <div className="order__info">
              <p>Last name:</p>
              <p>{user.last_name}</p>
            </div>
            <div className="order__info">
              <p>Phone number:</p>
              <p>{user.phone_number}</p>
            </div>
            <div className="order__info">
              <p>Email:</p>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
