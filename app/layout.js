import { Inter } from 'next/font/google'
import "./globals.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/componentes/navbar';
import Footer from '@/componentes/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Memory Game Online',
  description: 'Generated by create next app',
  developer: "Lucas Katz",
  keywords: "games - school - English - vocabulary"
}

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body  >
        <ToastContainer/>
        <Navbar/>
        {children}
        <Footer/>  
      </body>
    </html>
  )
}