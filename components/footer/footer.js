import GithubLink from "@/components/footer/github-link";
import EmailLink from "@/components/footer/email-link";

export default function Footer() {
  return (
    <footer className="text-center pt-12 md:pt-24 pb-12 w-full">
      <p className="sub-text">Designed & developed by Esegboria Osarhemen.</p>
      <div className="flex gap-x-2 items-center justify-center">
        <EmailLink />
        <GithubLink />
      </div>
    </footer>
  );
}
