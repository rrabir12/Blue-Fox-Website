import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </Router>
  );
}

export default App; 