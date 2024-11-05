import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import ScrollToTopButton from './Components/ScrollButton/ScrollToTopButton.jsx';
import MobNavbar from './Components/Header/MobNavbar.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MobNavbar />
    <App />
    <ScrollToTopButton />
  </BrowserRouter>,
)
