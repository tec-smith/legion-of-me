import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { SITE_CREATOR, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import { Suspense } from "react";

export const metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: SITE_CREATOR,
  },
  metadataBase: new URL(SITE_URL),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
