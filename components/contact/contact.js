import HeadingDash from "@/components/ui/heading-dash";
import TextField from "@/components/contact/text-field";
import TextArea from "@/components/contact/text-area";
import ContactSubmitButton from "@/components/contact/contact-submit-button";
import { sendContactForm } from "@/lib/actions";

export default function Contact() {
  // TODO: fix blue and disabled

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
          className="flex flex-col md:flex-row gap-x-6"
        >
          <div className="max-w-xl flex flex-wrap gap-x-6 gap-y-6 md:gap-y-10">
            <TextField
              type="text"
              name="name"
              placeholder="Your name"
              otherStyles="w-full md:flex-1"
              aria-required
              aria-label="Your name"
            />
            <TextField
              type="email"
              name="email"
              placeholder="Your email"
              otherStyles="w-full md:flex-1"
              inputMode="email"
              aria-required
              aria-label="Your email"
            />
            <TextField
              type="text"
              name="subject"
              placeholder="Subject"
              otherStyles="w-full"
              aria-required
              aria-label="Your subject"
            />
            <TextArea
              name="message"
              placeholder="Message"
              otherStyles=" w-full"
              rows="6"
              aria-required
              aria-label="Your message"
            />
          </div>
          <div className="flex items-end justify-end">
            <ContactSubmitButton disabled={false} />
          </div>
        </form>
      </div>
    </section>
  );
}
