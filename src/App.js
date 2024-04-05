
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';
function App() {

  const [navData, setnavData] = useState("");
  let transferData = (ans)=>{
    // console.log(ans)
    setnavData(ans) 
  }
  return (
    <div className="App">

        <BrowserRouter>
        <Navbar transferData={transferData}/>
            <Routes>
                  <Route path='/' element={<Home ans={navData}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
