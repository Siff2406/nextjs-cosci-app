import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "../globals.css";

const kanit = Kanit({
    subsets: ['thai'],
    weight: ['100','200','300','400','500','600','700','800'],
    display: 'swap',
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "My Dashboard only for login user",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className}`}
      >
        
        {children}
      </body>
    </html>
  );
}
