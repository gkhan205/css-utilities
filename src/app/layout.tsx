import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Header } from '@/components/shared/Header';
import { ThemeProvider } from '@/components/shared/ThemeProvider';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'CSS Utility Generator',
  description: 'CSS Utility Generator by Ghazi Khan',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(poppins.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Header />
          <main className='min-h-screen bg-slate-50 dark:bg-gray-800 pt-5'>
            <div className='container'>{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
