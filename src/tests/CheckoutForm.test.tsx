import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutSuccess from "../pages/CheckoutSuccess";

describe("CheckoutForm - navigation", () => {
  test("navigates to success page and displays the email", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter
        initialEntries={["/checkout"]}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
        </Routes>
      </MemoryRouter>,
    );

    // Fill in the form
    await user.type(screen.getByLabelText("Full name"), "Ola Nordmann");
    await user.type(screen.getByLabelText("Email"), "ola.nordmann@example.com");
    await user.type(
      screen.getByLabelText(/street address/i),
      "Sesam Stasjon 1",
    );
    await user.type(screen.getByLabelText("Postcode"), "2026");
    await user.type(screen.getByLabelText("City"), "Oslo");

    await user.click(screen.getByRole("button", { name: "Complete checkout" }));

    expect(
      await screen.findByRole("heading", { name: "Order completed!" }),
    ).toBeInTheDocument();

    expect(screen.getByText("ola.nordmann@example.com")).toBeInTheDocument();
  });
});
