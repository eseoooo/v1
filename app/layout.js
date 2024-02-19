import { raleway, montserrat } from "@/public/fonts";
import "@/public/css/base.css";
import Header from "@/components/header/header";
import SkipToContent from "@/components/ui/skip-to-content";

export const metadata = {
  title: "Esegboria Osarhemen",
  description:
    "Esegboria Osarhemen is a software engineer who builds accessible, inclusive products and digital experiences for the web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="motion-safe:scroll-smooth">
      <body className={`${raleway.variable} ${montserrat.variable}`}>
        <SkipToContent />
        <Header />
        <main
          id="content"
          tabIndex={-1}
          className="h-dvh pt-16 lg:pt-17.5 mx-auto max-w-screen-2xl px-6 xs:px-12 lg:px-24 xl:px-40 outline-none"
        >
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
