import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MenuMobileReducer from './reducer/MenuMobileReducer.js';

import Home from './pages/home/Home.js';
import TopBar from './components/topBar/TopBar.js';
import Single from './pages/single/Single.js';
import Write from './pages/write/Write.js';
import Settings from './pages/settings/Setting.js';
import Login from './pages/login/Login.js';
import Register from './pages/register/Register.js';
import About from './pages/about/About.js';

import Contact from './pages/Contact/Contact.js'
import Search from './pages/search/Search.js';
import MenuMobile from './menuMobile/menuMobile.js';


function App() {

  const store = createStore(MenuMobileReducer)
  const user = true;
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <TopBar />
          <Routes>
            <Route path='/' element={ user ? <Home />: <Register/>}/>
            
            <Route path='/about' element={<About/>} />

            <Route path='/write' element={ user ? <Write />: <Register/>} />
            
            <Route path='/settings' element={user ? <Settings />: <Register/>} />
            
            <Route path='/login' element={<Login />} />
            
            <Route path='/post/:postId' element={<Single />} />
            
            <Route path='/register' element={<Register />} />
          
            <Route path='/contact' element={<Contact/>}/>
          
            <Route path='/search' element={<Search/>}/>
          </Routes>
            <MenuMobile/> 
        </Provider>
      </Router>

      

    </div>
  );
}

export default App;
