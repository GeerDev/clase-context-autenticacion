import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";

import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Register from './components/Register/Register';

import { UserProvider } from './context/UserContext/UserState';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
        <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
      </UserProvider>
    </div>

  );
}

export default App;
