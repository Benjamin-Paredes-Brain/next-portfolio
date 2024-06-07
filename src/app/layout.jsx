import "./globals.css";

export const metadata = {
  title: "FULLSTACK DEVELOPER | BENJAMIN PAREDES BRAIN",
  description: "Fullstack developer specialized in solving problems and creating web applications. Do you need a website or do you want to work together? Contact me!",
  verification: {
    google: 'G_QIrTmva-_-QjRgOskQrnVZrPtlYT3W5oTxXA0kx3E',

  },
  alternates: { canonical: "https://benjaminparedes.com" },
  icons: "/img/web/ufo.webp"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
