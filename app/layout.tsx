import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ahmed Mohamed Alshrqawy - Frontend Developer',
  description: 'Portfolio of Ahmed Mohamed Alshrqawy, a Frontend Developer specializing in React and Next.js.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-[var(--color-background)] text-[var(--color-text-primary)] min-h-screen flex flex-col antialiased selection:bg-primary/30 selection:text-primary transition-colors duration-500 ease-in-out`}>
        <ThemeProvider attribute="class" forcedTheme="dark" enableSystem disableTransitionOnChange={false}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
