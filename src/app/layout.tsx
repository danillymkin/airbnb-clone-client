import React from 'react';
import { Nunito } from 'next/font/google';

import './globals.css';

const nunito = Nunito({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
