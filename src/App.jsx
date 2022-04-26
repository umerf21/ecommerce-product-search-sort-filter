import React from "react"
import './App.css'
import Home from "./views/Home"
import { theme } from './theme';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <div className="App">
        <Home/>
    </div>
      </ThemeProvider>
    </Provider>
  )
}
export default App