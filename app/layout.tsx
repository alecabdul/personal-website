import '@/app/ui/global.css';
import { inter, lusitana, roboto } from './ui/fonts';
import Footer from './ui/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={`${roboto.className} antialiased`}>
          {children}
          <Footer />
      </body>
    </html>
  );
}
