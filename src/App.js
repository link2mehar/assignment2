import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./views/Home";
import ConversionList from "./views/ConversionList";
import "./index.css";

function App() {
  return (
    <div className="App">

      <Router>
        <nav className="nav">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/exchange-list' className="nav-link">Exchange List</Link>
        </nav>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='exchange-list' element={<ConversionList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
