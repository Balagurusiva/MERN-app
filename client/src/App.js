import { BrowserRouter,  Route, Routes } from 'react-router-dom'; 
import './App.css';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/profilePage';
import HomePage from './scenes/homePage';

function App() {
  return (
    <div className="app">
       <BrowserRouter>
         <Routes>
          <Route path = "/" element={<LoginPage />} />
          <Route path = "/home" element={<HomePage />} />
          <Route path = "/profile/:userId" element={<ProfilePage />} />
         </Routes>
       </BrowserRouter>
     
    </div>
  );
}

export default App;
