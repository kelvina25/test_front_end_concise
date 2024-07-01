import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Order from "./pages/Order.jsx"
import About from "./pages/About.jsx"
import BookingService from "./pages/BookingService.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/home/order-now" element={<Order />} />
        <Route path="/home/order-now/:service" element={<BookingService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
