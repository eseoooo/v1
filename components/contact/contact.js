import HeadingDash from "@/components/ui/heading-dash";
import TextField from "@/components/contact/text-field";
import TextArea from "@/components/contact/text-area";

export default function Contact() {
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
        <form>
          <div className="max-w-xl flex flex-wrap gap-x-6 gap-y-6 md:gap-y-10">
            <TextField
              type="text"
              name="name"
              placeholder="Your name"
              otherStyles="w-full md:flex-1"
              required
              aria-required
              aria-label="Your name"
            />
            <TextField
              type="email"
              name="email"
              placeholder="Your email"
              otherStyles="w-full md:flex-1"
              required
              aria-required
              aria-label="Your email"
            />
            <TextField
              type="text"
              name="subject"
              placeholder="Subject"
              otherStyles="w-full"
              required
              aria-required
              aria-label="Your subject"
            />
            <TextArea
              name="message"
              placeholder="Message"
              otherStyles="scrollbar w-full resize-none"
              rows="8"
              required
              aria-required
              aria-label="Your message"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
