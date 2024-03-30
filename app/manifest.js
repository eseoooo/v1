export default function manifest() {
  return {
    name: "Esegboria Osarhemen",
    short_name: "Ese",
    display: "standalone",
    start_url: "https://esegboria.com",
    background_color: "#151418",
    theme_color: "#151418",
    description:
      "Esegboria Osarhemen is a software engineer who builds accessible, inclusive products and digital experiences for the web",

    icons: [
      {
        src: "/images/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
