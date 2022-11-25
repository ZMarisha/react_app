import { createTheme} from '@mui/material/styles';


export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#4527a0',
        text: '#fafafa',
        border: '1px solid #4527a0',
        border2: '2px solid #4527a0',
        borderBottom: '2px solid #4527a0',
      },
    },
  });
  
export const lightTheme = createTheme({
    palette: {
      mode: 'light', 
      primary: {
          main: '#b39ddb',
          text: '#212121',
          border: '1px solid #b39ddb',
          border2: '2px solid #b39ddb',
          borderBottom: '2px solid #b39ddb',
        },
      }
    })