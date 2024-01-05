import Header from "./Componets/Header";
import Home from "./Componets/Home";
import Footer from "./Componets/Footer";
import Homepage from "./Componets/Homepage";
import { Route, Routes, BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Homepage/>}/>

      </Routes>
      <Footer />
    </BrowserRouter>
     
    
  
      
    </div>
  );
}

export default App;
