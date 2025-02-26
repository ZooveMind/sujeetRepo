import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './blog/Blog';
import Software from './components/Product/Software';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/blog' element={<Blog/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/software' element={<Software/>} />
      </Routes>
    </Router>
  );
}

export default App;