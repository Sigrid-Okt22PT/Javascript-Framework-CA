import { useState } from "react";
import type { FormEvent } from "react";

function ContactPage() {
  // Input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Validation errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  // Success message
  const [success, setSuccess] = useState(false);
  // Validation functions
  function validateName() {
    if (name.trim().length < 3) {
      setNameError("Full name must be at least 3 characters.");
      return false;
    }

    setNameError("");
    return true;
  }

  function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setEmailError("Please enter a valid email address.");
      return false;
    }

    setEmailError("");
    return true;
  }

  function validateSubject() {
    if (subject.trim().length < 3) {
      setSubjectError("Subject must be at least 3 characters.");
      return false;
    }

    setSubjectError("");
    return true;
  }

  function validateMessage() {
    if (message.trim().length < 10) {
      setMessageError("Message must be at least 10 characters.");
      return false;
    }

    setMessageError("");
    return true;
  }
  // Handle form submission
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(false);
    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      setSuccess(true);
      // Clear form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold text-primary">Contact us</h1>

      {success && (
        <p role="status" className="mb-6 bg-light p-4 text-primary">
          Your form has been completed successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-secondary">
            Full name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={validateName}
            required
            minLength={3}
            aria-invalid={!!nameError}
            aria-describedby={nameError ? "name-error" : undefined}
            className="w-full border border-light bg-white p-3"
          />

          {nameError && (
            <p
              id="name-error"
              role="alert"
              className="mt-2 text-sm text-red-600"
            >
              {nameError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-secondary">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={validateEmail}
            required
            aria-invalid={!!emailError}
            aria-describedby={emailError ? "email-error" : undefined}
            className="w-full border border-light bg-white p-3"
          />

          {emailError && (
            <p
              id="email-error"
              role="alert"
              className="mt-2 text-sm text-red-600"
            >
              {emailError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-secondary">
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            onBlur={validateSubject}
            required
            minLength={3}
            aria-invalid={!!subjectError}
            aria-describedby={subjectError ? "subject-error" : undefined}
            className="w-full border border-light bg-white p-3"
          />

          {subjectError && (
            <p
              id="subject-error"
              role="alert"
              className="mt-2 text-sm text-red-600"
            >
              {subjectError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="content" className="mb-2 block text-secondary">
            Message
          </label>

          <textarea
            id="content"
            name="content"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onBlur={validateMessage}
            required
            minLength={10}
            rows={6}
            aria-invalid={!!messageError}
            aria-describedby={messageError ? "message-error" : undefined}
            className="w-full border border-light bg-white p-3"
          />

          {messageError && (
            <p
              id="message-error"
              role="alert"
              className="mt-2 text-sm text-red-600"
            >
              {messageError}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-accent px-6 py-3 text-primary hover:bg-secondary hover:text-white"
        >
          Send message
        </button>
      </form>
    </section>
  );
}

export default ContactPage;
