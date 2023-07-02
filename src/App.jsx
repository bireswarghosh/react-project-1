// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AUM NAMO SHIVAYA ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer";
import Contract from "./components/Contract.jsx";
import Services from "./components/Services";


import  "./styles/App.scss"
import  "./styles/header.scss"
import  "./styles/home.scss"
import  "./styles/footer.scss"
import  "./styles/contract.scss"
import  "./styles/mediaquery.scss"
import "./components/Services";

function App() {
  return (
<>

<Router>
      <Header />
      <Routes>
         
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contract />}  />  
            <Route path="/services" element={<Services />} />  
      </Routes>
      <Footer />
    </Router>




</>


  );
}

export default App;
