import React from "react";
import Options from "./Options";
import Button from "react-bootstrap/Button";
import { useOrderDetails } from "../context/OrderDetails";

const OrderEntry = ({ setOrderPhase }) => {
  const [orderDetails] = useOrderDetails();

  const orderDisabled = orderDetails.totals.scoops === "$0.00";
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#A149FA", margin: "5%" }}>
        Would you like a Sundae?
      </h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2 style={{ textAlign: "right", color: "#A149FA", marginTop: "5%" }}>
        Grand total: {orderDetails.totals.grandTotal}
      </h2>
      <Button
        style={{ float: "right" }}
        variant="success"
        disabled={orderDisabled}
        onClick={() => setOrderPhase("review")}
      >
        Order Sundae!
      </Button>
    </div>
  );
};

export default OrderEntry;
