"use client";

import HeadingDash from "@/components/ui/heading-dash";
import TextField from "@/components/contact/text-field";
import TextArea from "@/components/contact/text-area";
import ContactSubmitButton from "@/components/contact/contact-submit-button";
import { sendContactForm } from "@/lib/actions";
import { useState } from "react";

export default function Contact() {
  // TODO: disabled and form status

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

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
          action={sendContactForm}
          id="contact-form"
          className="flex flex-col md:flex-row gap-y-6"
        >
          <div className="max-w-xl flex flex-wrap gap-x-6 gap-y-6 md:gap-y-10">
            <TextField
              type="text"
              name="name"
              placeholder="Your name *"
              otherStyles="w-full md:flex-1"
              aria-required
              onChange={setName}
            />
            <TextField
              type="email"
              name="email"
              placeholder="Your email *"
              otherStyles="w-full md:flex-1"
              inputMode="email"
              aria-required
              onChange={setEmail}
            />
            <TextField
              type="text"
              name="subject"
              placeholder="Subject *"
              otherStyles="w-full"
              aria-required
              onChange={setSubject}
            />
            <TextArea
              name="message"
              placeholder="Message *"
              otherStyles=" w-full mt-7"
              rows="6"
              aria-required
              onChange={setMessage}
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
