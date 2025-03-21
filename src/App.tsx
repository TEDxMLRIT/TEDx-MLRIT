import Blogs from "./components/Blogs"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Speakers from "./pages/Speakers"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Teams from "./pages/Teams"
import Ticket from "./pages/Ticket"
import Sponsors from "./pages/Sponsors"
import { Toaster } from "./components/ui/sonner"

function App() {

  return (
    <>    
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/register" element={<Ticket />} />
          <Route path="/newsponsor" element={<Ticket />} />
          <Route path="/newspeaker" element={<Ticket />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      <Footer />
    </>
  )
}

export default App
