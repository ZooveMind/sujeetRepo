import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './blog/Blog';
import Software from './components/Product/Software';
import SignInSignUp from './components/login/SigninSignup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/blog' element={<Blog/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/software' element={<Software/>} />
        <Route path='/signIn' element={<SignInSignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;