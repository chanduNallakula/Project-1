import "./globals.css";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import type { Metadata } from "next";

import { ThemeProvider } from "@mui/system";
import theme from "@/lib/utils/theme";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import QueryClientProvider from "./ReactQueryProvider";
export const metadata: Metadata = {
  title: "Near",
  description: "Near Map",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hide-scrollbar">
      <body>
        <Script src="https://kit.fontawesome.com/6ca5eb4325.js"></Script>
        <AppRouterCacheProvider options={{ enableCssLayer: false }}>
          <Toaster />
          <ThemeProvider theme={theme}>
            <QueryClientProvider>{children}</QueryClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
