// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AUM NAMO SHIVAYA ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
<>

<Router>
      <Header />
      <Routes>
        <Route/>
        {/* <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>




</>


  );
}

export default App;
