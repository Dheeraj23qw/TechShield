import React from "react";
import { useSelector } from "react-redux";
import styles from "./module_css/cart.module.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios"; 

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handlePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OynzPSAgwRpikwcc3cRBOvcsZzFfrViPNvm4kLE7PQZOUXwE2c34B44pJNvf0t2qUynT75PXWmTqWbzK7ZkxxKj00OANCOhGq"
    );
  
    const body = {
      cartItems: cartItems.map((item) => ({
        id: item._id,
        name: item.title,
        quantity: 1, 
        price: item.price,
      })),
    };
    const totalBill = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

    const headers = {
      "Content-Type": "application/json",
    };
  
    try {
      const response = await axios.post("http://localhost:5000/api/create-checkout", body, { headers });
      const result = await stripe.redirectToCheckout({
        sessionId: response.data.id, 
      });
      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.cartContainer}>
        <div className={styles.heading}>Shopping Cart</div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ul className={styles.itemList}>
              {cartItems.map((item, index) => (
                <li key={item._id} className={styles.item}>
                  <table>
                    <thead>
                      <tr>
                        <th>Course Name</th>
                        <th>Course Description</th>
                        <th>Course Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              ))}
            </ul>
            
            <button className={styles.checkoutButton} onClick={handlePayment}>Checkout</button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
