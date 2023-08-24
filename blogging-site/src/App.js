
import logo from './logo.svg';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home/Home';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Settings from './Pages/Settings/Settings';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Sidebar from './Sidebar/Sidebar';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path={`/`} element={<Home/>} />
    <Route path={`/write`} element={<Write/>} />
    <Route path={`/login`} element={<Login/>}/>
    <Route path={`/register`} element={<Register/>}/>
    
    </Routes>
    </>
    
    
  );
}

export default App;
