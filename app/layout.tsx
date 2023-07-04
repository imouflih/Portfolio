import SiteHeader from "@/components/header/header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata = {
  title: "Iliasse MOUFLIH",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="relative flex flex-col min-h-screen">
            <SiteHeader />
            <div className="flex-1">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
