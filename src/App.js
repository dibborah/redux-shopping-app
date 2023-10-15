import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import Notification from "./components/notification";


function App() {
  const cart = useSelector(state => state.cart)
  const isloggedIn = useSelector(state => state.auth.isloggedIn)
  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch("https://redux-http-5fe71-default-rtdb.firebaseio.com/cartItems.json", {
          method: "PUT",
          body: JSON.stringify(cart)
        });
        const data = await res.json()
    }
    sendRequest();
  }, [cart]);
  return (
    <div className="App">
      <Notification type="success" message={"This is dummy message"}/>
      {!isloggedIn && <Auth />}
      {isloggedIn && <Layout />}
    </div>
  );
}

export default App;
