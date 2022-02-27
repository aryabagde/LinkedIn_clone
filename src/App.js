import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./components/Login.js";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/"> <Login /></Route>
      </Routes>
    </Router>


    </div>
  );
}

export default App;
