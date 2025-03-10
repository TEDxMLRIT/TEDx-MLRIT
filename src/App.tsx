import Blogs from "./components/Blogs"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Speakers from "./pages/Speakers"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Teams from "./pages/Teams"

function App() {

  return (
    <>    
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/team" element={<Teams />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
