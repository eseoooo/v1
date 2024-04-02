import { raleway, montserrat } from "@/public/fonts";
import "@/public/css/base.css";
import Header from "@/components/header/header";
import SkipToContent from "@/components/ui/skip-to-content";
import NotificationProvider from "@/lib/context/notification-context";
import FeatureProvider from "@/lib/context/feature-context";
import { metadataObject } from "@/lib/const";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = { ...metadataObject };

export const viewport = {
  themeColor: "#151418",
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
              className="h-dvh pt-16 lg:pt-17.5 mx-auto max-w-screen-2xl px-4 xs:px-12 lg:px-24 xl:px-40 outline-none"
            >
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </NotificationProvider>
        </FeatureProvider>
      </body>
    </html>
  );
}
