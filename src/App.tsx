import styled from "styled-components";
import MaterialUi from "./components/material-ui";
// import { StyledEngineProvider } from '@mui/system';
// import { createTheme, ThemeProvider } from '@mui/material/styles';



const App = () => {
  return (
    // <StyledEngineProvider injectFirst>
      // <ThemeProvider theme={theme}>
        <AppContainer>
          <MaterialUi/>
        </AppContainer>
      // </ThemeProvider>
    // </StyledEngineProvider>
  )
}

export default App;

const AppContainer = styled.div`
  border:1px solid red;
  padding:20px 10px;
  width:100%;
  height:100%;
`


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',  
//     },
//     secondary: {
//       main: '#9c27b0',  
//     },
//   },
//   typography: {
//     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//     h1: {
//       fontWeight: 700,
//     },
//     h2: {
//       fontWeight: 600,
//     },
//   },
//   spacing: 8, 
// });
