import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={'/react/home'}>首页</Link>
        <Link to={'/react/about'}>关于</Link>
        <Link to={'/react/login'}>登录</Link>
      </nav>
      <Routes>
        <Route path='/react' element={<Navigate to="/react/home" />} />
        <Route path="/react/home" element={<div>Home</div>} />
        <Route path="/react/about" element={<div>about</div>} />
        <Route path="/react/login" element={<div>login</div>} />
      </Routes>
    </div>
  );
}

export default App;
