import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Signup from './signup.jsx';

//import Chatbox from './components/chatbox/Chatbox';
import Signin from './components/authentication/Signin.jsx';
//  import Proflie from './components/proflie/Proflie.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App/>

  </StrictMode>,
)
