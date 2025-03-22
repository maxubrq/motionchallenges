import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@context/theme.provider';

const orbitron = localFont({
  src: './fonts/Orbitron/Orbitron-VariableFont_wght.ttf',
  display: 'swap',
  variable: '--font-orbitron',
});

const tektur = localFont({
  src: './fonts/Tektur/Tektur-VariableFont_wdth,wght.ttf',
  display: 'swap',
  variable: '--font-tektur',
});

const sourceCodePro = localFont({
  src: './fonts/Source_Code_Pro/SourceCodePro-VariableFont_wght.ttf',
  display: 'swap',
  variable: '--font-source-code-pro',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${orbitron.variable} ${tektur.variable} ${sourceCodePro.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
