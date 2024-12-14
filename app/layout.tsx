import '@/app/ui/global.css';
import { inter, lusitana, roboto } from './ui/fonts';
import Footer from './ui/footer';
import NavBar from './ui/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={`${roboto.className} antialiased`}>
          <NavBar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
