"use client";

import HeadingDash from "@/components/ui/heading-dash";
import TextField from "@/components/contact/text-field";
import TextArea from "@/components/contact/text-area";
import ContactSubmitButton from "@/components/contact/contact-submit-button";
import { sendContactForm } from "@/lib/actions";
import { useState, useContext, useEffect } from "react";
import { useFormState } from "react-dom";
import { validateText, validateEmail } from "@/lib/utils";
import { NotificationContext } from "@/lib/context/notification-context";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [numberOfSubmissions, setNumberOfSubmissions] = useState(0);
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    setShowNotification,
    setMessage: setMessageNotification,
    setStatus,
  } = useContext(NotificationContext);

  const [state, formAction] = useFormState(sendContactForm, {});

  // Show notification when form is submitted successfully or not
  useEffect(() => {
    if (state?.submitted && !state?.errorType) {
      setShowNotification(true);
      setMessageNotification(state?.message);
      setStatus("success");
      setNumberOfSubmissions((prevState) => prevState + 1);

      // reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setFormIsValid(false);
    }
    if (!state?.submitted && state?.errorType === "other") {
      setShowNotification(true);
      setMessageNotification(state?.message);
      setStatus("failure");
    }
  }, [state, setShowNotification, setMessageNotification, setStatus]);

  // enable submit button only if all fields are valid
  const NAME_MAX_LENGTH = 50;
  const NAME_MIN_LENGTH = 3;
  const MESSAGE_MAX_LENGTH = 600;
  const MESSAGE_MIN_LENGTH = 10;

  const validateForm = () => {
    const error =
      validateText(name, NAME_MIN_LENGTH, NAME_MAX_LENGTH) ||
      validateEmail(email) ||
      validateText(subject, NAME_MIN_LENGTH, NAME_MAX_LENGTH) ||
      validateText(message, MESSAGE_MIN_LENGTH, MESSAGE_MAX_LENGTH);

    if (!error) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Get in touch with me"
      className="section-with-side-content"
    >
      <div className="section-side-content">
        <p aria-hidden className="side-text">
          I&apos;d love to connect with you.
        </p>
      </div>
      <div>
        <HeadingDash aria-hidden>Get in touch</HeadingDash>
        <form
          action={formAction}
          id="contact-form"
          onKeyUp={validateForm}
          className="flex flex-col md:flex-row gap-y-6"
          key={numberOfSubmissions} // force re-mount when form is submitted to reset input state
        >
          <div className="max-w-xl flex flex-wrap gap-x-6 gap-y-6 md:gap-y-10">
            <TextField
              type="text"
              name="name"
              placeholder="Your name *"
              otherStyles="w-full md:flex-1"
              aria-required
              maxLength={NAME_MAX_LENGTH}
              minLength={NAME_MIN_LENGTH}
              onChange={setName}
              initialError={state?.nameError}
              value={name}
            />
            <TextField
              type="email"
              name="email"
              placeholder="Your email *"
              otherStyles="w-full md:flex-1"
              inputMode="email"
              aria-required
              onChange={setEmail}
              initialError={state?.emailError}
              value={email}
            />
            <TextField
              type="text"
              name="subject"
              placeholder="Subject *"
              otherStyles="w-full"
              maxLength={NAME_MAX_LENGTH}
              minLength={NAME_MIN_LENGTH}
              aria-required
              onChange={setSubject}
              initialError={state?.subjectError}
              value={subject}
            />
            <TextArea
              name="message"
              placeholder="Message *"
              otherStyles=" w-full mt-7"
              rows="6"
              maxLength={MESSAGE_MAX_LENGTH}
              minLength={MESSAGE_MIN_LENGTH}
              aria-required
              onChange={setMessage}
              initialError={state?.messageError}
              value={message}
            />
          </div>
          <div className="flex items-end justify-end min-w-48">
            <ContactSubmitButton disabled={!formIsValid} />
          </div>
        </form>
      </div>
    </section>
  );
}
