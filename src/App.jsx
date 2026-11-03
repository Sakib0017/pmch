import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <Router>
      <div>
        

        {/* Route Definitions */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App