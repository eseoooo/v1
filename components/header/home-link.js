import Logo from "@/public/icons/logo.svg";

export default function HomeLink() {
  return (
    <a
      href="/"
      aria-label="home"
      className="focused-link !outline-offset-4 w-12 lg:w-14 text-gold-700"
    >
      <Logo aria-hidden="true" />
    </a>
  );
}
