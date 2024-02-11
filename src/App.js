import Navbar from "./components/navbar";
import Footer from './components/footer';
import Animals from "./animals/formerAppjs";
import Home from "./home/home";
import Food from "./food/food";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

export const metadata = {
  title: 'Memory Game Online',
  description: 'Generated by create next app',
  developer: "Lucas Katz",
  keywords: "games - school - English - vocabulary"
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/animals' element={<Animals />} />
        <Route path='/Irregular' element="" />
        <Route path='/food' element={<Food/>}  />
        <Route path='/checkout' element="" />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}