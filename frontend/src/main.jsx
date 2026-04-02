import { StrictMode } from 'react'; //for catching potential problems in the application
import { createRoot } from 'react-dom/client'; //for rendering the application to the DOM
import './App.css'; //importing the CSS file for styling the application
import App from './App.jsx'; //importing the main App component that contains the logic and structure of the application
import './index.css'; //importing the CSS file for styling the index page

//call the app component and render it to the DOM, wrapped in StrictMode for catching potential problems in the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)