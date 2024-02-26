import HeadingDash from "@/components/ui/heading-dash";
import TextField from "@/components/contact/text-field";
import TextArea from "@/components/contact/text-area";
import ChevronDoubleRightIcon from "@/public/icons/chevron-double-right-icon.svg";

export default function Contact() {
  // TODO: Add validation on blur? and bottom text

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
        <form className="flex flex-col md:flex-row gap-x-6">
          <div className="max-w-xl flex flex-wrap gap-x-6 gap-y-6 md:gap-y-10">
            <TextField
              type="text"
              name="name"
              placeholder="Your name"
              otherStyles="w-full md:flex-1"
              aria-required
              aria-invalid="false"
              aria-label="Your name"
              errorMessage="Please provide a valid name"
            />
            <TextField
              type="email"
              name="email"
              placeholder="Your email"
              otherStyles="w-full md:flex-1"
              inputMode="email"
              aria-required
              aria-invalid="false"
              aria-label="Your email"
              errorMessage="Please provide a valid email address."
            />
            <TextField
              type="text"
              name="subject"
              placeholder="Subject"
              otherStyles="w-full"
              aria-required
              aria-invalid="false"
              aria-label="Your subject"
              errorMessage="Subject is required."
            />
            <TextArea
              name="message"
              placeholder="Message"
              otherStyles=" w-full "
              rows="6"
              aria-required
              aria-invalid="false"
              aria-label="Your message"
              errorMessage="Message is required."
            />
          </div>
          <div className="flex items-end justify-end">
            <button
              type="submit"
              className="flex gap-x-2 items-center text-1.5xl xs:text-2xl px-6 py-4 translate-y-4 font-medium tracking-wide hover:text-gold-700  duration-300 ease-out"
              aria-label="Send message"
            >
              Send{" "}
              <span aria-hidden className="inline-flex h-5 w-5 ">
                <ChevronDoubleRightIcon />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
