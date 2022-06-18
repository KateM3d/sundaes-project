import React from "react";
import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../context/OrderDetails";

const OrderSummary = ({ setOrderPhase }) => {
  const [orderDetails] = useOrderDetails();

  const scoopArray = Array.from(orderDetails.scoops.entries());
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const hasToppings = orderDetails.totals.toppings !== "$0.00";
  let toppingsDisplay = null;

  if (hasToppings) {
    const toppingsArray = Array.from(orderDetails.toppings.keys());
    const toppingList = toppingsArray.map((key) => <li key={key}>{key}</li>);
    toppingsDisplay = (
      <>
        <h2 style={{ textAlign: "left", color: "#4C3A51", marginTop: "5%" }}>
          Toppings: {orderDetails.totals.toppings}
        </h2>
        <ul style={{ color: "#4C3A51" }}>{toppingList}</ul>
      </>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#4C3A51", marginTop: "5%" }}>
        Order Summary
      </h1>
      <h2 style={{ textAlign: "left", color: "#4C3A51", marginTop: "5%" }}>
        Scoops: {orderDetails.totals.scoops}
      </h2>
      <ul style={{ color: "#4C3A51" }}>{scoopList}</ul>
      {toppingsDisplay}
      <SummaryForm setOrderPhase={setOrderPhase} />
    </div>
  );
};
export default OrderSummary;
