import { useState } from "react";
import Container from "react-bootstrap/Container";
import OrderConfirmation from "./components/OrderConfirmation";
import OrderEntry from "./components/OrderEntry";
import OrderSummary from "./components/OrderSummary";
import { OrderDetailsProvider } from "./context/OrderDetails";

export default function App() {
  // orderPhase needs to be 'inProgress', 'review' or 'completed'
  const [orderPhase, setOrderPhase] = useState("inProgress");

  let Component = OrderEntry;
  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      Component = OrderSummary;
      break;
    case "completed":
      Component = OrderConfirmation;
      break;
    default:
  }

  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  );
}
