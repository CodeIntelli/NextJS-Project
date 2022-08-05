import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetail from "../Components/OrderDetails";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [cod, setCod] = useState(false);
  const cartData = useSelector((state) => state.cart);
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(cartData);
  const amount = cartData.total;
  const currency = "USD";
  const style = { layout: "vertical" };

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      console.log(res);
      if (res.status === 200) {
        dispatch();
        router.push(`/Orders/${res.data.data._id}`);
      }
      dispatch(reset());
    } catch (error) {
      console.log(error);
    }
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              console.log(data, details);
              // Your code here after capture the order
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cartData.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartData?.products.length == 0 ? (
                <>
                  <h1>Please Add Some Product First</h1>
                </>
              ) : (
                cartData?.products?.map((product, i) => {
                  return (
                    <>
                      <tr key={i} className={styles.trow}>
                        <td>
                          <div className={styles.imgContainer}>
                            <Image
                              src={product.img}
                              layout="fill"
                              objectFit="cover"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <span className={styles.name}>{product.title}</span>
                        </td>
                        <td>
                          <span className={styles.extras}>
                            {product.extra.length == 0
                              ? "No Extra"
                              : product.extra.map((extra) => (
                                  <span key={extra._id}>{extra.text}, </span>
                                ))}
                          </span>
                        </td>
                        <td>
                          <span className={styles.price}>${product.price}</span>
                        </td>
                        <td>
                          <span className={styles.quantity}>
                            {product.quantity}
                          </span>
                        </td>
                        <td>
                          <span className={styles.total}>
                            ${product.price * product.quantity}
                          </span>
                        </td>
                      </tr>
                    </>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal:</b>$
              {cartData.total}
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>${cartData.total}
            </div>
            {open ? (
              <div
                style={{ marginTop: "50px" }}
                className={styles.paymentMethods}
              >
                <button
                  className={styles.payButton}
                  onClick={() => {
                    setCod(true);
                  }}
                >
                  CASH ON DELIVERY(COD)
                </button>
                <PayPalScriptProvider
                  options={{
                    "client-id":
                      "Act5zMLscc7SJnfSxABRt3clSHOWMT4kBl-tgfQpMLLiREcFATPE92ZPi3_tcwObOly_aVxxEQViauSk",
                    components: "buttons",
                    currency: "USD",
                    "disable-funding": "credit,card,p24",
                  }}
                >
                  <ButtonWrapper currency={currency} showSpinner={false} />
                </PayPalScriptProvider>
              </div>
            ) : (
              <>
                <button onClick={() => setOpen(true)} className={styles.button}>
                  CHECKOUT NOW!
                </button>
              </>
            )}
          </div>
        </div>
        {cod && (
          <OrderDetail total={cartData.total} createOrder={createOrder} />
        )}
      </div>
    </div>
  );
};

export default Cart;
