import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile";
import MyProfile from "./Pages/MyProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/my-profile/:id" element={<MyProfile></MyProfile>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
