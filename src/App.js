import './App.css';
import Home from './Page/home';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import Quiz from './Page/quiz';
import Result from './Page/result';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/quiz" element={<Quiz />}>
          </Route>
          <Route path="/result" element={<Result />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
