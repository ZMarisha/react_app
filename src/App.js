import './App.css';
import React, {useState}from 'react';
import Form from './components/Form/Form';
import NavBar from './components/Navbar/NavBar.jsx';
import Header from './components/Header/Header';
import { ThemeProvider } from '@emotion/react';
import { createTheme} from '@mui/material/styles';
import { Button } from '@mui/material';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0d47a1',
      text: '#fafafa',
      border: '2px solid #0d47a1',
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light', 
    primary: {
        main: '#64b5f6',
        text: '#212121',
        border: '2px solid #64b5f6'
      },
    }
  })

const App = () => {

  const [messageList, setMessageList] = useState([])
  const [message, setMessage] = useState({
    text: '',
    author: '',
    date: addDate(),
    time: addTime()
  })

  const [isDark, setIsDark] = useState(true)

  function addDate() {
    let date = new Date();
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    
    return `${year}.${month}.${day}`
  }

  function addTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div className='container parent app-wrapper'>
        <Header />
        <NavBar />
        <Form message={message} 
            setMessage={setMessage} 
            setMessageList={setMessageList} 
            messageList={messageList} 
            addDate={addDate} 
            addTime={addTime}
        />
        <Button variant="outlined" sx={{width: '80px', marginBottom: '30px'}} onClick={() => {setIsDark(prev => !prev)}}>Theme</Button>
      </div>
      </ThemeProvider>
  )
}

export default App;
