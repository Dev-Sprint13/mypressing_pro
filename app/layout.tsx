'use client';

import "./globals.css";
import { AppGenProvider } from "@/components/appgen-provider";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>PressingPro</title>
        <meta name="description" content="PressingPro is a platform for managing your pressing business." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
      </head>
      <body className="antialiased">
        <AppGenProvider>
          {children}
          <Toaster richColors position="top-right" />
        </AppGenProvider>
      </body>
    </html>
  );
}
