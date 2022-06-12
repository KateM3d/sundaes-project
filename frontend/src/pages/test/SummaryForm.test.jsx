import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../summary/SummaryForm";

describe("SummaryForm component", () => {
  test("initial conditions", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });

    //checkbox is unchecked by default
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });
  test("checkbox enables button on first click and disables on second click", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });

    //checking checkbox enables button
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
