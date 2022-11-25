import './App.css';
import React, {useState}from 'react';
import NavBar from './components/Navbar/NavBar.jsx';
import Header from './components/Header/Header';
import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile.jsx';
import Chats from './components/Chats/Chats.jsx';
import Settings from './components/Settings/Settings';
import NotFound from './components/NotFound/NotFound.jsx';
import Home from './components/Home/Home';
import Dialogs from './components/Chats/FormContainer/Form/Dialogs/Dialogs';
import {darkTheme, lightTheme} from '../src/theme/theme'
import News from './components/News/News';
import Article from './components/News/Article/Article';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoutes from './components/Private/Private';


const App = () => {

  const [isDark, setIsDark] = useState(true);

  return (
  
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div className='container parent app-wrapper'>
        <Header />
        <NavBar />
        <main className='main' >
          <Routes>
            <Route exact element={<PrivateRoutes />}>
              <Route exact path='/' element={<Home />}/>
              <Route path='/profile' element={<Profile />}/>
              <Route path='/chats' element={<Chats /> }>
                <Route path=':chatId' element={<Dialogs />}/>
              </Route>
              <Route path='/news' element={<News />}/>
              <Route path='news/:newsId' element={<Article />}/>
              <Route path='/settings' element={<Settings />} />
            </Route>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Login />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </main>
        <Button variant="outlined" sx={{width: '80px', marginBottom: '30px', marginLeft: '40px'}} onClick={() => {setIsDark(prev => !prev)}}>Theme</Button>
        </div>
      </ThemeProvider>
    
  )
}

export default App;
