import { BrowserRouter,  Route, Routes } from 'react-router-dom'; 
import './App.css';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/profilePage';
import HomePage from './scenes/homePage';
 

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode]);


  return (
    <div className="app">
       <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path = "/" element={<LoginPage />} />
            <Route path = "/home" element={<HomePage />} />
            <Route path = "/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>   
       </BrowserRouter>
     
    </div>
  );
}

export default App;
