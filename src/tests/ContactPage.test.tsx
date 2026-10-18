import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactPage from "../pages/ContactPage";

// Test 1: Initial render
describe("ContactPage - initial render", () => {
  test("renders the contact form", () => {
    render(<ContactPage />);

    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Subject")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Send message" }),
    ).toBeInTheDocument();
  });
});

// Test 2: Successful form submission
describe("ContactPage - form submission", () => {
  test("shows a success message after submitting valid information", async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    const nameInput = screen.getByLabelText("Full name");
    const emailInput = screen.getByLabelText("Email");
    const subjectInput = screen.getByLabelText("Subject");
    const messageInput = screen.getByLabelText("Message");

    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "john.doe@example.com");
    await user.type(subjectInput, "Product question");
    await user.type(messageInput, "Hello, this is a test message.");

    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(
      screen.getByText("Your form has been completed successfully!"),
    ).toBeInTheDocument();

    // Check that the form was cleared
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(subjectInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
  });
});

// Test 3: Form validation
describe("ContactPage - form validation", () => {
  test("shows validation errors when submitting empty form", async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(
      screen.getByText("Full name must be at least 3 characters."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Please enter a valid email address."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Subject must be at least 3 characters."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Message must be at least 10 characters."),
    ).toBeInTheDocument();
  });
});
