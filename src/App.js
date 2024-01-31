import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import { Navbar } from './components/navbar'
import { Shop } from './pages/shop'



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Shop/>} />
          <Route path='/cart' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
