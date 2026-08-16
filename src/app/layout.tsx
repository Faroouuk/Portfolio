import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Abdelrahman Farouk — Software Engineer", description: "Software engineer and Computer Science student building full-stack products, mobile applications, backend systems and infrastructure.", openGraph: { title: "Abdelrahman Farouk — Software Engineer", description: "Building full-stack products, mobile applications, backend systems and infrastructure.", type: "website" } };
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en"><body>{children}</body></html>; }
