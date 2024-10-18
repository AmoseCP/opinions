import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Head from './components/head/Head'
import Footer from './components/footer/Footer'
import './globals.css'


const geistSans = localFont({
  src: "../public/assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Opinions",
  description: "A modern blog platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Head />
        {children}
        <Footer />
      </body>
    </html>
  );
}
