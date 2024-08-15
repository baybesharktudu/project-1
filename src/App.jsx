import { BrowserRouter, Routes, Route } from "react-router-dom"
import Authentication from "./pages/Authentication"
import Home from "./pages/Home"
import Account from "./pages/Account"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/authentication" element={<Authentication />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}