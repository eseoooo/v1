import { raleway, pt_sans } from "@/app/fonts";
import "@/app/css/globals.css";

export const metadata = {
  title: "Esegboria Osarhemen",
  description:
    "Esegboria Osarhemen is a software engineer who builds accessible, inclusive products and digital experiences for the web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${pt_sans.variable}`}>
        <header></header>
        <main className="mx-auto max-w-screen-2xl min-h-dvh px-4 sm:px-5 md:px-10 lg:px-20 xl:px-40">
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
