import { raleway, montserrat } from "@/public/fonts";
import "@/public/css/base.css";
import Header from "@/components/header/header";
import SkipToContent from "@/components/ui/skip-to-content";
import NotificationProvider from "@/lib/context/notification-context";
import FeatureProvider from "@/lib/context/feature-context";

export const metadata = {
  title: "Esegboria Osarhemen",
  description: `Esegboria Osarhemen is a software engineer who builds accessible, 
    inclusive products and digital experiences for the web.`,
  icons: {
    apple: {
      url: "/images/favicon/apple-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    icon: [
      {
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="motion-safe:scroll-smooth">
      <body className={`${raleway.variable} ${montserrat.variable}`}>
        <FeatureProvider>
          <NotificationProvider>
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
          </NotificationProvider>
        </FeatureProvider>
      </body>
    </html>
  );
}
