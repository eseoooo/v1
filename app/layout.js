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
        The or
        {children}
      </body>
    </html>
  );
}
