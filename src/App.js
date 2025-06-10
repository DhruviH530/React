import logo from './logo.svg';
import './App.css';
import { Link,NavLink ,Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Support from './components/Support';
import Labs from './components/Labs';
import MainHeader from './components/MainHeader';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">

{/* ui pr button show thase  */}
      {/* <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
              <Link to="/About">About</Link>
          </li>
          <li>NotFound</li>
          <li>
            <Link to="/support">support</Link>
          </li>
          <li>
            <Link to="/labs">labs</Link>
          </li>
        </ul>
      </nav> */}

     <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
              <NavLink to="/About">About</NavLink>
          </li>
          <li>NotFound</li>
          <li>
            <NavLink to="/support">support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">labs</NavLink>
          </li>
        </ul>
      </nav>










      <Routes>
      {/* home parent che and baki aena child */}
        <Route path='/' element={<MainHeader/>}>
        {/* home page text  show krva mate main header ma outlet nakhine new route create krine home componet ma text krine rendwer kri skay  */}
        <Route index element={<Home/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/labs' element={<Labs/>}/>
        </Route>

        {/* if koi page ama thi found nai thatu to */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
