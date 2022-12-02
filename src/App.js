import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home, About, Travel, Discover, Contact} from "./routes/index.js"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Travel" element={<Travel/>}/>
        <Route path="/Discover" element={<Discover/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
