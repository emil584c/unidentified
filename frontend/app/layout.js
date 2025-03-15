import "./globals.css";
import "./fonts.css"
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Memcord",
  description: "Bigmemcords",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
