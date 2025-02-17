import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './blog/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/blog' element={<Blog/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;